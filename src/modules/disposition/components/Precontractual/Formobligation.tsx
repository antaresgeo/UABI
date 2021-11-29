import { Field } from 'formik';
import ErrorMessage from './../../../../utils/ui/error_messge';
import Tooltip from 'antd/lib/tooltip';

export const Formobligation = () => {
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="recovery_value_id" className="form-label">
                        Valor de las reparaciones locativas y deterioros a cargo del comodatario.
                        <Tooltip title="Estimación de valor de las posibles reparaciones y deterioros que pueda requerir el bien inmueble, según informe realizado por la Secretaría o dependencia que tenga a cargo el inmueble">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <Field
                        type="number"
                        id="value_public_service_id"
                        name="value_public_service"
                        className="form-control"
                        disabled={false}
                        min={1}
                        max={12}

                    />
                    <ErrorMessage name="recovery_value" />
                </div>
                <div className="col-6">
                    <label htmlFor="recovery_value_id" className="form-label">
                        Valor de eventuales reparaciones por daños a terceros
                        <Tooltip title="estimación según informe realizado por la Secretaría o dependencia que tenga a cargo el inmueble">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <Field
                        type="number"
                        id="value_public_service_id"
                        name="value_public_service"
                        className="form-control"
                        disabled={false}
                        min={1}
                        max={12}

                    />
                    <ErrorMessage name="recovery_value" />
                </div>

            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="recovery_value_id" className="form-label">
                        Valor de los servicios públicos domiciliarios
                        <Tooltip title="incluir energía, acueducto, alcantarillado, saneamiento, gas, telefonía, internet, televisión y demás servicios suscritos con las empresas prestadoras de servicios públicos que se deban mantener al día por el uso del inmueble según informe realizado por la Secretaría o dependencia que tenga a cargo el inmueble">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <Field
                        type="number"
                        id="value_public_service_id"
                        name="value_public_service"
                        className="form-control"
                        disabled={false}
                        min={1}
                        max={12}

                    />
                    <ErrorMessage name="recovery_value" />
                </div>
                <div className="col-3">
                    <label htmlFor="recovery_value_id" className="form-label">
                        Valor gastos de vigilancia
                    </label>
                    <Field
                        type="number"
                        id="value_public_service_id"
                        name="value_public_service"
                        className="form-control"
                        disabled={false}
                        min={1}
                        max={12}

                    />
                    <ErrorMessage name="recovery_value" />
                </div>
                <div className="col-3">
                    <label htmlFor="recovery_value_id" className="form-label">
                        Valor gastos de aseo
                    </label>
                    <Field
                        type="number"
                        id="value_public_service_id"
                        name="value_public_service"
                        className="form-control"
                        disabled={false}
                        min={1}
                        max={12}

                    />
                    <ErrorMessage name="recovery_value" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="recovery_value_id" className="form-label">
                        Valor gastos de conservación
                        <Tooltip title="mantenimiento en general que le correspondan al comodatario, el cual deberá actualizarse para cada vigencia según IPC durante el termino de duración del contrato">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <Field
                        type="number"
                        id="value_public_service_id"
                        name="value_public_service"
                        className="form-control"
                        disabled={false}
                        min={1}
                        max={12}

                    />
                    <ErrorMessage name="recovery_value" />
                </div>
                <div className="col-6">
                    <label htmlFor="recovery_value_id" className="form-label">
                        Valor cuotas de administración
                        <Tooltip title="si aplica">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <Field
                        type="number"
                        id="value_public_service_id"
                        name="value_public_service"
                        className="form-control"
                        disabled={false}
                        min={1}
                        max={12}

                    />
                    <ErrorMessage name="recovery_value" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="recovery_value_id" className="form-label">
                        Valor mantenimiento de redes
                        <Tooltip title="Valor mantenimiento de redes contra incendios y/o reposición de extintores">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <Field
                        type="number"
                        id="value_public_service_id"
                        name="value_public_service"
                        className="form-control"
                        disabled={false}
                        min={1}
                        max={12}

                    />
                    <ErrorMessage name="recovery_value" />
                </div>
                <div className="col-6">
                    <label htmlFor="recovery_value_id" className="form-label">
                        Valor de gastos y obligaciones económicas
                        <Tooltip title="Valor de todos aquellos gastos y obligaciones económicas o no que se requiera cuantificar, de manera tal que se garantice su cumplimiento o para que, ante una eventual afectación de la póliza de cumplimiento, el porcentaje del valor exigido tenga la suficiencia necesaria para que su incumplimiento quede cubierto ">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <Field
                        type="number"
                        id="value_public_service_id"
                        name="value_public_service"
                        className="form-control"
                        disabled={false}
                        min={1}
                        max={12}

                    />
                    <ErrorMessage name="recovery_value" />
                </div>
            </div>
        </>
    )
}
