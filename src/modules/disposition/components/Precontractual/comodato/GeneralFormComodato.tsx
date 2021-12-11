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

interface FormPros {
    innerRef?: any;
    realEstate?: any;
    onSubmit?: (values, form?, isFinish?: boolean) => Promise<any>;
    values_form?: any;
}

export const GeneralFormComodato: FC<FormPros> = ({onSubmit, innerRef, realEstate,values_form }) => {

    let initialValues = {
        environmental_risk: '',
        registration_date: '',
        contract_period: '',
        //solicitante
        companyname_applicant: "",
        type_document_applicant: "NIT",
        number_doc_applicant: "",
        type_society_applicant: "Persona Juridica",
        location_applicant: {
            address: "",
            id: ""
        },
        email_applicant: "",
        mobile_applicant: "",
        telephone_applicant: "",
        //analisis de riegos
        regulatory_degree_occurrence: '',
        regulatory_impact_degree: '',
        regulatory_responsable: '',
        regulatory_description: '',
        regulatory_mitigation_mechanism: '',
        operative_degree_occurrence: '',
        operative_impact_degree: '',
        operative_responsable: '',
        operative_description: '',
        operative_mitigation_mechanism: '',
        //comodato
        loan_value: '',
        patrimonial_value: '',
        loan_typology: '',
        competitive_process: '',
        competitive_process_value: 0,
        activities: "",
        horizontal_property: "",
        destination_realEstate: "",
        peacesafe: "",
        social_event: "",
        public_service: "",
        value_public_service: "",
        economic_exploitation: "",
        type_economic_exploitation: "",
        action_field: "",
        resolution: "",
        lockable_base: 10,
        dependence: "",
        obligations: [

        ],
        prohibitions: [

        ],
        //obligaciones
        value_locative_repairs: 0,
        value_repairs_damages: 0,
        value_domiciliary_public: 0,
        surveillance_value: 0,
        cleaning_value: 0,
        conservation_value: 0,
        administration_value: 0,
        network_value: 0,
        Value_economic_obligations: 0,
        //lider y personas a cargo
        name_Leader: "",
        lastname_Leader: "",
        post_leader: "",
        dependence_leader: "",
        secretary_leader: "",
        name_elaborated: "",
        post_elaborated: "",
        name_revised: "",
        post_revised: "",
        name_approved: "",
        post_approved: "",
        //beneficiario
        population: '',
        benefited_sector: '',
        location: {
            commune: '',
            neighborhood: '',
        },
        business_type: "",
        ...values_form,
    }
    const submit = (values, actions) => {
        onSubmit(values, actions).then(() => {
            actions.setSubmitting(false);
            actions.resetForm();
        });
    };

    const schema = Yup.object().shape({
        //solicitante
        companyname_applicant: Yup.string().required('obligatorio'),
        type_document_applicant: Yup.string().required('obligatorio'),
        number_doc_applicant: Yup.number().required('obligatorio'),
        type_society_applicant: Yup.string().required('obligatorio'),
        email_applicant: Yup.string().email().required('obligatorio'),
        telephone_applicant: Yup.number().required('obligatorio'),

        loan_typology: Yup.string().required('obligatorio'),
        activities: Yup.string().required('obligatorio'),
        business_type: Yup.string().required('obligatorio'),

        //Beneficiario
        population: Yup.string().required('obligatorio'),
        benefited_sector: Yup.string().required('obligatorio'),
        dependence: Yup.string().required('obligatorio'),
        registration_date: Yup.string().required('obligatorio'),

        destination_realEstate: Yup.string().required('obligatorio'),
        peacesafe: Yup.string().required('obligatorio'),
        contract_period: Yup.string().required('obligatorio'),
        social_event: Yup.string().required('obligatorio'),
        public_service: Yup.string().required('obligatorio'),
        economic_exploitation: Yup.string().required('obligatorio'),
        action_field: Yup.string().required('obligatorio'),
        resolution: Yup.string().required('obligatorio'),
        lockable_base: Yup.number().required('obligatorio').min(10, 'El minimo es 10').max(100, 'El maximo es 100'),
        environmental_risk: Yup.string().required('obligatorio'),
        horizontal_property: Yup.string().required('obligatorio'),

        //lider y personas a cargo
        name_Leader: Yup.string().required('obligatorio'),
        lastname_Leader: Yup.string().required('obligatorio'),
        post_leader: Yup.string().required('obligatorio'),
        dependence_leader: Yup.string().required('obligatorio'),
        secretary_leader: Yup.string().required('obligatorio'),
        name_elaborated: Yup.string().required('obligatorio'),
        post_elaborated: Yup.string().required('obligatorio'),
        name_revised: Yup.string().required('obligatorio'),
        post_revised: Yup.string().required('obligatorio'),
        name_approved: Yup.string().required('obligatorio'),
        post_approved: Yup.string().required('obligatorio'),

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
                        <Card title="Comodato" extra={<ModalNotificar />}>
                            <FormPrecontractualComodato formik={formik} />
                        </Card>
                        <Card title="Datos del solicitante">
                            <FormUser formik={formik} comodato={true} />
                        </Card>
                        <Card title="Beneficiario">
                            <BeneficiaryForm formik={formik} />
                        </Card>
                        <Card title="Análisis de riesgos">
                            <FormRiskAnalysis formik={formik} />
                        </Card>
                        {formik.values.resolution === 'si' && (
                            <Card title="Obligaciones">
                                <Formobligation />
                            </Card>
                        )}
                        <Card>
                            <FormLider />
                        </Card>
                    </Form>
                );
            }}
        </Formik>
    );
};
