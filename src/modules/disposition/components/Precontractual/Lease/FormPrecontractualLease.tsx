import { Field } from 'formik';
import ErrorMessage from '../../../../../utils/ui/error_messge'
import Tooltip from 'antd/lib/tooltip';
import { FC } from 'react';

interface FormProps {
    formik: any;

}

const FormPrecontractual: FC<FormProps> = ({ formik }) => {

    return (
        <>
            <div className="row">
                <div className="col-4">
                    <label htmlFor="consecutive_number_id" className="form-label">
                        número consecutivo
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
                <div className="col-4">
                    <label htmlFor="Canon_value_id" className="form-label">
                        Valor del canon
                    </label>
                    <Field
                        type="text"
                        id="Canon_value_id"
                        name="Canon_value"
                        className="form-control"
                        disabled

                    />
                    <ErrorMessage name="Canon_value" />
                </div>
                <div className="col-4">
                    <label htmlFor="IVA_id" className="form-label">
                        Visualizar IVA
                    </label>
                    <Field
                        type="text"
                        id="IVA_id"
                        name="IVA"
                        className="form-control"
                        disabled={false}

                    />
                    <ErrorMessage name="IVA" />
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <label htmlFor="public_service_id" className="form-label">
                        valor de servicio publico
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
                        <option key="Aforo" value="Aforo">Aforo</option>
                        <option key="Recobro" value="Recobro">Recobro</option>
                        <option key="Contador individualizado" value="Contador individualizado">Contador individualizado</option>
                        <option key="Prepago" value="Prepago">Prepago</option>

                    </Field>
                    <ErrorMessage name="public_service" />
                </div>
                {formik.values.public_service === "Aforo" &&
                    <div className="col-4">
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
                }
                {formik.values.public_service === "Recobro" &&
                    <div className="col-4">
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
                }
                {formik.values.public_service === "Contador individualizado" &&
                    <div className="col-4">
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
                }
                <div className="col-4">
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
                <div className="col-4">
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
                <div className="col-4">
                    <label htmlFor="vigilance_value_id" className="form-label">
                        Valor Sub Total
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            disabled
                            name="vigilance_value"
                            type="number"
                            value={Number(formik.values.IVA) + Number(formik.values.Canon_value)}
                            id="vigilance_value_id"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="public_service" />
                </div>
                <div className="col-4">
                    <label htmlFor="vigilance_value_id" className="form-label">
                        Valor Total
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            disabled
                            name="vigilance_value"
                            type="number"
                            value={Number(formik.values.IVA) + Number(formik.values.Canon_value)} //TODO: traer todos los valores para calcular el valor total
                            id="vigilance_value_id"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />

                    </div>
                    <ErrorMessage name="public_service" />
                </div>
                <div className="col-4">
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
                <div className="col-4">
                    <label htmlFor="consecutive_number_id" className="form-label">
                        Número Prediación
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
                <div className="col-4">
                    <label htmlFor="registration_date_id" className="form-label mt-3 mt-lg-0">
                        Fecha de Prediación
                    </label>
                    <Field
                        type="date"
                        id="registration_date_id"
                        name="registration_date"
                        placeholder="Fecha Final"
                        className="form-control"
                    // disabled={true}
                    />
                    <ErrorMessage name="registration_date" />
                </div>
                <div className="col-4">
                    <label htmlFor="description_id" className="form-label">
                        Tipo de negocio
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="description_id"
                        aria-describedby="emailHelp"
                        placeholder="Tipo de negocio"
                        name="description"
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="description" withCount max={200} />
                </div>
                <div className="col-4">
                    <label htmlFor="consecutive_number_id" className="form-label">
                        Duración del contrato
                        <Tooltip title="Número de meses">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <Field
                        type="number"
                        id="consecutive_number_id"
                        name="consecutive_number"
                        className="form-control"
                        disabled={false}
                        min={1}
                        max={12}

                    />
                    <ErrorMessage name="consecutive_number" />
                </div>
                <div className="col-4">
                    <label htmlFor="public_service_id" className="form-label">
                        Mecanismo de cobertura
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
                        <option key="cumplimiento" value="cumplimiento">cumplimiento</option>
                        <option key="seguro arrendamiento" value="seguro arrendamiento">seguro arrendamiento</option>

                    </Field>
                    <ErrorMessage name="public_service" />
                </div>
                <div className="col-4">
                    <label htmlFor="description_id" className="form-label">
                        Riesgos Ambientales
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="description_id"
                        aria-describedby="emailHelp"
                        placeholder="Riesgos ambientales"
                        name="description"
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="description" withCount max={200} />
                </div>
                <div className="col-4">
                    <label htmlFor="description_id" className="form-label">
                        Multas
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="description_id"
                        aria-describedby="emailHelp"
                        placeholder="Multas"
                        name="description"
                        autoComplete="off"
                        maxLength={250}
                    />
                    <ErrorMessage name="description" withCount max={250} />
                </div>
            </div>

        </>
    )
}

export default FormPrecontractual
