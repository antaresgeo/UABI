import { Form, Formik } from 'formik'
import  { FC, useEffect } from 'react'
import { Card } from '../../../../../utils/ui'
import { ModalNotificar } from './../../ModalNotificar';
import { FormPrecontractualPublicUse } from './FormPrecontractualPublicUse';
import { FormUser } from './../FormUser';
import FormLider from '../FormLider';
import * as Yup from 'yup';
import { FormRiskAnalysis } from '../FormRiskAnalysis';
import { useDispatch, useSelector } from 'react-redux';
import { ITipologyAttributes } from '../../../../../utils/interfaces';
import { getTipology } from '../../../../acquisitions/redux/actions/realEstates';


interface FormPros {
    innerRef?: any;
    realEstate?: any;
    onSubmit?: (values, form?, isFinish?: boolean) => Promise<any>;
    values_form?: any;
}

const GeneralFormPublicUse: FC<FormPros> = ({onSubmit, innerRef, realEstate, values_form}) => {
    const dispatch = useDispatch();
    const tipology: ITipologyAttributes = useSelector((states: any) => states.acquisitions.tipology.value);
    useEffect(() => {
        dispatch(getTipology(realEstate?.tipology_id))
    }, [])
    let initialValues = {
        environmental_risk: "",
        registration_date: "",
        contract_period: "",
        prediation_number: "",
        prediation_date: "",
        lockable_base: 10,
        //solicitante
        names_applicant: "",
        surnames_applicant: "",
        id_type_document: "NIT",
        number_doc_applicant_id: "",
        type_society_applicant: "Persona Juridica",
        location_applicant: "",
        email_applicant: "",
        mobile_applicant: "",
        telephone_applicant: "",
        //analisis de riegos
        regulatory_degree_occurrence: "",
        regulatory_impact_degree: "",
        regulatory_responsable: "",
        regulatory_description: "",
        regulatory_mitigation_mechanism: "",
        operative_degree_occurrence: "",
        operative_impact_degree: "",
        operative_responsable: "",
        operative_description: "",
        operative_mitigation_mechanism: "",
        //uso publico
        destination_realEstate: "",
        contract_value: "",
        tipology,
        obligations: [],
        prohibitions: [],
        cadastral_value: "",
        // //lider y personas a cargo
        name_Leader: "",
        lastname_Leader: "",
        post_leader: "",
        dependence_leader: "",
        secretary_leader: "",
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
        cadastral_value: Yup.string().required('obligatorio'),
        prediation_number: Yup.number().required('obligatorio'),
        prediation_date: Yup.string().required('obligatorio'),
        destination_realEstate: Yup.string().required('obligatorio'),
        contract_period: Yup.string().required('obligatorio'),
        contract_value: Yup.string().required('obligatorio'),
        environmental_risk: Yup.string().required('obligatorio'),
        lockable_base: Yup.number().required('obligatorio').min(10, 'El minimo es 10').max(100, 'El maximo es 100'),

        //solicitante
        names_applicant: Yup.string().required('obligatorio'),
        number_doc_applicant: Yup.number().required('obligatorio'),
        email_applicant: Yup.string().email().required('obligatorio'),
        telephone_applicant: Yup.number().required('obligatorio'),

        //lider y personas a cargo
        name_Leader: Yup.string().required('obligatorio'),
        lastname_Leader: Yup.string().required('obligatorio'),
        post_leader: Yup.string().required('obligatorio'),
        dependence_leader: Yup.string().required('obligatorio'),
        secretary_leader: Yup.string().required('obligatorio'),
        name_elaborated: Yup.string().required('obligatorio'),
        post_elaborated: Yup.string().required('obligatorio'),
        name_revised: Yup.string().required('obligatorio'),
        post_revised: Yup.string().required('obligatorio'),
        name_approved: Yup.string().required('obligatorio'),
        post_approved: Yup.string().required('obligatorio'),

    });
    return (
        <Formik enableReinitialize onSubmit={submit} innerRef={innerRef} initialValues={initialValues} validationSchema={schema} >
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
