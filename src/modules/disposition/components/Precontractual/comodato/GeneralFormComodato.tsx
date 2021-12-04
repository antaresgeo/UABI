import { Form, Formik } from 'formik';
import React from 'react';
import { Card } from '../../../../../utils/ui';
import { ModalNotificar } from '../../ModalNotificar';
import { FormPrecontractualComodato } from './FormPrecontractualComodato';
import { FormUser } from '../FormUser';
import { FormRiskAnalysis } from '../FormRiskAnalysis';
import { Formobligation } from '../Formobligation';
import FormLider from '../FormLider';
import * as Yup from 'yup';

export const GeneralFormComodato = () => {
    let initialValues = {
        environmental_risk: '',
        registration_date: '',
        contract_period: '',
        //solicitante
        names_applicant: '',
        surnames_applicant: '',
        id_type_document: 0,
        number_doc_applicant_id: '',
        type_society_applicant: '',
        location_applicant: '',
        email_applicant: '',
        mobile_applicant: '',
        telephone_applicant: '',
        //analisis de riegos
        regulatory_degree_occurrence: '',
        regulatory_impact_degree: '',
        regulatory_responsable: '',
        regulatory_description: '',
        operative_degree_occurrence: '',
        operative_impact_degree: '',
        operative_responsable: '',
        operative_description: '',
        //comodato
        loan_value: '',
        patrimonial_value: '',
        loan_typology: '',
        competitive_process: '',
        competitive_process_value: 0,
        activities: '',
        Horizontal_property: '',
        destination_realEstate: '',
        peacesafe: '',
        social_event: '',
        public_service: '',
        value_public_service: '',
        economic_exploitation: '',
        Action_field: '',
        resolution: '',
        lockable_base: '',
        dependence: '',
    };
    const submit = (values /*, actions*/) => {
        console.log(values);
    };

    const schema = Yup.object().shape({});
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initialValues} validationSchema={schema}>
            {(formik) => {
                return (
                    <Form>
                        <Card title="Comodato" extra={<ModalNotificar />}>
                            <FormPrecontractualComodato formik={formik} />
                        </Card>
                        <Card title="Datos del solicitante">
                            <FormUser formik={formik} />
                        </Card>
                        <Card title="Análisis de riesgos">
                            <FormRiskAnalysis formik={formik} />
                        </Card>
                        <Card title="Oblogaciones">
                            <Formobligation />
                        </Card>
                        <Card>
                            <FormLider />
                        </Card>
                    </Form>
                );
            }}
        </Formik>
    );
};
