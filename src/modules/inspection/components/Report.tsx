import React, { FC } from 'react';
import { Field, Form, Formik } from 'formik';
import { Card } from '../../../utils/ui';
import ErrorMessage from "../../../utils/ui/error_messge";

interface ReportProps {
    disabled?: boolean
}
const Report: FC<ReportProps> = ({disabled }) => {
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
                            enableReinitialize
                            onSubmit={() => {}}
                            initialValues={{
                                is_special_case: false,
                                observations: ''
                            }}
                        >
                            {({ isSubmitting, setFieldValue, values, handleChange }) => {
                                return <Form>
                                    <div className="row">
                                        <div className="col">
                                            <label>
                                                <Field
                                                    type="checkbox"
                                                    name="is_special_case"
                                                    className="me-2"
                                                />
                                                Es un caso especial
                                            </label>
                                            <ErrorMessage name="is_special_case"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="contractual_id" className="form-label">
                                                Observaciones
                                            </label>
                                            <Field
                                                as="textarea"
                                                className="form-control"
                                                id="contractual_id"
                                                aria-describedby="emailHelp"
                                                placeholder="Observaciones"
                                                name="observations"
                                                disabled={disabled}
                                                autoComplete="off"
                                                maxLength={250}
                                            />
                                            <ErrorMessage name="observations" withCount max={250} />
                                        </div>
                                    </div>
                                </Form>;
                            }}
                        </Formik>
                    </div>
                    <div className="col-8 h-100">
                        <embed
                            type="application/pdf"
                            src="/InformedeinspecciondebieninmuebleV4.pdf"
                            style={{
                                height: '100%',
                                width: '100%',
                                border: '1px solid #525659',
                                backgroundColor: '#525659',
                            }}
                        />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Report;
