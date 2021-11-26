import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormPrecontractual from './Lease/FormPrecontractualLease';
import { Card } from '../../../../utils/ui';
import { FormRiskAnalysis } from './Lease/FormRiskAnalysis';
import { FormUser } from './FormUser';
import { ModalNotificar } from './../ModalNotificar';
import { FC } from 'react';
import { FormPrecontractualComodato } from './comodato/FormPrecontractualComodato';
import FormLider from './FormLider';
import { FormPrecontractualPublicUse } from './PublicUse/FormPrecontractualPublicUse';

interface FormPros {
    dispositionType?: string;
}
export const GeneralFormPrecontractual: FC<FormPros> = ({dispositionType}) => {
    const initialValues = {
        consecutive_number: "",
        Canon_value: 0,
        IVA: 0,
        public_service: "",
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
                    <Card
                        title={`Etapa Precontractual: ${dispositionType}`}
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
                        <FormUser formik={formik}/>
                    </Card>
                    <Card title="Análisis de riesgos">
                        <FormRiskAnalysis formik={formik} />
                    </Card>
                    {dispositionType === "arrendamiento" &&
                        <Card title="Requerimientos">
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
