// import React from 'react';
import { Formik, Form, Field } from 'formik';
// import { actions } from "./../redux";
import { FC } from 'react';
import { IPolicyAttributes } from './../../../utils/interfaces/insurability';
import { IRealEstateAttributes } from './../../../utils/interfaces/realEstates';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

interface InsurabilityFormPros {
    policy?: IPolicyAttributes;
    realEstates?: IRealEstateAttributes[];
    disabled?: boolean;
    type?: 'view' | 'create' | 'edit';
    onSubmit: (values, actions?) => Promise<any>;
}

const PolizaForm: FC<InsurabilityFormPros> = ({ policy, realEstates, disabled, type, onSubmit }) => {
    const initialValues = {
        registry_number: '',
        vigency_start: '',
        vigency_end: '',
        insurance_broker: '',
        insurance_company: '',
        insurance_value: '',
        insurance_document_id: '',
        real_estate_id: 1,
        ...policy
    };

    const schema = Yup.object().shape({
        registry_number: Yup.number().required('obligatorio'),
        vigency_start: Yup.date().required('obligatorio'),
        vigency_end: Yup.date().required('obligatorio'),
        insurance_broker: Yup.string().required('obligatorio'),
        insurance_company: Yup.string().required('obligatorio'),
        insurance_value: Yup.number().required('obligatorio'),
        insurance_document_id: Yup.string().required('obligatorio'),
        real_estate_id: Yup.number().required('obligatorio'),

    });

    const submit = (values, actions) => {
        onSubmit(values, actions).then(() => {
            actions.setSubmitting(false);
            actions.resetForm();
        });
    };
    return (
        <Formik
            enableReinitialize
            onSubmit={submit}
            initialValues={initialValues}
            validationSchema={schema}

        >
            {({ isSubmitting }) => {
                return (
                    <Form>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="registry_number" className="form-label">Matrícula</label>
                                <Field type="number" id="registry_number" name="registry_number" placeholder="Número Matrícula" className="form-control" disabled={disabled} autoComplete="off" />
                                <span
                                    className="text-danger text-left d-block w-100 mt-1"
                                    style={{ height: '22px' }}
                                >
                                    <ErrorMessage name="registry_number" />
                                </span>
                            </div>

                            <div className="col-4">
                                <label htmlFor="vigency_start" className="form-label mt-3 mt-lg-0">Fecha Inicial de la Póliza</label>
                                <Field type="date" id="vigency_start" name="vigency_start" placeholder="Fecha Inicial" className="form-control" disabled={disabled} />
                                <span
                                    className="text-danger text-left d-block w-100 mt-1"
                                    style={{ height: '22px' }}
                                >
                                    <ErrorMessage name="vigency_start" />
                                </span>
                            </div>

                            <div className="col-4">
                                <label htmlFor="vigency_end" className="form-label mt-3 mt-lg-0">Fecha Final de la Póliza</label>
                                <Field type="date" id="vigency_end" name="vigency_end" placeholder="Fecha Final" className="form-control" disabled={disabled} />
                                <span
                                    className="text-danger text-left d-block w-100 mt-1"
                                    style={{ height: '22px' }}
                                >
                                    <ErrorMessage name="vigency_end" />
                                </span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="insurance_broker" className="form-label">Corredor de Seguros</label>
                                <Field as="select" id="insurance_broker" name="insurance_broker" className="w-100 form-select form-control" disabled={disabled}>
                                    <option value="" selected disabled>
                                        --Corredor--
                                    </option>
                                    <option value="vera1">Vera 1</option>
                                    <option value="vera2">Vera 2</option>
                                    <option value="vera3">Vera 3</option>
                                </Field>
                                <span
                                    className="text-danger text-left d-block w-100 mt-1"
                                    style={{ height: '22px' }}
                                >
                                    <ErrorMessage name="insurance_broker" />
                                </span>

                            </div>

                            <div className="col-4">
                                <label htmlFor="insurance_company" className="form-label" >Compañía de Seguros</label>
                                <Field as="select" id="insurance_company" name="insurance_company" className='w-100 form-select' disabled={disabled}>
                                    <option value="" selected disabled>
                                        --Compañía--
                                    </option>
                                    <option value="sura1">Sura 1</option>
                                    <option value="sura2">Sura 2</option>
                                    <option value="sura3">Sura 3</option>
                                </Field>
                                <span
                                    className="text-danger text-left d-block w-100 mt-1"
                                    style={{ height: '22px' }}
                                >
                                    <ErrorMessage name="insurance_company" />
                                </span>
                            </div>

                            <div className="col-4">
                                <label htmlFor="insurance_value" className="form-label">
                                    Valor Asegurado
                                </label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white border-end-0">$</span>
                                    </div>
                                    <Field
                                        name="insurance_value"
                                        id="insurance_value"
                                        type="number"
                                        className="form-control text-end"
                                        style={{ borderLeft: 'none' }}
                                        maxLength={200}
                                        disabled={disabled}
                                    />
                                    <span
                                        className="text-danger text-left d-block w-100 mt-1"
                                        style={{ height: '22px' }}
                                    >
                                        <ErrorMessage name="insurance_value" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="insurance_document_id" className="form-label">Agregue Póliza</label>
                                <Field type="text" id="insurance_document_id" name="insurance_document_id" placeholder="Agregue Póliza" className="form-control" disabled={disabled} autoComplete="off" />
                            </div>
                            <div className="col-4">
                                <label htmlFor="real_estate_id" className="form-label">Bien inmueble</label>
                                <Field

                                    name="real_estate_id"
                                    as="select"
                                    className="form-select"
                                    id="real_estate_id"
                                    disabled={disabled}

                                >
                                    <option value="" hidden>
                                        -- Seleccione Bien Inmueble --
                                    </option>
                                    {realEstates?.map((realEstates, i) => {
                                        const { name, id } = realEstates;
                                        return (
                                            <option key={`project_${i}`} value={name}>
                                                {name.toUpperCase()}
                                            </option>
                                        );
                                    })}
                                </Field>
                                <span
                                    className="text-danger text-left d-block w-100 mt-1"
                                    style={{ height: '22px' }}
                                >
                                    <ErrorMessage name="real_estate_id" />
                                </span>
                                {/* <<Field type="number" id="real_estate_id" name="real_estate_id" placeholder="" className="form-control"  /> */}
                            </div>
                        </div>

                        <div className="row justify-content-end">
                            <div className="col text-end">
                                {type !== 'view' && (
                                    <button
                                        className="btn btn-primary my-3"
                                        disabled={isSubmitting || disabled}
                                    >
                                        Guardar
                                    </button>
                                )}
                            </div>
                        </div>
                    </Form>
                )

            }}
        </Formik>
    );
};

export default PolizaForm;
