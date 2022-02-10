import { Form, Formik } from 'formik';
import { Card } from '../../../../../utils/ui';
import FormLider from '../FormLider';
import { ModalNotificar } from './../../ModalNotificar';
import { FormUser } from './../FormUser';
import { FormRiskAnalysis } from '../FormRiskAnalysis';
import FormPrecontractualLease from './FormPrecontractualLease';
import * as Yup from 'yup';
import { FC, useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux';

interface FormPros {
    innerRef?: any;
    realEstate?: any;
    onSubmit?: (values, form?, isFinish?: boolean) => Promise<any>;
    values_form?: any;
}

export const GeneralFormLease: FC<FormPros> = ({ onSubmit, innerRef, realEstate, values_form }) => {
    console.log(realEstate)
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();
    const precontractual: any = useSelector((state: any) => {
        return state.disposition.precontractual?.value;
    });

    useEffect(() => {
        if (precontractual) {
            setEdit(true);
        }
    }, [precontractual]);

    useEffect(() => {
        dispatch(actions.get_precontract(realEstate?.active_code));
    }, [dispatch, realEstate]);

    let initialValues = {
        environmental_risk: '',
        registration_date: moment(new Date()).format('YYYY-MM-DD'),
        contract_period: '',
        business_type: {
            select: '',
            input: '',
        },
        lockable_base: 10,
        //solicitante
        applicant: '',
        representative: '',

        //analisis de riegos
        regulatory_risk: {
            degree_occurrence: 'MEDIO',
            impact_degree: 'MEDIO',
            responsible: 'Contratista',
            mitigation_mechanism: 'Ejercer un control y vigilancia estrictos al contrato por parte del supervisor.',
        },
        operational_risk: {
            degree_occurrence: 'MEDIO',
            impact_degree: 'MEDIO',
            responsible: 'Contratista',
            mitigation_mechanism:
                'Realizar visitas trimestrales al bien inmueble objeto del contrato y seguimiento mensual a los pagos de cánones, servicios públicos y administración cuando aplique, por parte del supervisor para realizar seguimiento y evaluación al desarrollo del objeto contractual',
        },

        //Arrendamiento
        canon_value: realEstate?.canyon_value || 0,
        iva: (realEstate.canyon_value * 0.19).toFixed(2),
        public_service: '',
        value_aforo: '',
        recovery_value: '',
        counter_value: '',
        administration_value: '',
        vigilance_value: '',
        monthly_total: parseInt(realEstate?.canyon_value + realEstate.canyon_value * 0.19),
        contract_value: 0,
        prediation_number: '',
        prediation_date: '',
        coverage: '',
        fines: '',
        destination_realestate: '',
        appraisal_number: '',
        appraisal_date: '',
        boundaries: '',

        //lider y personas a cargo

        leader: "",
        elaborated: '',
        revised: '',
        approved: '',
        dependency: realEstate?.dependency?.dependency || '',
        secretary: realEstate?.cost_center?.subdependency || '',
        ...{
            ...precontractual,
            prediation_date: precontractual?.prediation_date ? moment(new Date(Number(precontractual?.prediation_date))).format('YYYY-MM-DD') : "",
            registration_date: precontractual?.registration_date ? moment(new Date(Number(precontractual?.registration_date))).format('YYYY-MM-DD') : moment(new Date()).format('YYYY-MM-DD'),
            appraisal_date: precontractual?.appraisal_date ? moment(new Date(Number(precontractual?.appraisal_date))).format('YYYY-MM-DD') : "",
            leader: {
                id: precontractual?.leader?.id || "",
                documentType: precontractual?.leader?.document_type || "",
                documentNumber: precontractual?.leader?.document_number || "",
                names: { firstName: precontractual?.leader?.first_name || '', lastName: precontractual?.leader?.last_name || '' },
                surnames: { firstSurname: precontractual?.leader?.first_surname || '', lastSurname: precontractual?.leader?.last_surname || '' },
                company_name: precontractual?.leader?.company_name || "",
                email: precontractual?.leader?.email || "",
                phoneNumber: precontractual?.leader?.phone_number || "",
                phoneNumber_ext: precontractual?.leader?.phone_number_ext || "",
                gender: precontractual?.leader?.gender || "",
                post: precontractual?.leader?.post || "",
                location_id: precontractual?.leader?.location_id || "",
            },
            elaborated: {
                id: precontractual?.elaborated?.id || "",
                documentType: precontractual?.elaborated?.document_type || "",
                documentNumber: precontractual?.elaborated?.document_number || "",
                names: { firstName: precontractual?.elaborated?.first_name || '', lastName: precontractual?.elaborated?.last_name || '' },
                surnames: { firstSurname: precontractual?.elaborated?.first_surname || '', lastSurname: precontractual?.elaborated?.last_surname || '' },
                company_name: precontractual?.elaborated?.company_name || "",
                email: precontractual?.elaborated?.email || "",
                phoneNumber: precontractual?.elaborated?.phone_number || "",
                phoneNumber_ext: precontractual?.elaborated?.phone_number_ext || "",
                gender: precontractual?.elaborated?.gender || "",
                post: precontractual?.elaborated?.post || "",
                location_id: precontractual?.elaborated?.location_id || "",
            },
            revised: {
                id: precontractual?.revised?.id || "",
                documentType: precontractual?.revised?.document_type || "",
                documentNumber: precontractual?.revised?.document_number || "",
                names: { firstName: precontractual?.revised?.first_name || '', lastName: precontractual?.revised?.last_name || '' },
                surnames: { firstSurname: precontractual?.revised?.first_surname || '', lastSurname: precontractual?.revised?.last_surname || '' },
                company_name: precontractual?.revised?.company_name || "",
                email: precontractual?.revised?.email || "",
                phoneNumber: precontractual?.revised?.phone_number || "",
                phoneNumber_ext: precontractual?.revised?.phone_number_ext || "",
                gender: precontractual?.revised?.gender || "",
                post: precontractual?.revised?.post || "",
                location_id: precontractual?.revised?.location_id || "",
            },
            approved: {
                id: precontractual?.approved?.id || "",
                documentType: precontractual?.approved?.document_type || "",
                documentNumber: precontractual?.approved?.document_number || "",
                names: { firstName: precontractual?.approved?.first_name || '', lastName: precontractual?.approved?.last_name || '' },
                surnames: { firstSurname: precontractual?.approved?.first_surname || '', lastSurname: precontractual?.approved?.last_surname || '' },
                company_name: precontractual?.approved?.company_name || "",
                email: precontractual?.approved?.email || "",
                phoneNumber: precontractual?.approved?.phone_number || "",
                phoneNumber_ext: precontractual?.approved?.phone_number_ext || "",
                gender: precontractual?.approved?.gender || "",
                post: precontractual?.approved?.post || "",
                location_id: precontractual?.approved?.location_id || "",
            },
            applicant: {
                id: precontractual?.applicant?.id || "",
                documentType: precontractual?.applicant?.document_type || "",
                documentNumber: precontractual?.applicant?.document_number || "",
                names: { firstName: precontractual?.applicant?.first_name || '', lastName: precontractual?.applicant?.last_name || '' },
                surnames: { firstSurname: precontractual?.applicant?.first_surname || '', lastSurname: precontractual?.applicant?.last_surname || '' },
                company_name: precontractual?.applicant?.company_name || "",
                email: precontractual?.applicant?.email || "",
                phoneNumber: precontractual?.applicant?.phone_number || "",
                phoneNumber_ext: precontractual?.applicant?.phone_number_ext || "",
                gender: precontractual?.applicant?.gender || "",
                post: precontractual?.applicant?.post || "",
                location_id: precontractual?.applicant?.location_id || "",
            },

            business_type: {
                select:
                    precontractual?.business_type === 'Restaurante'
                        ? precontractual?.business_type
                        : precontractual?.business_type === 'Cafetería'
                            ? precontractual?.business_type
                            : precontractual?.business_type === 'otro'
                                ? precontractual?.business_type
                                : '',
                input:
                    precontractual?.business_type !== 'Restaurante'
                        ? precontractual?.business_type
                        : precontractual?.business_type !== 'Cafetería'
                            ? precontractual?.business_type
                            : precontractual?.business_type !== 'otro'
                                ? precontractual?.business_type
                                : '',
            }
        },
        ...values_form,
    };
    console.log(initialValues)
    // if (precontractual) {
    //     initialValues.prediation_date = moment(new Date(Number(initialValues?.prediation_date))).format('YYYY-MM-DD');
    //     initialValues.registration_date = moment(new Date(Number(initialValues?.registration_date))).format(
    //         'YYYY-MM-DD'
    //     );
    //     initialValues.
    // }

    const submit = (values, actions) => {
        values = {
            ...values,
            edit,
        };
        onSubmit(values, actions).then(() => {
            actions.setSubmitting(false);
            actions.resetForm();
        });
    };

    const schema = Yup.object().shape({
        // //general
        // public_service: Yup.string().required('obligatorio'),
        // administration_value: Yup.number().required('obligatorio'),
        // lockable_base: Yup.number().required('obligatorio').min(10, 'El minimo es 10').max(100, 'El maximo es 100'),
        // //business_type: Yup.string().required('obligatorio'),
        // fines: Yup.string().required('obligatorio'),
        // boundaries: Yup.string().required('obligatorio'),
        // // solo arrrendamiento
        // prediation_number: Yup.string().required('obligatorio'),
        // prediation_date: Yup.string().required('obligatorio'),
        // destination_realestate: Yup.string().required('obligatorio'),
        // contract_period: Yup.number().required('obligatorio'),
        // appraisal_number: Yup.number().required('obligatorio'),
        // appraisal_date: Yup.string().required('obligatorio'),
        // environmental_risk: Yup.string().required('obligatorio'),
        // // Solicitante
        // applicant: Yup.object({
        //     person_type: Yup.string().required('obligatorio'),
        //     company_name: Yup.string().when('person_type', {
        //         is: "Persona Juridica",
        //         then: Yup.string().required('obligatorio')
        //     }),
        //     document_number: Yup.number().when('person_type', {
        //         is: "Persona Juridica",
        //         then: Yup.number().required('obligatorio')
        //     }),
        //     company_phone_number: Yup.number().when('person_type', {
        //         is: "Persona Juridica",
        //         then: Yup.number().required('obligatorio')
        //     }),
        //     company_email: Yup.string().email().when('person_type', {
        //         is: "Persona Juridica",
        //         then: Yup.string().email().required('obligatorio')
        //     }),
        // }),
        // detailsApplicant: Yup.object().when('applicant.person_type', {
        //     is: "Persona Natural",
        //     then: Yup.object().required('obligatorio'),
        // }),
        // location_applicant: Yup.object({
        //     address: Yup.string().required('obligatorio')
        // }),
        // //representante
        // detailsRepresentative: Yup.object().when('applicant.person_type', {
        //     is: "Persona Juridica",
        //     then: Yup.object().required('obligatorio'),
        // }),
        // //lider y personas a cargo
        // detailsLeader: Yup.object().required('obligatorio'),
        // // location_leader: Yup.object({
        // //     address: Yup.string().required('obligatorio')
        // // }),
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
                        <Card>
                            <FormLider lease={true} formik={formik} />
                        </Card>
                    </Form>
                );
            }}
        </Formik>
    );
};
