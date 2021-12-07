import { Field } from 'formik';
import ErrorMessage from '../../../../utils/ui/error_messge'
import { FC } from 'react';
import LocationModal from '../../../../utils/components/Location/LocationModal';

interface FormProps {
    formik: any;
    comodato?: boolean;

}
export const FormUser: FC<FormProps> = ({ formik, comodato }) => {
    return (
        <>
            <div className="row">
                <div className="col-3">
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
                <div className="col-3">
                    <div className="row">
                        <label htmlFor="id_type_document_id" className="form-label">
                            Tipo de Documento
                        </label>
                        <div className="col-5">
                            <Field
                                as="select"
                                className="form-select"
                                id="id_type_document_id"
                                name="id_type_document"
                                autoComplete="off"
                                disabled={comodato}
                            >
                                <option value="id_type_document" hidden>
                                    -
                                </option>
                                <option key="CedulaC" value="Cedula de Ciudadania">C.C</option>
                                <option key="TarjetaI" value="Tarjeta de identidad">T.I</option>
                                <option key="CedulaE" value="Cedula de Extranjeria">C.E</option>
                                <option key="NIT" value="NIT">NIT</option>
                            </Field>
                            <ErrorMessage name="id_type_document" />
                        </div>
                        <div className="col-7">
                            <Field
                                type="number"
                                className="form-control"
                                id="number_doc_applicant_id"
                                placeholder="No."
                                name="number_doc_applicant_id"
                                autoComplete="off"
                            />
                            <ErrorMessage name="number_doc_applicant_id" />
                        </div>
                    </div>
                </div>
                {comodato === true
                    ?
                    <div className="col-6">
                        <label htmlFor="names_applicant_id" className="form-label">
                            Nombre Razón Social
                        </label>
                        <Field
                            type="text"
                            className="form-control"
                            id="names_applicant_id"
                            name="names_applicant"
                            placeholder="Razón social"
                            autoComplete="off"
                            maxLength={201}
                        />
                        <ErrorMessage name="names_applicant" />
                    </div>
                    :
                    <>
                        <div className="col-3">
                            <label htmlFor="names_applicant_id" className="form-label">
                                Nombres
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="names_applicant_id"
                                name="names_applicant"
                                placeholder="Nombre del Solicitante"
                                autoComplete="off"
                                maxLength={201}
                            />
                            <ErrorMessage name="names_applicant" />
                        </div>
                        <div className="col-3">
                            <label htmlFor="surnames_applicant_id" className="form-label">
                                Apellidos
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="surnames_applicant_id"
                                name="surnames_applicant"
                                placeholder="Apellidos del Solicitante"
                                autoComplete="off"
                                maxLength={201}
                            />
                            <ErrorMessage name="surnames_applicant" />
                        </div>
                    </>
                }

            </div>
            <div className="row">
                <div className="form-group col-3">
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
            </div>

            {/* <div className="row">
                <div className="col-3">
                    <label htmlFor="mobile_applicant_id" className="form-label">
                        Celular
                    </label>
                    <Field
                        type="number"
                        className="form-control"
                        id="mobile_applicant_id"
                        name="mobile_applicant"
                        placeholder="celular"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="mobile_applicant" />
                </div>
                <div className="col-3">
                    <label htmlFor="telephone_applicant_id" className="form-label">
                        Telefono
                    </label>
                    <Field
                        type="number"
                        className="form-control"
                        id="telephone_applicant_id"
                        name="telephone_applicant"
                        placeholder="Telefono"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="telephone_applicant" />
                </div>
            </div> */}
        </>
    )
}
