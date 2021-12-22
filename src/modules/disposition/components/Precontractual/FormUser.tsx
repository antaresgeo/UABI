import { Field } from 'formik';
import ErrorMessage from '../../../../utils/ui/error_messge';
import { FC } from 'react';
import LocationModal from '../../../../utils/components/Location/LocationModal';
import PersonaM from './../../../../utils/ui/PersonaM';

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
                    <label htmlFor="applicant_type_society" className="form-label">
                        Tipo de persona
                    </label>
                    <Field
                        as="select"
                        className="form-select"
                        id="applicant.type_society"
                        name="applicant.type_society"
                        autoComplete="off"
                        disabled={comodato}
                    >
                        <option value="applicant.type_society" hidden>
                            --Tipo de Sociedad--
                        </option>
                        <option value="Persona Natural">Persona Natural</option>
                        <option value="Persona Juridica">Persona Juridica</option>
                    </Field>
                    <ErrorMessage name="applicant.type_society" />
                </div>
                {(formik.values.applicant.type_society === "Persona Juridica") ?
                    <>

                        <div className="col-6">
                            <div className="row">
                                <label htmlFor="applicant.id_type" className="form-label">
                                    Tipo de Documento
                                </label>
                                <div className="col-5">
                                    <Field
                                        as="select"
                                        className="form-select"
                                        id="applicant.id_type"
                                        name="applicant.id_type"
                                        autoComplete="off"
                                        disabled
                                        value={4}

                                    >
                                        <option value="applicant.id_type" hidden>
                                            -
                                        </option>
                                        <option key="NIT" value={4}>NIT</option>
                                    </Field>
                                    <ErrorMessage name="applicant.id_type" />
                                </div>
                                <div className="col-7">
                                    <Field
                                        type="number"
                                        className="form-control"
                                        id="applicant.id_number"
                                        placeholder="No."
                                        name="applicant.id_number"
                                        autoComplete="off"
                                    />
                                    <ErrorMessage name="applicant.id_number" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <label htmlFor="applicant.company_name" className="form-label">
                                Nombre de la empresa
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="applicant.company_name"
                                name="applicant.company_name"
                                placeholder="Razón social"
                                autoComplete="off"
                                maxLength={201}
                            />
                            <ErrorMessage name="applicant.company_name" />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="location_applicant_id" className="form-label">
                                Dirección
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
                                <label htmlFor="applicant.phone_number" className="form-label">
                                    Teléfono
                                </label>
                                <Field
                                    type="number"
                                    className="form-control"
                                    id="applicant.phone_number"
                                    name="applicant.phone_number"
                                    placeholder="Teléfono"
                                    autoComplete="off"
                                    maxLength={201}
                                />
                                <ErrorMessage name="applicant.phone_number" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="applicant.email" className="form-label">
                                    Correo Electronico
                                </label>
                                <Field
                                    type="email"
                                    className="form-control"
                                    id="applicant.email"
                                    name="applicant.email"
                                    placeholder="Correo"
                                    autoComplete="off"
                                    maxLength={201}
                                />
                                <ErrorMessage name="applicant.email" />
                            </div>
                        </div>
                        <>
                            <div className="div" style={{ fontWeight: 'bold', fontSize: '14px' }}>Informacion del Representante Legal</div>
                            <hr />
                            <div className="col-6">
                                <label htmlFor="representative.type_society" className="form-label">
                                    Tipo de persona
                                </label>
                                <Field
                                    as="select"
                                    className="form-select"
                                    id="representative.type_society"
                                    name="representative.type_society"
                                    autoComplete="off"
                                    disabled

                                >
                                    <option value="" hidden>
                                        --Tipo de Sociedad--
                                    </option>
                                    <option value="Persona Natural">Persona Natural</option>
                                    <option value="Persona Juridica">Persona Juridica</option>
                                </Field>
                                <ErrorMessage name="representative.type_society" />
                            </div>
                            <div className="col-6">
                            <label htmlFor="detailsRepresentative" className="form-label">
                                Información Representante
                            </label>
                            <Field
                                component={PersonaM}
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
                                Información Solicitante
                            </label>
                            <Field
                                component={PersonaM}
                                name="detailsApplicant"
                            />
                            <ErrorMessage name="detailsApplicant" />
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="location_applicant_id" className="form-label">
                                Dirección
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
