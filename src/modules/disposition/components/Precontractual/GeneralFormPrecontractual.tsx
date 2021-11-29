import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormPrecontractual from './Lease/FormPrecontractualLease';
import { Card } from '../../../../utils/ui';
import { FormRiskAnalysis } from './Lease/FormRiskAnalysis';
import { FormUser } from './FormUser';
import { ModalNotificar } from './../ModalNotificar';
import { FC, useEffect, useState } from 'react';
import { FormPrecontractualComodato } from './comodato/FormPrecontractualComodato';
import FormLider from './FormLider';
import { FormPrecontractualPublicUse } from './PublicUse/FormPrecontractualPublicUse';
import { Formobligation } from './Formobligation';

interface FormPros {
    dispositionType?: string;
}
export const GeneralFormPrecontractual: FC<FormPros> = ({ dispositionType }) => {

    const [initial_values, setInitial_values] = useState({})
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
    }

    const initialLease = {
        consecutive_number: "",
        Canon_value: 0,
        IVA: 0,
        public_service: "",
        value_aforo: "",
        recovery_value: "",
        counter_value: "",
        administration_value: "",
        vigilance_value: "",
        subtotal: "",
        total: "",
        Prediation_number: "",
        prediation_date: "",
        business_type: "",
        coverage: "",
        fines: ""
    };

    const initialcomodato = {
        loan_value: "",
        patrimonial_value: "",
        loan_typology: "",
        competitive_process: "",
        competitive_process_value: 0,
        activities: "",
        Horizontal_property: "",
        destination_realEstate: "",
        peacesafe: "",
        social_event: "",
        public_service: "",
        value_public_service: "",
        economic_exploitation: "",
        Action_field: "",
        resolution: "",
        lockable_base: "",
        dependence: "",

    }

    const initialUsoPublico = {
        destination_realEstate: "",
        contract_value: "",
    }
    useEffect(() => {
        let initialValuesFinal = {}
        if (dispositionType === "arrendamiento") {
            initialValuesFinal = {
                ...initialValues,
                ...initialLease,
            }
        } else if (dispositionType === "Comodato") {
            initialValuesFinal = {
                ...initialValues,
                ...initialcomodato,
            }
        } else if (dispositionType === "ventas") {
            initialValuesFinal = {
                ...initialValues,
                ...initialUsoPublico,
            }
        }
        setInitial_values(initialValuesFinal)

    }, [dispositionType])

    const submit = (values, actions) => {
        console.log(values);
    };

    const schema = Yup.object().shape({
    });
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initial_values} validationSchema={schema} >
            {(formik) => {
                return <Form>
                    <Card
                        title={dispositionType}
                        extra={
                            <ModalNotificar />
                        }
                    >
                        {dispositionType === "arrendamiento" &&
                            <FormPrecontractual formik={formik} />
                        }
                        {dispositionType === "Comodato" &&
                            <FormPrecontractualComodato formik={formik} />
                        }
                        {dispositionType === "ventas" &&
                            <FormPrecontractualPublicUse />
                        }
                    </Card>
                    <Card title="Datos del solicitante">
                        <FormUser formik={formik} />
                    </Card>
                    <Card title="Análisis de riesgos">
                        <FormRiskAnalysis formik={formik} />
                    </Card>
                    {dispositionType === "arrendamiento" &&
                        <Card title="Oblogaciones">
                            <Formobligation />
                            {/* TODO: faltan datos de requerimientos */}
                        </Card>
                    }
                    <Card >
                        <FormLider />
                    </Card>
                </Form>
            }}
        </Formik>
    )
}
