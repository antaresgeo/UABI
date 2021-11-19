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
import DocumentModal from './../../../utils/components/DocumentsModal/index';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actions } from './../../acquisitions/redux';
import { swal } from '../../../utils';
import moment from 'moment';
import { clearRealEstate } from '../../acquisitions/redux/actions/realEstates';




interface InsurabilityFormPros {
    policy?: IPolicyAttributes;
    realEstate?: IRealEstateAttributes;
    companies?: any;
    brokers?: any;
    disabled?: boolean;
    type?: 'view' | 'create' | 'edit';
    type_assurance?: 'Normal';
    onSubmit: (values, actions?) => Promise<any>;
}

const PolizaForm: FC<InsurabilityFormPros> = ({ policy, realEstate, companies, brokers, disabled, type, onSubmit }) => {

    const dispatch = useDispatch();
    const realEstates: IRealEstateAttributes[] = useSelector((states: any) => states.acquisitions.realEstates.value);


    let valor;
    useEffect(() => {
        if (realEstate) {
            valor = true;
        } else {
            valor = false;
        }
        dispatch(actions.getRealEstates({}))
    }, []);




    const initialValues = {

        registry_number: realEstate?.registry_number || '',
        policy_type: '',
        vigency_start: '',
        vigency_end: '',
        insurance_broker: '',
        insurance_value: '',
        type_assurance: 'Normal',
        insurance_companies: [
            {
                insurance_company: '',
                total_percentage: 0,
            },
        ],
        insurance_document_id: "",
        insurance_document: {
            label: "póliza",
            type: 5,
            pdf: null
        },
        real_estate_id: realEstate?.id || 0,
        ...policy
    };
    if (initialValues.vigency_start) {
        const tmpDate = new Date(Number(initialValues.vigency_start));
        const tmpDate2 = new Date(Number(initialValues.vigency_end));
        const newDate = moment(tmpDate).format('YYYY-MM-DD');
        const newDate2 = moment(tmpDate2).format('YYYY-MM-DD');
        initialValues.vigency_start = newDate
        initialValues.vigency_end = newDate2

    }
    const schema = Yup.object().shape({
        registry_number: Yup.string().required('obligatorio'),
        policy_type: Yup.string().required('obligatorio'),
        vigency_start: Yup.string().required('obligatorio'),
        vigency_end: Yup.string().required('obligatorio'),
        insurance_broker: Yup.string().required('obligatorio'),
        insurance_value: Yup.string().required('obligatorio'),
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
        console.log(values);
        const newDate = moment(values.vigency_start).format('YYYY/MM/DD');
        const newDate2 = moment(values.vigency_end).format('YYYY/MM/DD');
        const finalValues = {
            ...values,
            vigency_start: new Date(newDate).getTime(),
            vigency_end: new Date(newDate2).getTime(),
        }
        let total = 0;
        Array.isArray(values.insurance_companies) && finalValues.insurance_companies.map(valor => total = total + valor.total_percentage)
        if (total > 100) {
            swal.fire('Revise los porcentajes', '', 'error')
        } else {
            console.log(finalValues);
            onSubmit(finalValues, actions).then(() => {
                actions.setSubmitting(false);
                actions.resetForm();
            });
        }

    };

    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initialValues} validationSchema={schema} >
            {({ isSubmitting, setFieldValue, values, handleChange }) => {
                return (

                    <Form>
                        <div className="row">
                            {(type !== 'view') &&
                                <div className="form-group col-6">
                                    <label htmlFor="registry_number" className="form-label">
                                        Matrícula
                                    </label>
                                    <Field
                                        component={Select}
                                        name="registry_number"
                                        id="registry_number"
                                        className="w-100"
                                        options={realEstates}
                                    // onChange={(e) => {
                                    //     handleChange(e)
                                    //     const realEstate = realEstates.find((r) => {
                                    //         return e.target.value === r.registry_number
                                    //     })
                                    //     setFieldValue('real_estate_id', realEstate.id, false);
                                    // }}

                                    >
                                        <option key="matricula" value="" disabled>
                                            --Seleccione el tipo de póliza--
                                        </option>
                                        {realEstates.map(real_estate =>
                                            <option key={realEstate?.id} value={real_estate?.registry_number}>{real_estate?.registry_number}</option>
                                        )}
                                    </Field>
                                    {/* <ErrorMessage name="registry_number" /> */}
                                </div>
                            }
                            <div className={`col-${type === 'view' ? 3 : 6}`}>
                                <label htmlFor="policy_type" className="form-label">Tipo de Póliza</label>
                                <Field as="select" id="policy_type" name="policy_type" className="w-100 form-select form-control" disabled={disabled}>
                                    <option key="policy_type" value="" disabled>
                                        --Seleccione el tipo de póliza--
                                    </option>
                                    <option key="vera1" value="vera1">Tipo 1</option>
                                    <option key="vera2" value="vera2">Tipo 2</option>
                                    <option key="vera3" value="vera3">Tipo 3</option>
                                </Field>
                                <span
                                    className="text-danger text-left d-block w-100 mt-1"
                                    style={{ height: '22px' }}
                                >
                                    <ErrorMessage name="policy_type" />
                                </span>
                            </div>
                            {/* {type !== 'view' && (
                                <>
                                    <div></div>
                                    <div className="row"></div>
                                </>
                            )} */}
                            <div className="col-3">
                                <label htmlFor="vigency_start" className="form-label mt-3 mt-lg-0">
                                    Fecha de Inicio
                                </label>
                                <Field
                                    type="date"
                                    id="vigency_start"
                                    name="vigency_start"
                                    className="form-control"
                                    disabled={disabled}
                                />
                                <span className="text-danger text-left d-block w-100 mt-1" style={{ height: '22px' }}>
                                    <ErrorMessage name="vigency_start" />
                                </span>
                            </div>

                            <div className="col-3">
                                <label htmlFor="vigency_end" className="form-label mt-3 mt-lg-0">
                                    Fecha Final
                                </label>
                                <Field
                                    type="date"
                                    id="vigency_end"
                                    name="vigency_end"
                                    placeholder="Fecha Final"
                                    className="form-control"
                                    disabled={disabled}
                                />
                                <span className="text-danger text-left d-block w-100 mt-1" style={{ height: '22px' }}>
                                    <ErrorMessage name="vigency_end" />
                                </span>
                            </div>
                            <div className={`col-${type === 'view' ? 3 : 6}`}>
                                <label htmlFor="insurance_broker" className="form-label">
                                    Corredor de Seguros
                                </label>
                                <Field
                                    as="select"
                                    id="insurance_broker"
                                    name="insurance_broker"
                                    className="w-100 form-select form-control"
                                    disabled={disabled}
                                >
                                    <option key="insurance_broker" value="" disabled>
                                        --Seleccione Corredor de Seguros--
                                    </option>
                                    {brokers?.map(broker =>
                                        <option key={broker?.id} value={broker?.name}>{broker?.name}</option>
                                    )}
                                </Field>
                                <span className="text-danger text-left d-block w-100 mt-1" style={{ height: '22px' }}>
                                    <ErrorMessage name="insurance_broker" />
                                </span>
                            </div>
                        </div>
                        {type !== 'view' &&
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
                        }
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="rebuild_value" className="form-label">
                                    Valor de reconstrucción
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
                            {type !== 'view' &&
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
                                                    handleChange(e);
                                                    const insurance_companies_list = [
                                                        values.insurance_companies[0],
                                                    ] || [
                                                            {
                                                                insurance_company: '',
                                                                total_percentage: '',
                                                            },
                                                        ];
                                                    setFieldValue(
                                                        'insurance_companies',
                                                        insurance_companies_list,
                                                        false
                                                    );
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
                                    {values.type_assurance === 'Coaseguramiento' && (
                                        <div className="form-check-inline" style={{ marginLeft: '75px' }}>
                                            <LinkButton
                                                onClick={() => {
                                                    const insurance_companies_list = [
                                                        ...values.insurance_companies,
                                                        {
                                                            insurance_company: '',
                                                            total_percentage: '',
                                                        },
                                                    ];
                                                    setFieldValue(
                                                        'insurance_companies',
                                                        insurance_companies_list,
                                                        false
                                                    );
                                                }}
                                                name="Agregar Compañía"
                                                icon={<i className="fa fa-plus-circle" aria-hidden="true" />}
                                            />
                                        </div>
                                    )}
                                    <ErrorMessage name="type_assurance"></ErrorMessage>
                                </div>
                            }
                            {/* {Array.isArray(values.insurance_companies)  && console.log(values.insurance_companies?.map( company => company.join(", ")))} */}
                            {type === 'view' &&
                                <div className={`form-inline col-6`}>
                                    <label htmlFor="companies" className="form-label">
                                        Compañías Aseguradoras
                                    </label>
                                    <Field
                                        type="text"
                                        name="companies"
                                        id="companies"
                                        className="form-control"
                                        value={(values.insurance_companies).map((a) => a.insurance_company).join(",  ")}
                                        style={{ borderLeft: 'none' }}
                                        disabled={disabled}
                                    />
                                    <ErrorMessage name="companies" />
                                </div>
                            }

                        </div>
                        {type === 'view' &&
                            <div className="row">
                                <div className={`form-inline col-6`}>
                                    <label htmlFor="realEstates" className="form-label">
                                        Bienes Inmuebles asociados
                                    </label>
                                    <Field
                                        type="text"
                                        name="realEstates"
                                        id="realEstates"
                                        className="form-control"
                                        //value={(values.insurance_companies).map((a) => a.insurance_company).join(",  ")}
                                        style={{ borderLeft: 'none' }}
                                        disabled={disabled}
                                    />
                                    <ErrorMessage name="realEstates" />
                                </div>
                            </div>
                        }

                        {type !== 'view' &&
                            <>
                                {/* {console.log('compañias',values.insurance_companies)} */}
                                {Array.isArray(values.insurance_companies) && values.insurance_companies?.map((item, i) => {
                                    return (
                                        <div className="row form-group" key={i}>
                                            <div className={`form-inline col-6`}>
                                                <label htmlFor={`insurance_company_${i}`} className="form-label">
                                                    Compañía Aseguradora
                                                </label>
                                                <Field
                                                    as="select"
                                                    id={`insurance_company_${i}`}
                                                    name={`insurance_companies[${i}].insurance_company`}
                                                    className="w-100 form-select form-control"
                                                    disabled={disabled}
                                                >
                                                    <option key="insurance_company" value="" disabled>
                                                        --Seleccione Compañía Aseguradora--
                                                    </option>
                                                    {companies?.results?.map(company =>
                                                        <option key={company?.id} value={company?.name}>{company?.name}</option>
                                                    )}
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
                                                {i !== 0 && (
                                                    <LinkButton
                                                        name=""
                                                        icon={<i className="fa fa-times" aria-hidden="true" />}
                                                        onClick={() => {
                                                            const insurance_companies_list =
                                                                values.insurance_companies.filter((v, j) => j !== i);
                                                            setFieldValue(
                                                                'insurance_companies',
                                                                insurance_companies_list,
                                                                false
                                                            );
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </>
                        }
                        <div className="row justify-content-end">
                            <div className="col text-end">
                                {type !== 'view' && (
                                    <button
                                        type="submit"
                                        className="btn btn-primary my-3"
                                        disabled={disabled}
                                    >
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

export default PolizaForm;
