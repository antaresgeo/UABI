import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {FC, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, service } from '../redux';
import { Card } from '../../../utils/ui';
import GeneralForm from './../components/GerenalForm';
import RoleForm from './../components/RoleForm';
import { swal_success } from '../../../utils';

interface IParams {
    id: string;
}

interface IProps {
    view?: string;
}

const EditUser: FC<IProps> = () => {
    const { id } = useParams<IParams>();
    const history = useHistory();
    const dispatch = useDispatch();

    const user: any = useSelector((store: any) => store.users.user.value);
    const _updateUser = async (userForm) => {
        let res: any;
        if (userForm) {
            res = await dispatch(actions.update_user(id, userForm));
            await swal_success.fire({ title: 'Usuario actualizado', text: res.message, icon: 'success' });
            console.log('noc', res);
            history.push(`/users/${user.results.id}`);
        }
    };

    useEffect(() => {
        dispatch(actions.get_user_by_id(parseInt(id)));
    }, []);

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Card title="Edición de Usuario">
                                <GeneralForm
                                    type="edit"
                                    user={user?.detailsUser}
                                    onSubmit={(values) => {
                                        return _updateUser(values);
                                    }}
                                />
                            </Card>
                            <Card title="Asignar permisos al Usuario">
                                <RoleForm
                                    type="assign"
                                    user_roles={user?.roles || []}
                                    user_permits={user?.permits || []}
                                    onSubmit={(values) => {
                                        return service.assignRolesAndPermits(id, values);
                                    }}
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bg-white d-flex flex-row justify-content-between"
                style={{ padding: 16, borderTop: '1px solid #ccc' }}
            >
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
            </div>
        </div>
    );
};

export default EditUser;
