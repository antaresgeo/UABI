// import React from 'react';
import { Formik, Form, Field } from 'formik';
// import { actions } from "./../redux";
import { FC } from 'react';
import { IPolicyAttributes } from './../../../utils/interfaces/insurability';
import { IRealEstateAttributes } from './../../../utils/interfaces/realEstates';
import * as Yup from 'yup';
import ErrorMessage from '../../../utils/ui/error_messge';
import Select from '../../../utils/ui/select';
import Tooltip from 'antd/lib/tooltip';
import { LinkButton } from '../../../utils/ui/link';
import { swal } from '../../../utils';
import DocumentModal from './../../../utils/components/DocumentsModal/index';



interface InsurabilityFormPros {
    policy?: IPolicyAttributes;
    realEstates?: IRealEstateAttributes[];
    disabled?: boolean;
    type?: 'view' | 'create' | 'edit';
    type_assurance?: "Normal";
    onSubmit: (values, actions?) => Promise<any>;
}

const PolizaForm: FC<InsurabilityFormPros> = ({ policy, realEstates, disabled, type, onSubmit }) => {
    const initialValues = {
        registry_number: '',
        policy_type: '',
        vigency_start: '',
        vigency_end: '',
        insurance_broker: '',
        insurance_value: '',
        type_assurance: 'Normal',
        insurance_companies: [
            {
                insurance_company: '',
                total_percentage: 0
            }
        ],
        insurance_document_id: 0,
        insurance_document: {
            name: '',
            pdf: null
        },
        real_estate_id: 0,
        ...policy
    };

    const schema = Yup.object().shape({
        //registry_number: Yup.string().required('obligatorio'),
        Policy_type: Yup.string().required('obligatorio'),
        vigency_start: Yup.string().required('obligatorio'),
        vigency_end: Yup.string().required('obligatorio'),
        insurance_broker: Yup.string().required('obligatorio'),
        rebuild_value: Yup.string().required('obligatorio'),
        insurance_companies: Yup.array().of(Yup.object().shape({
            insurance_company: Yup.string().required('obligatorio'),
            total_percentage: Yup.number().required('obligatorio'),
        }))
        // .test({
        //     message: 'Revise los porcentajes',
        //     test: arr => {
        //         const count: number = arr.reduce((sum, company) => {
        //             console.log(sum, company);
        //             return 0
        //         }, 0) as number;
        //         console.log(count);
        //         return false
        //     }
        // })
        //type_assurance: Yup.string().required('obligatorio'),
        //insurance_company: Yup.string().required('obligatorio'),




    });

    const submit = (values, actions) => {
        let total = 0;
        values.insurance_companies.map(valor => {
            total = total + valor.total_percentage
        })
        if (total > 100) {
            swal.fire('Revise los porcentajes', '', 'error')
        } else {
            onSubmit(values, actions).then(() => {
                actions.setSubmitting(false);
                actions.resetForm();
            });
        }





    };

    return (
        <Formik
            enableReinitialize
            onSubmit={submit}
            initialValues={initialValues}
            validationSchema={schema}

        >
            {({ isSubmitting, setFieldValue, values, handleChange }) => {
                return (
                    <Form>
                        <div className="row">
                            {(type !== 'view') && (
                                <div className="form-group col-6">
                                    <label htmlFor="registry_number" className="form-label">
                                        Matrícula
                                    </label>
                                    <Field as="select" id="registry_number" name="registry_number" className="w-100 form-select form-control" disabled={disabled}>
                                        <option value="" selected disabled>
                                            --Seleccione Matricula--
                                        </option>
                                        {/* {realEstates.map( realEstate => console.log(realEstate))} */}
                                        <option value="vera1">Tipo 1</option>
                                        <option value="vera2">Tipo 2</option>
                                        <option value="vera3">Tipo 3</option>
                                    </Field>
                                    {/* <ErrorMessage name="registry_number" /> */}
                                </div>
                            )}

                            <div className={`col-${type === 'view' ? 3 : 6}`}>
                                <label htmlFor="Policy_type" className="form-label">Tipo de Póliza</label>
                                <Field as="select" id="Policy_type" name="Policy_type" className="w-100 form-select form-control" disabled={disabled}>
                                    <option value="" selected disabled>
                                        --Seleccione el tipo de póliza--
                                    </option>
                                    <option value="vera1">Tipo 1</option>
                                    <option value="vera2">Tipo 2</option>
                                    <option value="vera3">Tipo 3</option>
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
                            <div className={`col-${type === 'view' ? 6 : 6}`}>
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
                                <div className="form-group col-6">
                                    <label htmlFor="zone_id" className="form-label">
                                        Tipo de aseguramiento
                                        <Tooltip title="Lorem impsu texto descriptivo">
                                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                                        </Tooltip>
                                    </label>

                                    <div className="form-check-inline ">
                                        <label style={{ fontWeight: 400 }}>
                                            <Field
                                                disabled={disabled}
                                                name="type_assurance"
                                                id="type_assurance_id"
                                                type="radio"
                                                className="form-check-input"
                                                value="Normal"
                                                onChange={(e) => {
                                                    handleChange(e)
                                                    const insurance_companies_list = [values.insurance_companies[0]] || [{
                                                        insurance_company: '',
                                                        total_percentage: ''
                                                    }]
                                                    setFieldValue('insurance_companies', insurance_companies_list, false)
                                                }}
                                            />{' '}
                                            Normal
                                        </label>
                                    </div>
                                    <div className="form-check-inline ">
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
                                    {values.type_assurance === 'Coaseguramiento' &&
                                        <div className="form-check-inline" style={{ marginLeft: '75px' }}>
                                            <LinkButton onClick={() => {
                                                const insurance_companies_list = [...values.insurance_companies, {
                                                    insurance_company: '',
                                                    total_percentage: ''
                                                }]
                                                setFieldValue('insurance_companies', insurance_companies_list, false)
                                            }} name="Agregar Compañía" icon={<i className="fa fa-plus-circle" aria-hidden="true" />} />
                                        </div>
                                    }
                                    <ErrorMessage name="type_assurance"></ErrorMessage>
                                </div>
                            )}

                            {(type === 'view') && (
                                <div className={`form-inline col-5`}>
                                    <label htmlFor="companies" className="form-label" >Compañía Aseguradora</label>
                                    <Field
                                        disabled={disabled}
                                        options={realEstates} //lista de compañias aseguradoras
                                        name="companies"
                                        component={Select}
                                        id="companies"
                                    />
                                    {/* <ErrorMessage name="companies" /> */}

                                </div>
                            )}
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="form-select" className="form-label">
                                    Adjuntar Póliza
                                </label>
                                <Field
                                    name="insurance_document"
                                    component={DocumentModal}
                                    btn_label="Adjuntar"

                                />
                                <ErrorMessage name="supports_documents" />
                            </div>
                        </div>

                        {
                            values.insurance_companies?.map((item, i) => {
                                return (
                                    type !== 'view' && (
                                        <div className="row form-group" key={i}>
                                            <div className={`form-inline col-6`}>
                                                <label htmlFor={`insurance_company_${i}`} className="form-label" >Compañía Aseguradora</label>
                                                <Field
                                                    as="select"
                                                    id={`insurance_company_${i}`}
                                                    name={`insurance_companies[${i}].insurance_company`}
                                                    className="w-100 form-select form-control"
                                                    disabled={disabled}
                                                >
                                                    <option value="" selected disabled>
                                                        --Seleccione Compañía Aseguradora--
                                                    </option>
                                                    <option value="Sura 1">Sura 1</option>
                                                    <option value="Sura 2">Sura 2</option>
                                                    <option value="Sura 3">Sura 3</option>
                                                </Field>
                                                <ErrorMessage name={`insurance_companies[${i}].insurance_company`} />
                                            </div>

                                            <div className="col-5 form-inline">
                                                <label htmlFor={`total_percentage_${i}`} className="form-label">
                                                    Porcentaje de Aseguramiento
                                                </label>
                                                <div className="input-group">
                                                    <Field
                                                        disabled={disabled}
                                                        name={`insurance_companies[${i}].total_percentage`}
                                                        id={`total_percentage_${i}`}
                                                        className="form-control border-end-0"
                                                        min={0}
                                                        max={100}
                                                        type="number"
                                                    />
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-white border-start-0">%</span>
                                                    </div>
                                                </div>

                                                <ErrorMessage name={`insurance_companies[${i}].total_percentage`} />
                                            </div>


                                            <div className="col-1 " style={{ display: 'flex', alignItems: 'center' }}>
                                                {(i !== 0) &&
                                                    <LinkButton name='' icon={<i className="fa fa-times" aria-hidden="true" />} onClick={() => {

                                                        const insurance_companies_list = values.insurance_companies.filter((v, j) => j !== i)
                                                        setFieldValue('insurance_companies', insurance_companies_list, false)
                                                    }} />
                                                }
                                            </div>
                                        </div>
                                    )
                                )
                            })
                        }


                        <div className="row justify-content-end">
                            <div className="col text-end">
                                {type !== 'view' && (
                                    <button
                                        // type ="button"
                                        className="btn btn-primary my-3"
                                        disabled={disabled}
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
