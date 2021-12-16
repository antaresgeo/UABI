import { Form, Formik } from 'formik'
import  { FC } from 'react'
import { Card } from '../../../../../utils/ui'
import { ModalNotificar } from './../../ModalNotificar';
import { FormPrecontractualPublicUse } from './FormPrecontractualPublicUse';
import { FormUser } from './../FormUser';
import FormLider from '../FormLider';
import * as Yup from 'yup';
import { FormRiskAnalysis } from '../FormRiskAnalysis';
import moment from 'moment';

interface FormPros {
    innerRef?: any;
    realEstate?: any;
    onSubmit?: (values, form?, isFinish?: boolean) => Promise<any>;
    values_form?: any;
}

const GeneralFormPublicUse: FC<FormPros> = ({onSubmit, innerRef, realEstate, values_form}) => {
    let initialValues = {
        environmental_risk: "",
        registration_date:  moment(new Date().getTime()).format('YYYY-MM-DD'),
        contract_period: "",
        prediation_number: "",
        prediation_date: "",
        lockable_base: 10,
        business_type: "",
        boundaries: "",
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
        //uso publico
        destination_realEstate: "",
        contract_value: "",
        obligations: [],
        prohibitions: [],
        cadastral_value: "",

        //lider y personas a cargo
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
            dependence: "",
            secretary: "",
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
        cadastral_value: Yup.string().required('obligatorio'),
        prediation_number: Yup.number().required('obligatorio'),
        prediation_date: Yup.string().required('obligatorio'),
        destination_realEstate: Yup.string().required('obligatorio'),
        contract_period: Yup.string().required('obligatorio'),
        contract_value: Yup.string().required('obligatorio'),
        environmental_risk: Yup.string().required('obligatorio'),
        lockable_base: Yup.number().required('obligatorio').min(10, 'El minimo es 10').max(100, 'El maximo es 100'),
        business_type: Yup.string().required('obligatorio'),
        registration_date: Yup.string().required('obligatorio'),
        boundaries: Yup.string().required('obligatorio'),

        // Solicitante
        applicant: Yup.object({
            type_society: Yup.string().required('obligatorio'),
            company_name: Yup.string().required('obligatorio'),
            id_number:  Yup.number().required('obligatorio'),
            phone_number:  Yup.number().required('obligatorio'),
            email:  Yup.string().email().required('obligatorio'),
        }),
        // location_applicant: Yup.object({
        //     address: Yup.string().required('obligatorio')
        // }),


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
        <Formik enableReinitialize onSubmit={submit} innerRef={innerRef} initialValues={initialValues} validationSchema={schema} >
            {(formik) => {
                return <Form>
                    <Card
                        title="Estudio previo para Uso Público"
                        extra={
                            <ModalNotificar/>
                        }
                    >
                        <FormPrecontractualPublicUse formik={formik} />
                    </Card>
                    <Card title="Información del solicitante">
                        <FormUser formik={formik} comodato={true} />
                    </Card>
                    <Card >
                        <FormRiskAnalysis formik={formik} />
                    </Card>

                        <Card>
                            <FormLider />
                        </Card>
                    </Form>

            }}
        </Formik>
    );
};

export default GeneralFormPublicUse;
