import { Form, Formik } from 'formik';
import { Card } from '../../../../../utils/ui';
import FormLider from '../FormLider';
import { Formobligation } from '../Formobligation';
import { ModalNotificar } from '../../ModalNotificar';
import { FormUser } from '../FormUser';
import { FormRiskAnalysis } from '../FormRiskAnalysis';
import FormPrecontractualLease from './FormPrecontractualLease';
import * as Yup from 'yup';
import { FC } from 'react';

interface FormPros {
    innerRef?: any;
    realEstate?: any;
    onSubmit?: (values, form?, isFinish?: boolean) => Promise<any>;
}

export const GeneralFormLease: FC<FormPros> = ({ onSubmit, innerRef /*, realEstate*/ }) => {
    // const history = useHistory();
    let initialValues = {
        environmental_risk: '',
        registration_date: '',
        contract_period: 0,
        //solicitante
        names_applicant: '',
        surnames_applicant: '',
        id_type_document: 0,
        number_doc_applicant_id: 0,
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
        //Arrendamiento
        consecutive_number: '',
        Canon_value: 0,
        IVA: 0,
        public_service: '',
        value_aforo: '',
        recovery_value: '',
        counter_value: '',
        administration_value: 0,
        vigilance_value: '',
        subtotal: 0,
        total: 0,
        prediation_number: '',
        prediation_date: '',
        business_type: '',
        coverage: '',
        fines: '',
    };

    const submit = (values, actions) => {
        onSubmit(values, actions).then(() => {
            actions.setSubmitting(false);
            actions.resetForm();
        });
    };

    const schema = Yup.object().shape({});
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
                        <Card title="Estudio previo para Arrendamiento" extra={<ModalNotificar />}>
                            <FormPrecontractualLease formik={formik} />
                        </Card>
                        <Card title="Información del solicitante">
                            <FormUser formik={formik} />
                        </Card>
                        <Card>
                            <FormRiskAnalysis formik={formik} />
                        </Card>
                        <Card title="Obligaciones">
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
