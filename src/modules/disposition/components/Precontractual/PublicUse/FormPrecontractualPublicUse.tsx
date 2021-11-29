import { Field } from 'formik';
import ErrorMessage from '../../../../../utils/ui/error_messge'
import Tooltip from 'antd/lib/tooltip';
import { FC } from 'react';

export const FormPrecontractualPublicUse = () => {
    return (
        <>
            <div className="row">
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
                    <label htmlFor="contract_value_id" className="form-label">
                        Valor del contrato
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            disabled={false}
                            id="contract_value_id"
                            name="contract_value"
                            type="number"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="contract_value" />
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
                <div className="col-6">
                    <label htmlFor="destination_realEstate_id" className="form-label">
                        Destinación de bien Inmueble
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="destination_realEstate_id"
                        name="destination_realEstate"
                        aria-describedby="emailHelp"
                        placeholder="Actividades"
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="destination_realEstate" withCount max={200} />
                </div>

            </div>
        </>
    )
}
