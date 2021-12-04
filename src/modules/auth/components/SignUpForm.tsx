import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../../../utils/ui/error_messge';
const SignUpForm = () => {
    const initialValues = {};
    const submit = (/*values, actions*/) => {
        // onSubmit(values, actions).then(() => {
        //     actions.setSubmitting(false);
        //     actions.resetForm();
        // });
    };

    const schema = Yup.object().shape({
        user: Yup.string().required('obligatorio'),
        password: Yup.string().required('obligatorio'),
    });
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initialValues} validationSchema={schema}>
            <Form>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="user_id" className="form-label">
                            Usuario
                        </label>
                        <Field
                            type="text"
                            className="form-control form-control-sm"
                            id="user_id"
                            placeholder="Ej.= maria.paulina"
                            name="user"
                            autoComplete="off"
                        />
                        <ErrorMessage name="user" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="password_id" className="form-label">
                            contraseña
                        </label>
                        <Field
                            type="password"
                            className="form-control form-control-sm"
                            id="password_id"
                            placeholder="Ej.= Y7ai-*892mndUH"
                            name="password"
                            autoComplete="off"
                        />
                        <ErrorMessage name="password" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="names_id" className="form-label">
                            Nombres
                        </label>
                        <Field
                            type="text"
                            className="form-control form-control-sm"
                            id="names_id"
                            name="names"
                            autoComplete="off"
                        />
                        <ErrorMessage name="names" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="surnames_id" className="form-label">
                            Apellidos
                        </label>
                        <Field
                            type="text"
                            className="form-control form-control-sm"
                            id="surnames_id"
                            name="surnames"
                            autoComplete="off"
                        />
                        <ErrorMessage name="surnames" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="identification_type_id" className="form-label">
                            Tipo identificación
                        </label>
                        <Field
                            name="identification_type"
                            id="identification_type_id"
                            as="select"
                            className="form-select"
                        >
                            <option value="" hidden>
                                -- Seleccione Tipo documento --
                            </option>
                            <option key="TI" value="TI">
                                TARJETA IDENTIDAD
                            </option>
                            <option key="CE" value="CE">
                                CEDULA EXTRANJERIA
                            </option>
                            <option key="TE" value="TE">
                                TARJETA EXTRANGERIA
                            </option>
                            <option key="CC" value="CC">
                                CEDULA DE CIUDADANIA
                            </option>
                            <option key="NI" value="NI">
                                NIT
                            </option>
                            <option key="PA" value="PA">
                                PASAPORTE
                            </option>
                            <option key="TDE" value="TDE">
                                TIPO DE DOCUMENTO EXTRANJERO
                            </option>
                            <option key="RG" value="RG">
                                REGISTRO CIVIL
                            </option>
                            <option key="SIN" value="SIN">
                                SIN IDENTIFICACION
                            </option>
                        </Field>
                        <ErrorMessage name="identification_type" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="identification_id" className="form-label">
                            identificación
                        </label>
                        <Field
                            type="number"
                            className="form-control form-control-sm"
                            id="identification_id"
                            name="identification"
                            autoComplete="off"
                        />
                        <ErrorMessage name="identification" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="telephone_id" className="form-label">
                            Telefono
                        </label>
                        <Field
                            type="number"
                            className="form-control form-control-sm"
                            id="telephone_id"
                            name="telephone"
                            autoComplete="off"
                        />
                        <ErrorMessage name="telephone" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="email_id" className="form-label">
                            Correo
                        </label>
                        <Field
                            type="email"
                            className="form-control form-control-sm"
                            id="email_id"
                            name="email"
                            autoComplete="off"
                        />
                        <ErrorMessage name="email" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="address_id" className="form-label">
                            Dirección
                        </label>
                        <Field
                            type=""
                            className="form-control form-control-sm"
                            id="address_id"
                            name="address"
                            autoComplete="off"
                        />
                        <ErrorMessage name="address" />
                    </div>
                </div>
                <div className="row ">
                    <div className="col ">
                        <button
                            type="button"
                            className="btn btn-dark "
                            onClick={() => (window.location.href = 'http=//localhost=3000/auth/signup')}
                        >
                            Regresar
                        </button>
                    </div>
                    <div className="col  text-end">
                        <button type="submit" className="btn btn-primary ">
                            Registrarse
                        </button>
                    </div>
                </div>
            </Form>
        </Formik>
    );
};

export default SignUpForm;
