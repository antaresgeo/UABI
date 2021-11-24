import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Link } from '../../../utils/ui';
import { actions } from '../redux';
import { IUserAttributes } from '../../../utils/interfaces/users';
import UserList from './UserList';
import { guards } from './../routes';

const Users = () => {
    const dispatch = useDispatch();
    const users: IUserAttributes[] = useSelector((store: any) => store.users.users.value);
    const user: any = useSelector((store: any) => store.auth.user);
    //const { total_results } = useSelector((store: any) => store.users.pagination);

    const [query, set_query] = useState<string>('');

    const filter = () => {
        dispatch(actions.get_all_users({ page: 1, q: query }));
    };

    const change_page = (page, pageSize) => {
        dispatch(actions.get_all_users({ page, pageSize, q: query }));
    };

    useEffect(() => {
        dispatch(actions.get_all_users({}));
    }, []);

    const aux_user = {
        ...user,
        permits: user?.permits.map((a) => a.name) || [],
        roles: user?.roles.map((a) => a.name) || [],
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Usuarios"
                        extra={<>{guards.create({ user: aux_user}) && <Link to="/users/create" name="Crear" iconText="+" />}</>}
                    >
                        <form>
                            <div className="row justify-content-between">
                                <div className="col-5 d-flex">
                                    <div className="col-6 ">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Usuario"
                                                aria-label="Usuario"
                                                aria-describedby="button-addon2"
                                                value={query}
                                                onChange={(e) => {
                                                    set_query(e.target.value);
                                                }}
                                            />
                                            <span className="input-group-text" onClick={filter}>
                                                <span>
                                                    <i className="fa fa-search" aria-hidden="true" />
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <UserList
                            users={users}
                            user={aux_user}
                            change_page={change_page}
                            //total={total_results}
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Users;
