import { Form, Formik } from 'formik'
import React, { FC, useEffect, useState } from 'react'
import { Card } from '../../../../../utils/ui'
import { ModalNotificar } from './../../ModalNotificar';
import { FormPrecontractualComodato } from './FormPrecontractualComodato';
import { FormUser } from '../FormUser';
import { FormRiskAnalysis } from '../FormRiskAnalysis';
import { Formobligation } from '../Formobligation';
import FormLider from '../FormLider';
import * as Yup from 'yup';
import BeneficiaryForm from './BeneficiaryForm';
import moment from 'moment';
import actions from './../../../redux/actions';
import { useDispatch } from 'react-redux';
import { swal_success } from '../../../../../utils/index';

interface FormPros {
    innerRef?: any;
    realEstate?: any;
    onSubmit?: (values, form?, isFinish?: boolean) => Promise<any>;
    values_form?: any;
    precontractual?: any;
}

export const GeneralFormComodato: FC<FormPros> = ({ onSubmit, innerRef, realEstate, values_form, precontractual }) => {

    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (precontractual) {
            setEdit(true);
        }
    }, [precontractual]);

    let initialValues = {
        environmental_risk: '',
        registration_date: moment(new Date()).format('YYYY-MM-DD'),
        contract_period: '',
        patrimonial_value: realEstate.patrimonial_value,
        prediation_date: "",
        business_type: {
            select: "",
            input: "",
        },
        lockable_base: 10,
        //solicitante
        applicant: "",

        representative: "",
        //analisis de riegos
        regulatory_risk: {
            degree_occurrence: "MEDIO",
            impact_degree: "MEDIO",
            responsible: "Contratista",
            mitigation_mechanism: "Ejercer un control y vigilancia estrictos al contrato por parte del supervisor.",
        },
        operational_risk: {
            degree_occurrence: "MEDIO",
            impact_degree: "MEDIO",
            responsible: "Contratista",
            mitigation_mechanism: "Realizar visitas trimestrales al bien inmueble objeto del contrato y seguimiento mensual a los pagos de cánones, servicios públicos y administración cuando aplique, por parte del supervisor para realizar seguimiento y evaluación al desarrollo del objeto contractual",
        },
        //comodato
        loan_value: '',
        loan_typology: '',
        competitive_process: '',
        competitive_process_value: "",
        activities: "",
        horizontal_property: "",
        destination_realestate: "",
        peacesafe: "",
        social_event: "",
        public_service: "",
        value_public_service: "",
        capacity_specification: "",
        economic_exploitation: "",
        type_economic_exploitation: "",
        action_field: "",
        resolution: "",
        dependence: "",
        commercial_appraisal: "",
        obligations: [],
        prohibitions: [],
        //obligaciones
        value_locative_repairs: "",
        value_repairs_damages: "",
        value_domiciliary_public: "",
        surveillance_value: "",
        cleaning_value: "",
        conservation_value: "",
        administration_value: "",
        network_value: "",
        value_economic_obligations: "",

        //lider  a cargo
        leader: "",
        elaborated: "",
        revised: "",
        approved: "",

        //beneficiario
        population: '',
        benefited_sector: '',
        location: {
            beneficiary_location_id: "",
            commune: '',
            neighborhood: '',
        },

        dependency: realEstate?.dependency?.dependency,
        secretary: realEstate?.cost_center?.subdependency,
        ...{
            ...precontractual,
            prediation_date: precontractual?.prediation_date ? moment(new Date(Number(precontractual?.prediation_date))).format('YYYY-MM-DD') : "",
            registration_date: precontractual?.registration_date ? moment(new Date(Number(precontractual?.registration_date))).format('YYYY-MM-DD') : moment(new Date()).format('YYYY-MM-DD'),
            leader: {
                id: precontractual?.leader?.id || "",
                documentType: precontractual?.leader?.document_type || "",
                documentNumber: precontractual?.leader?.document_number || "",
                names: { firstName: precontractual?.leader?.first_name || '', lastName: precontractual?.leader?.last_name || '' },
                surnames: { firstSurname: precontractual?.leader?.first_surname || '', lastSurname: precontractual?.leader?.last_surname || '' },
                company_name: precontractual?.leader?.company_name || "",
                email: precontractual?.leader?.email || "",
                phoneNumber: precontractual?.leader?.phone_number || "",
                phoneNumber_ext: precontractual?.leader?.phone_number_ext || "",
                gender: precontractual?.leader?.gender || "",
                post: precontractual?.leader?.post || "",
                location_id: precontractual?.leader?.location_id || "",
            },
            elaborated: {
                id: precontractual?.elaborated?.id || "",
                documentType: precontractual?.elaborated?.document_type || "",
                documentNumber: precontractual?.elaborated?.document_number || "",
                names: { firstName: precontractual?.elaborated?.first_name || '', lastName: precontractual?.elaborated?.last_name || '' },
                surnames: { firstSurname: precontractual?.elaborated?.first_surname || '', lastSurname: precontractual?.elaborated?.last_surname || '' },
                company_name: precontractual?.elaborated?.company_name || "",
                email: precontractual?.elaborated?.email || "",
                phoneNumber: precontractual?.elaborated?.phone_number || "",
                phoneNumber_ext: precontractual?.elaborated?.phone_number_ext || "",
                gender: precontractual?.elaborated?.gender || "",
                post: precontractual?.elaborated?.post || "",
                location_id: precontractual?.elaborated?.location_id || "",
            },
            revised: {
                id: precontractual?.revised?.id || "",
                documentType: precontractual?.revised?.document_type || "",
                documentNumber: precontractual?.revised?.document_number || "",
                names: { firstName: precontractual?.revised?.first_name || '', lastName: precontractual?.revised?.last_name || '' },
                surnames: { firstSurname: precontractual?.revised?.first_surname || '', lastSurname: precontractual?.revised?.last_surname || '' },
                company_name: precontractual?.revised?.company_name || "",
                email: precontractual?.revised?.email || "",
                phoneNumber: precontractual?.revised?.phone_number || "",
                phoneNumber_ext: precontractual?.revised?.phone_number_ext || "",
                gender: precontractual?.revised?.gender || "",
                post: precontractual?.revised?.post || "",
                location_id: precontractual?.revised?.location_id || "",
            },
            approved: {
                id: precontractual?.approved?.id || "",
                documentType: precontractual?.approved?.document_type || "",
                documentNumber: precontractual?.approved?.document_number || "",
                names: { firstName: precontractual?.approved?.first_name || '', lastName: precontractual?.approved?.last_name || '' },
                surnames: { firstSurname: precontractual?.approved?.first_surname || '', lastSurname: precontractual?.approved?.last_surname || '' },
                company_name: precontractual?.approved?.company_name || "",
                email: precontractual?.approved?.email || "",
                phoneNumber: precontractual?.approved?.phone_number || "",
                phoneNumber_ext: precontractual?.approved?.phone_number_ext || "",
                gender: precontractual?.approved?.gender || "",
                post: precontractual?.approved?.post || "",
                location_id: precontractual?.approved?.location_id || "",
            },
            applicant: {
                id: precontractual?.applicant?.id || "",
                documentType: precontractual?.applicant?.document_type || "",
                documentNumber: precontractual?.applicant?.document_number || "",
                names: { firstName: precontractual?.applicant?.first_name || '', lastName: precontractual?.applicant?.last_name || '' },
                surnames: { firstSurname: precontractual?.applicant?.first_surname || '', lastSurname: precontractual?.applicant?.last_surname || '' },
                company_name: precontractual?.applicant?.company_name || "",
                email: precontractual?.applicant?.email || "",
                phoneNumber: precontractual?.applicant?.phone_number || "",
                phoneNumber_ext: precontractual?.applicant?.phone_number_ext || "",
                gender: precontractual?.applicant?.gender || "",
                post: precontractual?.applicant?.post || "",
                location_id: precontractual?.applicant?.location_id || "",
                location: precontractual?.applicant?.location?.address || "",
            },
            representative: {
                id: precontractual?.representative?.id || "",
                documentType: precontractual?.representative?.document_type || "",
                documentNumber: precontractual?.representative?.document_number || "",
                names: { firstName: precontractual?.representative?.first_name || '', lastName: precontractual?.representative?.last_name || '' },
                surnames: { firstSurname: precontractual?.representative?.first_surname || '', lastSurname: precontractual?.representative?.last_surname || '' },
                company_name: precontractual?.representative?.company_name || "",
                email: precontractual?.representative?.email || "",
                phoneNumber: precontractual?.representative?.phone_number || "",
                phoneNumber_ext: precontractual?.representative?.phone_number_ext || "",
                gender: precontractual?.representative?.gender || "",
                post: precontractual?.representative?.post || "",
                location_id: precontractual?.representative?.location_id || "",
                location: precontractual?.representative?.location?.address || "",
            },
            business_type: {
                select:
                    precontractual?.business_type === 'teatro' ? precontractual?.business_type :
                        precontractual?.business_type === 'museo' ? precontractual?.business_type :
                            "otro",
                input:
                    precontractual?.business_type !== 'teatro' ? precontractual?.business_type :
                        precontractual?.business_type !== 'museo' ? precontractual?.business_type :
                            precontractual?.business_type !== 'otro' ? precontractual?.business_type :
                                "",
            },
            commercial_appraisal: precontractual?.contract_value || 0

        },

        ...values_form,
    }


    const submit = (values, actions) => {
        values = {
            ...values,
            edit
        }

        onSubmit(values, actions).then(() => {
            actions.setSubmitting(false);
            actions.resetForm();
        });
    };


    // if (precontractual) {
    //     initialValues.prediation_date = moment(new Date(Number(initialValues?.prediation_date))).format('YYYY-MM-DD');
    //     initialValues.registration_date = moment(new Date(Number(initialValues?.registration_date))).format('YYYY-MM-DD');
    // }




    const schema = Yup.object().shape({
        //obligaciones
        resolution: Yup.string().required('obligatorio'),
        // value_locative_repairs: Yup.number().when('resolution', {
        //     is: "si",
        //     then: Yup.number().required('obligatorio')
        // }),
        // value_repairs_damages: Yup.number().when('resolution', {
        //     is: "si",
        //     then: Yup.number().required('obligatorio')
        // }),
        // value_domiciliary_public: Yup.number().when('resolution', {
        //     is: "si",
        //     then: Yup.number().required('obligatorio')
        // }),
        // surveillance_value: Yup.number().when('resolution', {
        //     is: "si",
        //     then: Yup.number().required('obligatorio')
        // }),
        // cleaning_value: Yup.number().when('resolution', {
        //     is: "si",
        //     then: Yup.number().required('obligatorio')
        // }),
        // conservation_value: Yup.number().when('resolution', {
        //     is: "si",
        //     then: Yup.number().required('obligatorio')
        // }),
        // administration_value: Yup.number().when('resolution', {
        //     is: "si",
        //     then: Yup.number().required('obligatorio')
        // }),
        // network_value: Yup.number().when('resolution', {
        //     is: "si",
        //     then: Yup.number().required('obligatorio')
        // }),
        // value_economic_obligations: Yup.number().when('resolution', {
        //     is: "si",
        //     then: Yup.number().required('obligatorio')
        // }),
        // commercial_appraisal: Yup.number().when('resolution', {
        //     is: "no",
        //     then: Yup.number().required('obligatorio')
        // }),
        // // //service public
        // public_service: Yup.string().required('obligatorio'),
        // value_public_service: Yup.number().when('public_service', {
        //     is: "si",
        //     then: Yup.number().required('obligatorio')
        // }),
        // capacity_specification: Yup.string().when('public_service', {
        //     is: "si",
        //     then: Yup.string().required('obligatorio')
        // }),
        prediation_date: Yup.string().required('obligatorio'),
        environmental_risk: Yup.string().required('obligatorio'),
        // // business_type: Yup.string().required('obligatorio'),
        lockable_base: Yup.number().required('obligatorio').min(10, 'El minimo es 10').max(100, 'El maximo es 100'),
        contract_period: Yup.string().required('obligatorio'),

        loan_typology: Yup.string().required('obligatorio'),
        destination_realestate: Yup.string().required('obligatorio'),
        peacesafe: Yup.string().required('obligatorio'),
        social_event: Yup.string().required('obligatorio'),
        economic_exploitation: Yup.string().required('obligatorio'),
        action_field: Yup.string().required('obligatorio'),
        horizontal_property: Yup.string().required('obligatorio'),
        activities: Yup.string().required('obligatorio'),
        // //Beneficiario
        population: Yup.string().required('obligatorio'),
        benefited_sector: Yup.string().required('obligatorio'),
        dependence: Yup.string().required('obligatorio'),
        registration_date: Yup.string().required('obligatorio'),




    });
    return (
        <Formik
            enableReinitialize
            onSubmit={submit}
            innerRef={innerRef}
            initialValues={initialValues}
            validationSchema={schema}
        >
            {(formik) => {
                return (
                    <Form>
                        <Card title="Estudio previo para Comodato" extra={
                            <>
                                <ModalNotificar />
                                {precontractual &&
                                    <button
                                        type="button"
                                        className='btn btn-primary'
                                        style={{ marginLeft: '5px' }}
                                        onClick={async () => {
                                            await dispatch(actions.inactivate_precontract(precontractual?.active_code));
                                            swal_success.fire({
                                                title: `estudio Previo inactivado`,
                                                text: "puede iniciar un nuevo proceso precontractual",
                                                icon: 'success',
                                                showConfirmButton: false,
                                                timer: 1500,
                                            });
                                        }}

                                    >
                                        Iniciar Nuevo Proceso
                                    </button>

                                }
                            </>
                        }>
                            <FormPrecontractualComodato formik={formik} />
                        </Card>
                        <Card title="Información del solicitante">
                            <FormUser formik={formik} comodato={true} />
                        </Card>
                        <Card title="Información del Beneficiario">
                            <BeneficiaryForm formik={formik} />
                        </Card>
                        <Card>
                            <FormRiskAnalysis formik={formik} />
                        </Card>
                        {formik.values.resolution === 'si' && (
                            <Card title="Obligaciones">
                                <Formobligation />
                            </Card>
                        )}
                        <Card >
                            <FormLider />
                        </Card>
                    </Form>
                );
            }}
        </Formik>
    );
};
