import { Field, Form, Formik } from 'formik';
import { FC, useState } from 'react';
import * as Yup from 'yup';
import ErrorMessage from '../../../utils/ui/error_messge';

interface IloginFormPros {
    onSubmit: (values, actions?) => any;
    disabled?: boolean;
}
const LoginForm: FC<IloginFormPros> = ({ onSubmit, disabled }) => {
    const passwordType = ['password', 'text'];
    const [type, setType] = useState(0);
    const initialValues = {
        user: process.env.REACT_APP_USER && process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_USER : '',
        password:
            process.env.REACT_APP_PASSWORD && process.env.NODE_ENV !== 'production'
                ? process.env.REACT_APP_PASSWORD
                : '',
    };

    const submit = (values, actions) => {
        onSubmit(values, actions).then(() => {
            actions.setSubmitting(false);
            actions.resetForm();
        });
    };

    const schema = Yup.object().shape({
        user: Yup.string().required('obligatorio'),
        password: Yup.string().required('obligatorio'),
    });

    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initialValues} validationSchema={schema}>
            <Form>
                <div className="container-inputs-login usuario-item-login">
                    <label htmlFor="user_id" className="form-label">
                        Numero de identificación
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="user_id"
                        placeholder="Ej.: maria.paulina"
                        name="user"
                        autoComplete="off"
                        disabled={disabled}
                    />
                    <ErrorMessage name="user" />
                </div>
                <div className="container-inputs-login">
                    <label htmlFor="password_id" className="form-label">
                        Digite su contraseña
                    </label>
                    <div className="input-group">
                        <Field
                            type={passwordType[type]}
                            className="form-control"
                            id="password_id"
                            placeholder="Ej.: Y7ai-*892mndUH"
                            name="password"
                            autoComplete="off"
                            disabled={disabled}
                        />
                        <span
                            onClick={() => {
                                if (type === 0) {
                                    setType(1);
                                } else {
                                    setType(0);
                                }
                            }}
                            className="input-group-text"
                        >
                            {type === 0 && (
                                <i style={{ color: '#1FAEEF' }} className="fa fa-eye-slash" aria-hidden="true" />
                            )}
                            {type === 1 && <i style={{ color: '#1FAEEF' }} className="fa fa-eye" aria-hidden="true" />}
                        </span>
                        <ErrorMessage name="password" />
                    </div>
                </div>
                <div className="row">
                    <div className="col ">
                        {/*<button*/}
                        {/*    type="button"*/}
                        {/*    className="btn btn-dark my-3"*/}
                        {/*    onClick={() => (window.location.href = 'http://localhost:3000/auth/signup')}*/}
                        {/*>*/}
                        {/*    Registrarme*/}
                        {/*</button>*/}
                    </div>
                    <div className="col text-end">
                        <button type="submit" className="btn btn-primary my-3" disabled={disabled}>
                            Ingresar
                        </button>
                    </div>
                </div>
            </Form>
        </Formik>
    );
};

LoginForm.defaultProps = {
    disabled: false,
};

export default LoginForm;
