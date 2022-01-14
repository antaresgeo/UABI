import { Form, Formik } from 'formik'
import React, { FC } from 'react'
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
interface FormPros {
    innerRef?: any;
    realEstate?: any;
    onSubmit?: (values, form?, isFinish?: boolean) => Promise<any>;
    values_form?: any;
}

export const GeneralFormComodato: FC<FormPros> = ({ onSubmit, innerRef, realEstate, values_form }) => {

    let initialValues = {
        environmental_risk: '',
        registration_date: moment(new Date().getTime()).format('YYYY-MM-DD'),
        contract_period: '',
        patrimonial_value: realEstate.patrimonial_value,
        prediation_date: "",
        business_type: {
            select: "",
            input: "",
        },
        lockable_base: 10,
        //solicitante
        applicant: {
            type_society: "Persona Juridica",
            id_type: 4,
            id_number: "",
            company_name: "",
            email: "",
            phone_number: "",
        },
        location_applicant: {
            address: "",
            id: "",
        },
        detailsRepresentative: {
            id_type: '',
            id_number: '',
            names: { firstName: '', lastName: '' },
            surnames: { firstSurname: '', lastSurname: '' },
            email: '',
            phone_number: '',
            gender: '',
        },
        representative: {
            type_society: "Persona Natural",
        },
        //analisis de riegos
        regulatory_risk: {
            degree_occurrence: "MEDIO",
            impact_degree: "MEDIO",
            responsable: "Contratista",
            mitigation_mechanism: "Ejercer un control y vigilancia estrictos al contrato por parte del supervisor.",
        },
        operational_risk: {
            degree_occurrence: "MEDIO",
            impact_degree: "MEDIO",
            responsable: "Contratista",
            mitigation_mechanism: "Realizar visitas trimestrales al bien inmueble objeto del contrato y seguimiento mensual a los pagos de cánones, servicios públicos y administración cuando aplique, por parte del supervisor para realizar seguimiento y evaluación al desarrollo del objeto contractual",
        },
        //comodato
        loan_value: '',
        loan_typology: '',
        competitive_process: '',
        competitive_process_value: "",
        activities: "",
        horizontal_property: "",
        destination_realEstate: "",
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
        obligations: [

        ],
        prohibitions: [

        ],
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
        detailsLeader: {
            id_type: '',
            id_number: '',
            names: { firstName: '', lastName: '' },
            surnames: { firstSurname: '', lastSurname: '' },
            email: '',
            phone_number: '',
            gender: '',
        },
        leader: {
            type_society: "Persona Natural",
            post: "",
            dependence: realEstate?.dependency,
            secretary: realEstate?.subdependency,
        },
        location_leader: {
            address: "",
            id: "",
        },
        elaborated: {
            name: "",
            post: "",
            email: "",
        },
        revised: {
            name: "",
            post: "",
            email: "",
        },
        approved: {
            name: "",
            post: "",
            email: "",
        },
        //beneficiario
        population: '',
        benefited_sector: '',
        location: {
            commune: '',
            neighborhood: '',
        },

        ...values_form,
    }
    const submit = (values, actions) => {
        onSubmit(values, actions).then(() => {
            actions.setSubmitting(false);
            actions.resetForm();
        });
    };

    const schema = Yup.object().shape({
        //obligaciones
        resolution: Yup.string().required('obligatorio'),
        value_locative_repairs: Yup.number().when('resolution', {
            is: "si",
            then: Yup.number().required('obligatorio')
        }),
        value_repairs_damages: Yup.number().when('resolution', {
            is: "si",
            then: Yup.number().required('obligatorio')
        }),
        value_domiciliary_public: Yup.number().when('resolution', {
            is: "si",
            then: Yup.number().required('obligatorio')
        }),
        surveillance_value: Yup.number().when('resolution', {
            is: "si",
            then: Yup.number().required('obligatorio')
        }),
        cleaning_value: Yup.number().when('resolution', {
            is: "si",
            then: Yup.number().required('obligatorio')
        }),
        conservation_value: Yup.number().when('resolution', {
            is: "si",
            then: Yup.number().required('obligatorio')
        }),
        administration_value: Yup.number().when('resolution', {
            is: "si",
            then: Yup.number().required('obligatorio')
        }),
        network_value: Yup.number().when('resolution', {
            is: "si",
            then: Yup.number().required('obligatorio')
        }),
        value_economic_obligations: Yup.number().when('resolution', {
            is: "si",
            then: Yup.number().required('obligatorio')
        }),
        commercial_appraisal: Yup.number().when('resolution', {
            is: "no",
            then: Yup.number().required('obligatorio')
        }),
        //service public
        public_service: Yup.string().required('obligatorio'),
        value_public_service: Yup.number().when('public_service', {
            is: "si",
            then: Yup.number().required('obligatorio')
        }),
        capacity_specification: Yup.string().when('public_service', {
            is: "si",
            then: Yup.string().required('obligatorio')
        }),
        prediation_date: Yup.string().required('obligatorio'),
        environmental_risk: Yup.string().required('obligatorio'),
        // business_type: Yup.string().required('obligatorio'),
        lockable_base: Yup.number().required('obligatorio').min(10, 'El minimo es 10').max(100, 'El maximo es 100'),
        contract_period: Yup.string().required('obligatorio'),

        loan_typology: Yup.string().required('obligatorio'),
        destination_realEstate: Yup.string().required('obligatorio'),
        peacesafe: Yup.string().required('obligatorio'),
        social_event: Yup.string().required('obligatorio'),
        economic_exploitation: Yup.string().required('obligatorio'),
        action_field: Yup.string().required('obligatorio'),
        horizontal_property: Yup.string().required('obligatorio'),
        activities: Yup.string().required('obligatorio'),
        //Beneficiario
        population: Yup.string().required('obligatorio'),
        benefited_sector: Yup.string().required('obligatorio'),
        dependence: Yup.string().required('obligatorio'),
        registration_date: Yup.string().required('obligatorio'),
        // Solicitante
        applicant: Yup.object({
            type_society: Yup.string().required('obligatorio'),
            company_name: Yup.string().required('obligatorio'),
            id_number:  Yup.number().required('obligatorio'),
            phone_number:  Yup.number().required('obligatorio'),
            email:  Yup.string().email().required('obligatorio'),
        }),
        location_applicant: Yup.object({
            address: Yup.string().required('obligatorio')
        }),

        //lider a cargo
        leader:Yup.object({
            type_society: Yup.string().required('obligatorio'),
            post: Yup.string().required('obligatorio'),
            dependence: Yup.string().required('obligatorio'),
            secretary: Yup.string().required('obligatorio'),
        }),


        //personas
        elaborated: Yup.object({
            name: Yup.string().required('obligatorio'),
            post: Yup.string().required('obligatorio'),
            email: Yup.string().required('obligatorio')
        }),
        revised: Yup.object({
            name: Yup.string().required('obligatorio'),
            post: Yup.string().required('obligatorio'),
            email: Yup.string().required('obligatorio')
        }),
        approved: Yup.object({
            name: Yup.string().required('obligatorio'),
            post: Yup.string().required('obligatorio'),
            email: Yup.string().required('obligatorio')
        }),


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
                        <Card title="Estudio previo para Comodato" extra={<ModalNotificar />}>
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
