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
                <div className="col-6">
                    <label htmlFor="leader" className="form-label">
                        Información Lider<span className="text-danger">*</span>
                    </label>
                    <Field
                        component={Index}
                        name="leader"
                    />
                    <ErrorMessage name="leader" />
                </div>
                <div className="form-group col-6">
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
                    <label htmlFor="dependence_id" className="form-label">
                        dependencia
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="dependence_id"
                        name="dependence"
                        placeholder=""
                        autoComplete="off"
                        maxLength={201}
                        disabled
                    />
                    <ErrorMessage name="dependence" />
                </div>
                <div className="col-6">
                    <label htmlFor="secretary_id" className="form-label">
                        Secretaria
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="secretary_id"
                        name="secretary"
                        placeholder=""
                        autoComplete="off"
                        maxLength={201}
                        disabled
                    />
                    <ErrorMessage name="secretary" />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-3">
                    <label htmlFor="elaborated" className="form-label">
                        Elaboró<span className="text-danger">*</span>
                    </label>
                    <Field
                        component={Index}
                        name="elaborated"
                    />
                    <ErrorMessage name="elaborated" />
                </div>
                <div className="col-3">
                    <label htmlFor="revised" className="form-label">
                        Revisó<span className="text-danger">*</span>
                    </label>
                    <Field
                        component={Index}
                        name="revised"
                    />
                    <ErrorMessage name="revised" />
                </div>
                <div className="col-6">
                    <label htmlFor="approved" className="form-label">
                        Aprobó<span className="text-danger">*</span>
                    </label>
                    <Field
                        component={Index}
                        name="approved"
                    />
                    <ErrorMessage name="approved" />
                </div>
            </div>
        </>
    );
};

export default FormLider;
