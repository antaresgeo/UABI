import { Field } from 'formik';
import { FC } from 'react';
import DocumentModal from '../../../../utils/components/DocumentsModal/index';
import ErrorMessage from '../../../../utils/ui/error_messge';
import Select from './../../../../utils/ui/select';

interface FormProps {
    formik: any;
}

export const FormContract: FC<FormProps> = ({ formik }) => {
        const dispositions = [
        "Dependencias",
        "Comodato",
        "arrendamiento",
        "ventas",
        "AEP",
        "MTEP",
        "APRED",
        "servidumbre",
        "autorizaciones"
    ]

    return (
        <>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="contract_number_id" className="form-label">
                        Número de contrato
                    </label>
                    <Field
                        type="text"
                        id="contract_number_id"
                        name="contract_number"
                        className="form-control"
                        disabled={false}
                    />
                    <ErrorMessage name="contract_number" />
                </div>
                <div className="col-3">
                    <label htmlFor="type_contract_id" className="form-label">
                        Tipo de contrato
                    </label>
                    <Field
                        component={Select}
                        name="type_contract"
                        id="type_contract_id"
                        className="w-100"
                        options={dispositions.map((realestate) => ({ id: realestate, name: realestate }))}
                    />
                    <ErrorMessage name="type_contract" />
                </div>
                <div className="col-3">
                    <label htmlFor="monthly_canon_id" className="form-label">
                        Canon Mensual
                    </label>
                    <Field
                        type="text"
                        id="monthly_canon_id"
                        name="monthly_canon"
                        className="form-control"
                        disabled={false}
                    />
                    <ErrorMessage name="monthly_canon" />
                </div>
                <div className="col-3">
                    <label htmlFor="subscription_date_id" className="form-label">
                        Fecha de suscripción
                    </label>
                    <Field
                        type="date"
                        id="subscription_date_id"
                        name="subscription_date"
                        className="form-control"
                        disabled={false}
                    />
                    <ErrorMessage name="subscription_date" />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="start_date_id" className="form-label">
                        Fecha de Inicio
                    </label>
                    <Field type="date" id="start_date_id" name="start_date" className="form-control" disabled={false} />
                    <ErrorMessage name="start_date" />
                </div>
                <div className="col-3">
                    <label htmlFor="finish_date_id" className="form-label">
                        Fecha de Terminación
                    </label>
                    <Field
                        type="date"
                        id="finish_date_id"
                        name="finish_date"
                        className="form-control"
                        disabled={false}
                    />
                    <ErrorMessage name="finish_date" />
                </div>
                <div className="col-3">
                    <label htmlFor="management_value" className="form-label">
                        Valor de administración
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            type="number"
                            id="management_value_id"
                            name="management_value"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="management_value" />
                </div>
                <div className="col-3">
                    <label htmlFor="surveillance_value_id" className="form-label">
                        Valor vigilancia
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            type="number"
                            id="surveillance_value_id"
                            name="surveillance_value"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                        <ErrorMessage name="surveillance_value" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="public_service_value_id" className="form-label">
                        Valor servicio público
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            type="number"
                            id="public_service_value_id"
                            name="public_service_value"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="public_service_value" />
                </div>
                <div className="col-3">
                    <label htmlFor="dispose_area_id" className="form-label">
                        área a disponer
                    </label>
                    <Field
                        type="number"
                        id="dispose_area_id"
                        name="dispose_area"
                        className="form-control"
                        disabled={false}
                    />
                    <ErrorMessage name="dispose_area" />
                </div>
                <div className="col-3">
                    <label htmlFor="digital_contract_id" className="form-label">
                        Contrato digital
                    </label>
                    <Field
                        id="digital_contract_id"
                        name="digital_contract"
                        component={DocumentModal}
                        btn_label="Adjuntar"
                    />
                    <ErrorMessage name="digital_contract" />
                </div>
                <div className="form-group col-3">
                    <label htmlFor="manager_sabi_id" className="form-label">
                        ¿UABI es la encargada del contrato?
                    </label>
                    <div className="form-check-inline ">
                        <label style={{ fontWeight: 400 }}>
                            <Field
                                name="manager_sabi"
                                id="manager_sabi_id"
                                type="radio"
                                className="form-check-input"
                                value="si"
                            />{' '}
                            si
                        </label>
                    </div>
                    <div className="form-check-inline ">
                        <label style={{ fontWeight: 400 }}>
                            <Field
                                name="manager_sabi"
                                id="manager_sabi_id"
                                type="radio"
                                className="form-check-input"
                                value="no"
                            />{' '}
                            no
                        </label>
                    </div>
                    <ErrorMessage name="manager_sabi" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-6">
                    <label htmlFor="object_contract_id" className="form-label">
                        Objeto del contrato
                    </label>
                    <Field
                        as="textarea"
                        disabled={false}
                        name="object_contract"
                        id="object_contract_id"
                        className="form-control"
                        maxLength={250}
                    />
                    <ErrorMessage name="object_contract" withCount max={250} />
                </div>
                <div className="form-group col-6">
                    <label htmlFor="guarantee_id" className="form-label">
                        Garantias
                    </label>
                    <Field
                        as="textarea"
                        disabled={false}
                        name="guarantee"
                        id="guarantee_id"
                        className="form-control"
                        maxLength={200}
                    />
                    <ErrorMessage name="guarantee" withCount max={200} />
                </div>
            </div>
        </>
    );
};
