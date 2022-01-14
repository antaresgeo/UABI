import { Field } from 'formik';
import ErrorMessage from './../../../../utils/ui/error_messge';
import Tooltip from 'antd/lib/tooltip';

export const Formobligation = () => {
    return (
        <>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="value_locative_repairs_id" className="form-label">
                        Valor de las reparaciones locativas.
                        <Tooltip title="Estimación de valor de las posibles reparaciones y deterioros que pueda requerir el bien inmueble, según informe realizado por la Secretaría o dependencia que tenga a cargo el inmueble">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            id="value_locative_repairs_id"
                            name="value_locative_repairs"
                            type="number"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="value_locative_repairs" />
                </div>
                <div className="col-3">
                    <label htmlFor="value_repairs_damages_id" className="form-label">
                        Valor reparaciones daños a terceros
                        <Tooltip title="estimación según informe realizado por la Secretaría o dependencia que tenga a cargo el inmueble">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            type="number"
                            id="value_repairs_damages_id"
                            name="value_repairs_damages"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="value_repairs_damages" />
                </div>
                <div className="col-6">
                    <label htmlFor="value_domiciliary_public_id" className="form-label">
                        Valor servicios públicos domiciliarios
                        <Tooltip title="incluir energía, acueducto, alcantarillado, saneamiento, gas, telefonía, internet, televisión y demás servicios suscritos con las empresas prestadoras de servicios públicos que se deban mantener al día por el uso del inmueble según informe realizado por la Secretaría o dependencia que tenga a cargo el inmueble">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            type="number"
                            id="value_domiciliary_public_id"
                            name="value_domiciliary_public"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="value_domiciliary_public" />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="surveillance_value_id" className="form-label">
                        Valor gastos de vigilancia
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
                    </div>
                    <ErrorMessage name="surveillance_value" />
                </div>
                <div className="col-3">
                    <label htmlFor="cleaning_value_id" className="form-label">
                        Valor gastos de aseo
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            type="number"
                            id="cleaning_value_id"
                            name="cleaning_value"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="cleaning_value" />
                </div>
                <div className="col-6">
                    <label htmlFor="conservation_value_id" className="form-label">
                        Valor gastos de conservación
                        <Tooltip title="mantenimiento en general que le correspondan al comodatario, el cual deberá actualizarse para cada vigencia según IPC durante el termino de duración del contrato">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            type="number"
                            id="conservation_value_id"
                            name="conservation_value"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="conservation_value" />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="administration_value_id" className="form-label">
                        Valor cuotas de administración
                        <Tooltip title="si aplica">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            type="number"
                            id="administration_value_id"
                            name="administration_value"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="administration_value" />
                </div>
                <div className="col-3">
                    <label htmlFor="network_value_id" className="form-label">
                        Valor mantenimiento de redes
                        <Tooltip title="Valor mantenimiento de redes contra incendios y/o reposición de extintores">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            type="number"
                            id="network_value_id"
                            name="network_value"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="network_value" />
                </div>
                <div className="col-6">
                    <label htmlFor="value_economic_obligations_id" className="form-label">
                        Valor de gastos y obligaciones económicas
                        <Tooltip title="Valor de todos aquellos gastos y obligaciones económicas o no que se requiera cuantificar, de manera tal que se garantice su cumplimiento o para que, ante una eventual afectación de la póliza de cumplimiento, el porcentaje del valor exigido tenga la suficiencia necesaria para que su incumplimiento quede cubierto ">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            type="number"
                            id="value_economic_obligations_id"
                            name="value_economic_obligations"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="value_economic_obligations" />
                </div>
            </div>
        </>
    );
};
