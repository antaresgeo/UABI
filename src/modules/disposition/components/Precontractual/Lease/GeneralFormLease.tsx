import { Form, Formik } from 'formik';
import { Card } from '../../../../../utils/ui';
import FormLider from '../FormLider';
import { ModalNotificar } from './../../ModalNotificar';
import { FormUser } from './../FormUser';
import { FormRiskAnalysis } from '../FormRiskAnalysis';
import FormPrecontractualLease from './FormPrecontractualLease';
import * as Yup from 'yup';
import { FC,  } from 'react';


interface FormPros {
    innerRef?: any;
    realEstate?: any;
    onSubmit?: (values, form?, isFinish?: boolean) => Promise<any>;
    values_form?: any;
}

export const GeneralFormLease: FC<FormPros> = ({ onSubmit, innerRef, realEstate, values_form }) => {
    let initialValues = {
        environmental_risk: "",
        registration_date: "",
        contract_period: "",
        //solicitante
        companyname_applicant: "",
        firstname_applicant: "",
        secondname_applicant: "",
        surname_applicant: "",
        secondsurname_applicant: "",
        type_document_applicant: "",
        number_doc_applicant: "",
        type_society_applicant: "",
        email_applicant: "",
        mobile_applicant: "",
        telephone_applicant: "",
        location_applicant: {
            address: "",
            id: ""
        },
        //analisis de riegos
        regulatory_degree_occurrence: "",
        regulatory_impact_degree: "",
        regulatory_responsable: "",
        regulatory_mitigation_mechanism: "",
        operative_degree_occurrence: "",
        operative_impact_degree: "",
        operative_responsable: "",
        operative_mitigation_mechanism: "",
        //Arrendamiento
        consecutive_number: "3600000000000", //TODO: preguntar a Diego valor ?
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
        business_type: "",
        coverage: "",
        fines: "",
        destination_realEstate: "",
        appraisal_number: "",
        appraisal_date: "",
        lockable_base: 10,
        //lider y personas a cargo
        name_Leader: "",
        lastname_Leader: "",
        post_leader: "Líder de Programa",
        dependence_leader: "Unidad Administración de Bienes Inmuebles",
        secretary_leader: "Subsecretaría de Gestión de Bienes",
        name_elaborated: "",
        post_elaborated: "",
        name_revised: "",
        post_revised: "",
        name_approved: "",
        post_approved: "",
        ...values_form,
    }

    const submit = (values, actions) => {
        onSubmit(values, actions).then(() => {
            actions.setSubmitting(false);
            actions.resetForm();
        });
    };

    const schema = Yup.object().shape({
        public_service: Yup.string().required('obligatorio'),
        administration_value: Yup.number().required('obligatorio'),
        lockable_base: Yup.number().required('obligatorio').min(10, 'El minimo es 10').max(100, 'El maximo es 100'),
        business_type: Yup.string().required('obligatorio'),
        fines: Yup.string().required('obligatorio'),
        // Solicitante
        firstname_applicant: Yup.string().required('obligatorio'),
        secondname_applicant: Yup.string().required('obligatorio'),
        surname_applicant: Yup.string().required('obligatorio'),
        secondsurname_applicant: Yup.string().required('obligatorio'),
        type_document_applicant: Yup.string().required('obligatorio'),
        number_doc_applicant: Yup.number().required('obligatorio'),
        type_society_applicant: Yup.string().required('obligatorio'),
        email_applicant: Yup.string().email().required('obligatorio'),
        telephone_applicant: Yup.number().required('obligatorio'),
        // location_applicant: Yup.array().of(Yup.object().shape({
        //     id: Yup.string().required('obligatorio'),
        //     address: Yup.string().required('obligatorio'),
        // })),
        prediation_number: Yup.string().required('obligatorio'),
        prediation_date: Yup.string().required('obligatorio'),
        destination_realEstate: Yup.string().required('obligatorio'),
        contract_period: Yup.number().required('obligatorio'),
        appraisal_number: Yup.number().required('obligatorio'),
        appraisal_date: Yup.string().required('obligatorio'),
        environmental_risk: Yup.string().required('obligatorio'),
        //lider y personas a cargo
        name_Leader: Yup.string().required('obligatorio'),
        lastname_Leader: Yup.string().required('obligatorio'),
        name_elaborated: Yup.string().required('obligatorio'),
        post_elaborated: Yup.string().required('obligatorio'),
        name_revised: Yup.string().required('obligatorio'),
        post_revised: Yup.string().required('obligatorio'),
        name_approved: Yup.string().required('obligatorio'),
        post_approved: Yup.string().required('obligatorio'),

    });


    // const schema = Yup.object().shape({
    //     real_estates_id: Yup.array().min(1, 'obligatorio'),
    //     policy_type: Yup.string().required('obligatorio'),
    //     vigency_start: Yup.string().required('obligatorio'),
    //     vigency_end: Yup.string().required('obligatorio'),
    //     insurance_broker_id: Yup.string().required('obligatorio'),
    //     insurance_value: Yup.string().required('obligatorio'),
    //     insurance_companies: Yup.array().of(Yup.object().shape({
    //         id: Yup.string().required('obligatorio'),
    //         percentage_insured: Yup.number().required('obligatorio'),
    //     }))

    // });
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
                        <FormUser formik={formik} lease={true} />
                    </Card>
                    <Card>
                        <FormRiskAnalysis formik={formik} />
                    </Card>
                    <Card >
                        <FormLider lease={true} />
                    </Card>
                </Form>
            }}
        </Formik>
    );
};
