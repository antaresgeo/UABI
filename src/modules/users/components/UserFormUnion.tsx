
import { IUserAttributes } from '../../../utils/interfaces/users';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import UserFormDetail from './GerenalForm';
import UserForm from './UserForm';

interface UserFormProps {
    user?: IUserAttributes;
    onSubmit?: (values, form?, isFinish?: boolean) => Promise<any>;
    disabled?: boolean;
    type: 'view' | 'edit' | 'create';
    users?: IUserAttributes[];
}

const UserFormUnion: FC<UserFormProps> = ({
    users,
    user,
    onSubmit,
    disabled,
    type,
}) => {
    const history = useHistory();
    const initial_values: IUserAttributes = user || {
        id: 0,
        society_type: '',
        entity_type: '',
        id_type: '',
        id_number: '',
        names: '',
        surnames: '',
        email: '',
        location: '',
        cellphone_number: '',
        phone_number: '',
        gender: '',
        id_rol: 0
    };

    const submit = (values, form, isFinish = false) => {
        onSubmit(values, form, isFinish).then(() => {
            form.setSubmitting(false);
            form.resetForm();
        });
    };


    return (


        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h4 className="ms-4 mb-3">
                                Crear Usuario
                            </h4>



                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

            export default UserFormUnion;
