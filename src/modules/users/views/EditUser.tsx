import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {FC, useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, service } from '../redux';
import { Card } from '../../../utils/ui';
import GeneralForm from './../components/GerenalForm';
import RoleForm from './../components/RoleForm';
import { swal_success } from '../../../utils';
import {FormikProps, FormikValues} from "formik";
import { getAdressById } from '../../../utils/components/Location/service';

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
    const form = useRef<FormikProps<FormikValues>>();

    const user: any = useSelector((store: any) => store.users.user.value);
    const _updateUser = async (userForm) => {
        let res: any;
        if (userForm) {
            res = await dispatch(actions.update_user(id, userForm));
            await swal_success.fire({ title: 'Usuario actualizado', text: res.message, icon: 'success' });
            history.push(`/users/${res.results.user_id}/`);
        }
    };

    useEffect(() => {
        dispatch(actions.get_user_by_id(parseInt(id)));
    }, []);

    const [adress, setAdress] = useState("")
    const localizacion = async (id) => {
        const list: any = await getAdressById(id);
        setAdress(list?.address);
    }

    useEffect(() => {
        if(user && adress === "") {
            localizacion(user?.detailsUser?.location)
        }
    }, [user])


    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Card title="Edición de Usuario">
                                <GeneralForm
                                    type="edit"
                                    innerRef={form}
                                    user={user?.detailsUser}
                                    address={adress}
                                    onSubmit={(values) => {
                                        return _updateUser(values);
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
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        form.current?.submitForm();
                    }}
                >
                    Guardar
                </button>
            </div>
        </div>
    );
};

export default EditUser;
