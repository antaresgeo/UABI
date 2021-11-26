import { Formik, Form } from 'formik'

import * as Yup from 'yup';
import { Card } from '../../../../utils/ui';
import { FormContract } from './FormContract';
import { FormUser } from './../Precontractual/FormUser';
import FormLider from '../Precontractual/FormLider';

export const GeneralDataContract = () => {
    const initialValues = {

    };

    const submit = (values, actions) => {
        console.log(values);
    };

    const schema = Yup.object().shape({
    });
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initialValues} validationSchema={schema} >
            {(formik) => {
                return <Form>
                    <Card title="Contrato">
                        <FormContract/>
                    </Card>
                    <Card title="Datos del solicitante">
                        <FormUser formik={formik}/>
                    </Card>

                </Form>
            }}
        </Formik>
    )
}
