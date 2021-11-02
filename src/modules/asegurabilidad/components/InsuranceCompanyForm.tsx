import { FC } from 'react';
import { Formik, Form, Field } from 'formik';
// import { IInsuranceCompanyAttributes } from '../../../utils/interfaces/';
import ErrorMessage from '../../../utils/ui/error_messge';
import * as Yup from 'yup';

export interface IInsuranceCompanyAttributes {
    id?: number | string;
    name: string;
    nit: string;
    phone: string;
    audit_trail?: {
        created_by: string;
        created_on: string;
        updated_by?: any;
        updated_on?: any;
        updated_values?: any;
    };
}

interface InsuranceCompanyFormPros {
    insurance_company?: IInsuranceCompanyAttributes;
    onSubmit?: (values, form?) => Promise<any>;
    disabled?: boolean;
    type?: 'view' | 'create' | 'edit';
}

const InsuranceCompanyForm: FC<InsuranceCompanyFormPros> = ({ insurance_company, onSubmit, disabled, type }) => {
    const initial_values = {
        id: '',
        name: '',
        nit: '',
        phone: '',
        ...insurance_company,
    };

    const schema = Yup.object().shape({
        name: Yup.string().required('Campo obligatorio'),
        nit: Yup.string().required('Campo obligatorio'),
        phone: Yup.string().required('Campo obligatorio'),
    });

    const submit = (values, form) => {
        onSubmit(values, form).then(() => {
            form.setSubmitting(false);
        });
    };
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initial_values} validationSchema={schema}>
            {({ values, isValid, isSubmitting }) => {
                return (
                    <Form>
                        <div className="row">
                            {insurance_company && (
                                <div className="col-3">
                                    <label htmlFor="id_id" className="form-label">
                                        Código
                                    </label>
                                    <Field
                                        type="text"
                                        id="id_id"
                                        className="form-control"
                                        aria-describedby="codigo del projecto"
                                        disabled={true}
                                        name="id"
                                        autoComplete="off"
                                    />
                                    <ErrorMessage name="id" />
                                </div>
                            )}
                            <div className={`col-${insurance_company ? 9 : 12}`}>
                                <label htmlFor="name_id" className="form-label">
                                    Nombre de la empresa
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="name_id"

                                    name="name"
                                    autoComplete="off"
                                    disabled={disabled}
                                />
                                <ErrorMessage name="name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="nit_id" className="form-label">
                                    NIT
                                </label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="nit"
                                    id="nit_id"
                                    autoComplete="off"
                                    disabled={disabled}
                                    maxLength={20}
                                />
                                <ErrorMessage name="nit" withCount max={20}/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="description_id" className="form-label">
                                    Teléfono
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="description_id"
                                    name="phone"
                                    disabled={disabled}
                                    autoComplete="off"
                                    maxLength={20}
                                />
                                <ErrorMessage name="phone" withCount max={20}/>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col text-end">
                                {type !== 'view' && (
                                    <button className="btn btn-primary my-3" disabled={isSubmitting || disabled}>
                                        Guardar
                                    </button>
                                )}
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

InsuranceCompanyForm.defaultProps = {
    onSubmit: (v) => Promise.resolve(),
};
export default InsuranceCompanyForm;
