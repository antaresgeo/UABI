import { IProjectAttributes, ITipologyAttributes } from '../../../../utils/interfaces';
import { Formik, Form } from 'formik';
import React, { FC, useEffect } from 'react';
import GeneralDataForm from './GeneralDataForm';
import AdquisitionView from './AdquisitionView';
import RealEstateList from '../RealEstateList';
import { Card } from '../../../../utils/ui';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import SupportDocumentsForm from './SupportDocumentsForm';
import { useDispatch, useSelector } from 'react-redux';
import { actions, service } from '../../redux';

interface RealEstateFormProps {
    onSubmit?: (values, form?, isFinish?: boolean) => Promise<any>;
    disabled?: boolean;
    type: 'view' | 'edit' | 'create';
    inventory?: boolean;
    inventoryEdit?: boolean;
}

const RealEstateForm: FC<RealEstateFormProps> = ({ onSubmit, disabled, type, inventory, inventoryEdit }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const tipologies: ITipologyAttributes[] = useSelector((states: any) => states.acquisitions.tipologies.value);
    const realEstate: any = useSelector((states: any) => states.acquisitions.realEstate.value);
    const projects: IProjectAttributes[] = useSelector((states: any) => states.acquisitions.projects.value);
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
        plot_area: '',
        project: {
            id: 0,
            name: 'Sin Projecto',
        },
        projects_id: '',
        audit_trail: {
            created_by: '',
        },
        _project: null,
        ...(realEstate
            ? {
                  ...realEstate,
                  projects_id: realEstate?.project?.id || 0,
              }
            : {}),
        ...(realEstate?.tipology_id
            ? {
                  accounting_account: tipologies.find((tipology) => tipology.id === realEstate?.tipology_id)
                      .accounting_account,
              }
            : {}),
        ...(realEstate && realEstate?.address?.id
            ? {
                  address: realEstate.address.id,
                  _address: {
                      name: realEstate.address.address,
                      cbml: realEstate.address.cbmls.sabi,
                  },
              }
            : {}),
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
        total_area: Yup.number().required('Campo obligatorio'),
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
                if (formik.values._project === null) {
                    update_project(projects_id);
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
                            <div className="flex-fill overflow-auto">
                                <div className="container-fluid">
                                    <div className="row justify-content-center">
                                        <div className="col-md-12">
                                            {type === 'view' && (
                                                <h4 className="ms-4 mb-3">
                                                    Bien inmueble
                                                    <TitleSpan name={name} registry_number={registry_number} />
                                                </h4>
                                            )}
                                            {type === 'create' && <h4 className="ms-4 mb-3">Crear bien inmueble</h4>}
                                            {type === 'edit' && (
                                                <h4 className="ms-4 mb-3">
                                                    Editar bien inmueble
                                                    <TitleSpan name={name} registry_number={registry_number} />
                                                </h4>
                                            )}
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
                                            <AdquisitionView
                                                type={type}
                                                formik={formik}
                                                disabled={_disabled}
                                                acquisitions={formik.values.acquisitions}
                                            />
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
                                            {type === 'create' && (
                                                <Card title="Inmuebles del Proyecto">
                                                    <RealEstateList project_id={projects_id} init={false} />
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
                                {type !== 'view' && (
                                    <>
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary me-3"
                                            onClick={() => {
                                                formik.setFieldValue('_type', 'finish');
                                                formik.submitForm();
                                            }}
                                        >
                                            Guardar y Finalizar
                                        </button>
                                        {type === 'create' && (
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={() => {
                                                    formik.setFieldValue('_type', 'normal');
                                                    formik.submitForm();
                                                }}
                                            >
                                                Guardar y Crear otro
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
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default RealEstateForm;
