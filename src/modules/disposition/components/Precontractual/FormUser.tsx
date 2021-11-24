import { Field } from 'formik';
import ErrorMessage from '../../../../utils/ui/error_messge'
import { FC } from 'react';
import LocationModal from '../../../../utils/components/Location/LocationModal';

interface FormProps {
    formik: any;

}
export const FormUser: FC<FormProps> = ({ formik }) => {
    return (
        <>
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
                        maxLength={201}
                    />
                    <ErrorMessage name="names" />
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
                        maxLength={201}
                    />
                    <ErrorMessage name="surnames" />
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
                    />
                    <ErrorMessage name="id_number" />
                </div>
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
                    >
                        <option value="" hidden>
                            --Tipo de Sociedad--
                        </option>
                        <option value="Persona Natural">Persona Natural</option>
                        <option value="Persona Juridica">Persona Juridica</option>
                    </Field>
                    <ErrorMessage name="society_type" />
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
                                onSave={(values) => {
                                    return values;
                                }}
                            />
                        </div>
                    </div>
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
                        maxLength={201}
                    />
                    <ErrorMessage name="email" />
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
                        maxLength={201}
                    />
                    <ErrorMessage name="phone_number" />
                </div>
            </div>
        </>
    )
}
