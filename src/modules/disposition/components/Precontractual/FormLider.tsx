import { Field } from 'formik';
import { FC } from 'react';
import ErrorMessage from '../../../../utils/ui/error_messge'
import LocationModal from '../../../../utils/components/Location/LocationModal';
import PersonaM from './../../../../utils/ui/PersonaM';

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
                    <label htmlFor="leader.type_society" className="form-label">
                        Tipo de persona
                    </label>
                    <Field
                        as="select"
                        className="form-select"
                        id="leader.type_society"
                        name="leader.type_society"
                        autoComplete="off"
                        disabled

                    >
                        <option value="type_society_Leader" hidden>
                            --Tipo de Sociedad--
                        </option>
                        <option value="Persona Natural">Persona Natural</option>
                        <option value="Persona Juridica">Persona Juridica</option>
                    </Field>
                    <ErrorMessage name="leader.type_society" />
                </div>
                <div className="col-3">
                    <label htmlFor="leader.post" className="form-label">
                        cargo
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
                        Información Lider
                    </label>
                    <Field
                        component={PersonaM}
                        name="detailsLeader"
                    />
                    <ErrorMessage name="detailsLeader" />
                </div>
                <div className="form-group col-3">
                    <label htmlFor="location_leader" className="form-label">
                        Dirección
                    </label>
                    <div className="input-group">
                        <Field
                            name="location_leader.address"
                            id="location_leader"
                            type="text"
                            className="form-control"
                            disabled
                            // value={formik?.values?.location_leader?.address}
                        />
                        <div className="input-group-prepend">
                            <LocationModal
                                view="user"
                                onSave={async (values) => {
                                    formik.setFieldValue('location_Leader.address', values.address);
                                    formik.setFieldValue('location_Leader.id', `${values.id}`);
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
                        maxLength={20}
                        disabled={lease}
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
                        maxLength={20}
                        disabled={lease}
                    />
                    <ErrorMessage name="leader.secretary" />
                </div>
            </div>
            <div className="div" style={{ fontWeight: 'bold', fontSize: '15px' }}>
                Elaboró
            </div>
            <hr />
            <div className="row">
                <div className="col-6">
                    <label htmlFor="elaborated.name" className="form-label">
                        Nombre
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="elaborated.name"
                        name="elaborated.name"
                        placeholder="Nombre del que lo elaboró"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="elaborated.name" />
                </div>
                <div className="col-6">
                    <label htmlFor="elaborated.post" className="form-label">
                        cargo
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
            </div>
            <div className="div" style={{ fontWeight: 'bold', fontSize: '15px' }}>
                Revisó
            </div>
            <hr />
            <div className="row">
                <div className="col-6">
                    <label htmlFor="revised.name" className="form-label">
                        Nombre
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="revised.name"
                        name="revised.name"
                        placeholder="Nombre del que lo revisó"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="revised.name" />
                </div>
                <div className="col-6">
                    <label htmlFor="revised.post" className="form-label">
                        cargo
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="revised.post"
                        name="revised.post"
                        placeholder="Cargo Nombre del que lo revisó"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="revised.post" />
                </div>
            </div>
            <div className="div" style={{ fontWeight: 'bold', fontSize: '15px' }}>
                Aprobó
            </div>
            <hr />
            <div className="row">
                <div className="col-6">
                    <label htmlFor="approved.name" className="form-label">
                        Nombre
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="approved.name"
                        name="approved.name"
                        placeholder="Nombre del que lo aprobó"
                        autoComplete="off"
                        maxLength={20}
                    />
                    <ErrorMessage name="approved.name" />
                </div>
                <div className="col-6">
                    <label htmlFor="approved.post" className="form-label">
                        cargo
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
            </div>
        </>
    );
};

export default FormLider;
