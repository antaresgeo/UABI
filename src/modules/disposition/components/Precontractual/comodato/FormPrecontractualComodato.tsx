import { Field } from 'formik';
import ErrorMessage from '../../../../../utils/ui/error_messge';
import Tooltip from 'antd/lib/tooltip';
import { FC } from 'react';

interface FormProps {
    formik: any;
}
export const FormPrecontractualComodato: FC<FormProps> = ({ formik }) => {
    return (
        <>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="loan_value_id" className="form-label">
                        Valor comodato
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            disabled={false}
                            id="loan_value_id"
                            name="loan_value"
                            type="number"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="loan_value" />
                </div>
                <div className="col-3">
                    <label htmlFor="patrimonial_value_id" className="form-label">
                        Valor Patrimonial
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            disabled={false}
                            id="patrimonial_value_id"
                            name="patrimonial_value"
                            type="number"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="patrimonial_value" />
                </div>
                <div className="col-3">
                    <label htmlFor="loan_typology_id" className="form-label">
                        Tipología del comodato
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="loan_typology_id"
                        name="loan_typology"
                        disabled={false}
                    >
                        <option key="loan_typology" value="" hidden>
                            --Seleccione tipología--
                        </option>
                        <option key="Junta de acción comunal" value="Junta de acción comunal">
                            Junta de acción comunal
                        </option>
                        <option key="Entidades animo de lucro" value="Entidades animo de lucro">
                            Entidades animo de lucro
                        </option>
                    </Field>
                    <ErrorMessage name="loan_typology" />
                </div>
                <div className="col-3">
                    <label htmlFor="competitive_process_id" className="form-label">
                        Aplica Proceso competitivo
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="competitive_process_id"
                        name="competitive_process"
                        disabled={false}
                    >
                        <option key="competitive_process" value="" hidden>
                            --Seleccione si aplica o no aplica--
                        </option>
                        <option key="Aplica" value="Aplica">
                            Aplica
                        </option>
                        <option key="No aplica" value="No aplica">
                            No aplica
                        </option>
                    </Field>
                    <ErrorMessage name="public_service" />
                </div>
            </div>
            <div className="row">
                {formik.values.competitive_process === 'Aplica' && (
                    <div className="col-3">
                        <label htmlFor="competitive_process_value_id" className="form-label">
                            Proceso competitivo
                        </label>
                        <Field
                            type="text"
                            className="form-control"
                            id="competitive_process_value_id"
                            name="competitive_process_value"
                            aria-describedby="emailHelp"
                            placeholder="proceso competitivo"
                            autoComplete="off"
                            maxLength={500}
                        />
                        <ErrorMessage name="competitive_process_value" withCount max={500} />
                    </div>
                )}
                <div className="col-3">
                    <label htmlFor="registration_date_id" className="form-label mt-3 mt-lg-0">
                        Fecha de Registro de Prediación
                    </label>
                    <Field
                        type="date"
                        id="registration_date_id"
                        name="registration_date"
                        placeholder="Fecha Final"
                        className="form-control"
                    />
                    <ErrorMessage name="registration_date" />
                </div>
                <div className="form-group col-3">
                    <label htmlFor="Horizontal_property_id" className="form-label">
                        Propiedad Horizontal
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="Horizontal_property_id"
                        name="Horizontal_property"
                        disabled={false}
                    >
                        <option key="Horizontal_property_id" value="" hidden>
                            -- Propiedad Horizontal --
                        </option>
                        <option key="si" value="si">
                            Si
                        </option>
                        <option key="no" value="no">
                            No
                        </option>
                    </Field>
                    <ErrorMessage name="Horizontal_property"/>
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
                <div className="col-3">
                    <label htmlFor="resolution_id" className="form-label">
                        ¿Aplica resolución SSS202050083439?
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="resolution_id"
                        name="resolution"
                        disabled={false}
                    >
                        <option key="resolution" value="" hidden>
                            -- Aplica resolución --
                        </option>
                        <option key="si resolución" value="si">
                            Si
                        </option>
                        <option key="no resolución" value="no">
                            No
                        </option>
                    </Field>
                    <ErrorMessage name="resolution" />
                </div>
                <div className="col-3 form-inline">
                    <label htmlFor="lockable_base_id" className="form-label">
                        Base asegurable
                        <Tooltip title="no inferior del 10%">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <div className="input-group">
                        <Field
                            id="lockable_base_id"
                            name="lockable_base"
                            className="form-control border-end-0"
                            min={10}
                            max={100}
                            type="number"
                        />
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-start-0">%</span>
                        </div>
                    </div>

                    <ErrorMessage name="lockable_base" />
                </div>
                <div className="col-3">
                    <label htmlFor="economic_exploitation_id" className="form-label">
                        ¿Autoriza explotación económica?
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="economic_exploitation_id"
                        name="economic_exploitation"
                        disabled={false}
                    >
                        <option key="economic_exploitation" value="" hidden>
                            -- Autoriza explotación económica --
                        </option>
                        <option key="si explotación" value="si">
                            Si
                        </option>
                        <option key="no explotación" value="no">
                            No
                        </option>
                    </Field>
                    <ErrorMessage name="economic_exploitation" />
                </div>
                <div
                    className={`col-${
                        formik.values.public_service !== 'si' && formik.values.competitive_process !== 'Aplica' ? 6 : 3
                    }`}
                >
                    <label htmlFor="public_service_id" className="form-label">
                        Servicios publicos por Aforo
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="public_service_id"
                        name="public_service"
                        disabled={false}
                    >
                        <option key="public_service" value="" hidden>
                            -- Servicios públicos por aforo --
                        </option>
                        <option key="si" value="si">
                            Si
                        </option>
                        <option key="no" value="no">
                            No
                        </option>
                    </Field>
                    <ErrorMessage name="public_service" />
                </div>
                {formik.values.public_service === 'si' && (
                    <div className={`col-${formik.values.competitive_process === 'Aplica' ? 6 : 3}`}>
                        <label htmlFor="value_public_service_id" className="form-label">
                            valor de servicios públicos por aforo
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
                        <ErrorMessage name="value_public_service" />
                    </div>
                )}
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
                <div className="col-6">
                    <label htmlFor="peacesafe_id" className="form-label">
                        Paz y Salvo de Rubros
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="peacesafe_id"
                        name="peacesafe"
                        aria-describedby="emailHelp"
                        placeholder="Actividades"
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="peacesafe" withCount max={200} />
                </div>
                <div className="col-6">
                    <label htmlFor="social_event_id" className="form-label">
                        Eventos sociales
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="social_event_id"
                        name="social_event"
                        aria-describedby="emailHelp"
                        placeholder="Descripción de eventos"
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="social_event" withCount max={200} />
                </div>
                <div className="col-6">
                    <label htmlFor="Action_field_id" className="form-label">
                        Campo de acción
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="Action_field_id"
                        name="Action_field"
                        aria-describedby="emailHelp"
                        placeholder="Descripción campo de acción"
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="Action_field" withCount max={200} />
                </div>

                <div className="col-6">
                    <label htmlFor="Environmental_risk_id" className="form-label">
                        Riesgos Ambientales
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="Environmental_risk_id"
                        name="Environmental_risk"
                        aria-describedby="emailHelp"
                        placeholder="Riesgos ambientales"
                        autoComplete="off"
                        maxLength={500}
                    />
                    <ErrorMessage name="Environmental_risk" withCount max={500} />
                </div>
                <div className="col-6">
                    <label htmlFor="dependence_id" className="form-label">
                        Dependencia
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="dependence_id"
                        name="dependence"
                        aria-describedby="emailHelp"
                        placeholder="Descripcion de como contribuye la dependencia"
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="dependence" withCount max={200} />
                </div>
                <div className="col-12">
                    <label htmlFor="activities_id" className="form-label">
                        Actividades
                    </label>
                    <Field
                        as="textarea"
                        className="form-control"
                        id="activities_id"
                        name="activities"
                        aria-describedby="emailHelp"
                        placeholder="Actividades"
                        autoComplete="off"
                        maxLength={500}
                    />
                    <ErrorMessage name="activities" withCount max={500} />
                </div>
            </div>
        </>
    );
};
