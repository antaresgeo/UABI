import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { Card } from '../../../../utils/ui';
import { FormContract } from './FormContract';
import { FormUser } from './../Precontractual/FormUser';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTipology } from '../../../acquisitions/redux/actions/realEstates';
import { ITipologyAttributes } from '../../../../utils/interfaces';

interface FormPros {
    innerRef?: any;
    realEstate?: any;
    onSubmit?: (values, form?, isFinish?: boolean) => Promise<any>;
    values_form?: any;
}


export const GeneralDataContract: FC<FormPros> = ({onSubmit, innerRef, realEstate, values_form}) => {
    const initialValues = {
        contract_number: "",
        type_contract: "",
        monthly_canon: "",
        subscription_date: "",
        start_date: "",
        finish_date: "",
        management_value: "",
        surveillance_value: "",
        public_service_value: "",
        dispose_area: "",
        digital_contract: "",
        manager_uabi: "",
        object_contract: "",
        guarantee: ""

    };

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
                    <Card title="Contrato">
                        <FormContract formik={formik}/>
                    </Card>
                    <Card title="Datos del solicitante">
                        <FormUser formik={formik}/>
                    </Card>

                </Form>
            }}
        </Formik>
    )
}
