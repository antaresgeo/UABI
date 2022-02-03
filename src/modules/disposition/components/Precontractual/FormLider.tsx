import { Field } from 'formik';
import { FC } from 'react';
import ErrorMessage from '../../../../utils/ui/error_messge'
import LocationModal from '../../../../utils/components/Location/LocationModal';
import Index from '../../../../utils/ui/PersonaM';

interface FormProps {
    lease?: boolean;
    formik?: any;
}

const FormLider: FC<FormProps> = ({ lease, formik }) => {
    return (
        <>
            <div className="div" style={{ fontWeight: 'bold', fontSize: '15px' }}>
                Lider encargado
            </div>
            <hr />
            <div className="row">
                <div className="col-3">
                    <label htmlFor="leader.person_type" className="form-label">
                        Tipo de persona
                    </label>
                    <Field
                        as="select"
                        className="form-select"
                        id="leader.person_type"
                        name="leader.person_type"
                        autoComplete="off"
                        disabled

                    >
                        <option value="type_society_Leader" hidden>
                            --Tipo de Sociedad--
                        </option>
                        <option value="Persona Natural">Persona Natural</option>
                        <option value="Persona Juridica">Persona Juridica</option>
                    </Field>
                    <ErrorMessage name="leader.person_type" />
                </div>
                <div className="col-3">
                    <label htmlFor="leader.post" className="form-label">
                        cargo<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="leader.post"
                        name="leader.post"
                        placeholder=""
                        autoComplete="off"
                        maxLength={20}
                        disabled={lease}
                    />
                    <ErrorMessage name="leader.post" />
                </div>
                <div className="col-3">
                    <label htmlFor="detailsLeader" className="form-label">
                        Información Lider<span className="text-danger">*</span>
                    </label>
                    <Field
                        component={Index}
                        name="detailsLeader"
                    />
                    <ErrorMessage name="detailsLeader" />
                </div>
                <div className="form-group col-3">
                    <label htmlFor="location_leader" className="form-label">
                        Dirección<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                        <Field
                            name="location_leader.address"
                            id="location_leader"
                            type="text"
                            className="form-control"
                            disabled
                            value={formik?.values?.location_leader?.address}
                        />
                        <div className="input-group-prepend">
                            <LocationModal
                                view="user"
                                onSave={async (values) => {
                                    formik.setFieldValue('location_leader.address', values.address);
                                    formik.setFieldValue('location_leader.id', `${values.id}`);
                                }}
                            />
                        </div>
                    </div>
                    <ErrorMessage name="location_leader.address" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="leader.dependence" className="form-label">
                        dependencia
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="leader.dependence"
                        name="leader.dependence"
                        placeholder=""
                        autoComplete="off"
                        maxLength={201}
                        disabled
                    />
                    <ErrorMessage name="leader.dependence" />
                </div>
                <div className="col-6">
                    <label htmlFor="leader.secretary" className="form-label">
                        Secretaria
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="leader.secretary"
                        name="leader.secretary"
                        placeholder=""
                        autoComplete="off"
                        maxLength={201}
                        disabled
                    />
                    <ErrorMessage name="leader.secretary" />
                </div>
            </div>
            <div className="div" style={{ fontWeight: 'bold', fontSize: '15px' }}>
                Elaboró
            </div>
            <hr />
            <div className="row">
                <div className="col-3">
                    <label htmlFor="elaborated.first_name" className="form-label">
                        primer Nombre<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="elaborated.first_name"
                        name="elaborated.first_name"
                        placeholder="Nombre del que lo elaboró"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="elaborated.first_name" />
                </div>
                <div className="col-3">
                    <label htmlFor="elaborated.last_name" className="form-label">
                        Segundo Nombre<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="elaborated.last_name"
                        name="elaborated.last_name"
                        placeholder="Nombre del que lo elaboró"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="elaborated.last_name" />
                </div>
                <div className="col-3">
                    <label htmlFor="elaborated.first_surname" className="form-label">
                        Primer Apellido<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="elaborated.first_surname"
                        name="elaborated.first_surname"
                        placeholder="Nombre del que lo elaboró"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="elaborated.first_surname" />
                </div>
                <div className="col-3">
                    <label htmlFor="elaborated.last_surname" className="form-label">
                        Segundo Apellido<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="elaborated.last_surname"
                        name="elaborated.last_surname"
                        placeholder="Nombre del que lo elaboró"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="elaborated.last_surname" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="elaborated.post" className="form-label">
                        Cargo<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="elaborated.post"
                        name="elaborated.post"
                        placeholder="Cargo del que lo elaboró"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="elaborated.post" />
                </div>
                <div className="col-6">
                    <label htmlFor="elaborated.email" className="form-label">
                        Correo<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="elaborated.email"
                        name="elaborated.email"
                        placeholder="Correo del que lo elaboró"
                        autoComplete="off"
                    />
                    <ErrorMessage name="elaborated.email" />
                </div>
            </div>
            <div className="div" style={{ fontWeight: 'bold', fontSize: '15px' }}>
                Revisó
            </div>
            <hr />
            <div className="row">
                <div className="col-3">
                    <label htmlFor="revised.first_name" className="form-label">
                        Primer Nombre<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="revised.first_name"
                        name="revised.first_name"
                        placeholder="Nombre del que lo revisó"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="revised.first_name" />
                </div>
                <div className="col-3">
                    <label htmlFor="revised.last_name" className="form-label">
                        Segundo Nombre<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="revised.last_name"
                        name="revised.last_name"
                        placeholder="Nombre del que lo revisó"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="revised.last_name" />
                </div>
                <div className="col-3">
                    <label htmlFor="revised.first_surname" className="form-label">
                        Primer Apellido<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="revised.first_surname"
                        name="revised.first_surname"
                        placeholder="Nombre del que lo revisó"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="revised.first_surname" />
                </div>
                <div className="col-3">
                    <label htmlFor="revised.last_surname" className="form-label">
                        Segundo Apellido<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="revised.last_surname"
                        name="revised.last_surname"
                        placeholder="Nombre del que lo revisó"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="revised.last_surname" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="revised.post" className="form-label">
                        Cargo<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="revised.post"
                        name="revised.post"
                        placeholder="Cargo del que lo revisó"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="revised.post" />
                </div>
                <div className="col-6">
                    <label htmlFor="revised.email" className="form-label">
                        Correo<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="revised.email"
                        name="revised.email"
                        placeholder="Correo del que lo revisó"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="revised.email" />
                </div>
            </div>
            <div className="div" style={{ fontWeight: 'bold', fontSize: '15px' }}>
                Aprobó
            </div>
            <hr />
            <div className="row">
                <div className="col-3">
                    <label htmlFor="approved.first_name" className="form-label">
                        Primer Nombre<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="approved.first_name"
                        name="approved.first_name"
                        placeholder="Nombre del que lo aprobó"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="approved.first_name" />
                </div>
                <div className="col-3">
                    <label htmlFor="approved.last_name" className="form-label">
                        Segundo Nombre<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="approved.last_name"
                        name="approved.last_name"
                        placeholder="Nombre del que lo aprobó"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="approved.last_name" />
                </div>
                <div className="col-3">
                    <label htmlFor="approved.first_surname" className="form-label">
                        Primer Apellido<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="approved.first_surname"
                        name="approved.first_surname"
                        placeholder="Nombre del que lo aprobó"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="approved.first_surname" />
                </div>
                <div className="col-3">
                    <label htmlFor="approved.last_surname" className="form-label">
                        Segundo Apellido<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="approved.last_surname"
                        name="approved.last_surname"
                        placeholder="Nombre del que lo aprobó"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="approved.last_surname" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="approved.post" className="form-label">
                        Cargo<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="approved.post"
                        name="approved.post"
                        placeholder="Cargo del que lo aprobó"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="approved.post" />
                </div>
                <div className="col-6">
                    <label htmlFor="approved.email" className="form-label">
                        Correo<span className="text-danger">*</span>
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="approved.email"
                        name="approved.email"
                        placeholder="Correo del que lo aprobó"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="approved.email" />
                </div>
            </div>
        </>
    );
};

export default FormLider;
