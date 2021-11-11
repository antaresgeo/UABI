import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Tabs } from 'antd';
import { Card } from '../../../utils/ui';
import OccupationForm from './OccupationForm';
import TableInspectionPhysycal from './TableInspectionPhysycal';
import InspectionPhysicalForm from './InspectionPhysicalForm';
import UpgradeForm from './UpgradeForm';
interface InspectionFormTagsProps {}
const InspectionFormTags: FC<InspectionFormTagsProps> = ({}) => {
    const history = useHistory();
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
    }

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="bg-white d-flex flex-column h-100">
                    <div className="d-flex flex-row mb-3 pt-3 ps-4">
                        <h5>Crear nueva Inspección</h5>
                    </div>

                    <Tabs defaultActiveKey="1" onChange={callback} className="w-100 h-100">
                        <TabPane tab="Ocupación" key="1">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Card title="Datos de ocupación inspección anterior del BI">
                                            <OccupationForm disabled />
                                        </Card>
                                        <Card title="Datos de ocupación del bien inmueble">
                                            <OccupationForm />
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="Inspección física" key="2">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                        <TableInspectionPhysycal />
                                        <Card
                                            title={
                                                <>
                                                    <div className="row">
                                                        <b className="col-3">Estado anterior</b>
                                                        <b className="col-4">Estado actual del bien inmueble</b>
                                                    </div>
                                                </>
                                            }
                                        >
                                            <InspectionPhysicalForm />
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="Actualización" key="3">
                            <div className="container-fluid">
                                <div className="row ">
                                    <div className="col-md-12">
                                        <Card title="Actualizar datos del poseedor del bien inmueble">
                                            <UpgradeForm />
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="Registro fotográfico" key="4">
                            <div className="container-fluid">Content of Tab Pane 4</div>
                        </TabPane>
                        <TabPane tab="Generar informe" key="5">
                            <div className="container-fluid">Content of Tab Pane 5</div>
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
            </div>
        </div>
    );
};

export default InspectionFormTags;
