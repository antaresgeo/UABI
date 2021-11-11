import { Field, Form, Formik } from 'formik';
import { FC } from 'react';
import ErrorMessage from '../../../utils/ui/error_messge';

interface OccupationFormPros {
    disabled?: boolean;
    type?: 'view' | 'create' | 'edit';
}
const OccupationForm: FC<OccupationFormPros> = ({disabled}) => {
    const initialValues = {
        current_tenure: '',
        current_use: '',
        ownership: '',
        contractual: '',
    };
    const submit = (values, actions) => {
        // onSubmit(values, actions).then(() => {
        //     actions.setSubmitting(false);
        //     actions.resetForm();
        // });

    };
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initialValues} >
            {({ isSubmitting, setFieldValue, values, handleChange }) => {
                return (
                    <Form>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="current_tenure_id" className="form-label">
                                    Estado actual de la tenencia
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="current_tenure_id"
                                    placeholder="Estado actual de la tenencia del bien Inmueble"
                                    name="current_tenure"
                                    disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                />
                                <ErrorMessage name="current_tenure" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="current_use_id" className="form-label">
                                    Estado actual del uso
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="current_use_id"
                                    aria-describedby="emailHelp"
                                    placeholder="Estado actual del uso del bien inmueble"
                                    name="current_use"
                                    disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                />
                                <ErrorMessage name="current_use" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                                <div className="col">
                                    <label htmlFor="ownership_id" className="form-label">
                                        Estado de titularidad
                                    </label>
                                    <Field
                                        as="textarea"
                                        className="form-control"
                                        id="ownership_id"
                                        aria-describedby="emailHelp"
                                        placeholder="Estado de titularidad del bien inmueble"
                                        name="ownership"
                                        disabled={disabled}
                                        autoComplete="off"
                                        maxLength={250}
                                    />
                                    <ErrorMessage name="ownership" withCount max={250} />
                                </div>
                            </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="contractual_id" className="form-label">
                                    Estado contractual
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="contractual_id"
                                    aria-describedby="emailHelp"
                                    placeholder="Estado contractual del bien inmueble"
                                    name="contractual"
                                    disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                />
                                <ErrorMessage name="contractual" withCount max={250} />
                            </div>

                        </div>
                    </Form>
                );
            }}
        </Formik>
    )
}

export default OccupationForm
