import { ErrorMessage, Field, Form, Formik } from 'formik'

const UpgradeForm = () => {
    const initialValues = {

    }

    const submit = (values, actions) => {
        // onSubmit(values, actions).then(() => {
        //     actions.setSubmitting(false);
        //     actions.resetForm();
        // });

    };
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initialValues}>
            <Form>
                <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="full_name_id" className="form-label">
                            Nombre y apellidos
                        </label>
                        <Field
                            type="text"
                            id="full_name_id"
                            className="form-control"
                            name="full_name"
                            autoComplete="off"
                        />
                        <ErrorMessage name="full_name" />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <label htmlFor="document_type_id" className="form-label">
                                Documento de Identidad
                            </label>
                            <div className="col-2">
                                <Field name="document_type" id="document_type_id" as="select" className="form-select">
                                    <option value="" hidden>
                                    </option>
                                    <option value="C.C">C.C</option>
                                    <option value="T.I">T.I</option>
                                    <option value="C.E">C.E</option>
                                    <option value="NIT">NIT</option>
                                </Field>
                                <ErrorMessage name="document_type" />
                            </div>
                            <div className="col-10">
                                <Field
                                    type="text"
                                    id="identification_number_id"
                                    className="form-control"
                                    name="identification_number"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="identification_number" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="telephone_id" className="form-label">
                            Teléfono de contacto
                        </label>
                        <Field
                            type="number"
                            id="telephone_id"
                            className="form-control"
                            name="telephone"
                            autoComplete="off"
                        />
                        <ErrorMessage name="telephone" />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="email_id" className="form-label">
                            Correo electrónico
                        </label>
                        <Field
                            type="email"
                            id="email_id"
                            className="form-control"
                            name="email"
                            autoComplete="off"
                        />
                        <ErrorMessage name="email" />
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col text-end">
                        <button className="btn btn-primary my-3">
                            Notificar
                        </button>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}

export default UpgradeForm
