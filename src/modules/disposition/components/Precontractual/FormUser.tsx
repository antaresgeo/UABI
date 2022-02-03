import { Field } from 'formik';
import ErrorMessage from '../../../../utils/ui/error_messge';
import { FC } from 'react';
import LocationModal from '../../../../utils/components/Location/LocationModal';
import Index from '../../../../utils/ui/PersonaM';

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
                    <label htmlFor="applicant_person_type" className="form-label">
                        Tipo de persona<span className="text-danger">*</span>
                    </label>
                    <Field
                        as="select"
                        className="form-select"
                        id="applicant.person_type"
                        name="applicant.person_type"
                        autoComplete="off"
                        disabled={comodato}
                    >
                        <option value="applicant.person_type" hidden>
                            --Tipo de Sociedad--
                        </option>
                        <option value="Persona Natural">Persona Natural</option>
                        <option value="Persona Juridica">Persona Juridica</option>
                    </Field>
                    <ErrorMessage name="applicant.person_type" />
                </div>
                {(formik.values.applicant.person_type === "Persona Juridica") ?
                    <>

                        <div className="col-6">
                            <div className="row">
                                <label htmlFor="applicant.document_type" className="form-label">
                                    Tipo de Documento<span className="text-danger">*</span>
                                </label>
                                <div className="col-5">
                                    <Field
                                        as="select"
                                        className="form-select"
                                        id="applicant.document_type"
                                        name="applicant.document_type"
                                        autoComplete="off"
                                        disabled
                                        value={4}

                                    >
                                        <option value="applicant.document_type" hidden>
                                            -
                                        </option>
                                        <option key="NIT" value={4}>NIT</option>
                                    </Field>
                                    <ErrorMessage name="applicant.document_type" />
                                </div>
                                <div className="col-7">
                                    <Field
                                        type="number"
                                        className="form-control"
                                        id="applicant.document_number"
                                        placeholder="No."
                                        name="applicant.document_number"
                                        autoComplete="off"
                                    />
                                    <ErrorMessage name="applicant.document_number" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <label htmlFor="applicant.company_name" className="form-label">
                                Nombre de la empresa<span className="text-danger">*</span>
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="applicant.company_name"
                                name="applicant.company_name"
                                placeholder="Razón social"
                                autoComplete="off"
                                maxLength={20}
                            />
                            <ErrorMessage name="applicant.company_name" />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="location_applicant_id" className="form-label">
                                Dirección<span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                                <input
                                    name="location_applicant.address"
                                    id="location_applicant_id"
                                    type="text"
                                    className="form-control"
                                    disabled
                                    value={formik.values.location_applicant?.address}
                                />
                                <div className="input-group-prepend">
                                    <LocationModal
                                        view="user"
                                        onSave={(values) => {
                                            formik.setFieldValue('location_applicant.address', `${values.address}`, false);
                                            formik.setFieldValue('location_applicant.id', `${values.id}`, false);
                                            return Promise.resolve();
                                        }}
                                    />
                                </div>
                            </div>
                            <ErrorMessage name="location_applicant.address" />
                        </div>
                        <div className="row">

                            <div className="col-6">
                                <label htmlFor="applicant.company_phone_number" className="form-label">
                                    Teléfono<span className="text-danger">*</span>
                                </label>
                                <Field
                                    type="number"
                                    className="form-control"
                                    id="applicant.company_phone_number"
                                    name="applicant.company_phone_number"
                                    placeholder="Teléfono"
                                    autoComplete="off"
                                    maxLength={20}
                                />
                                <ErrorMessage name="applicant.company_phone_number" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="applicant.company_email" className="form-label">
                                    Correo Electronico<span className="text-danger">*</span>
                                </label>
                                <Field
                                    type="email"
                                    className="form-control"
                                    id="applicant.company_email"
                                    name="applicant.company_email"
                                    placeholder="Correo"
                                    autoComplete="off"
                                    maxLength={20}
                                />
                                <ErrorMessage name="applicant.company_email" />
                            </div>
                        </div>
                        <>
                            <div className="div" style={{ fontWeight: 'bold', fontSize: '14px' }}>Informacion del Representante Legal</div>
                            <hr />
                            <div className="col-6">
                                <label htmlFor="applicant.legal_representative_person_type" className="form-label">
                                    Tipo de persona
                                </label>
                                <Field
                                    as="select"
                                    className="form-select"
                                    id="applicant.legal_representative_person_type"
                                    name="applicant.legal_representative_person_type"
                                    autoComplete="off"
                                    disabled

                                >
                                    <option value="" hidden>
                                        --Tipo de Sociedad--
                                    </option>
                                    <option value="Persona Natural">Persona Natural</option>
                                    <option value="Persona Juridica">Persona Juridica</option>
                                </Field>
                                <ErrorMessage name="applicant.legal_representative_person_type" />
                            </div>
                            <div className="col-6">
                            <label htmlFor="detailsRepresentative" className="form-label">
                                Información Representante<span className="text-danger">*</span>
                            </label>
                            <Field
                                component={Index}
                                name="detailsRepresentative"
                            />
                            <ErrorMessage name="detailsRepresentative" />
                        </div>
                        </>
                    </>
                    :
                    <>
                        <div className="col-3">
                            <label htmlFor="detailsApplicant" className="form-label">
                                Información Solicitante<span className="text-danger">*</span>
                            </label>
                            <Field
                                component={Index}
                                name="detailsApplicant"
                            />
                            <ErrorMessage name="detailsApplicant" />
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="location_applicant_id" className="form-label">
                                Dirección<span className="text-danger">*</span>
                            </label>

                            <div className="input-group">
                                <Field
                                    name="location_applicant.address"
                                    id="location_applicant_id"
                                    type="text"
                                    className="form-control"
                                    disabled
                                    value={formik.values.location_applicant.address}
                                />
                                <div className="input-group-prepend">
                                    <LocationModal
                                        view="user"
                                        onSave={(values) => {
                                            formik.setFieldValue('location_applicant.address', `${values.address}`, false);
                                            formik.setFieldValue('location_applicant.id', `${values.id}`, false);
                                            return Promise.resolve();
                                        }}
                                    />
                                </div>
                            </div>
                            <ErrorMessage name="location_applicant.address" />
                        </div>
                    </>
                }
            </div>
        </>
    );
};
