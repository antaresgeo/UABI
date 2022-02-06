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
                    <label htmlFor="applicant" className="form-label">
                        Información Del Solicitante<span className="text-danger">*</span>
                    </label>
                    <Field
                        component={Index}
                        name="applicant"
                    />
                    <ErrorMessage name="applicant" />
                </div>
                <div className="col-6">
                    <label htmlFor="representative" className="form-label">
                        Información Representante<span className="text-danger">*</span>
                    </label>
                    <Field
                        component={Index}
                        name="representative"
                    />
                    <ErrorMessage name="representative" />
                </div>
            </div>
        </>
    );
};
