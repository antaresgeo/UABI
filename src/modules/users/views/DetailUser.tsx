import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { actions, service } from '../redux';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Link } from '../../../utils/ui';
import UserViewForm from './../components/UserViewForm';
import RoleForm from '../components/RoleForm';
import { FormikProps, FormikValues } from 'formik';

interface IParams {
    id: string;
}

const DetailUser = () => {
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, roles, permits] = useSelector((store: any) => [
        store.users.user.value?.detailsUser,
        store.users.user.value?.roles,
        store.users.user.value?.permits,
    ]);
    const form = useRef<FormikProps<FormikValues>>();
    useEffect(() => {
        dispatch(actions.get_user_by_id(parseInt(id)));
    }, []);

    return (

        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="bg-white d-flex flex-column h-100">
                    <div className="d-flex flex-row mb-3 pt-3 ps-4 shadow-sm p-3 bg-white rounded">
                        <h5 className="col-11 ">Detalle Usuario</h5>
                        <Link
                            to={`/users/edit/${id}/`}
                            name=""
                            avatar={false}
                            icon={
                                <i
                                    style={{ marginLeft: '30px', fontSize: 16, color: '#000' }}
                                    className="fa fa-pencil"
                                    aria-hidden="true"
                                />
                            }
                        />
                    </div>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <UserViewForm user={user} roles={roles} />
                                <Card title="Asignar permisos al Usuario">
                                    <RoleForm
                                        type="assign"
                                        innerRef={form}
                                        user_roles={roles || []}
                                        user_permits={permits || []}
                                        onSubmit={async (values) => {
                                            await service.assignRolesAndPermits(id, values);
                                            history.push('/temp');
                                            history.goBack();
                                        }}
                                    />
                                </Card>
                            </div>
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
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        form.current?.submitForm();
                    }}
                >
                    Asignar Roles y Permisos
                </button>
            </div>
        </div>
    );
};

export default DetailUser;
