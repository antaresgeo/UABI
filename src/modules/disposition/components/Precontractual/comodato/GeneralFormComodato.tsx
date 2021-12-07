import { Form, Formik } from 'formik'
import React, { FC, useEffect } from 'react'
import { Card } from '../../../../../utils/ui'
import { ModalNotificar } from './../../ModalNotificar';
import { FormPrecontractualComodato } from './FormPrecontractualComodato';
import { FormUser } from './../FormUser';
import { FormRiskAnalysis } from '../FormRiskAnalysis';
import { Formobligation } from '../Formobligation';
import FormLider from '../FormLider';
import * as Yup from 'yup';
import BeneficiaryForm from './BeneficiaryForm';
import { ITipologyAttributes } from '../../../../../utils/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { getTipology } from '../../../../acquisitions/redux/actions/realEstates';

interface FormPros {
    innerRef?: any;
    realEstate?: any;
    onSubmit?: (values, form?, isFinish?: boolean) => Promise<any>;
}

export const GeneralFormComodato: FC<FormPros> = ({onSubmit, innerRef, realEstate}) => {
    const dispatch = useDispatch();
    const tipology: ITipologyAttributes = useSelector((states: any) => states.acquisitions.tipology.value);
    console.log(tipology)
    useEffect(() => {
        dispatch(getTipology(realEstate?.tipology_id))
    }, [])
    let initialValues = {
        environmental_risk: "",
        registration_date: "",
        contract_period: "",
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
        //comodato
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
        type_economic_exploitation: "",
        Action_field: "",
        resolution: "",
        lockable_base: "",
        dependence: "",
        obligations: [

        ],
        prohibitions: [

        ],
        //obligaciones
        value_locative_repairs: 0,
        value_repairs_damages: 0,
        value_domiciliary_public: 0,
        surveillance_value: 0,
        cleaning_value: 0,
        conservation_value: 0,
        administration_value: 0,
        network_value: 0,
        Value_economic_obligations: 0,
        //lider y personas a cargo
        name_Leader: "",
        lastname_Leader: "",
        post_leader: "",
        dependence_leader: "",
        Secretary_leader: "",
        name_elaborated: "",
        post_elaborated: "",
        name_revised: "",
        post_revised: "",
        name_approved: "",
        post_approved: "",
        //beneficiario
        population: "",
        benefited_sector: "",
        location:{
            commune: "",
            neighborhood: ""
        },
        tipology
    }
    const submit = (values, actions) => {
        onSubmit(values, actions).then(() => {
            actions.setSubmitting(false);
            actions.resetForm();
        });
    };

    const schema = Yup.object().shape({
    });
    return (
        <Formik enableReinitialize onSubmit={submit} innerRef={innerRef} initialValues={initialValues} validationSchema={schema} >
            {(formik) => {
                return <Form>
                    <Card
                        title="Comodato"
                        extra={
                            <ModalNotificar />
                        }
                    >
                        <FormPrecontractualComodato formik={formik} />
                    </Card>
                    <Card title="Datos del solicitante">
                        <FormUser formik={formik} comodato={true} />
                    </Card>
                    <Card title="Beneficiario">
                        <BeneficiaryForm formik={formik} />
                    </Card>
                    <Card title="Análisis de riesgos">
                        <FormRiskAnalysis formik={formik} />
                    </Card>
                    {formik.values.resolution === "si" &&
                        <Card title="Obligaciones">
                            <Formobligation />
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
