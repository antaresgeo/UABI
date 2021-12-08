import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Card } from '../../../../utils/ui';
import { FormContract } from './FormContract';
import { FormUser } from '../Precontractual/FormUser';

export const GeneralDataContract = () => {
    const initialValues = {
        contract_number: '',
        type_contract: '',
        monthly_canon: '',
        subscription_date: '',
        start_date: '',
        finish_date: '',
        management_value: '',
        surveillance_value: '',
        public_service_value: '',
        dispose_area: '',
        digital_contract: '',
        manager_sabi: '',
        object_contract: '',
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
                        <Card title="Contrato">
                            <FormContract formik={formik} />
                        </Card>
                        <Card title="Datos del solicitante">
                            <FormUser formik={formik} />
                        </Card>
                    </Form>
                );
            }}
        </Formik>
    );
};
