import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Tabs } from 'antd';
import CreateOccupation from './CreateOccupation';
import CreateInspectionPhysical from './CreateInspectionPhysical';
import CreateUpgrade from './CreateUpgrade';

interface InspectionFormTagsProps {}
const InspectionFormTags: FC<InspectionFormTagsProps> = ({}) => {
    const history = useHistory();
    const { TabPane } = Tabs;

    const [activeKey, set_activeKey] = useState<string>('1');

    const next_tab = () => {
        const key = parseInt(activeKey);
        const next = key + 1;
        if(next <= 5){
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
                        <TabPane tab="Ocupación" key="1">
                            <CreateOccupation />
                        </TabPane>
                        <TabPane tab="Inspección física" key="2">
                            <CreateInspectionPhysical />
                        </TabPane>
                        <TabPane tab="Actualización" key="3">
                            <CreateUpgrade />
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
