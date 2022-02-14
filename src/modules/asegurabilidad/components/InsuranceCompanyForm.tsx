import React, { FC, MutableRefObject } from 'react';
import { Formik, Form, Field } from 'formik';
import ErrorMessage from '../../../utils/ui/error_messge';
import * as Yup from 'yup';
import { Company } from '../redux/service';
import LocationModal from '../../../utils/components/Location/LocationModal';
import { FormikProps, FormikValues } from 'formik';

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
    insurance_company?: Company;
    onSubmit?: (values: Company, form?) => Promise<any>;
    disabled?: boolean;
    innerRef?: MutableRefObject<FormikProps<FormikValues>>;
    type?: 'view' | 'create' | 'edit';
    location?: any;
}

const InsuranceCompanyForm: FC<InsuranceCompanyFormPros> = ({ insurance_company, onSubmit, disabled, type, innerRef, location }) => {

    const initial_values = {
        id: '',
        name: '',
        nit: '',
        phone: '',
        location_id: '',
        state: location?.location?.state ?? '',
        city: location?.location?.city ?? '',
        address: location?.address ?? '',
        ...insurance_company,
    };

    const schema = Yup.object().shape({
        name: Yup.string().required('Campo obligatorio'),
        nit: Yup.string().required('Campo obligatorio'),
        phone: Yup.string().required('Campo obligatorio'),
    });

    const submit = (values, form) => {
        onSubmit(values, form)
            .then(() => {
                form.setSubmitting(false);
            })
            .catch(() => form.setSubmitting(false));
    };
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initial_values} validationSchema={schema} innerRef={innerRef}>
            {({ /*values, isValid,*/ isSubmitting, setFieldValue }) => {
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
                                    Nombre de la compañia
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
                                <ErrorMessage name="nit" withCount max={20} />
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-8">
                                        <label htmlFor="phone_number" className="form-label">
                                            Teléfono <span className="text-danger">*</span>
                                        </label>
                                        <Field
                                            type="number"
                                            className="form-control"
                                            id="phone_number"
                                            name="phone"
                                            placeholder="Teléfono"
                                            autoComplete="off"
                                            disabled={disabled}
                                            maxLength={20}
                                        />
                                        <ErrorMessage name="phone" />
                                    </div>
                                    <div className="col-4">
                                        <label htmlFor="phone_number_ext" className="form-label">
                                            Ext
                                        </label>
                                        <Field
                                            type="number"
                                            className="form-control"
                                            id="phone_number_ext"
                                            name="phone_ext"
                                            autoComplete="off"
                                            disabled={disabled}
                                            maxLength={20}
                                        />
                                        <ErrorMessage name="phone_ext" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="state_id" className="form-label">
                                    Departamento
                                </label>
                                <Field type="text" className="form-control" id="state_id" name="state" disabled />
                                <ErrorMessage name="state" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="city_id" className="form-label">
                                    Ciudad
                                </label>
                                <Field type="text" className="form-control" id="city_id" name="city" disabled />
                                <ErrorMessage name="city" />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="location" className="form-label">
                                    Dirección
                                </label>
                                <div className="input-group">
                                    <Field name="address" id="location" type="text" className="form-control" disabled />
                                    <div className="input-group-prepend">
                                        <LocationModal
                                            view="user"
                                            disabled={disabled}
                                            onSave={async (values) => {
                                                setFieldValue('state', values.location.state, false);
                                                setFieldValue('city', values.location.city, false);
                                                setFieldValue('address', values.address, false);
                                                setFieldValue('location_id', values.id + '', false);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row justify-content-end">
                            <div className="col text-end">
                                {type !== 'view' && (
                                    <button className="btn btn-primary my-3" disabled={isSubmitting || disabled}>
                                        Guardar{' '}
                                        {isSubmitting && (
                                            <i
                                                className="fa fa-spinner fa-spin"
                                                style={{ fontSize: 12, marginLeft: 4, color: '#fff' }}
                                            />
                                        )}
                                    </button>
                                )}
                            </div>
                        </div> */}
                    </Form>
                );
            }}
        </Formik>
    );
};

InsuranceCompanyForm.defaultProps = {
    onSubmit: (/*v*/) => Promise.resolve(),
};
export default InsuranceCompanyForm;
