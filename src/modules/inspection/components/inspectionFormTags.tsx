import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Tabs } from 'antd';
import CreateOccupation from './CreateOccupation';
import CreateInspectionPhysical from './CreateInspectionPhysical';
import CreateUpgrade from './CreateUpgrade';
import { Card } from '../../../utils/ui';
import { Field, Form, Formik } from 'formik';
import ErrorMessage from '../../../utils/ui/error_messge';
import DocumentModal from "../../../utils/components/DocumentsModal";

interface InspectionFormTagsProps {}
const InspectionFormTags: FC<InspectionFormTagsProps> = ({}) => {
    const history = useHistory();
    const { TabPane } = Tabs;

    const [activeKey, set_activeKey] = useState<string>('1');

    const next_tab = () => {
        const key = parseInt(activeKey);
        const next = key + 1;
        if (next <= 5) {
            set_activeKey(`${next}`);
        }
    };

    function callback(key) {
        set_activeKey(key);
    }

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="bg-white d-flex flex-column h-100">
                    <div className="d-flex flex-row mb-3 pt-3 ps-4">
                        <h5>Crear nueva Inspección</h5>
                    </div>

                    <Tabs activeKey={activeKey} className="w-100 h-100" onChange={callback}>
                        <TabPane tab="Ocupación del Inmueble" key="1">
                            <CreateOccupation />
                        </TabPane>
                        <TabPane tab="Inspección física" key="2">
                            <CreateInspectionPhysical />
                        </TabPane>
                        <TabPane tab="Actualización" key="3">
                            <CreateUpgrade />
                        </TabPane>
                        <TabPane tab="Registro fotográfico" key="4">
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
                                                            <Field
                                                                name="documento1"
                                                                component={DocumentModal}
                                                                btn_label="Adjuntar"
                                                            />
                                                            <ErrorMessage name="documento1" />
                                                        </div>
                                                        <div className="col-6">
                                                            <label htmlFor="form-select" className="form-label">
                                                                Generales
                                                            </label>
                                                            <Field
                                                                name="documento2"
                                                                component={DocumentModal}
                                                                btn_label="Adjuntar"

                                                            />
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
                                                            <Field
                                                                name="documento3"
                                                                component={DocumentModal}
                                                                btn_label="Adjuntar"
                                                            />
                                                            <ErrorMessage name="documento2" />
                                                        </div>
                                                        <div className="col-6">
                                                            <label htmlFor="form-select" className="form-label">
                                                                Cubierta o techo
                                                            </label>
                                                            <Field
                                                                name="documento3"
                                                                component={DocumentModal}
                                                                btn_label="Adjuntar"
                                                            />
                                                            <ErrorMessage name="documento2" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <label htmlFor="form-select" className="form-label">
                                                                Lavamanoss
                                                            </label>
                                                            <Field
                                                                name="documento3"
                                                                component={DocumentModal}
                                                                btn_label="Adjuntar"
                                                            />
                                                            <ErrorMessage name="documento2" />
                                                        </div>
                                                    </div>
                                                </Card>
                                            </Form>
                                        );
                                    }}
                                </Formik>
                            </div>
                        </TabPane>
                        <TabPane tab="Generar informe" key="5">
                            <div className="container-fluid">
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
                        </TabPane>
                    </Tabs>
                </div>
            </div>
            <div
                className="bg-white d-flex flex-row justify-content-between"
                style={{ padding: 16, borderTop: '1px solid #ccc' }}
            >
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        next_tab();
                    }}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default InspectionFormTags;
