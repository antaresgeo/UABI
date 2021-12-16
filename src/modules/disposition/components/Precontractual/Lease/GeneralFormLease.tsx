import { Form, Formik } from 'formik';
import { Card } from '../../../../../utils/ui';
import FormLider from '../FormLider';
import { ModalNotificar } from './../../ModalNotificar';
import { FormUser } from './../FormUser';
import { FormRiskAnalysis } from '../FormRiskAnalysis';
import FormPrecontractualLease from './FormPrecontractualLease';
import * as Yup from 'yup';
import { FC, } from 'react';
import moment from 'moment';


interface FormPros {
    innerRef?: any;
    realEstate?: any;
    onSubmit?: (values, form?, isFinish?: boolean) => Promise<any>;
    values_form?: any;
}

export const GeneralFormLease: FC<FormPros> = ({ onSubmit, innerRef, realEstate, values_form }) => {
    let initialValues = {
        environmental_risk: "",
        registration_date: moment(new Date().getTime()).format('YYYY-MM-DD'),
        contract_period: "",
        business_type: "",
        lockable_base: 10,
        //solicitante
        applicant: {
            type_society: "",
            id_type: "",
            id_number: "",
            company_name: "",
            email: "",
            phone_number: "",
        },
        detailsApplicant: "",
        location_applicant: {
            address: "",
            id: "",
        },
        detailsRepresentative: "",
        representative: {
            type_society: "Persona Natural",
        },

        //analisis de riegos
        regulatory_risk: {
            degree_occurrence: "",
            impact_degree: "",
            responsable: "",
            mitigation_mechanism: "",
        },
        operational_risk: {
            degree_occurrence: "",
            impact_degree: "",
            responsable: "",
            mitigation_mechanism: "",
        },

        //Arrendamiento
        consecutive_number: "36000000", //TODO: preguntar a Diego valor ?
        canon_value: realEstate.canyon_value,
        IVA: realEstate.canyon_value * 0.19,
        public_service: "",
        value_aforo: "",
        recovery_value: "",
        counter_value: "",
        administration_value: "",
        vigilance_value: "",
        subtotal: 0,
        total: 0,
        prediation_number: "",
        prediation_date: "",
        coverage: "",
        fines: "",
        destination_realEstate: "",
        appraisal_number: "",
        appraisal_date: "",
        boundaries: "",

        //lider y personas a cargo
        detailsLeader: "",
        leader: {
            type_society: "Persona Natural",
            post: "Líder de Programa",
            dependence: "Unidad Administración de Bienes Inmuebles",
            secretary: "Subsecretaría de Gestión de Bienes",
        },
        location_leader: {
            address: "",
            id: "",
        },
        elaborated: {
            name: "",
            post: "",
        },
        revised: {
            name: "",
            post: "",
        },
        approved: {
            name: "",
            post: "",
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
        //general
        public_service: Yup.string().required('obligatorio'),
        administration_value: Yup.number().required('obligatorio'),
        lockable_base: Yup.number().required('obligatorio').min(10, 'El minimo es 10').max(100, 'El maximo es 100'),
        business_type: Yup.string().required('obligatorio'),
        fines: Yup.string().required('obligatorio'),
        boundaries: Yup.string().required('obligatorio'),
        // solo arrrendamiento
        prediation_number: Yup.string().required('obligatorio'),
        prediation_date: Yup.string().required('obligatorio'),
        destination_realEstate: Yup.string().required('obligatorio'),
        contract_period: Yup.number().required('obligatorio'),
        appraisal_number: Yup.number().required('obligatorio'),
        appraisal_date: Yup.string().required('obligatorio'),
        environmental_risk: Yup.string().required('obligatorio'),


        // Solicitante
        applicant: Yup.object({
            type_society: Yup.string().required('obligatorio'),
            company_name: Yup.string().when('type_society', {
                is: "Persona Juridica",
                then: Yup.string().required('obligatorio')
            }),
            id_number: Yup.number().when('type_society', {
                is: "Persona Juridica",
                then: Yup.number().required('obligatorio')
            }),
            phone_number: Yup.number().when('type_society', {
                is: "Persona Juridica",
                then: Yup.number().required('obligatorio')
            }),
            email: Yup.string().email().when('type_society', {
                is: "Persona Juridica",
                then: Yup.string().email().required('obligatorio')
            }),
        }),
        detailsApplicant: Yup.object().when('applicant.type_society', {
            is: "Persona Natural",
            then: Yup.object().required('obligatorio'),
        }),
        location_applicant: Yup.object({
            address: Yup.string().required('obligatorio')
        }),
        //representante
        detailsRepresentative: Yup.object().when('applicant.type_society', {
            is: "Persona Juridica",
            then: Yup.object().required('obligatorio'),
        }),

        //lider y personas a cargo
        detailsLeader: Yup.object().required('obligatorio'),
        // location_leader: Yup.object({
        //     address: Yup.string().required('obligatorio')
        // }),
        elaborated: Yup.object({
            name: Yup.string().required('obligatorio'),
            post: Yup.string().required('obligatorio')
        }),
        revised: Yup.object({
            name: Yup.string().required('obligatorio'),
            post: Yup.string().required('obligatorio')
        }),
        approved: Yup.object({
            name: Yup.string().required('obligatorio'),
            post: Yup.string().required('obligatorio')
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
                return <Form>
                    <Card
                        title="Estudio previo para Arrendamiento"
                        extra={
                            <ModalNotificar />
                        }
                    >
                        <FormPrecontractualLease formik={formik} />
                    </Card>
                    <Card title="Información del solicitante">
                        <FormUser formik={formik} />
                    </Card>
                    <Card>
                        <FormRiskAnalysis formik={formik} />
                    </Card>
                    <Card >
                        <FormLider lease={true} formik={formik} />
                    </Card>
                </Form>
            }}
        </Formik>
    );
};
