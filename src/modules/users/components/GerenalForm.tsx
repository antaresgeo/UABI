import { FC, useState } from 'react';
import { IUserAttributes } from '../../../utils/interfaces/users';
import LocationModal from '../../../utils/components/Location/LocationModal';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import ErrorMessage from '../../../utils/ui/error_messge';
import dependencias from '../../acquisitions/dependencias';
import Select from '../../../utils/ui/select';

interface IUserFormPros {
    user?: IUserAttributes;
    disabled?: boolean;
    type?: 'view' | 'create' | 'edit';
    onSubmit: (values, actions?) => Promise<any>;
}

const GeneralForm: FC<IUserFormPros> = ({ type, disabled, onSubmit, user }) => {
    const history = useHistory();
    const [subs, set_subs] = useState<any[]>([]);
    const initial_values: IUserAttributes = {
        id: 0,
        society_type: '',
        entity_type: '',
        id_type: '',
        id_number: '',
        first_name: '',
        second_name: '',
        surname: '',
        second_surname: '',
        email: '',
        location: '',
        cellphone_number: '',
        phone_number: '',
        gender: '',
        dependency: '',
        subdependency: '',
        ...user
    };

    const schema = Yup.object().shape({
        society_type: Yup.string().required('Campo obligatorio'),
        entity_type: Yup.string().required('Campo obligatorio'),
        id_type: Yup.string().required('Campo obligatorio'),
        id_number: Yup.number().required('Campo obligatorio'),
        first_name: Yup.string().required('Campo obligatorio'),
        surname: Yup.string().required('Campo obligatorio'),
        email: Yup.string().required('Campo obligatorio'),
        cellphone_number: Yup.number().required('Campo obligatorio'),
        phone_number: Yup.number().required('Campo obligatorio'),
        gender: Yup.string().required('Campo obligatorio'),

    });

    const submit = (values, actions) => {
        console.log(values);
        // onSubmit(values, actions).then(() => {
        //     actions.setSubmitting(false);
        // });

        //type === 'create' && history.push(`/users/permits/${initial_values.id}/`);

    };
    const hanleOnclick = () => {
    };

    const format_list = (list) => { //cpopiar
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
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initial_values} validationSchema={schema}>
            {({ values, isValid, isSubmitting, setFieldValue }) => {
                return (
                    <Form>
                        <div className="row">
                            <div className={`col-${values.entity_type === "Publica" ? 3 : 6}`}>
                                <label htmlFor="id" className="form-label">
                                    Tipo de Sociedad
                                </label>
                                <Field
                                    as="select"
                                    className="form-select"
                                    id="society_type"
                                    name="society_type"
                                    autoComplete="off"
                                    disabled={disabled}
                                >
                                    <option value="" hidden>
                                        --Tipo de Sociedad--
                                    </option>
                                    <option value="Persona Natural">Persona Natural</option>
                                    <option value="Persona Juridica">Persona Juridica</option>
                                </Field>
                                <ErrorMessage name="society_type" />
                            </div>
                            <div className={`col-${values.entity_type === "Publica" ? 3 : 6}`}>
                                <label htmlFor="id" className="form-label">
                                    Tipo Entidad
                                </label>
                                <Field
                                    as="select"
                                    className="form-select"
                                    id="entity_type"
                                    name="entity_type"
                                    autoComplete="off"
                                    disabled={disabled}
                                >
                                    <option value="" hidden>
                                        --Tipo de Entidad--
                                    </option>
                                    <option value="sin Animo de lucro">Organizacion sin Animo de lucro</option>
                                    <option value="Otro">Otro</option>
                                    <option value="Privada">Privada</option>
                                    <option value="Publica">Publica</option>
                                </Field>
                                <ErrorMessage name="entity_type" />
                            </div>
                            {values.entity_type === "Publica" &&
                                <>
                                    <div className="col-3">
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
                                                    setFieldValue('subdependency', dependency.name);
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
                                    <div className="col-3">
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
                                </>
                            }
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="first_name_id" className="form-label">
                                    Primer Nombre
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="first_name_id"
                                    name="first_name"
                                    placeholder="Primer nombre"
                                    autoComplete="off"
                                    disabled={disabled}
                                    maxLength={201}
                                />
                                <ErrorMessage name="first_name" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="second_name_id" className="form-label">
                                    Segundo Nombre
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="second_name_id"
                                    name="second_name"
                                    placeholder="Segundo nombre"
                                    autoComplete="off"
                                    disabled={disabled}
                                    maxLength={201}
                                />
                                <ErrorMessage name="second_name" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="surname_id" className="form-label">
                                    Primer apellido
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="surname_id"
                                    name="surname"
                                    placeholder="Primer pellido"
                                    autoComplete="off"
                                    disabled={disabled}
                                    maxLength={201}
                                />
                                <ErrorMessage name="surname" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="second_surname_id" className="form-label">
                                    Segundo apellido
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="second_surname_id"
                                    name="second_surname"
                                    placeholder="Segundo apellido"
                                    autoComplete="off"
                                    disabled={disabled}
                                    maxLength={201}
                                />
                                <ErrorMessage name="second_surname" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="id" className="form-label">
                                    Tipo de Documento
                                </label>
                                <Field
                                    as="select"
                                    className="form-select"
                                    id="id_type"
                                    name="id_type"
                                    autoComplete="off"
                                    disabled={disabled}
                                >
                                    <option value="" hidden>
                                        --Tipo de Documento--
                                    </option>
                                    <option value="2">Cedula de Ciudadania</option>
                                    <option value="3">Tarjeta de identidad</option>
                                    <option value="2">Cedula de Extranjeria</option>
                                    <option value="3">NIT</option>
                                </Field>
                                <ErrorMessage name="id_type" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="username" className="form-label">
                                    Numero de documento
                                </label>
                                <Field
                                    type="number"
                                    className="form-control"
                                    id="id_number"
                                    placeholder="Número de documento"
                                    name="id_number"
                                    autoComplete="off"
                                    disabled={disabled}
                                />
                                <ErrorMessage name="id_number" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="username" className="form-label">
                                    Correo Electronico
                                </label>
                                <Field
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Correo"
                                    name="email"
                                    autoComplete="off"
                                    disabled={disabled}
                                    maxLength={201}
                                />
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="username" className="form-label">
                                    Celular
                                </label>
                                <Field
                                    type="number"
                                    className="form-control"
                                    id="cellphone_number"
                                    name="cellphone_number"
                                    placeholder="celular"
                                    autoComplete="off"
                                    disabled={disabled}
                                    maxLength={201}
                                />
                                <ErrorMessage name="cellphone_number" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="username" className="form-label">
                                    Telefono
                                </label>
                                <Field
                                    type="number"
                                    className="form-control"
                                    id="phone_number"
                                    name="phone_number"
                                    placeholder="Telefono"
                                    autoComplete="off"
                                    disabled={disabled}
                                    maxLength={201}
                                />
                                <ErrorMessage name="phone_number" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="username" className="form-label">
                                    Genero
                                </label>
                                <Field
                                    as="select"
                                    className="form-select"
                                    id="gender"
                                    name="gender"
                                    autoComplete="off"
                                    disabled={disabled}
                                >
                                    <option value="" hidden>
                                        --Selecciona Genero--
                                    </option>
                                    <option value="f">Femenino</option>
                                    <option value="m">Masculino</option>
                                    <option value="o">Otro</option>
                                </Field>
                                <ErrorMessage name="gender" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="location" className="form-label">
                                    Dirección
                                </label>
                                <div className="input-group">
                                    <input
                                        name="location"
                                        id="location"
                                        type="text"
                                        className="form-control"
                                        disabled
                                    />
                                    <div className="input-group-prepend">
                                        <LocationModal
                                            view="user"
                                            disabled={disabled}
                                            onSave={(values) => {
                                                return values;
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {type === 'view' && (
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="id_rol" className="form-label">
                                        Rol
                                    </label>
                                    <Field
                                        as="select"
                                        className="form-select"
                                        id="id_rol"
                                        name="id_rol"
                                        autoComplete="off"
                                        disabled={disabled}
                                    >
                                        <option value="" hidden>
                                            Selecciona un rol
                                        </option>
                                        <option value="2">Supervisor</option>
                                        <option value="3">Adquisiciones</option>
                                        <option value="4">UABI</option>
                                        <option value="5">Asegurabilidad</option>
                                        <option value="6">Inspección</option>
                                        <option value="7">Disposición</option>
                                        <option value="8">Supervición</option>
                                        <option value="9">Mantenimiento</option>
                                        <option value="10">Facturación</option>
                                    </Field>
                                    <ErrorMessage name="id_rol" />

                                </div>
                            </div>
                        )}
                        <div className="row justify-content-end">
                            <div className="col text-end">
                                {type !== 'view' && (
                                    <button
                                        className="btn btn-primary my-3"
                                        disabled={isSubmitting || disabled}
                                        onClick={hanleOnclick}
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

export default GeneralForm;
