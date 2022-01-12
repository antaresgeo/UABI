import { Formik, Form } from 'formik';
import React, { FC, useEffect } from 'react';
import GeneralDataForm from './GeneralDataForm';
import AdquisitionView from './AdquisitionView';
import RealEstateList from '../RealEstateList';
import { Card, Link } from '../../../../utils/ui';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import SupportDocumentsForm from './SupportDocumentsForm';
import { useDispatch, useSelector } from 'react-redux';
import { actions, service } from '../../redux';
import RealEstateViewForm from './RealEstateViewForm';
import Map from '../../../../utils/components/template/map';
import { PolizaViewForm } from '../../../asegurabilidad/components/PolizaViewForm';
import { swal_warning } from '../../../../utils';

interface RealEstateFormProps {
    onSubmit?: (values, form?, isFinish?: boolean) => Promise<any>;
    disabled?: boolean;
    type: 'view' | 'edit' | 'create';
    inventory?: boolean;
    inventoryEdit?: boolean;
    globe?: boolean;
    realEstateData?: any;
}

const RealEstateForm: FC<RealEstateFormProps> = ({
    onSubmit,
    disabled,
    type,
    inventory,
    inventoryEdit,
    globe,
    realEstateData,
}) => {
    const dispatch = useDispatch();
    const history = useHistory<any>();
    const [tipologies, realEstate, projects] = useSelector((store: any) => [
        store.acquisitions.tipologies.value,
        store.acquisitions.realEstate.value,
        store.acquisitions.projects.value,
    ]);

    let initial_values: any = {
        id: '',
        sap_id: '',
        destination_type: '',
        accounting_account: 0,
        registry_number: '',
        registry_number_document_id: '',
        name: '',
        description: '',
        patrimonial_value: '',
        reconstruction_value: '',
        address: 5,
        _address: {
            name: '',
            cbml: '',
        },
        total_area: '',
        total_area_unit: 'm2',
        total_percentage: '',
        zone: 'Urbano',
        tipology_id: '',
        materials: [],
        supports_documents: [
            {
                label: 'Documento de Matricula',
                type: 3,
            },
            {
                label: 'Documento de Titulo',
                type: 4,
            },
        ],
        active_type: ['Lote'],
        status: 0,
        active_code: '',
        dependency: '',
        subdependency: '',
        management_center: '',
        cost_center: '',
        construction_area: '',
        construction_area_unit: 'm2',
        plot_area: '',
        plot_area_unit: 'm2',
        project: {
            id: 0,
            name: 'Sin Projecto',
        },
        ...(realEstateData
            ? {
                  ...realEstateData,
                  ...(realEstateData?.tipology_id
                      ? {
                            accounting_account: tipologies?.find(
                                (tipology) => tipology.id === realEstateData?.tipology_id
                            )?.accounting_account,
                        }
                      : {}),
                  ...(realEstateData && realEstateData?.address?.id
                      ? {
                            address: realEstateData.address.id,
                            _address: {
                                name: realEstateData.address.address,
                                cbml: realEstateData.address.cbmls.uabi,
                            },
                        }
                      : {}),
                  projects_id: realEstateData?.project?.id || 0,
              }
            : {
                  ...realEstate,
                  ...(realEstate?.tipology_id
                      ? {
                            accounting_account: tipologies.find((tipology) => tipology.id === realEstate?.tipology_id)
                                ?.accounting_account,
                        }
                      : {}),
                  ...(realEstate && realEstate?.address?.id
                      ? {
                            address: realEstate.address.id,
                            _address: {
                                name: realEstate.address.address,
                                cbml: realEstate.address.cbmls.uabi,
                            },
                        }
                      : {}),
                  projects_id: realEstate?.project?.id || 0,
              }),
    };

    if (!Array.isArray(initial_values.materials) && typeof initial_values.materials === 'string') {
        initial_values.materials = initial_values.materials.split(',');
    }

    if (initial_values.supports_documents.length === 0) {
        initial_values.supports_documents = [
            {
                label: 'Documento de Matricula',
                type: 3,
            },
            {
                label: 'Documento de Titulo',
                type: 4,
            },
        ];
        if (inventory) {
            initial_values.supports_documents = [
                ...initial_values.supports_documents,
                {
                    label: 'Documento Avalúo',
                    type: 6,
                },
                {
                    label: 'Documento de Prediación',
                    type: 7,
                },
            ];
        }
    } else if (initial_values.supports_documents.length >= 2 && inventory) {
        const doc_avaluo = initial_values.supports_documents.filter((d) => d.label === 'Documento Avalúo');
        const doc_prediacion = initial_values.supports_documents.filter((d) => d.label === 'Documento de Prediación');
        if (doc_avaluo.length === 0 && doc_prediacion.length === 0) {
            initial_values.supports_documents = [
                ...initial_values.supports_documents,
                {
                    label: 'Documento Avalúo',
                    type: 6,
                },
                {
                    label: 'Documento de Prediación',
                    type: 7,
                },
            ];
        } else if (doc_avaluo.length === 0) {
            initial_values.supports_documents = [
                ...initial_values.supports_documents,
                {
                    label: 'Documento Avalúo',
                    type: 6,
                },
            ];
        } else if (doc_prediacion.length === 0) {
            initial_values.supports_documents = [
                ...initial_values.supports_documents,
                {
                    label: 'Documento de Prediación',
                    type: 7,
                },
            ];
        }
    }

    if (!initial_values._address.cbml) {
        initial_values._address.cbml = '';
    }

    const schema = Yup.object().shape({
        destination_type: Yup.string().required('Campo obligatorio'),
        // accounting_account: Yup.string(),
        registry_number: Yup.string().required('Campo obligatorio').max(20, 'El maximo 20 es caracteres'),
        name: Yup.string().required('Campo obligatorio'),
        description: Yup.string().required('Campo obligatorio'),
        patrimonial_value: Yup.number()
            // .required('Campo obligatorio')
            .min(0, 'El minimo es 0')
            .max(99999999999999999999, 'El maximo 20 es caracteres'),
        reconstruction_value: Yup.number()
            .required('Campo obligatorio')
            .min(0, 'El minimo es 0')
            .max(9999999999, 'El maximo 10 es caracteres'),

        active_type: Yup.array().required('obligatorio'),

        total_area: Yup.number()
            .when('active_type', {
                is: (active_type) => Array.isArray(active_type) && active_type.includes('Lote'),
                then: Yup.number()
                    .nullable()
                    .moreThan(Yup.ref('plot_area'), (plot_area) => {
                        if (plot_area.more !== undefined) {
                            return 'debe ser mayor a área Lote';
                        }
                    }),
            })
            .when('active_type', {
                is: (active_type) =>
                    Array.isArray(active_type) &&
                    (active_type.includes('Construccion') ||
                        active_type.includes('Construccion para demoler') ||
                        active_type.includes('Mejora')),
                then: Yup.number()
                    .nullable()
                    .moreThan(Yup.ref('construction_area'), (construction_area) => {
                        if (construction_area.more !== undefined) {
                            return 'debe ser mayor a área construccion';
                        }
                    }),
            }),

        plot_area: Yup.number()
            .nullable()
            .when('active_type', {
                is: (active_type) => Array.isArray(active_type) && active_type.includes('Lote'),
                then: Yup.number().nullable().lessThan(Yup.ref('total_area'), 'debe ser menor que el área total'),
            })
            .when('active_type', {
                is: (active_type) => Array.isArray(active_type) && active_type.includes('Lote'),
                then: Yup.number().required('obligatorio'),
            }),
        construction_area: Yup.number()
            .nullable()
            .when('active_type', {
                is: (active_type) =>
                    Array.isArray(active_type) &&
                    (active_type.includes('Construccion') ||
                        active_type.includes('Construccion para demoler') ||
                        active_type.includes('Mejora')),
                then: Yup.number().nullable().lessThan(Yup.ref('total_area'), 'debe ser menor que el área total'),
            })
            .when('active_type', {
                is: (active_type) =>
                    Array.isArray(active_type) &&
                    (active_type.includes('Construccion') ||
                        active_type.includes('Construccion para demoler') ||
                        active_type.includes('Mejora')),
                then: Yup.number().nullable(),
            }),

        total_percentage: Yup.number()
            .required('Campo obligatorio')
            .min(0, 'El minimo es 0')
            .max(100, 'El maximo es 100'),
        zone: Yup.string().required('Campo obligatorio'),
        tipology_id: Yup.string().required('Campo obligatorio'),
        acquisitions: Yup.array(),
    });

    const submit = (aux_values, form) => {
        const isFinish = aux_values._type === 'finish';
        const values: any = { ...aux_values };
        const project_id = values.projects_id;
        delete values._type;
        values.projects_id = [project_id];
        values.materials = values.materials.join(', ');
        form.setSubmitting(true);
        if (realEstate?.patrimonial_value !== values?.patrimonial_value && inventory) {
            if (validateDocuments(values?.supports_documents, 'Documento Avalúo')) {
                form.setSubmitting(false);
                return;
            }
        }
        if (
            (realEstate?.total_area !== values?.total_area ||
                realEstate?.plot_area !== values?.plot_area ||
                realEstate?.construction_area !== values?.construction_area) &&
            inventory
        ) {
            if (validateDocuments(values?.supports_documents, 'Documento de Prediación')) {
                form.setSubmitting(false);
                return;
            }
        }
        onSubmit(values, form, isFinish)
            .then(() => {
                form.setSubmitting(false);
                form.setFieldValue('projects_id', project_id || '');
            })
            .catch(() => {
                form.setSubmitting(false);
            });
    };

    useEffect(() => {
        dispatch(actions.getProjects());
    }, []);

    const validateDocuments = (supports_documents, text) => {
        const doc = supports_documents.filter((d) => d.hasOwnProperty('pdf') && d.pdf).filter((d) => d.label === text);
        const doc_create = supports_documents.filter((d) => d.label === text).filter((d) => d.id);
        if (doc.length === 0 && doc_create.length === 0) {
            swal_warning.fire({
                title: 'Documentos Requeridos',
                text: `el Archivo ${text} es Obligatorio`,
            });
            return true;
        } else {
            return false;
        }
    };

    const _disabled = disabled || type === 'view';

    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initial_values} validationSchema={schema}>
            {(formik) => {
                const { name, registry_number, projects_id } = formik.values;
                const update_project = (id) => {
                    if (Number.isInteger(id)) {
                        formik.setFieldValue('_project', {}, false);
                        service.getProject(id + '').then((_project: any) => {
                            formik.setFieldValue('projects_id', _project.id, false);
                            formik.setFieldValue('dependency', _project.dependency, false);
                            formik.setFieldValue('subdependency', _project.subdependency, false);
                            formik.setFieldValue('management_center', _project.management_center, false);
                            formik.setFieldValue('cost_center', _project.cost_center, false);
                            formik.setFieldValue(
                                'project',
                                {
                                    id: _project.id,
                                    name: _project.name,
                                },
                                false
                            );
                            formik.setFieldValue('_project', _project, false);
                        });
                    }
                };
                if (formik.values._project === undefined) {
                    if (history.location?.state && history.location?.state?.project_id !== null) {
                        update_project(history.location.state.project_id);
                    } else {
                        update_project(projects_id);
                    }
                }
                const TitleSpan = ({ name, registry_number }) => {
                    return (
                        <>
                            {name ? ': ' : ''}
                            <span>{name}</span> {registry_number ? '-' : ''} <span>{registry_number}</span>
                        </>
                    );
                };

                return (
                    <Form className="h-100" autoComplete="off">
                        <div className="h-100 d-flex flex-column">
                            {type === 'view' && (
                                <>
                                    <div className="d-flex flex-row mb-3 pt-3 ps-4 shadow-sm p-3 bg-white rounded">
                                        <h5 className="col-11">Bien Inmueble: {realEstate?.name}</h5>
                                        <Link
                                            to={
                                                inventory === true
                                                    ? `/inventoryrecord/real-estates/edit/${realEstate?.id}/`
                                                    : `/acquisitions/real-estates/edit/${realEstate?.id}/`
                                            }
                                            name=""
                                            avatar={false}
                                            icon={
                                                <i
                                                    style={{ marginLeft: '30px', fontSize: 16, color: '#000' }}
                                                    className="fa fa-pencil"
                                                    aria-hidden="true"
                                                />
                                            }
                                        />
                                    </div>
                                </>
                            )}
                            <div className="flex-fill overflow-auto">
                                {type === 'view' && (
                                    <div style={{ padding: '0px 16px' }}>
                                        <RealEstateViewForm
                                            realEstate={realEstate}
                                            tipology={tipologies.find(
                                                (tipology) => tipology.id === realEstate?.tipology_id
                                            )}
                                            inventory={inventory}
                                        />
                                    </div>
                                )}
                                <div className="container-fluid">
                                    <div className="row justify-content-center">
                                        <div className="col-md-12">
                                            {type === 'create' && <h4 className="ms-4 mb-3">Crear bien inmueble</h4>}
                                            {type === 'edit' && (
                                                <h4 className="ms-4 mb-3">
                                                    Editar bien inmueble
                                                    <TitleSpan name={name} registry_number={registry_number} />
                                                </h4>
                                            )}
                                            {type !== 'view' && (
                                                <GeneralDataForm
                                                    type={type}
                                                    tipologies={tipologies}
                                                    disabled={_disabled}
                                                    formik={formik}
                                                    projects={projects}
                                                    project={formik.values._project}
                                                    inventory={inventory}
                                                    inventoryEdit={inventoryEdit}
                                                    onProjectSelectedChange={(id) => update_project(id)}
                                                    acquisitions={formik.values.acquisitions}
                                                />
                                            )}
                                            {globe !== true && (
                                                <AdquisitionView
                                                    inventory={inventory}
                                                    type={type}
                                                    formik={formik}
                                                    disabled={_disabled}
                                                    acquisitions={formik.values.acquisitions}
                                                />
                                            )}
                                            <SupportDocumentsForm type={type} formik={formik} />
                                            {type === 'view' && (
                                                <Card
                                                    title={
                                                        <>
                                                            <b>Inmuebles del Proyecto: {}</b>
                                                        </>
                                                    }
                                                >
                                                    <RealEstateList project_id={projects_id} init={false} />
                                                </Card>
                                            )}
                                            {inventory && realEstate?.policy_id !== null && (
                                                <PolizaViewForm policy_id={realEstate?.policy_id} />
                                            )}
                                            {type === 'create' && globe !== true && (
                                                <Card title="Inmuebles del Proyecto">
                                                    <RealEstateList project_id={projects_id} init={false} />
                                                </Card>
                                            )}
                                            {type === 'view' && inventory && (
                                                <Card>
                                                    <Map center={[-75.56359, 6.25184]} />
                                                </Card>
                                            )}
                                        </div>
                                    </div>
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
                                {type !== 'view' && globe !== true && (
                                    <>
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary me-3"
                                            onClick={() => {
                                                formik.setFieldValue('_type', 'finish');
                                                formik.submitForm();
                                            }}
                                            disabled={formik.isSubmitting}
                                        >
                                            Guardar
                                            {formik.isSubmitting && (
                                                <i
                                                    className="fa fa-circle-notch fa-spin"
                                                    style={{ fontSize: 12, marginLeft: 4, color: '#fff' }}
                                                />
                                            )}{' '}
                                            y Finalizar
                                        </button>
                                        {type === 'create' && (
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={() => {
                                                    formik.setFieldValue('_type', 'normal');
                                                    formik.submitForm();
                                                }}
                                                disabled={formik.isSubmitting}
                                            >
                                                Guardar{' '}
                                                {formik.isSubmitting && (
                                                    <i
                                                        className="fa fa-circle-notch fa-spin"
                                                        style={{ fontSize: 12, marginLeft: 4, color: '#fff' }}
                                                    />
                                                )}{' '}
                                                y Crear otro
                                            </button>
                                        )}
                                    </>
                                )}
                                {inventory !== undefined && !inventory && (
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => {
                                            formik.setFieldValue('_type', 'normal');
                                            formik.submitForm();
                                        }}
                                    >
                                        Confirmar y finalizar
                                    </button>
                                )}
                                {globe === true && (
                                    <>
                                        <div className="flex-fill" />
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => {
                                                formik.setFieldValue('_type', 'normal');
                                                formik.submitForm();
                                            }}
                                            disabled={formik.isSubmitting}
                                        >
                                            Guardar
                                            {formik.isSubmitting && (
                                                <i
                                                    className="fa fa-circle-notch fa-spin"
                                                    style={{ fontSize: 12, marginLeft: 4, color: '#fff' }}
                                                />
                                            )}
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default RealEstateForm;
