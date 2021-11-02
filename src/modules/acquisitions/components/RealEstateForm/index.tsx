import { IProjectAttributes, IRealEstateAttributes } from '../../../../utils/interfaces';
import { Formik, Form } from 'formik';
import React, { FC } from 'react';
import GeneralDataForm from './GeneralDataForm';
import AcquisitionsFrom from './AdquisitionsForm';
import RealEstateList from '../RealEstateList';
import { Card } from '../../../../utils/ui';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import DocumentsModal from '../../../../utils/components/DocumentsModal/Modal';
import SupportDocumentsForm from './SupportDocumentsForm';

interface RealEstateFormProps {
    realEstate?: IRealEstateAttributes;
    onSubmit?: (values, form?, isFinish?: boolean) => Promise<any>;
    disabled?: boolean;
    projects: IProjectAttributes[];
    type: 'view' | 'edit' | 'create';
    onProjectSelectedChange?: (value) => void;
    realEstates?: IRealEstateAttributes[];
    projectId?: number;
}

const RealEstateForm: FC<RealEstateFormProps> = ({
    realEstates,
    realEstate,
    onSubmit,
    disabled,
    projects,
    type,
    onProjectSelectedChange,
    projectId,
}) => {
    const history = useHistory();
    const initial_values = {
        id: 0,
        sap_id: '',
        dependency: '',
        destination_type: '',
        accounting_account: 'Fiscal',
        cost_center: 'Fiscal',
        registry_number: '',
        registry_number_document_id: '',
        name: '',
        description: '',
        patrimonial_value: 0,
        reconstruction_value: 0,
        location: '',
        cbml: '',
        total_area: 0,
        total_percentage: 0,
        zone: '',
        tipology: '',
        materials: [],
        supports_documents: [],
        project_id: '',
        status: 0,
        audit_trail: null,
        acquisitions: [],
        active_code: '',
        _type: null,
        ...realEstate,
    };

    const schema = Yup.object().shape({
        dependency: Yup.string().required('Campo obligatorio'),
        destination_type: Yup.string().required('Campo obligatorio'),
        accounting_account: Yup.string(),
        cost_center: Yup.string(),
        registry_number: Yup.string().required('Campo obligatorio').max(20, 'El maximo 20 es caracteres'),
        name: Yup.string().required('Campo obligatorio'),
        description: Yup.string().required('Campo obligatorio'),
        patrimonial_value: Yup.number()
            .required('Campo obligatorio')
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
        tipology: Yup.string().required('Campo obligatorio'),
        project_id: Yup.number().required('Campo obligatorio'),
        acquisitions: Yup.array(),
    });

    const submit = (aux_values, form) => {
        const isFinish = aux_values._type === 'finish';
        const values: any = { ...aux_values };
        delete values._type;
        values.materials = values.materials.join(', ');
        onSubmit(values, form, isFinish).then(() => {
            form.setSubmitting(false);
            form.resetForm();
            form.setFieldValue('project_id', projectId || '');
        });
    };

    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initial_values} validationSchema={schema}>
            {(formik) => {
                const { name, registry_number, project_id } = formik.values;
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
                                                disabled={type === 'view'}
                                                formik={formik}
                                                projects={projects}
                                                onProjectSelectedChange={onProjectSelectedChange}
                                            />
                                            <AcquisitionsFrom type={type} disabled={type === 'view'} formik={formik} />
                                            <SupportDocumentsForm type={type} formik={formik} />
                                            <Card title="Bienes Inmuebles del Proyecto">
                                                <RealEstateList project_id={project_id} init={false} />
                                            </Card>
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
