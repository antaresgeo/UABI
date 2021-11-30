import { Form, Formik } from 'formik'
import { Card } from '../../../../../utils/ui'
import FormLider from '../FormLider';
import { Formobligation } from '../Formobligation';
import { ModalNotificar } from './../../ModalNotificar';
import { FormUser } from './../FormUser';
import { FormRiskAnalysis } from '../FormRiskAnalysis';
import FormPrecontractualLease from './FormPrecontractualLease';
import * as Yup from 'yup';

export const GeneralFormLease = () => {
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
        //Arrendamiento
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
                        title="Arrendamiento"
                        extra={
                            <ModalNotificar/>
                        }
                    >
                        <FormPrecontractualLease formik={formik} />
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
                    <Card >
                        <FormLider />
                    </Card>
                </Form>
            }}
        </Formik>
    )
}
