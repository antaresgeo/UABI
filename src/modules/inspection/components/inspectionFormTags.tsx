import React, { FC, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Tabs } from 'antd';
import CreateOccupation from './CreateOccupation';
import CreateInspectionPhysical from './CreateInspectionPhysical';
import CreateUpgrade from './CreateUpgrade';
import PhotographicRecordForm from './PhotographicRecordForm';
import Report from './Report';
import BasicInformation from './BasicInformation';
import { Inspection, InspectionRequest } from '../custom_types';
import { FormikProps, FormikValues } from 'formik';
import { swal_success } from '../../../utils';

interface InspectionFormTagsProps {
    inspection: Inspection;
    real_estate: any;
    user: any;
}

const InspectionFormTags: FC<InspectionFormTagsProps> = ({ inspection, real_estate, user }) => {
    const { TabPane } = Tabs;
    const history = useHistory<any>();
    const active_key: string = history.location.state?.active_key || '1';
    let data: InspectionRequest = history.location.state?.inspection_request;
    if (!data) {
        data = {
            physical_inspection: {
                observations: {
                    observation: '',
                },
                photographic_record: '',
                inspection_date: null,
            },
            observations: {
                observation: '',
            },
            ocupation: {
                tenure: '',
                use: '',
                ownership: '',
                contractual: '',
            },
            public_services: [],
            properties: [],
            owner: {
                document_number: null,
                document_type: null,
                email: null,
                names_surnames: null,
                phone_number: null,
                id: 50,
            },
            photographic_register: {
                fachada: 'xxx',
                generals: [],
            },
        };
    }
    const limit = 6;
    const steps = [
        {
            ref: useRef<FormikProps<FormikValues>>(),
            save: () => {
                steps[0].ref.current?.submitForm();
            },
            onSave: (values) => {
                data = {
                    ...data,
                    observations: {
                        ...data?.physical_inspection?.observations,
                        observation: values.observations,
                    },
                };

                // console.log('step 1', values);
            },
        },
        {
            ref: useRef<FormikProps<FormikValues>>(),
            save: () => {
                steps[1].ref.current?.submitForm();
            },
            onSave: (values) => {
                data = {
                    ...data,
                    ocupation: {
                        ...data?.ocupation,
                        ...values,
                    },
                };
                // console.log('step 2', values);
            },
        },
        {
            ref: useRef<FormikProps<FormikValues>>(),
            save: () => {
                steps[2].ref.current?.submitForm();
            },
            onSave: (values) => {
                data = {
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
                // console.log('step 3', values);
            },
        },
        {
            ref: useRef<FormikProps<FormikValues>>(),
            save: () => {
                steps[3].ref.current?.submitForm();
            },
            onSave: (values) => {
                data = {
                    ...data,
                    owner: {
                        ...data?.owner,
                        ...values,
                    },
                };

                // console.log('step 4', values);
            },
        },
        {
            ref: useRef<FormikProps<FormikValues>>(),
            save: () => {
                steps[4].ref.current?.submitForm();
            },
            onSave: (values) => {
                data = {
                    ...data,
                    // image: Object.values(values),
                };

                // console.log('step 5', values);
            },
        },
        {
            ref: useRef<FormikProps<FormikValues>>(),
            save: () => {
                steps[5].ref.current?.submitForm();
            },
            onSave: (values) => {
                data = {
                    ...data,
                    physical_inspection: {
                        ...data?.physical_inspection,
                        observations: {
                            ...data?.physical_inspection?.observations,
                            observation: values.observations,
                        },
                    },
                };
                // delete final_data.image;
                swal_success.fire('Inspeccion realizada exitosamente', '', 'success').then(() => {
                    history.push('/inspection/');
                    // create_notification({
                    //     title: 'Es necesario mantenimiento',
                    //     description: `es necesario mantenimiento para el bien inmueble ${real_estate?.name}`,
                    //     action: `/acquisitions/real-estates/${real_estate?.id}/`,
                    //     priority: 2,
                    //     toRole: 1,
                    // });
                });
                console.log({ final_data: data });
            },
        },
    ];

    const show_next = parseInt(active_key) < limit;

    const next_tab = () => {
        const key = parseInt(active_key);
        const next = key + 1;
        if (next <= limit) {
            callback(`${next}`);
        }
    };

    const prev_tab = () => {
        const key = parseInt(active_key);
        const prev = key - 1;
        if (prev > 0) {
            callback(`${prev}`);
        }
    };

    function callback(key) {
        const save: any = steps[parseInt(active_key) - 1]?.save;
        save && save();
        history.push(history.location.pathname, { active_key: key, inspection_request: data });
        // set_activeKey(key);
    }

    const obs = data?.physical_inspection?.observations?.observation;

    useEffect(() => {
        data = {
            ...data,
            physical_inspection: {
                ...data?.physical_inspection,
                observations: {
                    ...data?.physical_inspection?.observations,
                    observation: inspection?.physical_inspection?.observations?.observation,
                },
            },
        };
    }, [inspection]);

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="bg-white d-flex flex-column h-100">
                    <div className="d-flex flex-row mb-3 pt-3 ps-4">
                        <h5>Crear nueva Inspección</h5>
                    </div>

                    <Tabs activeKey={active_key} className="w-100 h-100" onChange={callback}>
                        <TabPane tab="Información básica BI" key="1">
                            <BasicInformation
                                inspection={null}
                                real_estate={real_estate}
                                obs={obs}
                                innerRef={steps[0].ref}
                                onSubmit={steps[0].onSave}
                            />
                        </TabPane>
                        <TabPane tab="Ocupación" key="2" disabled={parseInt(active_key) < 2}>
                            <CreateOccupation
                                ocupation={inspection?.ocupation}
                                innerRef={steps[1].ref}
                                onSubmit={steps[1].onSave}
                            />
                        </TabPane>
                        <TabPane tab="Inspección física" key="3" disabled={parseInt(active_key) < 3}>
                            <CreateInspectionPhysical
                                physical_inspection={inspection?.physical_inspection}
                                innerRef={steps[2].ref}
                                onSubmit={steps[2].onSave}
                                obs={obs}
                            />
                        </TabPane>
                        <TabPane tab="Actualización" key="4" disabled={parseInt(active_key) < 4}>
                            <CreateUpgrade
                                owner={inspection?.owner}
                                innerRef={steps[3].ref}
                                onSubmit={steps[3].onSave}
                            />
                        </TabPane>
                        <TabPane tab="Registro fotográfico" key="5" disabled={parseInt(active_key) < 5}>
                            <PhotographicRecordForm innerRef={steps[4].ref} onSubmit={steps[4].onSave} />
                        </TabPane>
                        <TabPane tab="Generar informe" key="6" disabled={parseInt(active_key) < 6}>
                            <Report
                                obs={obs}
                                innerRef={steps[5].ref}
                                onSubmit={steps[5].onSave}
                                data={data}
                                real_estate={real_estate}
                                user={user}
                            />
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
                        if (active_key === '1') {
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
