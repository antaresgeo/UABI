import React, { FC } from 'react';
import { Field, Form, Formik } from 'formik';
import { Card } from '../../../utils/ui';
import DocumentModal from '../../../utils/components/DocumentsModal';
import ErrorMessage from '../../../utils/ui/error_messge';

interface PhotographicRecordFormProps {}

const PhotographicRecordForm: FC<PhotographicRecordFormProps> = ({}) => {
    return (
        <div className="container-fluid">
            <Formik
                enableReinitialize
                onSubmit={() => {}}
                initialValues={{
                    documento1: '',
                    documento2: '',
                    documento3: '',
                    documento4: '',
                    documento5: '',
                }}
            >
                {({ isSubmitting, setFieldValue, values, handleChange }) => {
                    return (
                        <Form>
                            <Card title="Fotografias Generales">
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="form-select" className="form-label">
                                            Fachada
                                        </label>
                                        <Field name="documento1" component={DocumentModal} btn_label="Adjuntar" />
                                        <ErrorMessage name="documento1" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="form-select" className="form-label">
                                            Generales
                                        </label>
                                        <Field name="documento2" component={DocumentModal} btn_label="Adjuntar" />
                                        <ErrorMessage name="documento2" />
                                    </div>
                                </div>
                            </Card>
                            <Card title="Evidencia de inspección física">
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="form-select" className="form-label">
                                            Pintura exterior
                                        </label>
                                        <Field name="documento3" component={DocumentModal} btn_label="Adjuntar" />
                                        <ErrorMessage name="documento2" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="form-select" className="form-label">
                                            Cubierta o techo
                                        </label>
                                        <Field name="documento3" component={DocumentModal} btn_label="Adjuntar" />
                                        <ErrorMessage name="documento2" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <label htmlFor="form-select" className="form-label">
                                            Lavamanoss
                                        </label>
                                        <Field name="documento3" component={DocumentModal} btn_label="Adjuntar" />
                                        <ErrorMessage name="documento2" />
                                    </div>
                                </div>
                            </Card>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default PhotographicRecordForm;