import { FC, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { IProjectAttributes } from '../../../utils/interfaces/';
import ErrorMessage from '../../../utils/ui/error_messge';
import * as Yup from 'yup';
import Select from '../../../utils/ui/select';
import dependencias from '../dependencias';
import { formatDate } from '../../../utils';

interface ProjectFormPros {
    project?: IProjectAttributes;
    onSubmit?: (values, form?) => Promise<any>;
    disabled?: boolean;
    type?: 'view' | 'create' | 'edit';
}
const ProjectForm: FC<ProjectFormPros> = ({ project, onSubmit, disabled, type }) => {
    const [subs, set_subs] = useState<any[]>([]);
    const initial_values = {
        id: '',
        name: '',
        description: '',
        dependency: '',
        subdependency: '',
        ...project,
    };

    const schema = Yup.object().shape({
        name: Yup.string().required('Campo obligatorio').max(200, 'El nombre debe tener maximo 200 caracteres'),
        description: Yup.string()
            .required('Campo obligatorio')
            .max(1000, 'La Descripción debe tener maximo 1000 caracteres'),
        dependency: Yup.string().required('Campo obligatorio'),
    });

    const submit = (values, form) => {
        const aux_values = { ...values };
        onSubmit(values, form).then(() => {
            form.setSubmitting(false);
        });
    };
    const format_list = (list) => {
        if (list && Array.isArray(list)) {
            let aux_list = [...list];
            aux_list = aux_list.map((d: any) => ({
                name: d.name,
                id: d.name,
            }));
            if (aux_list.length > 0) {
                return aux_list;
            }
        }
        return [];
    };

    const dependency_ops = format_list(dependencias);

    useEffect(() => {
        if (project) {
            const dependency = dependencias.find((d) => d.name === project.dependency);
            const _subs = format_list(dependency?.subs);
            set_subs(_subs);
        } else {
            set_subs([]);
        }
    }, [project]);

    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initial_values} validationSchema={schema}>
            {({ values, isValid, isSubmitting, setFieldValue }) => {
                return (
                    <Form>
                        <div className="row">
                            {project && (
                                <div className="col-3">
                                    <label htmlFor="id_id" className="form-label">
                                        Código del proyecto
                                    </label>
                                    <Field
                                        type="text"
                                        id="id_id"
                                        className="form-control"
                                        aria-describedby="codigo del projecto"
                                        disabled={true}
                                        name="id"
                                        autoComplete="off"
                                    />
                                    <ErrorMessage name="id" />
                                </div>
                            )}
                            <div className={`col-${project ? 3 : 4}`}>
                                <label htmlFor="name_id" className="form-label">
                                    Nombre del proyecto
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="name_id"
                                    aria-describedby="nombre del projecto"
                                    name="name"
                                    autoComplete="off"
                                    disabled={disabled}
                                    maxLength={201}
                                />
                                <ErrorMessage name="name" />
                            </div>
                            <div className={`col-${project ? 3 : 4}`}>
                                <label htmlFor="dependency_id" className="form-label">
                                    Dependecia
                                </label>
                                <Field
                                    component={Select}
                                    name="dependency"
                                    id="dependency_id"
                                    disabled={disabled}
                                    placeholder="Selecciona una Dependencia"
                                    options={dependency_ops}
                                    showSearch
                                    extra_on_change={(value) => {
                                        if (value) {
                                            const dependency = dependencias.find((d) => d.name === value);
                                            const _subs = format_list(dependency.subs);
                                            setFieldValue('subdependency', '');
                                            setFieldValue('cost_center', dependency.cost_center);
                                            setFieldValue('management_center', dependency.management_center);
                                            set_subs(_subs);
                                        }
                                    }}
                                    filterOption={(input, option) => {
                                        return option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                                    }}
                                />
                                <ErrorMessage name="dependency" />
                            </div>
                            <div className={`col-${project ? 3 : 4}`}>
                                <label htmlFor="subdependency_id" className="form-label">
                                    Sub. Dependecia
                                </label>
                                <Field
                                    component={Select}
                                    name="subdependency"
                                    id="subdependency_id"
                                    disabled={disabled || !values.dependency || subs.length === 0}
                                    placeholder="Selecciona una Sub. Dependencia"
                                    options={subs}
                                    showSearch
                                    allowClear
                                    extra_on_change={(value) => {
                                        if (value) {
                                            const dependency = dependencias.find((d) => d.name === values.dependency);
                                            const subdependency = dependency.subs.find((d) => d.name === value);
                                            setFieldValue('cost_center', subdependency.cost_center);
                                        }
                                    }}
                                    filterOption={(input, option) => {
                                        return option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                                    }}
                                />
                                <ErrorMessage name="subdependency" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="management_center_id" className="form-label">
                                    Centro Gestor
                                </label>
                                <Field
                                    disabled
                                    name="management_center"
                                    type="text"
                                    className="form-control"
                                    id="management_center_id"
                                />
                                {/*
                        <option value="" disabled hidden>
                            -- Seleccione Centro de Costos --
                        </option>
                        <option value="PÚBLICO">Público</option>
                        <option value="FISCAL">Fiscal</option>
                        <option value="MIXTO">Mixto</option>
                        <option value="POR DEFINIR">POR DEFINIR</option>
                    */}
                                <ErrorMessage name="cost_center" />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="cost_center_id" className="form-label">
                                    Centro de Costos
                                </label>
                                <Field
                                    disabled
                                    name="cost_center"
                                    type="text"
                                    className="form-control"
                                    id="cost_center_id"
                                />
                                {/*
                        <option value="" disabled hidden>
                            -- Seleccione Centro de Costos --
                        </option>
                        <option value="PÚBLICO">Público</option>
                        <option value="FISCAL">Fiscal</option>
                        <option value="MIXTO">Mixto</option>
                        <option value="POR DEFINIR">POR DEFINIR</option>
                    */}
                                <ErrorMessage name="cost_center" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="description_id" className="form-label">
                                    Descripción
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="description_id"
                                    aria-describedby="emailHelp"
                                    placeholder="Descripción del Proyecto"
                                    name="description"
                                    disabled={disabled}
                                    autoComplete="off"
                                    maxLength={1000}
                                />
                                <ErrorMessage name="description" withCount max={1000} />
                            </div>
                        </div>
                        <div className="row">
                            {type === 'view' && (
                                <>
                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="audit_trail_created_on_id" className="form-label">
                                                Fecha de creación
                                            </label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="audit_trail_created_on_id"
                                                name="audit_trail.created_on"
                                                value={formatDate(project?.audit_trail?.created_on)}
                                                disabled
                                            />
                                            <ErrorMessage />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="audit_trail_created_by_id" className="form-label">
                                                Creado por
                                            </label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="audit_trail_created_by_id"
                                                name="audit_trail.created_by"
                                                disabled
                                            />
                                            <ErrorMessage />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="row justify-content-end">
                            <div className="col text-end">
                                {type !== 'view' && (
                                    <button className="btn btn-primary my-3" disabled={isSubmitting || disabled}>
                                        Guardar
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

ProjectForm.defaultProps = {
    onSubmit: (v) => Promise.resolve(),
};
export default ProjectForm;
