import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Link } from '../../../utils/ui';
import { actions } from '../redux';
import { IUserAttributes } from '../../../utils/interfaces/users';
import UserList from './UserList';
import { guards } from '../routes';
import FilterForm from '../../../utils/ui/filter_form';

const Users = () => {
    const dispatch = useDispatch();
    const [users, user, total_results, loading] = useSelector((store: any) => [
        store.users.users.value,
        store.auth.user,
        store.users.users.pagination.total_results,
        store.users.users.loading
    ]);
    //const { total_results } = useSelector((store: any) => store.users.pagination);

    const [filters, set_filters] = useState<object>(null);

    const filter = async (_filters, _) => {
        set_filters(_filters);
        await dispatch(actions.get_all_users({ page: 1, ..._filters }));
    };

    const change_page = (page, pageSize) => {
        dispatch(actions.get_all_users({ page, pageSize, ...filters }));
    };

    useEffect(() => {
        // dispatch(actions.get_all_users({}));
        dispatch(actions.clear_get_all_users())
    }, []);

    const aux_user = {
        ...user,
        permits: user?.permits.map((a) => a.name) || [],
        roles: user?.roles.map((a) => a.name) || [],
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Usuarios"
                        extra={
                            <>
                                {guards.create({ user: aux_user }) && (
                                    <Link to="/users/create" name="Crear" iconText="+" />
                                )}
                            </>
                        }
                    >
                        <div className="row justify-content-between">
                            <div className="col-5 d-flex">
                                <div className="col-6 ">
                                    <FilterForm filters={[{ key: 'name', name: 'Nombre' }]} onSubmit={filter} />
                                </div>
                            </div>
                        </div>
                        <UserList users={users} user={aux_user} change_page={change_page} total={total_results} loading={loading} />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Users;
