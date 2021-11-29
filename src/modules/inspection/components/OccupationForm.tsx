import { Field, Form, Formik } from 'formik';
import { FC } from 'react';
import ErrorMessage from '../../../utils/ui/error_messge';

interface OccupationFormPros {
    disabled?: boolean;
    type?: 'view' | 'create' | 'edit';
    old?: any;
}
const OccupationForm: FC<OccupationFormPros> = ({ disabled, old }) => {
    const initialValues = {
        old: {
            current_tenure: '',
            current_use: '',
            ownership: '',
            contractual: '',
            ...old,
        },
        now: {
            current_tenure: '',
            current_use: '',
            ownership: '',
            contractual: '',
        },
    };
    const submit = (values, actions) => {
        // onSubmit(values, actions).then(() => {
        //     actions.setSubmitting(false);
        //     actions.resetForm();
        // });
    };
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initialValues}>
            {({ isSubmitting, setFieldValue, values, handleChange }) => {
                return (
                    <Form>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="current_tenure_id" className="form-label">
                                    Estado de la tenencia
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="current_tenure_id"
                                    placeholder="Estado actual de la tenencia del bien Inmueble"
                                    name="old.current_tenure"
                                    disabled
                                    autoComplete="off"
                                    maxLength={250}
                                />
                                <ErrorMessage name="old.current_tenure" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="current_tenure_id" className="form-label">
                                    Estado actual de la tenencia
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="current_tenure_id"
                                    placeholder="Estado actual de la tenencia del bien Inmueble"
                                    name="now.current_tenure"
                                    disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                />
                                <ErrorMessage name="now.current_tenure" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="current_use_id" className="form-label">
                                    Estado del uso
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="current_use_id"
                                    aria-describedby="emailHelp"
                                    placeholder="Estado actual del uso del bien inmueble"
                                    name="old.current_use"
                                    disabled
                                    autoComplete="off"
                                    maxLength={250}
                                />
                                <ErrorMessage name="old.current_use" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="current_use_id" className="form-label">
                                    Estado actual del uso
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="current_use_id"
                                    aria-describedby="emailHelp"
                                    placeholder="Estado actual del uso del bien inmueble"
                                    name="now.current_use"
                                    disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                />
                                <ErrorMessage name="now.current_use" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="ownership_id" className="form-label">
                                    Estado de titularidad
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="ownership_id"
                                    aria-describedby="emailHelp"
                                    placeholder="Estado de titularidad del bien inmueble"
                                    name="old.ownership"
                                    disabled
                                    autoComplete="off"
                                    maxLength={250}
                                />
                                <ErrorMessage name="old.ownership" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="ownership_id" className="form-label">
                                    Estado actual de titularidad
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="ownership_id"
                                    aria-describedby="emailHelp"
                                    placeholder="Estado de titularidad del bien inmueble"
                                    name="now.ownership"
                                    disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                />
                                <ErrorMessage name="now.ownership" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="contractual_id" className="form-label">
                                    Estado contractual
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="contractual_id"
                                    aria-describedby="emailHelp"
                                    placeholder="Estado contractual del bien inmueble"
                                    name="old.contractual"
                                    disabled
                                    autoComplete="off"
                                    maxLength={250}
                                />
                                <ErrorMessage name="old.contractual" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="contractual_id" className="form-label">
                                    Estado contractual actual
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="contractual_id"
                                    aria-describedby="emailHelp"
                                    placeholder="Estado contractual del bien inmueble"
                                    name="now.contractual"
                                    disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                />
                                <ErrorMessage name="now.contractual" withCount max={250} />
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default OccupationForm;
