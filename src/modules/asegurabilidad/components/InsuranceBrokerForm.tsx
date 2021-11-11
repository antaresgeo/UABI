import { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import ErrorMessage from '../../../utils/ui/error_messge';
import * as Yup from 'yup';
import LocationModal from '../../../utils/components/Location/LocationModal';
import { Broker } from '../redux/service';
import { service } from '../../acquisitions/redux';

interface InsuranceBrokerFormPros {
    insurance_broker?: Broker;
    onSubmit?: (values: Broker, form?) => Promise<any>;
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
        state: '',
        city: '',
        address: '',
        contact_information: { name: '', email: '', phone: '' },
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
        }).catch(() => form.setSubmitting(false));
    };
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initial_values} validationSchema={schema}>
            {({ values, isValid, isSubmitting, setFieldValue }) => {
                return (
                    <Form>
                        <div className="row">
                            {insurance_broker && (
                                <div className="col-4">
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
                            <div className={`col-${insurance_broker ? 4 : 6}`}>
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
                            <div className={`col-${insurance_broker ? 4 : 6}`}>
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
                                <label htmlFor="phone_id" className="form-label">
                                    Teléfono
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="phone_id"
                                    name="phone"
                                    disabled={disabled}
                                    autoComplete="off"
                                    maxLength={20}
                                />
                                <ErrorMessage name="phone" withCount max={20} />
                            </div>
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
                                    <Field
                                        name="address"
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
                                                return service.getAddress(values).then((res) => {
                                                    console.log(res);
                                                    setFieldValue('state', values.state_name, false);
                                                    setFieldValue('city', values.city_name, false);
                                                    setFieldValue('address', res.addressAsString, false);
                                                    setFieldValue('location_id', res.id+'', false);
                                                });
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="contact_name_id" className="form-label">
                                    Nombre de contacto
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="contact_name_id"
                                    name="contact_information.name"
                                    disabled={disabled}
                                    autoComplete="off"
                                    maxLength={50}
                                />
                                <ErrorMessage name="contact_information.name" withCount max={50} />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="contact_email_id" className="form-label">
                                    Correo Electronico de contacto
                                </label>
                                <Field
                                    type="email"
                                    className="form-control"
                                    id="contact_email_id"
                                    name="contact_information.email"
                                    disabled={disabled}
                                    autoComplete="off"
                                />
                                <ErrorMessage name="contact_information.email" />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="contact_phone_id" className="form-label">
                                    Telefono de contacto
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="contact_phone_id"
                                    name="contact_information.phone"
                                    disabled={disabled}
                                    autoComplete="off"
                                    maxLength={20}
                                />
                                <ErrorMessage name="contact_information.phone" withCount max={20} />
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
