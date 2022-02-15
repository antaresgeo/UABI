import  { useEffect, useState } from 'react'
import {  useLocation } from 'react-router-dom';
import { Tabs } from 'antd';
import CreatePrecontractual from '../views/Pre-contractual/CreatePrecontractual';
import CreateContract from './../views/Contracts/CreateContract';

interface IParams {
    dispositionType: string;
    realEstate?: any;
    values?:any;
    stage?: string;
    values_contract?: any;
    precontractual?: any;
    contractual?: any;
}

export const DispositionFormTags = () => {
    const location = useLocation<IParams>();
    const { dispositionType, realEstate, values,values_contract, stage, precontractual, contractual } = location.state;
    // console.log(location.state)

    const { TabPane } = Tabs;

    const [activeKey, set_activeKey] = useState<string>('1');

    useEffect(() => {
        if(stage === "contractual") {
            set_activeKey('2')
        }else {
            set_activeKey('1')
        }
    }, [stage])


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
                            <CreatePrecontractual
                            dispositionType={dispositionType}
                            realEstate={realEstate}
                            values_form={values}
                            stage={stage}
                            precontractual={precontractual}
                            />
                        </TabPane>
                        <TabPane tab="Proceso Contractual" key="2" disabled={precontractual ? false : true}>
                            <CreateContract
                                dispositionType={dispositionType}
                                realEstate={realEstate}
                                values_contract={values_contract}
                                precontractual={precontractual}
                                contractual={contractual}

                            />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};
