import React, { FC, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { Tabs } from 'antd';
import CreatePrecontractual from '../views/Pre-contractual/CreatePrecontractual';
import CreateContract from './../views/Contracts/CreateContract';

interface IParams {
    dispositionType: any;
}


export const DispositionFormTags = () => {
    const location = useLocation<IParams>();
    const { dispositionType } = location.state;
    console.log(dispositionType);
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
                        <h5>Crear nueva Disposición</h5>
                    </div>

                    <Tabs activeKey={activeKey} className="w-100 h-100" onChange={callback}>
                        <TabPane tab="Proceso Precontractual" key="1">
                            <CreatePrecontractual dispositionType={dispositionType} />
                        </TabPane>
                        <TabPane tab="Proceso Contractual" key="2">
                            <CreateContract />
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
    )
}
