import React, { FC } from 'react';
import { Field, Form, Formik } from 'formik';
import { Card } from '../../../utils/ui';
import ErrorMessage from '../../../utils/ui/error_messge';
import { PDFViewer } from '@react-pdf/renderer';
import InpectionDoc from './InpectionDoc';
import { AnySchema } from 'yup';

interface ReportProps {
    disabled?: boolean;
    obs?: string;
    innerRef: any;
    onSubmit: (values) => void;
    data?: any;
    real_estate: any;
}
const Report: FC<ReportProps> = ({ disabled, obs, innerRef, onSubmit, data, real_estate }) => {
    return (
        <div className="container-fluid">
            <Card
                title="Vista previa informe de inspección"
                className="h-100"
                style={{ margin: 0 }}
                bodyStyle={{ height: 'calc(100% - 60px)' }}
            >
                <div className="row h-100">
                    <div className="col-4">
                        <Formik
                            innerRef={innerRef}
                            enableReinitialize
                            onSubmit={(values, form) => {
                                onSubmit(values);
                                form.setSubmitting(false);
                            }}
                            initialValues={{
                                is_special_case: false,
                                observations: obs || '',
                            }}
                        >
                            {() => {
                                return (
                                    <Form>

                                        <div className="row">
                                            <div className="col">
                                                <label>
                                                    <Field type="checkbox" name="is_special_case" className="me-2" />
                                                    Es un caso especial
                                                </label>
                                                <ErrorMessage name="is_special_case" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="contractual_id" className="form-label">
                                                    Acciones especiales según los hallazgos
                                                </label>
                                                <Field
                                                    as="textarea"
                                                    className="form-control"
                                                    id="contractual_id"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Observaciones"
                                                    name="special_actions"
                                                    disabled={disabled}
                                                    autoComplete="off"
                                                    maxLength={250}
                                                />
                                                <ErrorMessage name="special_actions" withCount max={250} />
                                            </div>
                                        </div>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </div>
                    <div className="col-8 h-100">
                        <PDFViewer className="w-100 mt-5" showToolbar={false}>
                            <InpectionDoc data={data} real_estate={real_estate} />
                        </PDFViewer>
                        {/* <embed
                            type="application/pdf"
                            src="/InformedeinspecciondebieninmuebleV4.pdf"
                            style={{
                                height: '100%',
                                width: '100%',
                                border: '1px solid #525659',
                                backgroundColor: '#525659',
                            }}
                        /> */}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Report;
