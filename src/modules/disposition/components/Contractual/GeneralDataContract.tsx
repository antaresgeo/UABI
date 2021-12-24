import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Card } from '../../../../utils/ui';
import { FormContract } from './FormContract';
import { FormUser } from '../Precontractual/FormUser';
import { FC } from 'react';
import ViewPerson from './../Precontractual/ViewPerson';

interface FormPros {
    innerRef?: any;
    realEstate?: any;
    onSubmit?: (values, form?, isFinish?: boolean) => Promise<any>;
    values_contract?: any;
    dispositionType?: string;
}


export const GeneralDataContract: FC<FormPros> = ({ onSubmit, innerRef, realEstate, values_contract, dispositionType }) => {
    const initialValues = {
        decree_number: "",
        decree_date: "",
        act_number: "",
        minutes_date: "",
        contract_decree: "",
        manager_sabi: "",
        dispose_area: "",
        subscription_date: "",
        finish_date: "",
        object_contract: "",
        guarantee: "",
        type_contract: dispositionType,
        secretary: {
            name: "",
            id_number: "",
        },
        ...values_contract
    };
    const submit = (values, actions) => {
        onSubmit(values, actions).then(() => {
            actions.setSubmitting(false);
            actions.resetForm();
        });
    };

    const schema = Yup.object().shape({});
    return (
        <>
            <div className="col-3-12">
                <div className="content_box_table">
                    <div
                        className="title"
                        style={{ borderBottom: '1px solid #e2e4e4', color: '#2F2D2D', fontSize: '14px' }}
                    >
                        Informacion Previa del Contrato: 36000000000
                    </div>
                    <div className="table_content" style={{ margin: 7 }}>
                        <div className="detailForm" style={{ width: '100%' }}>
                            <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                                <div className="col-3">
                                    <label htmlFor="">Tipo de Contrato</label>
                                    <div className="my-3">{dispositionType}</div>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="">Canon Mensual</label>
                                    <div className="my-3">{realEstate.canyon_value}</div>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="">Valor de Administración</label>
                                    <div className="my-3">-</div>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="">Valor de Vigilancia</label>
                                    <div className="my-3">-</div>
                                </div>
                            </div>
                            {/* TODO: PONER CAMPO CUANDO TENGA DOCUMENTO DE USO PUBLICO */}
                            {/* <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                                <div className="col-3">
                                    <label htmlFor="">Valor Servicio Público</label>
                                    <div className="my-3">-</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Formik enableReinitialize onSubmit={submit} innerRef={innerRef} initialValues={initialValues} validationSchema={schema} >
                {(formik) => {
                    return (
                        <Form>
                            <Card title={`Informacion Contrato de ${dispositionType !== "Comodato" && dispositionType !== "arrendamiento" ? "" : dispositionType}`}>
                                <FormContract formik={formik} />
                            </Card>
                        </Form>
                    );
                }}
            </Formik>
            <ViewPerson title={`Información del ${dispositionType === "arrendamiento" ? "Arrendador" : dispositionType === "Comodato" ? "Comodante" : ""  }`}/> {/*encargado */}
            <ViewPerson title={`Información del ${dispositionType === "arrendamiento" ? "Arrendatario" : dispositionType === "Comodato" ? "Comodatario" : ""  }`}/>{/*solicitante */}
            <ViewPerson title='Informacion del Representante Legal'/>

        </>
    );
};
