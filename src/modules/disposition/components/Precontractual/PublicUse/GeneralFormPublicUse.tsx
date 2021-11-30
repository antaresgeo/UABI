import { Form, Formik } from 'formik'
import React from 'react'
import { Card } from '../../../../../utils/ui'
import { ModalNotificar } from './../../ModalNotificar';
import { FormPrecontractualPublicUse } from './FormPrecontractualPublicUse';
import { FormUser } from './../FormUser';
import { Formobligation } from '../Formobligation';
import FormLider from '../FormLider';
import * as Yup from 'yup';
const GeneralFormPublicUse = () => {
    let initialValues = {
        environmental_risk: "",
        registration_date: "",
        contract_period: "",
        //solicitante
        names_applicant: "",
        surnames_applicant: "",
        id_type_document: 0,
        number_doc_applicant_id: "",
        type_society_applicant: "",
        location_applicant: "",
        email_applicant: "",
        mobile_applicant: "",
        telephone_applicant: "",
        //analisis de riegos
        regulatory_degree_occurrence: "",
        regulatory_impact_degree: "",
        regulatory_responsable: "",
        regulatory_description: "",
        operative_degree_occurrence: "",
        operative_impact_degree: "",
        operative_responsable: "",
        operative_description: "",
        //uso publico
        destination_realEstate: "",
        contract_value: "",
    }
    const submit = (values, actions) => {
        console.log(values);
    };

    const schema = Yup.object().shape({
    });
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initialValues} validationSchema={schema} >
            {(formik) => {
                return <Form>
                    <Card
                        title="Uso Público"
                        extra={
                            <ModalNotificar/>
                        }
                    >
                        <FormPrecontractualPublicUse formik={formik} />
                    </Card>
                    <Card title="Datos del solicitante">
                        <FormUser formik={formik} />
                    </Card>
                    {/* <Card title="Análisis de riesgos">
                        <FormRiskAnalysis formik={formik} />
                    </Card> */}

                    <Card >
                        <FormLider />
                    </Card>
                </Form>
            }}
        </Formik>
    )
}

export default GeneralFormPublicUse
