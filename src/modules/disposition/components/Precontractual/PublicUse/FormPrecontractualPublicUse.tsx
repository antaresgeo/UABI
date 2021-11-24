import { Field } from 'formik';
import ErrorMessage from '../../../../../utils/ui/error_messge'
import Tooltip from 'antd/lib/tooltip';
import { FC } from 'react';

export const FormPrecontractualPublicUse = () => {
    return (
        <>
            <div className="row">
                <div className="col-4">
                    <label htmlFor="description_id" className="form-label">
                        Destinación de bien Inmueble
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="description_id"
                        aria-describedby="emailHelp"
                        placeholder="Actividades"
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
                    <label htmlFor="value_aforo_id" className="form-label">
                        Valor del contrato
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
            </div>
        </>
    )
}