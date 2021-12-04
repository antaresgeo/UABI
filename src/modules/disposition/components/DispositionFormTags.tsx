import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Tabs } from 'antd';
import CreatePrecontractual from '../views/Pre-contractual/CreatePrecontractual';
import CreateContract from './../views/Contracts/CreateContract';

interface IParams {
    dispositionType: any;
    realEstate: any;
}

export const DispositionFormTags = () => {
    const location = useLocation<IParams>();
    const { dispositionType, realEstate } = location.state;
    // const history = useHistory();
    const { TabPane } = Tabs;

    const [activeKey, set_activeKey] = useState<string>('1');

    // const next_tab = () => {
    //     const key = parseInt(activeKey);
    //     const next = key + 1;
    //     if (next <= 5) {
    //         set_activeKey(`${next}`);
    //     }
    // };

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
                            <CreatePrecontractual dispositionType={dispositionType} realEstate={realEstate} />
                        </TabPane>
                        <TabPane tab="Proceso Contractual" key="2">
                            <CreateContract />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};
