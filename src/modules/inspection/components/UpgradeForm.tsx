import { Field, Form, Formik } from 'formik';
import { FC } from 'react';
import { Owner } from '../custom_types';
import ErrorMessage from '../../../utils/ui/error_messge';
interface UpgradeFormProps {
    owner: Owner;
    innerRef: any;
    onSubmit: (values) => void;
}
const UpgradeForm: FC<UpgradeFormProps> = ({ owner, innerRef, onSubmit }) => {
    const initialValues = {
        document_number: '',
        document_type: '',
        email: '',
        names_surnames: '',
        phone_number: '',
        ...owner,
    };

    const submit = (aux_values, actions) => {
        const values = { ...aux_values };
        delete values.audit_trail;
        delete values.real_estate_id;
        delete values.status;
        onSubmit(values);
        actions.setSubmitting(false);
    };
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initialValues} innerRef={innerRef}>
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
                            name="names_surnames"
                            autoComplete="off"
                        />
                        <ErrorMessage name="names_surnames" />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <label htmlFor="document_type_id" className="form-label">
                                Documento de Identidad
                            </label>
                            <div className="col-2">
                                <Field name="document_type" id="document_type_id" as="select" className="form-select">
                                    <option value="" hidden />
                                    <option value="CC">C.C</option>
                                    <option value="TI">T.I</option>
                                    <option value="CE">C.E</option>
                                    <option value="NIT">NIT</option>
                                </Field>
                                <ErrorMessage name="document_type" />
                            </div>
                            <div className="col-10">
                                <Field
                                    type="text"
                                    id="identification_number_id"
                                    className="form-control"
                                    name="document_number"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="document_number" />
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
                            name="phone_number"
                            autoComplete="off"
                        />
                        <ErrorMessage name="phone_number" />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="email_id" className="form-label">
                            Correo electrónico
                        </label>
                        <Field type="email" id="email_id" className="form-control" name="email" autoComplete="off" />
                        <ErrorMessage name="email" />
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col text-end">
                        <button className="btn btn-primary my-3">Notificar</button>
                    </div>
                </div>
            </Form>
        </Formik>
    );
};

export default UpgradeForm;
