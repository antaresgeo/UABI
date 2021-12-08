import React, { FC } from 'react';
import { Card } from '../../../utils/ui';
import { Field, Form, Formik } from 'formik';
import ErrorMessage from '../../../utils/ui/error_messge';
import { ModalNotificar } from '../../disposition/components/ModalNotificar';

interface BasicInformationProps {
    inspection: any;
    obs?: string;
    disabled?: boolean;
    innerRef: any;
    onSubmit: (values) => void;
}
const BasicInformation: FC<BasicInformationProps> = ({ inspection, disabled, obs, innerRef, onSubmit }) => {
    return (
        <div className="container-fluid">
            <div className="col-12">
                <div className="content_box_table">
                    <div
                        className="title"
                        style={{ borderBottom: '1px solid #e2e4e4', color: '#2F2D2D', fontSize: '14px' }}
                    >
                        Información básica del bien inmueble
                    </div>
                    <div className="table_content" style={{ margin: 7 }}>
                        <div className="detailForm" style={{ width: '100%' }}>
                            <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                                <div className="col-2">
                                    <label htmlFor="">Codigo CBML</label>
                                    <div className="my-3">{inspection?.id || '-'}</div>
                                </div>
                                <div className="col-2">
                                    <label htmlFor="">Título de adquisición</label>
                                    <div className="my-3">{inspection?.name || '-'}</div>
                                </div>
                                <div className="col-2">
                                    <label htmlFor="">Fecha del título de adquisición</label>
                                    <div className="my-3">{inspection?.nit || '-'}</div>
                                </div>
                                <div className="col-2">
                                    <label htmlFor="">Tipo de entidad</label>
                                    <div className="my-3">{inspection?.phone || '-'}</div>
                                </div>
                                <div className="col-2">
                                    <label htmlFor="">No entidad que emite el títulomento</label>
                                    <div className="my-3">{inspection?.state || '-'}</div>
                                </div>
                            </div>
                            <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                                <div className="col-2">
                                    <label htmlFor="">Avalúo del BI</label>
                                    <div className="my-3">{inspection?.city || '-'}</div>
                                </div>
                                <div className="col-2">
                                    <label htmlFor="">Dirección del BI</label>
                                    <div className="my-3">{inspection?.address || '-'}</div>
                                </div>
                                <div className="col-2">
                                    <label htmlFor="">Tipo de inmueble</label>
                                    <div className="my-3">{inspection?.contact_information?.name || '-'}</div>
                                </div>
                                <div className="col-2">
                                    <label htmlFor="">Categoría del BI</label>
                                    <div className="my-3">{inspection?.contact_information?.name || '-'}</div>
                                </div>
                                <div className="col-2">
                                    <label htmlFor="">Nombre del BI</label>
                                    <div className="my-3">{inspection?.contact_information?.name || '-'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Card
                actions={[
                    <div className="d-flex justify-content-end pe-4 ps-4">
                        <ModalNotificar />
                    </div>,
                ]}
            >
                <Formik
                    innerRef={innerRef}
                    enableReinitialize
                    onSubmit={(values, form) => {
                        onSubmit(values);
                        form.setSubmitting(false);
                    }}
                    initialValues={{
                        observations: obs || '',
                    }}
                >
                    {() => {
                        return (
                            <Form>
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
                            </Form>
                        );
                    }}
                </Formik>
            </Card>
        </div>
    );
};

export default BasicInformation;
