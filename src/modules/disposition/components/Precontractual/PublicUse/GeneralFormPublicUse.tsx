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
        registration_date:  moment(new Date()).format('YYYY-MM-DD'),
        contract_period: "",
        prediation_number: "",
        prediation_date: "",
        lockable_base: 10,
        business_type: "",
        boundaries: "",
        //solicitante
        applicant: "",
        location_applicant: {
            address: "",
            id: "",
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
        //uso publico
        destination_realestate: "",
        contract_value: "",
        obligations: [],
        prohibitions: [],
        cadastral_value: "",

        //lider y personas a cargo
        leader: "",
        location_leader: {
            address: "",
            id: "",
        },
        elaborated: "",
        revised: "",
        approved: "",

        //info del bi
        dependence: realEstate?.dependency,
        secretary: realEstate?.subdependency,
        ...values_form,
    }
    const submit = (values, actions) => {
        onSubmit(values, actions).then(() => {
            actions.setSubmitting(false);
            actions.resetForm();
        });
    };

    const schema = Yup.object().shape({
        // cadastral_value: Yup.string().required('obligatorio'),
        // prediation_number: Yup.number().required('obligatorio'),
        // prediation_date: Yup.string().required('obligatorio'),
        // destination_realestate: Yup.string().required('obligatorio'),
        // contract_period: Yup.string().required('obligatorio'),
        // contract_value: Yup.string().required('obligatorio'),
        // environmental_risk: Yup.string().required('obligatorio'),
        // lockable_base: Yup.number().required('obligatorio').min(10, 'El minimo es 10').max(100, 'El maximo es 100'),
        // business_type: Yup.string().required('obligatorio'),
        // registration_date: Yup.string().required('obligatorio'),
        // boundaries: Yup.string().required('obligatorio'),

        // // Solicitante
        // applicant: Yup.object({
        //     type_society: Yup.string().required('obligatorio'),
        //     company_name: Yup.string().required('obligatorio'),
        //     id_number:  Yup.number().required('obligatorio'),
        //     phone_number:  Yup.number().required('obligatorio'),
        //     email:  Yup.string().email().required('obligatorio'),
        // }),
        // // location_applicant: Yup.object({
        // //     address: Yup.string().required('obligatorio')
        // // }),


        // //lider a cargo
        // leader:Yup.object({
        //     type_society: Yup.string().required('obligatorio'),
        //     post: Yup.string().required('obligatorio'),
        //     dependence: Yup.string().required('obligatorio'),
        //     secretary: Yup.string().required('obligatorio'),
        // }),

        // //personas
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
