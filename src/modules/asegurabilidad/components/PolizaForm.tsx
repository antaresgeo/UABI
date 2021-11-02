// import React from 'react';
import { Formik, Form, Field } from 'formik';
// import { actions } from "./../redux";
import { FC } from 'react';
import { IPolicyAttributes } from './../../../utils/interfaces/insurability';
import { IRealEstateAttributes } from './../../../utils/interfaces/realEstates';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import Select from '../../../utils/ui/select';
import Tooltip from 'antd/lib/tooltip';

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
        Policy_type: '',
        vigency_start: '',
        vigency_end: '',
        insurance_broker: '',
        rebuild_value: '',
        type_assurance: '',
        insurance_company: '',
        ...policy
    };

    const schema = Yup.object().shape({
        //registry_number: Yup.string().required('obligatorio'),
        Policy_type: Yup.string().required('obligatorio'),
        vigency_start: Yup.string().required('obligatorio'),
        vigency_end: Yup.string().required('obligatorio'),
        insurance_broker: Yup.string().required('obligatorio'),
        rebuild_value: Yup.string().required('obligatorio'),
        type_assurance: Yup.string().required('obligatorio'),
        //insurance_company: Yup.string().required('obligatorio'),

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
                            {(type !== 'view') && (
                                <div className="form-group col-6">
                                    <label htmlFor="registry_number" className="form-label">
                                        Matrícula
                                    </label>
                                    <Field
                                        disabled={disabled}
                                        className="w-100"
                                        options={realEstates}
                                        name="registry_number"
                                        component={Select}
                                        id="registry_number"

                                    />
                                    {/* <ErrorMessage name="registry_number" /> */}
                                </div>
                            )}

                            <div className={`col-${type === 'view' ? 3 : 6}`}>
                                <label htmlFor="Policy_type" className="form-label">Tipo de Póliza</label>
                                <Field as="select" id="Policy_type" name="Policy_type" className="w-100 form-select form-control" disabled={disabled}>
                                    <option value="" selected disabled>
                                        --Seleccione el tipo de póliza--
                                    </option>
                                    <option value="vera1">Vera 1</option>
                                    <option value="vera2">Vera 2</option>
                                    <option value="vera3">Vera 3</option>
                                </Field>
                                <span
                                    className="text-danger text-left d-block w-100 mt-1"
                                    style={{ height: '22px' }}
                                >
                                    <ErrorMessage name="Policy_type" />
                                </span>
                            </div>
                        {(type !== 'view') && (
                            <>
                            <div></div>
                            <div className="row"></div>
                            </>
                        )}


                            <div className="col-3">
                                <label htmlFor="vigency_start" className="form-label mt-3 mt-lg-0">Fecha de Inicio</label>
                                <Field type="date" id="vigency_start" name="vigency_start" placeholder="Fecha Inicial" className="form-control" disabled={disabled} />
                                <span
                                    className="text-danger text-left d-block w-100 mt-1"
                                    style={{ height: '22px' }}
                                >
                                    <ErrorMessage name="vigency_start" />
                                </span>
                            </div>

                            <div className="col-3">
                                <label htmlFor="vigency_end" className="form-label mt-3 mt-lg-0">Fecha Final</label>
                                <Field type="date" id="vigency_end" name="vigency_end" placeholder="Fecha Final" className="form-control" disabled={disabled} />
                                <span
                                    className="text-danger text-left d-block w-100 mt-1"
                                    style={{ height: '22px' }}
                                >
                                    <ErrorMessage name="vigency_end" />
                                </span>
                            </div>
                            <div className={`col-${type === 'view' ? 3 : 6}`}>
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
                        </div>

                        <div className="row">
                            <div className={`col-${type === 'view' ? 6 : 3}`}>
                                <label htmlFor="rebuild_value" className="form-label">
                                    Valor de reconstrucción
                                </label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white border-end-0">$</span>
                                    </div>
                                    <Field
                                        name="rebuild_value"
                                        id="rebuild_value"
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
                                        <ErrorMessage name="rebuild_value" />
                                    </span>
                                </div>
                            </div>
                            {(type !== 'view') && (
                                <div className="form-group col-3">
                                    <label htmlFor="zone_id" className="form-label">
                                        Tipo de aseguramiento
                                        <Tooltip title="Lorem impsu texto descriptivo">
                                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                                        </Tooltip>
                                    </label>

                                    <div className="form-check-inline me-5">
                                        <label style={{ fontWeight: 400 }}>
                                            <Field
                                                disabled={disabled}
                                                name="type_assurance"
                                                id="type_assurance_id"
                                                type="radio"
                                                className="form-check-input"
                                                value="Normal"
                                            />{' '}
                                            Normal
                                        </label>
                                    </div>
                                    <div className="form-check-inline me-5">
                                        <label style={{ fontWeight: 400 }}>
                                            <Field
                                                disabled={disabled}
                                                name="type_assurance"
                                                id="type_assurance_id"
                                                type="radio"
                                                className="form-check-input"
                                                value="Coaseguramiento"
                                            />{' '}
                                            Coaseguramiento
                                        </label>
                                    </div>

                                    <ErrorMessage name="type_assurance"></ErrorMessage>
                                </div>
                            )}

                            <div className="col-6">
                                <label htmlFor="insurance_company" className="form-label" >Compañía Aseguradora</label>
                                <Field
                                    disabled={disabled}
                                    className="w-100"
                                    options={realEstates}
                                    name="insurance_company"
                                    component={Select}
                                    id="insurance_company"

                                />
                                {/* <ErrorMessage name="insurance_company" /> */}
                            </div>
                            {/* <div className="form-group col-3">
                                <label htmlFor="total_percentage_id" className="form-label">
                                    Porcentaje Total
                                </label>
                                <div className="input-group">
                                    <Field
                                        disabled={disabled}
                                        name="total_percentage"
                                        id="total_percentage_id"
                                        className="form-control border-end-0"
                                        min={0}
                                        max={100}
                                        type="number"
                                    />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white border-start-0">%</span>
                                    </div>
                                </div>

                                <ErrorMessage name="total_percentage"></ErrorMessage>
                            </div> */}
                            <div className="row">

                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col text-end">
                                {type !== 'view' && (
                                    <button
                                        // type ="button"
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
