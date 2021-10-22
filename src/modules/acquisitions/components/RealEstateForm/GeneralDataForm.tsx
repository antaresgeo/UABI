import { FC, useState } from 'react';
import { Field, ErrorMessage } from 'formik';
import { Card } from '../../../../utils/ui';
import LocationModal from '../../../../utils/components/LocationModal';
import { service } from '../../redux';
import { IProjectAttributes } from '../../../../utils/interfaces';
import { TextArea } from 'semantic-ui-react';
import { extractMonth, formatDate } from '../../../../utils';
interface GeneralDataFormProps {
    type?: 'view' | 'edit' | 'create';
    disabled?: boolean;
    setFieldValue: Function;
    projects: IProjectAttributes[];
    values?: any;
    onProjectSelectedChange?: (value) => void;
}

const GeneralDataForm: FC<GeneralDataFormProps> = ({
    type,
    disabled,
    setFieldValue,
    projects,
    values,
    onProjectSelectedChange,
}) => {
    return (
        <Card title="Creación de Bien Inmueble">
            <div className="row">
                <div className="form-group col-6">
                    <label htmlFor="project_id_id" className="form-label">
                        Proyecto al que pertenece
                    </label>
                    <Field
                        disabled={disabled}
                        name="project_id"
                        as="select"
                        className="form-select"
                        id="project_id_id"
                        validate={onProjectSelectedChange}
                    >
                        <option value="" disabled hidden>
                            -- Seleccione Proyecto --
                        </option>
                        {projects?.map((project, i) => {
                            const { name, id } = project;
                            return (
                                <option key={`project_${i}`} value={id}>
                                    {name.toUpperCase()}
                                </option>
                            );
                        })}
                    </Field>
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
                <div className="form-group col-4">
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
                        <option value="PÚBLICO">Público</option>
                        <option value="FISCAL">Fiscal</option>
                        <option value="MIXTO">Mixto</option>
                    </Field>
                    <span className="form-error">
                        <ErrorMessage name="destination_type" />
                    </span>
                </div>
                <div className="form-group col-4">
                    <label htmlFor="accounting_account_id" className="form-label">
                        Cuenta Contable
                    </label>
                    <Field
                        disabled={disabled}
                        name="accounting_account"
                        as="select"
                        className="form-select"
                        id="accounting_account_id"
                    >
                        <option value="" disabled hidden>
                            -- Seleccione Cuenta Contable --
                        </option>
                        <option value="PÚBLICO">Público</option>
                        <option value="FISCAL">Fiscal</option>
                        <option value="MIXTO">Mixto</option>
                        <option value="POR DEFINIR">POR DEFINIR</option>
                    </Field>
                    <span className="form-error">
                        <ErrorMessage name="accounting_account" />
                    </span>
                </div>
                <div className="form-group col-4">
                    <label htmlFor="cost_center_id" className="form-label">
                        Centro de Costos
                    </label>
                    <Field
                        disabled={disabled}
                        name="cost_center"
                        as="select"
                        className="form-select"
                        id="cost_center_id"
                    >
                        <option value="" disabled hidden>
                            -- Seleccione Centro de Costos --
                        </option>
                        <option value="PÚBLICO">Público</option>
                        <option value="FISCAL">Fiscal</option>
                        <option value="MIXTO">Mixto</option>
                        <option value="POR DEFINIR">POR DEFINIR</option>
                    </Field>
                    <span className="form-error">
                        <ErrorMessage name="cost_center" />
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-4">
                    <label htmlFor="registry_number_noc" className="form-label">
                        Número Matricula
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
                <div className="form-group col-4">
                    {type !== 'edit' && (
                        <>
                            <label htmlFor="file_id" className="form-label">
                                Documento de Matricula
                            </label>
                            <Field
                                disabled={disabled}
                                name="file"
                                id="file_id"
                                type="file"
                                className="form-control"
                                placeholder="hola"
                            />
                            <span className="form-error">
                                <ErrorMessage name="file" />
                            </span>
                        </>
                    )}
                </div>
                <div className="form-group col-4">
                    <label htmlFor="name_id" className="form-label">
                        Nombre Inmueble
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
            </div>
            <div className="row">
                <div className="form-group col-6">
                    <label htmlFor="description_id" className="form-label">
                        Descripción Inmueble
                    </label>
                    <Field
                        disabled={disabled}
                        name="description"
                        id="description_id"
                        type="text"
                        className="form-control"
                    />
                    <span className="form-error">
                        <ErrorMessage name="description" />
                    </span>
                </div>
                <div className="form-group col-2">
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
                <div className="form-group col-4">
                    <label htmlFor="zone_id" className="form-label">
                        Zona
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
                            />
                            Rural
                        </label>
                    </div>
                    <span className="form-error">
                        <ErrorMessage name="zone"></ErrorMessage>
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-4">
                    <label htmlFor="address" className="form-label">
                        Dirección
                    </label>
                    <div className="input-group">
                        <Field name="cbml" id="address" type="text" className="form-control" disabled />
                        <Field name="location" id="address" type="text" className="form-control" disabled />
                        <div className="input-group-prepend">
                            <LocationModal
                                disabled={disabled}
                                view={'general'}
                                onSave={(values) => {
                                    return service.getAddress(values).then((res) => {
                                        console.log(res);

                                        setFieldValue('location', `${res.id} | ${res.addressAsString}`, null);
                                        setFieldValue('cbml', `${res.cbml}`, null);
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <span className="form-error">
                        <ErrorMessage name="location" />
                    </span>
                </div>
                <div className="form-group col-2">
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
                <div className="form-group col-2">
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
                <div className="form-group col-4">
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
                                value={formatDate(values.audit_trail.created_on)}
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
                                value={extractMonth(values.audit_trail.created_on)}
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
