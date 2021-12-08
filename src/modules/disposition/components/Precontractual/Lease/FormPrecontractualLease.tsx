import { Field } from 'formik';
import ErrorMessage from '../../../../../utils/ui/error_messge';
import Tooltip from 'antd/lib/tooltip';
import { FC } from 'react';

interface FormProps {
    formik: any;
}

const FormPrecontractualLease: FC<FormProps> = ({ formik }) => {
    return (
        <>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="consecutive_number_id" className="form-label">
                        Número Consecutivo
                    </label>
                    <Field
                        type="text"
                        id="consecutive_number_id"
                        name="consecutive_number"
                        className="form-control"
                        disabled={false}
                    />
                    <ErrorMessage name="consecutive_number" />
                </div>
                <div className="col-3">
                    <label htmlFor="Canon_value_id" className="form-label">
                        Valor del canon
                    </label>
                    <Field type="text" id="Canon_value_id" name="Canon_value" className="form-control" disabled />
                    <ErrorMessage name="Canon_value" />
                </div>
                <div className="col-3">
                    <label htmlFor="IVA_id" className="form-label">
                        Visualizar IVA
                    </label>
                    <Field type="text" id="IVA_id" name="IVA" className="form-control" disabled={false} />
                    <ErrorMessage name="IVA" />
                </div>
                <div className="col-3">
                    <label htmlFor="public_service_id" className="form-label">
                        Valor de servicio público
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="public_service_id"
                        name="public_service"
                        disabled={false}
                    >
                        <option key="public_service" value="" hidden>
                            --Seleccione Servicio público--
                        </option>
                        <option key="Aforo" value="Aforo">
                            Aforo
                        </option>
                        <option key="Recobro" value="Recobro">
                            Recobro
                        </option>
                        <option key="Contador individualizado" value="Contador individualizado">
                            Contador individualizado
                        </option>
                        <option key="Prepago" value="Prepago">
                            Prepago
                        </option>
                    </Field>
                    <ErrorMessage name="public_service" />
                </div>
            </div>
            <div className="row">
                {formik.values.public_service === 'Aforo' && (
                    <div className="col-3">
                        <label htmlFor="value_aforo_id" className="form-label">
                            Valor aforo
                        </label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white border-end-0">$</span>
                            </div>
                            <Field
                                disabled={false}
                                name="value_aforo"
                                type="number"
                                id="value_aforo_id"
                                className="form-control border-start-0 text-end"
                                min={0}
                                max={9999999999}
                            />
                        </div>

                        <ErrorMessage name="value_aforo" />
                    </div>
                )}
                {formik.values.public_service === 'Recobro' && (
                    <div className="col-3">
                        <label htmlFor="recovery_value_id" className="form-label">
                            Valor Recobro
                            <Tooltip title="el valor se calcula cada mes de acuerdo al valor de factura por EPM y distribución correspondiente">
                                <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                            </Tooltip>
                        </label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white border-end-0">$</span>
                            </div>
                            <Field
                                disabled={false}
                                name="recovery_value"
                                type="number"
                                id="recovery_value_id"
                                className="form-control border-start-0 text-end"
                                min={0}
                                max={9999999999}
                            />
                        </div>

                        <ErrorMessage name="recovery_value" />
                    </div>
                )}
                {formik.values.public_service === 'Contador individualizado' && (
                    <div className="col-3">
                        <label htmlFor="counter_value_id" className="form-label">
                            Valor
                            <Tooltip title="valor facturado directamentepor EPM">
                                <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                            </Tooltip>
                        </label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white border-end-0">$</span>
                            </div>
                            <Field
                                disabled={false}
                                name="counter_value"
                                type="number"
                                id="counter_value_id"
                                className="form-control border-start-0 text-end"
                                min={0}
                                max={9999999999}
                            />
                        </div>

                        <ErrorMessage name="counter_value" />
                    </div>
                )}
                <div className="col-3">
                    <label htmlFor="administration_value_id" className="form-label">
                        Valor Administración
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            disabled={false}
                            name="administration_value"
                            type="number"
                            id="administration_value_id"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>

                    <ErrorMessage name="administration_value" />
                </div>
                <div className="col-3">
                    <label htmlFor="vigilance_value_id" className="form-label">
                        Valor Vigilancia
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            disabled={false}
                            name="vigilance_value"
                            type="number"
                            id="vigilance_value_id"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>

                    <ErrorMessage name="vigilance_value" />
                </div>
                <div className="col-3">
                    <label htmlFor="subtotal_id" className="form-label">
                        Valor Subtotal
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            disabled
                            id="subtotal_id"
                            name="subtotal"
                            type="number"
                            value={Number(formik.values.IVA) + Number(formik.values.Canon_value)}
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="subtotal" />
                </div>
                <div className="col-3">
                    <label htmlFor="total_id" className="form-label">
                        Valor Total
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            disabled
                            id="total_id"
                            name="total"
                            type="number"
                            value={Number(formik.values.IVA) + Number(formik.values.Canon_value)} //TODO: traer todos los valores para calcular el valor total
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="total" />
                </div>
                <div className="col-3">
                    <label htmlFor="registration_date_id" className="form-label mt-3 mt-lg-0">
                        Fecha de Registro
                    </label>
                    <Field
                        type="date"
                        id="registration_date_id"
                        name="registration_date"
                        placeholder="Fecha Final"
                        className="form-control"
                        disabled
                    />
                    <ErrorMessage name="registration_date" />
                </div>
                <div className="col-3">
                    <label htmlFor="prediation_number_id" className="form-label">
                        Número Prediación
                    </label>
                    <Field
                        type="text"
                        id="prediation_number_id"
                        name="prediation_number"
                        className="form-control"
                        disabled={false}
                    />
                    <ErrorMessage name="prediation_number" />
                </div>
                <div className="col-3">
                    <label htmlFor="prediation_date_id" className="form-label mt-3 mt-lg-0">
                        Fecha de Prediación
                    </label>
                    <Field
                        type="date"
                        id="prediation_date_id"
                        name="prediation_date"
                        placeholder="Fecha Final"
                        className="form-control"
                        // disabled={true}
                    />
                    <ErrorMessage name="prediation_date" />
                </div>
                <div className={`col-${formik.values.public_service === 'Prepago' ? 3 : 6}`}>
                    <label htmlFor="contract_period_id" className="form-label">
                        Duración del contrato
                        <Tooltip title="Número de meses">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <Field
                        type="number"
                        id="contract_period_id"
                        name="contract_period"
                        className="form-control"
                        disabled={false}
                        min={1}
                        max={12}
                    />
                    <ErrorMessage name="contract_period" />
                </div>
                <div className="col-6">
                    <label htmlFor="business_type_id" className="form-label">
                        Tipo de negocio
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="business_type_id"
                        name="business_type"
                        aria-describedby="emailHelp"
                        placeholder="Tipo de negocio"
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="business_type" withCount max={200} />
                </div>

                <div className="col-6">
                    <label htmlFor="coverage_id" className="form-label">
                        Mecanismo de cobertura
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="coverage_id"
                        name="coverage"
                        disabled={false}
                    >
                        <option key="public_service" value="" hidden>
                            --Seleccione Servicio público--
                        </option>
                        <option key="cumplimiento" value="cumplimiento">
                            cumplimiento
                        </option>
                        <option key="seguro arrendamiento" value="seguro arrendamiento">
                            seguro arrendamiento
                        </option>
                    </Field>
                    <ErrorMessage name="coverage" />
                </div>
                <div className="col-6">
                    <label htmlFor="environmental_risk_id" className="form-label">
                        Riesgos Ambientales
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="environmental_risk_id"
                        name="environmental_risk"
                        aria-describedby="emailHelp"
                        placeholder="Riesgos ambientales"
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="environmental_risk" withCount max={200} />
                </div>
                <div className={`col-${formik.values.public_service !== 'Prepago' ? 12 : 6}`}>
                    <label htmlFor="fines_id" className="form-label">
                        Multas
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="fines_id"
                        name="fines"
                        aria-describedby="emailHelp"
                        placeholder="Multas"
                        autoComplete="off"
                        maxLength={250}
                    />
                    <ErrorMessage name="fines" withCount max={250} />
                </div>
            </div>
        </>
    );
};

export default FormPrecontractualLease;
