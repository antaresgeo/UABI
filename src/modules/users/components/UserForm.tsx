import { FC } from 'react';
import { IUserAttributes } from './../../../utils/interfaces/users';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface UserFormPros {
    user?: IUserAttributes;
    onSubmit?: (values, form?) => Promise<any>;
    disabled?: boolean;
    type?: 'view' | 'create' | 'edit';
}

const UserForm: FC<UserFormPros> = ({ user, onSubmit, disabled, type }) => {
    const initial_values: IUserAttributes = user || {
        id: -1,
        username: '',
        id_rol: -1,
        status: -1,
    };

    const schema = Yup.object().shape({
        username: Yup.string().required('obligatorio').max(200, 'El nombre debe tener maximo 200 caracteres'),
        // id_rol: Yup.number().required('obligatorio').min(2, 'Min value 2.').max(10, 'Max value 10.')

    });

    const submit = (values, form) => {
        onSubmit(values, form).then(() => {
            form.setSubmitting(false);
        });
    };
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initial_values} validationSchema={schema}>
            {({ values, isValid, isSubmitting }) => {
                return (
                    <Form>
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor="id" className="form-label">
                                    id Usuario
                                </label>
                                <Field
                                    type="text"
                                    id="id"
                                    className="form-control"
                                    aria-describedby="ID usuario"
                                    disabled={true}
                                    name="id"
                                    autoComplete="off"
                                />
                                <span
                                    className="text-danger text-left d-block w-100 mt-1"
                                    style={{ height: '22px' }}
                                >
                                    <ErrorMessage name="id" />
                                </span>
                            </div>
                            <div className="col-6">
                                <label htmlFor="username" className="form-label">
                                    Nombre
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    aria-describedby="nombre Usuario"
                                    placeholder="nombre"
                                    name="username"
                                    autoComplete="off"
                                    disabled={disabled}
                                    maxLength={201}
                                />
                                <span className="text-danger text-left d-block w-100 mt-1" style={{ height: '22px' }}>
                                    <ErrorMessage name="name" />
                                </span>
                            </div>
                            <div className="col-4">
                                <label htmlFor="id_rol" className="form-label">
                                    Rol
                                </label>
                                <Field
                                    as="select"
                                    className="form-select"
                                    id="id_rol"
                                    name="id_rol"
                                    autoComplete="off"
                                    disabled={disabled}
                                >
                                    <option value="" hidden>
                                        Selecciona un rol
                                    </option>
                                    <option value="2">Supervisor</option>
                                    <option value="3">Adquisiciones</option>
                                    <option value="4">UABI</option>
                                    <option value="5">Asegurabilidad</option>
                                    <option value="6">Inspección</option>
                                    <option value="7">Disposición</option>
                                    <option value="8">Supervición</option>
                                    <option value="9">Mantenimiento</option>
                                    <option value="10">Facturación</option>
                                </Field>
                                <span className="text-danger text-left d-block w-100 mt-1" style={{ height: '22px' }}>
                                    <ErrorMessage name="name" />
                                </span>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col text-end">
                                {type !== 'view' && (
                                    <button
                                        className="btn btn-primary my-3"
                                        disabled={ isSubmitting || disabled}
                                    >
                                        Guardar
                                    </button>
                                )}
                            </div>
                        </div>

                    </Form>
                );
            }}
        </Formik>
    )
}

export default UserForm
