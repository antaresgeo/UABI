import { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IProjectAttributes } from '../../../utils/interfaces/';
import Input from 'antd/lib/input';
import * as Yup from 'yup';

interface ProjectFormPros {
    project?: IProjectAttributes;
    onSubmit?: (values, form?) => Promise<any>;
    disabled?: boolean;
    type?: 'view' | 'create' | 'edit';
}
const ProjectForm: FC<ProjectFormPros> = ({ project, onSubmit, disabled, type }) => {
    const { TextArea } = Input;
    const initial_values: IProjectAttributes = project || {
        id: '',
        name: '',
        description: '',
        dependency: '',
        status: -1,
    };

    const schema = Yup.object().shape({
        name: Yup.string().required('obligatorio').max(200, 'El nombre debe tener maximo 200 caracteres'),
        description: Yup.string().required('obligatorio').max(1000, 'La Descripción debe tener maximo 200 caracteres'),
        dependency: Yup.string().required('obligatorio'),
    });

    const submit = (values, form) => {
        onSubmit(values, form).then(() => {
            form.setSubmitting(false);
        });
    };
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initial_values} validationSchema={schema}>
            {({ values, isValid, isSubmitting }) => {
                return (
                    <Form>
                        <div className="row">
                            {project && (
                                <div className="col-4">
                                    <label htmlFor="id_id" className="form-label">
                                        Código
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
                                    <span
                                        className="text-danger text-left d-block w-100 mt-1"
                                        style={{ height: '22px' }}
                                    >
                                        <ErrorMessage name="id" />
                                    </span>
                                </div>
                            )}
                            <div className={`col-${project ? 4 : 6}`}>
                                <label htmlFor="name_id" className="form-label">
                                    Nombre
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="name_id"
                                    aria-describedby="nombre del projecto"
                                    placeholder="Ej.: Puente de la Madre Laura"
                                    name="name"
                                    autoComplete="off"
                                    disabled={disabled}
                                    maxLength={201}
                                />
                                <span className="text-danger text-left d-block w-100 mt-1" style={{ height: '22px' }}>
                                    <ErrorMessage name="name" />
                                </span>
                            </div>
                            <div className={`col-${project ? 4 : 6}`}>
                                <label htmlFor="dependency_id" className="form-label">
                                    Dependecia
                                </label>
                                <Field
                                    className="form-select"
                                    aria-label="Default select example"
                                    as="select"
                                    name="dependency"
                                    id="dependency_id"
                                    autoComplete="off"
                                    disabled={disabled}
                                >
                                    <option value="" disabled hidden>
                                        Selecciona una Destinación
                                    </option>
                                    <option value="Dependencia Infraestructura">Dependencia Infraestructura</option>
                                    <option value="Dependencia Salud">Dependencia Salud</option>
                                    <option value="Dependencia Educación">Dependencia Educación</option>
                                </Field>
                                <span className="text-danger text-left d-block w-100 mt-1" style={{ height: '22px' }}>
                                    <ErrorMessage name="dependency" />
                                </span>
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
                                    maxLength={1001}
                                />
                                <div className="row">
                                    <div className="col">
                                        <span
                                            className="text-danger text-left d-block w-100 mt-1"
                                            style={{ height: '22px' }}
                                        >
                                            <ErrorMessage name="description" />
                                        </span>
                                    </div>
                                    <div className="col">
                                        <span
                                            className="text-muted text-end d-block w-100 mt-1"
                                            style={{ height: '22px' }}
                                        >
                                            {values.description.length}/1000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col text-end">
                                {type !== 'view' && (
                                    <button
                                        className="btn btn-primary my-3"
                                        disabled={ isSubmitting || disabled}
                                    >
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
