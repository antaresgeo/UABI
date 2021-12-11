import { Field } from 'formik';
import ErrorMessage from '../../../../utils/ui/error_messge'
import { FC } from 'react';
import LocationModal from '../../../../utils/components/Location/LocationModal';

interface FormProps {
    formik: any;
    comodato?: boolean;
    lease?: boolean;

}
export const FormUser: FC<FormProps> = ({ formik, comodato, lease }) => {

    return (
        <>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="type_society_applicant_id" className="form-label">
                        Tipo de persona
                    </label>
                    <Field
                        as="select"
                        className="form-select"
                        id="type_society_applicant_id"
                        name="type_society_applicant"
                        autoComplete="off"
                        disabled={comodato}

                    >
                        <option value="type_society_applicant" hidden>
                            --Tipo de Sociedad--
                        </option>
                        <option value="Persona Natural">Persona Natural</option>
                        <option value="Persona Juridica">Persona Juridica</option>
                    </Field>
                    <ErrorMessage name="type_society_applicant" />
                </div>
                {(formik.values.type_society_applicant === "Persona Juridica") ?
                    <>

                        <div className="col-6">
                            <div className="row">
                                <label htmlFor="type_document_applicant_id" className="form-label">
                                    Tipo de Documento
                                </label>
                                <div className="col-5">
                                    <Field
                                        as="select"
                                        className="form-select"
                                        id="type_document_applicant_id"
                                        name="type_document_applicant"
                                        autoComplete="off"
                                        disabled
                                        value="NIT"

                                    >
                                        <option value="type_document_applicant" hidden>
                                            -
                                        </option>
                                        <option key="NIT" value="NIT">NIT</option>
                                    </Field>
                                    <ErrorMessage name="type_document_applicant" />
                                </div>
                                <div className="col-7">
                                    <Field
                                        type="number"
                                        className="form-control"
                                        id="number_doc_applicant_id"
                                        placeholder="No."
                                        name="number_doc_applicant"
                                        autoComplete="off"
                                    />
                                    <ErrorMessage name="number_doc_applicant" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <label htmlFor="companyname_applicant_id" className="form-label">
                                Nombre de la empresa
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="companyname_applicant_id"
                                name="companyname_applicant"
                                placeholder="Razón social"
                                autoComplete="off"
                                maxLength={201}
                            />
                            <ErrorMessage name="companyname_applicant" />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="location_applicant_id" className="form-label">
                                Dirección
                            </label>
                            <div className="input-group">
                                <input
                                    name="location_applicant"
                                    id="location_applicant_id"
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
                        <div className="row">

                            <div className="col-6">
                                <label htmlFor="telephone_applicant_id" className="form-label">
                                    Teléfono
                                </label>
                                <Field
                                    type="number"
                                    className="form-control"
                                    id="telephone_applicant_id"
                                    name="telephone_applicant"
                                    placeholder="Teléfono"
                                    autoComplete="off"
                                    maxLength={201}
                                />
                                <ErrorMessage name="telephone_applicant" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="email_applicant_id" className="form-label">
                                    Correo Electronico
                                </label>
                                <Field
                                    type="email"
                                    className="form-control"
                                    id="email_applicant_id"
                                    name="email_applicant"
                                    placeholder="Correo"
                                    autoComplete="off"
                                    maxLength={201}
                                />
                                <ErrorMessage name="email_applicant" />
                            </div>
                        </div>
                        {lease === true &&
                            <>
                                <div className="div" style={{ fontWeight: 'bold', fontSize: '14px' }}>Informacion del Representante Legal</div>
                                <hr />
                                <div className="col-6">
                                    <label htmlFor="type_society_representative_id" className="form-label">
                                        Tipo de persona
                                    </label>
                                    <Field
                                        as="select"
                                        className="form-select"
                                        id="type_society_representative_id"
                                        name="type_society_representative"
                                        autoComplete="off"
                                        disabled
                                        value="Persona Natural"

                                    >
                                        <option value="type_society_representative" hidden>
                                            --Tipo de Sociedad--
                                        </option>
                                        <option value="Persona Natural">Persona Natural</option>
                                        <option value="Persona Juridica">Persona Juridica</option>
                                    </Field>
                                    <ErrorMessage name="type_society_applicant" />
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <label htmlFor="type_document_representative_id" className="form-label">
                                            Tipo de Documento
                                        </label>
                                        <div className="col-5">
                                            <Field
                                                as="select"
                                                className="form-select"
                                                id="id_type_document_representative_id"
                                                name="type_document_representative"
                                                autoComplete="off"

                                            >
                                                <option value="id_type_document" hidden>
                                                    -
                                                </option>
                                                <option key="CedulaC" value="Cedula de Ciudadania">C.C</option>
                                                <option key="TarjetaI" value="Tarjeta de identidad">T.I</option>
                                                <option key="CedulaE" value="Cedula de Extranjeria">C.E</option>
                                            </Field>
                                            <ErrorMessage name="type_document_representative" />
                                        </div>
                                        <div className="col-7">
                                            <Field
                                                type="number"
                                                className="form-control"
                                                id="number_doc_representative_id"
                                                placeholder="No."
                                                name="number_doc_representative"
                                                autoComplete="off"
                                            />
                                            <ErrorMessage name="number_doc_representative" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="firstname_representative_id" className="form-label">
                                        Primer Nombre
                                    </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="firstname_representative_id"
                                        name="firstname_representative"
                                        placeholder=""
                                        autoComplete="off"
                                        maxLength={201}
                                    />
                                    <ErrorMessage name="firstname_representative" />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="secondname_representative_id" className="form-label">
                                        Segundo Nombre
                                    </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="secondname_representative_id"
                                        name="secondname_representative"
                                        placeholder=""
                                        autoComplete="off"
                                        maxLength={201}
                                    />
                                    <ErrorMessage name="secondname_representative" />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="surname_representative_id" className="form-label">
                                        Primer Apellido
                                    </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="surname_representative_id"
                                        name="surname_representative"
                                        placeholder=""
                                        autoComplete="off"
                                        maxLength={201}
                                    />
                                    <ErrorMessage name="surname_representative" />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="secondsurname_representative_id" className="form-label">
                                        segundo Apellido
                                    </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="secondsurname_representative_id"
                                        name="secondsurname_representative"
                                        placeholder=""
                                        autoComplete="off"
                                        maxLength={201}
                                    />
                                    <ErrorMessage name="secondsurname_representative" />
                                </div>
                            </>
                        }

                    </>
                    :
                    <>
                        <div className="col-6">
                            <div className="row">
                                <label htmlFor="type_document_applicant_id" className="form-label">
                                    Tipo de Documento
                                </label>
                                <div className="col-5">
                                    <Field
                                        as="select"
                                        className="form-select"
                                        id="type_document_applicant_id"
                                        name="type_document_applicant"
                                        autoComplete="off"

                                    >
                                        <option value="type_document_applicant" hidden>
                                            -
                                        </option>
                                        <option key="CedulaC" value="Cedula de Ciudadania">C.C</option>
                                        <option key="TarjetaI" value="Tarjeta de identidad">T.I</option>
                                        <option key="CedulaE" value="Cedula de Extranjeria">C.E</option>
                                    </Field>
                                    <ErrorMessage name="type_document_applicant" />
                                </div>
                                <div className="col-7">
                                    <Field
                                        type="number"
                                        className="form-control"
                                        id="number_doc_applicant_id"
                                        placeholder="No."
                                        name="number_doc_applicant"
                                        autoComplete="off"
                                    />
                                    <ErrorMessage name="number_doc_applicant" />
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <label htmlFor="firstname_applicant_id" className="form-label">
                                Primer Nombre
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="firstname_applicant_id"
                                name="firstname_applicant"
                                placeholder="Nombres"
                                autoComplete="off"
                                maxLength={201}
                            />
                            <ErrorMessage name="firstname_applicant" />
                        </div>
                        <div className="col-3">
                            <label htmlFor="secondname_applicant_id" className="form-label">
                                Segundo Nombre
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="secondname_applicant_id"
                                name="secondname_applicant"
                                placeholder="Nombres"
                                autoComplete="off"
                                maxLength={201}
                            />
                            <ErrorMessage name="secondname_applicant" />
                        </div>
                        <div className="col-3">
                            <label htmlFor="surname_applicant_id" className="form-label">
                                Primer Apellido
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="surname_applicant_id"
                                name="surname_applicant"
                                placeholder="Apellidos"
                                autoComplete="off"
                                maxLength={201}
                            />
                            <ErrorMessage name="surname_applicant" />
                        </div>
                        <div className="col-3">
                            <label htmlFor="secondsurname_applicant_id" className="form-label">
                                Segundo Apellido
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="secondsurname_applicant_id"
                                name="secondsurname_applicant"
                                placeholder="Apellidos"
                                autoComplete="off"
                                maxLength={201}
                            />
                            <ErrorMessage name="secondsurname_applicant" />
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="address" className="form-label">
                                Dirección
                            </label>
                            <div className="input-group">
                                <Field
                                    name="location_applicant.address"
                                    id="address"
                                    type="text"
                                    className="form-control"
                                    disabled
                                />
                                <div className="input-group-prepend">
                                    <LocationModal
                                        view="user"
                                        onSave={async (values) => {
                                            formik.setFieldValue('location_applicant.address', values.address);
                                            formik.setFieldValue('location_applicant.id', `${values.id}`);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <label htmlFor="telephone_applicant_id" className="form-label">
                                Teléfono
                            </label>
                            <Field
                                type="number"
                                className="form-control"
                                id="telephone_applicant_id"
                                name="telephone_applicant"
                                placeholder="Teléfono"
                                autoComplete="off"
                                maxLength={201}
                            />
                            <ErrorMessage name="telephone_applicant" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="email_applicant_id" className="form-label">
                                Correo Electronico
                            </label>
                            <Field
                                type="email"
                                className="form-control"
                                id="email_applicant_id"
                                name="email_applicant"
                                placeholder="Correo"
                                autoComplete="off"
                                maxLength={201}
                            />
                            <ErrorMessage name="email_applicant" />
                        </div>
                    </>
                }
            </div>
        </>
    )
}
