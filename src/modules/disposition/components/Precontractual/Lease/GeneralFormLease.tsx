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
        registration_date: moment(new Date()).format('YYYY-MM-DD'),
        contract_period: "",
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

        //Arrendamiento
        canon_value: realEstate?.canyon_value,
        iva: (realEstate.canyon_value * 0.19).toFixed(2),
        public_service: "",
        value_aforo: "",
        recovery_value: "",
        counter_value: "",
        administration_value: "",
        vigilance_value: "",
        monthly_total: parseInt(realEstate?.canyon_value + (realEstate.canyon_value * 0.19)),
        contract_value: 0,
        prediation_number: "",
        prediation_date: "",
        coverage: "",
        fines: "",
        destination_realestate: "",
        appraisal_number: "",
        appraisal_date: "",
        boundaries: "",

        //lider y personas a cargo
        leader: "",
        elaborated: "",
        revised: "",
        approved: "",
        dependency: realEstate?.dependency?.dependency || "",
        secretary: realEstate?.cost_center?.subdependency || "",
        ...values_form,
    }


    const submit = (values, actions) => {
        onSubmit(values, actions).then(() => {
            actions.setSubmitting(false);
            actions.resetForm();
        });
    };

    const schema = Yup.object().shape({
        // //general
        // public_service: Yup.string().required('obligatorio'),
        // administration_value: Yup.number().required('obligatorio'),
        // lockable_base: Yup.number().required('obligatorio').min(10, 'El minimo es 10').max(100, 'El maximo es 100'),
        // //business_type: Yup.string().required('obligatorio'),
        // fines: Yup.string().required('obligatorio'),
        // boundaries: Yup.string().required('obligatorio'),
        // // solo arrrendamiento
        // prediation_number: Yup.string().required('obligatorio'),
        // prediation_date: Yup.string().required('obligatorio'),
        // destination_realestate: Yup.string().required('obligatorio'),
        // contract_period: Yup.number().required('obligatorio'),
        // appraisal_number: Yup.number().required('obligatorio'),
        // appraisal_date: Yup.string().required('obligatorio'),
        // environmental_risk: Yup.string().required('obligatorio'),


        // // Solicitante
        // applicant: Yup.object({
        //     person_type: Yup.string().required('obligatorio'),
        //     company_name: Yup.string().when('person_type', {
        //         is: "Persona Juridica",
        //         then: Yup.string().required('obligatorio')
        //     }),
        //     document_number: Yup.number().when('person_type', {
        //         is: "Persona Juridica",
        //         then: Yup.number().required('obligatorio')
        //     }),
        //     company_phone_number: Yup.number().when('person_type', {
        //         is: "Persona Juridica",
        //         then: Yup.number().required('obligatorio')
        //     }),
        //     company_email: Yup.string().email().when('person_type', {
        //         is: "Persona Juridica",
        //         then: Yup.string().email().required('obligatorio')
        //     }),
        // }),
        // detailsApplicant: Yup.object().when('applicant.person_type', {
        //     is: "Persona Natural",
        //     then: Yup.object().required('obligatorio'),
        // }),
        // location_applicant: Yup.object({
        //     address: Yup.string().required('obligatorio')
        // }),
        // //representante
        // detailsRepresentative: Yup.object().when('applicant.person_type', {
        //     is: "Persona Juridica",
        //     then: Yup.object().required('obligatorio'),
        // }),

        // //lider y personas a cargo
        // detailsLeader: Yup.object().required('obligatorio'),
        // // location_leader: Yup.object({
        // //     address: Yup.string().required('obligatorio')
        // // }),
        // elaborated: Yup.object({
        //     first_name: Yup.string().required('obligatorio'),
        //     first_surname: Yup.string().required('obligatorio'),
        //     post: Yup.string().required('obligatorio'),
        //     email: Yup.string().required('obligatorio')

        // }),
        // revised: Yup.object({
        //     first_name: Yup.string().required('obligatorio'),
        //     first_surname: Yup.string().required('obligatorio'),
        //     post: Yup.string().required('obligatorio'),
        //     email: Yup.string().required('obligatorio')
        // }),
        // approved: Yup.object({
        //     first_name: Yup.string().required('obligatorio'),
        //     first_surname: Yup.string().required('obligatorio'),
        //     post: Yup.string().required('obligatorio'),
        //     email: Yup.string().required('obligatorio')
        // }),



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
