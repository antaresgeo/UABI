import { FC } from 'react';
import { Formik, Form, Field } from 'formik';
// import { IInsuranceBrokerAttributes } from '../../../utils/interfaces/';
import ErrorMessage from '../../../utils/ui/error_messge';
import * as Yup from 'yup';
import LocationModal from '../../../utils/components/Location/LocationModal';

export interface IInsuranceBrokerAttributes {
    id?: number | string;
    name: string;
    nit: string;
    phone: string;
    location: string;
    contact_information: { name: string; email: string; phone_number: string };
    audit_trail?: {
        created_by: string;
        created_on: string;
        updated_by?: any;
        updated_on?: any;
        updated_values?: any;
    };
}

interface InsuranceBrokerFormPros {
    insurance_broker?: IInsuranceBrokerAttributes;
    onSubmit?: (values, form?) => Promise<any>;
    disabled?: boolean;
    type?: 'view' | 'create' | 'edit';
}

const InsuranceBrokerForm: FC<InsuranceBrokerFormPros> = ({ insurance_broker, onSubmit, disabled, type }) => {
    const initial_values = {
        id: '',
        name: '',
        nit: '',
        phone: '',
        location_id: '',
        contact_information: { name: '', email: '', phone_number: '' },
        ...insurance_broker,
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
            {({ values, isValid, isSubmitting, setFieldValue }) => {
                return (
                    <Form>
                        <div className="row">
                            {insurance_broker && (
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
                            <div className={`col-${insurance_broker ? 3 : 4}`}>
                                <label htmlFor="name_id" className="form-label">
                                    Nombre del corredor de seguros
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="name_id"
                                    name="name"
                                    autoComplete="off"
                                    disabled={disabled}
                                    maxLength={100}
                                />
                                <ErrorMessage name="name" withCount max={100} />
                            </div>
                            <div className={`col-${insurance_broker ? 3 : 4}`}>
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
                            <div className={`col-${insurance_broker ? 3 : 4}`}>
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
                                <ErrorMessage name="phone" withCount max={20} />
                            </div>
                            <div className="col-6">
                                <label htmlFor="description_id" className="form-label">
                                    Correo Electronico
                                </label>
                                <Field
                                    type="email"
                                    className="form-control"
                                    id="description_id"
                                    name="email"
                                    disabled={disabled}
                                    autoComplete="off"
                                    maxLength={50}
                                />
                                <ErrorMessage name="email" />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="location" className="form-label">
                                    Dirección
                                </label>
                                <div className="input-group">
                                    <input
                                        name="location"
                                        id="location"
                                        type="text"
                                        className="form-control"
                                        disabled
                                    />
                                    <div className="input-group-prepend">
                                        <LocationModal
                                            view="user"
                                            disabled={disabled}
                                            onSave={(values) => {
                                                return values;
                                            }}
                                        />
                                    </div>
                                </div>
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

InsuranceBrokerForm.defaultProps = {
    onSubmit: (v) => Promise.resolve(),
};
export default InsuranceBrokerForm;
