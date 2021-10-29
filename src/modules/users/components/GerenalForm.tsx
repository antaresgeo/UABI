
import { FC } from 'react';
import { Card } from '../../../utils/ui';
import { IUserAttributes } from '../../../utils/interfaces/users';
import LocationModal from '../../../utils/components/LocationModal';
import { Formik, Form, Field } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import ProjectModal from './../../acquisitions/components/ProjectModal';

interface IUserFormPros {
    user?: IUserAttributes;
    disabled?: boolean;
    type?: 'view' | 'create' | 'edit';
    onSubmit: (values, actions?) => Promise<any>;
}



const GeneralForm: FC<IUserFormPros> = ({ type, disabled, onSubmit }) => {
    const history = useHistory();
    const initial_values: IUserAttributes = {
        id: 0,
        society_type: '',
        entity_type: '',
        id_type: '',
        id_number: '',
        names: '',
        surnames: '',
        email: '',
        location: '',
        cellphone_number: '',
        phone_number: '',
        gender: '',
    }


    const submit = (values, actions) => {
        onSubmit(values, actions).then(() => {
            actions.setSubmitting(false);
        });
    }
    const hanleOnclick = () => {
        history.push(`/users/edit/${initial_values.id}`)
    }
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initial_values} >
            {({ values, isValid, isSubmitting }) => {
                return (
                    <Form>
                        <div className="row">
                            <div className="col-3">
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
                            </div>
                            <div className="col-3">
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
                            </div>
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
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="username" className="form-label">
                                    Nombres
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="names"
                                    placeholder="Nombre de Usuario"
                                    name="names"
                                    autoComplete="off"
                                    disabled={disabled}
                                    maxLength={201}
                                />
                            </div>
                            <div className="col-6">
                                <label htmlFor="username" className="form-label">
                                    Apellidos
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="surnames"
                                    name="surnames"
                                    placeholder="Apellidos de Usuario"
                                    autoComplete="off"
                                    disabled={disabled}
                                    maxLength={201}
                                />
                            </div>
                        </div>
                        <div className="row">
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
                            </div>

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
                            </div>
                        </div>
                        <div className="row">
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
                                            view='user'
                                            disabled={disabled}
                                            onSave={(values) => {
                                                return values;
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            {type === 'view' && (
                                <div className="col-2">
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

                                </div>
                            )}
                        </div>

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

    )
}

export default GeneralForm
