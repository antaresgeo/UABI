import React, { FC, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Tabs } from 'antd';
import CreateOccupation from './CreateOccupation';
import CreateInspectionPhysical from './CreateInspectionPhysical';
import CreateUpgrade from './CreateUpgrade';
import PhotographicRecordForm from './PhotographicRecordForm';
import Report from './Report';
import BasicInformation from './BasicInformation';
import { Inspection } from '../custom_types';
import { FormikProps, FormikValues } from 'formik';

interface InspectionFormTagsProps {
    inspection: Inspection;
}
const InspectionFormTags: FC<InspectionFormTagsProps> = ({ inspection }) => {
    const history = useHistory();
    const { TabPane } = Tabs;
    const limit = 6;
    const [data, set_data] = useState(null);
    const steps = [
        {
            ref: useRef<FormikProps<FormikValues>>(),
            save: () => {
                steps[0].ref.current?.submitForm();
            },
            onSave: (values) => {
                set_data((data) => {
                    return {
                        ...data,
                        physical_inspection: {
                            ...data?.physical_inspection,
                            observations: {
                                ...data?.physical_inspection?.observations,
                                observation: values.observations,
                            },
                        },
                    };
                });
                // console.log('step 1', values);
            },
        },
        {
            ref: useRef<FormikProps<FormikValues>>(),
            save: () => {
                steps[1].ref.current?.submitForm();
            },
            onSave: (values) => {
                set_data((data) => {
                    return {
                        ...data,
                        ocupation: {
                            ...data?.ocupation,
                            ...values,
                        },
                    };
                });
                // console.log('step 2', values);
            },
        },
        {
            ref: useRef<FormikProps<FormikValues>>(),
            save: () => {
                steps[2].ref.current?.submitForm();
            },
            onSave: (values) => {
                set_data((data) => {
                    return {
                        ...data,
                        physical_inspection: {
                            ...data?.physical_inspection,
                            photographic_record: '',
                            inspection_date: 1638366517333,
                            observations: {
                                ...data?.physical_inspection?.observations,
                                observation: values.observations,
                            },
                        },
                        public_services: [...values?.public_services],
                        properties: [...values?.properties],
                    };
                });
                // console.log('step 3', values);
            },
        },
        {
            ref: useRef<FormikProps<FormikValues>>(),
            save: () => {
                steps[3].ref.current?.submitForm();
            },
            onSave: (values) => {
                set_data((data) => {
                    return {
                        ...data,
                        owner: {
                            ...data?.owner,
                            ...values,
                        },
                    };
                });
                // console.log('step 4', values);
            },
        },
        {
            ref: useRef<FormikProps<FormikValues>>(),
            save: () => {
                steps[4].ref.current?.submitForm();
            },
            onSave: (values) => {
                set_data((data) => {
                    return {
                        ...data,
                        image: Object.values(values),
                    };
                });
                // console.log('step 5', values);
            },
        },
        {
            ref: useRef<FormikProps<FormikValues>>(),
            save: () => {
                steps[5].ref.current?.submitForm();
            },
            onSave: (values) => {
                const final_data = {
                    ...data,
                    physical_inspection: {
                        ...data?.physical_inspection,
                        observations: {
                            ...data?.physical_inspection?.observations,
                            observation: values.observations,
                        },
                    },
                };
                delete final_data.image;
                console.log({ final_data });
            },
        },
    ];

    const [activeKey, set_activeKey] = useState<string>('1');
    const show_next = parseInt(activeKey) < limit;

    const next_tab = () => {
        const key = parseInt(activeKey);
        const next = key + 1;
        if (next <= limit) {
            callback(`${next}`);
        }
    };

    const prev_tab = () => {
        const key = parseInt(activeKey);
        const prev = key - 1;
        if (prev > 0) {
            callback(`${prev}`);
        }
    };

    function callback(key) {
        const save: any = steps[parseInt(activeKey) - 1]?.save;
        save && save();
        set_activeKey(key);
    }

    const obs = data?.physical_inspection?.observations?.observation;

    useEffect(() => {
        set_data((data) => {
            return {
                ...data,
                physical_inspection: {
                    ...data?.physical_inspection,
                    observations: {
                        ...data?.physical_inspection?.observations,
                        observation: inspection?.physical_inspection?.observations?.observation,
                    },
                },
            };
        });
    }, [inspection]);

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="bg-white d-flex flex-column h-100">
                    <div className="d-flex flex-row mb-3 pt-3 ps-4">
                        <h5>Crear nueva Inspección</h5>
                    </div>

                    <Tabs activeKey={activeKey} className="w-100 h-100" onChange={callback}>
                        <TabPane tab="Información básica BI" key="1">
                            <BasicInformation
                                inspection={null}
                                obs={obs}
                                innerRef={steps[0].ref}
                                onSubmit={steps[0].onSave}
                            />
                        </TabPane>
                        <TabPane tab="Ocupación" key="2" disabled={parseInt(activeKey) < 2}>
                            <CreateOccupation
                                ocupation={inspection?.ocupation}
                                innerRef={steps[1].ref}
                                onSubmit={steps[1].onSave}
                            />
                        </TabPane>
                        <TabPane tab="Inspección física" key="3" disabled={parseInt(activeKey) < 3}>
                            <CreateInspectionPhysical
                                physical_inspection={inspection?.physical_inspection}
                                innerRef={steps[2].ref}
                                onSubmit={steps[2].onSave}
                                obs={obs}
                            />
                        </TabPane>
                        <TabPane tab="Actualización" key="4" disabled={parseInt(activeKey) < 4}>
                            <CreateUpgrade
                                owner={inspection?.owner}
                                innerRef={steps[3].ref}
                                onSubmit={steps[3].onSave}
                            />
                        </TabPane>
                        <TabPane tab="Registro fotográfico" key="5" disabled={parseInt(activeKey) < 5}>
                            <PhotographicRecordForm innerRef={steps[4].ref} onSubmit={steps[4].onSave} />
                        </TabPane>
                        <TabPane tab="Generar informe" key="6" disabled={parseInt(activeKey) < 6}>
                            <Report obs={obs} innerRef={steps[5].ref} onSubmit={steps[5].onSave} />
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
                        if (activeKey === '1') {
                            history.goBack();
                        } else {
                            prev_tab();
                        }
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
                {show_next && (
                    <button type="button" className="btn btn-primary" onClick={next_tab}>
                        Siguiente
                    </button>
                )}
                {!show_next && (
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            steps[limit - 1].save();
                        }}
                    >
                        Guardar
                    </button>
                )}
            </div>
        </div>
    );
};

export default InspectionFormTags;
