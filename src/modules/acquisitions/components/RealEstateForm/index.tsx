import { IProjectAttributes, IRealEstateAttributes } from '../../../../utils/interfaces';
import { Formik, Form } from 'formik';
import React, { FC, useState } from 'react';
import GeneralDataForm from './GeneralDataForm';
import AcquisitionsFrom from './AdquisitionsForm';
import RealEstateList from '../RealEstateList';
import { Card } from '../../../../utils/ui';
import { Input } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

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
    const initial_values: IRealEstateAttributes = realEstate || {
        id: 0,
        sap_id: '',
        dependency: '',
        destination_type: '',
        accounting_account: '',
        cost_center: '',
        registry_number: '',
        registry_number_document_id: '',
        name: '',
        description: '',
        patrimonial_value: 0,
        location: 'Kr 1a # 34',
        cbml: '46446',
        total_area: 0,
        total_percentage: 0,
        zone: '',
        tipology: '',
        materials: '',
        supports_documents: null,
        project_id: projectId || '',
        status: 0,
        audit_trail: null,
        acquisitions: [],
    };

    const schema = Yup.object().shape({
        dependency: Yup.string().required('obligatorio'),
        destination_type: Yup.string().required('obligatorio'),
        accounting_account: Yup.string().required('obligatorio'),
        cost_center: Yup.string().required('obligatorio'),
        registry_number: Yup.string()
            .required('obligatorio')
            .max(20, 'El Número Matricula debe tener maximo 20 caracteres'),
        name: Yup.string().required('obligatorio'),
        description: Yup.string().required('obligatorio'),
        patrimonial_value: Yup.number().required('obligatorio'),
        total_area: Yup.number().required('obligatorio'),
        total_percentage: Yup.number()
            .required('obligatorio')
            .min(0, 'El procentaje minimo es 0')
            .max(100, 'El procentaje maximo es 100'),
        zone: Yup.string().required('obligatorio'),
        tipology: Yup.string().required('obligatorio'),
        project_id: Yup.number().required('obligatorio'),
    });

    const submit = (values, form, isFinish = false) => {
        onSubmit(values, form, isFinish).then(() => {
            form.setSubmitting(false);
            form.resetForm();
            form.setFieldValue('project_id', projectId || '');
        });
    };
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initial_values} validationSchema={schema}>
            {(formik) => {
                const { name, registry_number } = formik.values;
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
                                            <Card
                                                title="Documentos Soporte"
                                                actions={[
                                                    <div className="d-flex flex-row-reverse px-3 py-1">
                                                        <button type="button" className="btn btn-primary">
                                                            Guardar
                                                        </button>
                                                    </div>,
                                                ]}
                                            >
                                                <div className="row">
                                                    <div className="col-3">
                                                        <label htmlFor="form-select" className="form-label">
                                                            Nombre del Documento
                                                        </label>
                                                        <Input />
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="mb-3">
                                                            <label htmlFor="formFile" className="form-label">
                                                                Default file input example
                                                            </label>
                                                            <input className="form-control" type="file" id="formFile" />
                                                            <div id="emailHelp" className="form-text">
                                                                Escritura.pdf
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-1">
                                                        <label htmlFor=""></label>
                                                        <button type="submit" className="btn btn-primary mr-3">
                                                            Subir
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <div className="col text-start">
                                                        <button type="submit" className="btn btn-primary mr-3">
                                                            Guardar
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary mx-3"
                                                            onClick={() => {} /*_createRealEstate*/}
                                                        >
                                                            Agregar
                                                        </button>
                                                    </div>
                                                </div>
                                            </Card>
                                            <Card title="Bienes Inmuebles del Proyecto">
                                                <RealEstateList realEstates={realEstates} />
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
                                                submit(formik.values, formik, true);
                                            }}
                                        >
                                            Guardar y Finalizar
                                        </button>
                                        <button className="btn btn-primary">Guardar y Crear otro</button>
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
