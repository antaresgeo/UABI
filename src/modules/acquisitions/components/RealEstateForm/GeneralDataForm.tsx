import { FC } from 'react';
import { Field, ErrorMessage } from 'formik';
import { Card } from '../../../../utils/ui';
import LocationModal from '../../../../utils/components/LocationModal';
import { service } from '../../redux';
import { IProjectAttributes } from '../../../../utils/interfaces';
import { extractMonth, formatDate } from '../../../../utils';
import Select from '../../../../utils/ui/select';
import Tooltip from 'antd/lib/tooltip';

interface GeneralDataFormProps {
    type?: 'view' | 'edit' | 'create';
    disabled?: boolean;
    formik: any;
    projects: IProjectAttributes[];
    onProjectSelectedChange?: (value) => void;
}

const GeneralDataForm: FC<GeneralDataFormProps> = ({ type, disabled, formik, projects, onProjectSelectedChange }) => {
    return (
        <Card
            title="Información del proyecto"
            actions={
                [
                    // <div className="d-flex flex-row-reverse px-3 py-1">
                    //     <button type="button" className="btn btn-primary">
                    //         Guardar
                    //     </button>
                    // </div>,
                ]
            }
        >
            <div className="row">
                <div className="form-group col-6">
                    <label htmlFor="project_id_id" className="form-label">
                        Proyecto al que pertenece
                    </label>
                    <Field
                        disabled={disabled}
                        className="w-100"
                        options={projects}
                        mode="multiple"
                        name="project_id"
                        component={Select}
                        id="project_id_id"
                        validate={onProjectSelectedChange}
                    />
                    <span className="form-error">
                        <ErrorMessage name="project_id" />
                    </span>
                </div>
                <div className="form-group col-6">
                    <label htmlFor="dependency_id" className="form-label">
                        Dependencia a cargo
                    </label>
                    <Field disabled={disabled} name="dependency" as="select" className="form-select" id="dependency_id">
                        <option value="" disabled hidden>
                            -- Seleccione Dependencia --
                        </option>
                        <option value="Secretaría Suministros">Secretaría Suministros</option>
                        <option value="Secretaría Salud">Secretaría Salud</option>
                        <option value="Secretaría Cultura">Secretaría Cultura</option>
                        <option value="POR DEFINIR">POR DEFINIR</option>
                    </Field>
                    <span className="form-error">
                        <ErrorMessage name="dependency" />
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-3">
                    <label htmlFor="cost_center_id" className="form-label">
                        Centro de Costos
                    </label>
                    <Field disabled name="cost_center" type="text" className="form-control" id="cost_center_id" />
                    {/*
                        <option value="" disabled hidden>
                            -- Seleccione Centro de Costos --
                        </option>
                        <option value="PÚBLICO">Público</option>
                        <option value="FISCAL">Fiscal</option>
                        <option value="MIXTO">Mixto</option>
                        <option value="POR DEFINIR">POR DEFINIR</option>
                    */}
                    <span className="form-error">
                        <ErrorMessage name="cost_center" />
                    </span>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="tipology_id" className="form-label">
                        Tipología
                    </label>
                    <Field disabled={disabled} name="tipology" id="tipology_id" as="select" className="form-select">
                        <option value="" disabled hidden>
                            -- Seleccione Tipología --
                        </option>
                        <option value="Agrícola">Agrícola</option>
                        <option value="Agroindustrial">Agroindustrial</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Cultural">Cultural</option>
                        <option value="Agropecuario">Agropecuario</option>
                        <option value="Educativo">Educativo</option>
                        <option value="Forestal">Forestal</option>
                        <option value="Habitacional">Habitacional</option>
                        <option value="Institucional">Institucional</option>
                        <option value="Minero">Minero</option>
                        <option value="Pecuario">Pecuario</option>
                        <option value="Recreación">Recreación</option>
                        <option value="Religioso">Religioso</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Salubridad">Salubridad</option>
                        <option value="Servicios">Servicios</option>
                        <option value="Especiales">Especiales</option>
                        <option value="Uso Publico">Uso Publico</option>
                    </Field>
                    <span className="form-error">
                        <ErrorMessage name="tipology" />
                    </span>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="accounting_account_id" className="form-label">
                        Cuenta Contable
                    </label>
                    <Field
                        disabled
                        name="accounting_account"
                        type="text"
                        className="form-control"
                        id="accounting_account_id"
                    />
                    {/*
                        <option value="" disabled hidden>
                            -- Seleccione Cuenta Contable --
                        </option>
                        <option value="PÚBLICO">Público</option>
                        <option value="FISCAL">Fiscal</option>
                        <option value="MIXTO">Mixto</option>
                        <option value="POR DEFINIR">POR DEFINIR</option>
                    */}
                    <span className="form-error">
                        <ErrorMessage name="accounting_account" />
                    </span>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="destination_type_id" className="form-label">
                        Tipo Destinación
                    </label>
                    <Field
                        disabled={disabled}
                        name="destination_type"
                        as="select"
                        className="form-select"
                        id="destination_type_id"
                    >
                        <option value="" disabled hidden>
                            -- Seleccione Destinación --
                        </option>
                        <option value="PÚBLICO">Uso Público</option>
                        <option value="FISCAL">Fiscal</option>
                        <option value="MIXTO">Mixto</option>
                    </Field>
                    <span className="form-error">
                        <ErrorMessage name="destination_type" />
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-3">
                    <label htmlFor="name_id" className="form-label">
                        Nombre Inmueble
                        <Tooltip title="Lorem impsu texto descriptivo">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <Field
                        disabled={disabled}
                        name="name"
                        id="name_id"
                        type="text"
                        className="form-control"
                        autoComplete="off"
                    />
                    <span className="form-error">
                        <ErrorMessage name="name" />
                    </span>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="active_code_id" className="form-label">
                        Codigo Activo
                    </label>
                    <Field
                        disabled={disabled}
                        name="active_code"
                        id="active_code_id"
                        type="text"
                        className="form-control"
                        autoComplete="off"
                    />
                    <span className="form-error">
                        <ErrorMessage name="active_code" />
                    </span>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="zone_id" className="form-label">
                        Zona del Bien Inmueble
                    </label>

                    <div className="form-check-inline me-5">
                        <label style={{ fontWeight: 400 }}>
                            <Field
                                disabled={disabled}
                                name="zone"
                                id="zone_id"
                                type="radio"
                                className="form-check-input"
                                value="Urbano"
                            />{' '}
                            Urbano
                        </label>
                    </div>
                    <div className="form-check-inline me-5">
                        <label style={{ fontWeight: 400 }}>
                            <Field
                                disabled={disabled}
                                name="zone"
                                id="zone_id"
                                type="radio"
                                className="form-check-input"
                                value="Rural"
                            />{' '}
                            Rural
                        </label>
                    </div>
                    <span className="form-error">
                        <ErrorMessage name="zone"></ErrorMessage>
                    </span>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="registry_number_noc" className="form-label">
                        Número de matrícula
                        <Tooltip title="Lorem impsu texto descriptivo">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <Field
                        type="text"
                        name="registry_number"
                        className="form-control"
                        id="registry_number_noc"
                        autoComplete="off"
                        placeholder=""
                        disabled={disabled}
                        maxLength={21}
                    />
                    <span className="form-error">
                        <ErrorMessage name="registry_number" />
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-3">
                    <label htmlFor="patrimonial_value_id" className="form-label">
                        Valor Patrimonial
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            disabled={disabled}
                            name="patrimonial_value"
                            id="patrimonial_value_id"
                            type="number"
                            className="form-control text-end"
                            style={{ borderLeft: 'none' }}
                            maxLength={200}
                        />
                    </div>
                    <span className="form-error">
                        <ErrorMessage name="patrimonial_value"></ErrorMessage>
                    </span>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="reconstruction_value_id" className="form-label">
                        Valor de reconstruccion
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            disabled={disabled}
                            name="reconstruction_value"
                            type="number"
                            id="reconstruction_value_id"
                            className="form-control border-start-0"
                        />
                    </div>
                    <span className="form-error">
                        <ErrorMessage name="reconstruction_value" />
                    </span>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="total_area_id" className="form-label">
                        Area Total
                    </label>
                    <div className="input-group">
                        <Field
                            disabled={disabled}
                            name="total_area"
                            type="number"
                            id="total_area_id"
                            className="form-control border-end-0"
                        />
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-start-0">
                                m<sup>2</sup>
                            </span>
                        </div>
                    </div>
                    <span className="form-error">
                        <ErrorMessage name="total_area" />
                    </span>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="total_percentage_id" className="form-label">
                        Porcentaje Total
                    </label>
                    <div className="input-group">
                        <Field
                            disabled={disabled}
                            name="total_percentage"
                            id="total_percentage_id"
                            className="form-control border-end-0"
                            min={0}
                            max={100}
                            type="number"
                        />
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-start-0">%</span>
                        </div>
                    </div>
                    <span className="form-error">
                        <ErrorMessage name="total_percentage"></ErrorMessage>
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-6">
                    <label htmlFor="material_id" className="form-label">
                        Materiales de construccion
                    </label>
                    <Field
                        component={Select}
                        id="material_id"
                        name="materials"
                        disabled={disabled}
                        className="w-100"
                        options={[
                            { name: 'Hormigón', id: 1 },
                            { name: 'Madera', id: 2 },
                        ]}
                        mode="multiple"
                    />
                    <span className="form-error">
                        <ErrorMessage name="materials"></ErrorMessage>
                    </span>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="address" className="form-label">
                        CBML
                    </label>
                    <Field name="cbml" id="address" type="text" className="form-control" disabled />
                    <span className="form-error">
                        <ErrorMessage name="cbml" />
                    </span>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="address" className="form-label">
                        Dirección
                    </label>
                    <div className="input-group">
                        <Field name="location" id="address" type="text" className="form-control" disabled />
                        <div className="input-group-prepend">
                            <LocationModal
                                disabled={disabled}
                                view="general"
                                zone={formik.values.zone}
                                onSave={(values) => {
                                    return service.getAddress(values).then((res) => {
                                        formik.setFieldValue('location', `${res.id} | ${res.addressAsString}`, null);
                                        formik.setFieldValue('cbml', `${res.cbml}`, null);
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <span className="form-error">
                        <ErrorMessage name="location" />
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-12">
                    <label htmlFor="description_id" className="form-label">
                        Descripción del inmueble
                        <Tooltip title="Lorem impsu texto descriptivo">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <Field
                        disabled={disabled}
                        name="description"
                        id="description_id"
                        as="textarea"
                        className="form-control"
                    />
                    <div className="row">
                        <div className="col">
                            <span className="text-danger text-left d-block w-100 mt-1" style={{ height: '22px' }}>
                                <ErrorMessage name="description" />
                            </span>
                        </div>
                        <div className="col">
                            <span className="text-end d-block w-100 mt-1" style={{ height: '22px', color: '#F28C02' }}>
                                {formik.values.description.length}/1000
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {type === 'view' && (
                <>
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="audit_trail_created_by_id" className="form-label">
                                Creado por
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="audit_trail_created_by_id"
                                name="audit_trail.created_by"
                                disabled
                            />
                            <span className="form-error" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="audit_trail_created_on_id" className="form-label">
                                Fecha creación
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="audit_trail_created_on_id"
                                name="audit_trail.created_on"
                                value={formatDate(formik.values.audit_trail?.created_on)}
                                disabled
                            />
                            <span className="form-error" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="sociedad_id" className="form-label">
                                Sociedad
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="sociedad_id"
                                name="sociedad"
                                value="FIMM"
                                disabled
                            />
                            <span className="form-error" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="importe_contabilidad_id" className="form-label">
                                Importe Contabilidad
                            </label>
                            <Field
                                type="number"
                                className="form-control"
                                id="importe_contabilidad_id"
                                name="importe_contabilidad"
                                disabled
                            />
                            <span className="form-error" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="periodo_contable_id" className="form-label">
                                Periodo contable
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="periodo_contable_id"
                                name="periodo_contable"
                                value={extractMonth(formik.values.audit_trail?.created_on)}
                                disabled

                                // EL MES
                            />
                            <span className="form-error" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="contrapartida_id" className="form-label">
                                Contrapartida
                            </label>
                            <Field
                                type="number"
                                className="form-control"
                                id="contrapartida_id"
                                name="contrapartida"
                                disabled
                            />
                            <span className="form-error" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="comentarios_id" className="form-label">
                                Comentarios
                            </label>
                            <Field
                                as="textarea"
                                className="form-control"
                                id="comentarios_id"
                                name="comentarios"
                                placeholder="Comentarios y anotaciones"
                            />
                            <span className="form-error" />
                        </div>
                    </div>
                </>
            )}
        </Card>
    );
};

export default GeneralDataForm;
