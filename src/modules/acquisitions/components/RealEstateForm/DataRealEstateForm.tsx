import { Field } from 'formik';
import { FC, useState } from 'react';
import ErrorMessage from '../../../../utils/ui/error_messge';
import { IProjectAttributes, IRealEstateAttributes } from '../../../../utils/interfaces';
import Select from '../../../../utils/ui/select';
import Tooltip from 'antd/lib/tooltip';
import { service } from '../../redux';
import LocationModal from '../../../../utils/components/Location/LocationModal';
import { extractMonth, formatDate } from '../../../../utils';
import CheckboxGroup from 'react-checkbox-group';
import DocumentModal from '../../../../utils/components/DocumentsModal/index';
import dependencias from '../../dependencias';

interface DataRealEstateFormProps {
    type?: 'view' | 'edit' | 'create';
    disabled?: boolean;
    formik: any;
    projects: IProjectAttributes[];
    onProjectSelectedChange?: (value) => void;
    project?: any;
    inventory?: boolean;
    englobe?: boolean;
}

export const DataRealEstateForm: FC<DataRealEstateFormProps> = ({
    type,
    disabled,
    formik,
    projects,
    project,
    inventory,
    englobe,
    onProjectSelectedChange,
}) => {
    const [subs, set_subs] = useState<any[]>([]);
    const onChangeActiveType = (active_types, setFieldValue) => (e) => {
        const data_now = [...active_types];
        const new_value = e.target.value;
        const key = 'Lote';
        let aux_data = [];
        if (!data_now.includes(new_value)) {
            if (data_now.includes(key)) {
                aux_data = [key, new_value];
            } else {
                if (new_value === key) {
                    aux_data = [key, ...data_now];
                } else {
                    aux_data = [new_value];
                }
            }
        } else {
            aux_data = [...data_now].filter((x) => x !== new_value);
        }
        setFieldValue('active_type', aux_data, false);
    };

    const format_list = (list) => {
        if (list && Array.isArray(list)) {
            let aux_list = [...list];
            aux_list = aux_list.map((d: any) => ({
                name: d.name,
                id: d.name,
            }));
            if (aux_list.length > 0) {
                return aux_list;
            }
        }
        return [];
    };
    const dependency_ops = format_list(dependencias);
    const active_type = ['Lote', 'Mejora', 'Construccion', 'Construccion para demoler', 'Mejora para demoler'];
    return (
        <>
            <div className="row">
                <div className="form-group col-6">
                    <label htmlFor="project_id_id" className="form-label">
                        Proyecto al que pertenece
                    </label>
                    <Field
                        disabled={disabled}
                        options={projects}
                        name="project_id"
                        component={Select}
                        id="project_id_id"
                        extra_on_change={onProjectSelectedChange}
                    />
                    <ErrorMessage name="project_id" />
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
                    <ErrorMessage name="tipology" />
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
                    <ErrorMessage name="accounting_account" />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="dependency_id" className="form-label">
                        Dependecia
                    </label>
                    <Field
                        component={Select}
                        name="dependency"
                        id="dependency_id"
                        disabled={disabled || dependency_ops.length === 0 || project?.id !== 0}
                        placeholder="Selecciona una Dependencia"
                        options={dependency_ops}
                        showSearch
                        extra_on_change={(value) => {
                            if (value) {
                                const dependency = dependencias.find((d) => d.name === value);
                                const _subs = format_list(dependency.subs);
                                formik.setFieldValue('subdependency', dependency.name);
                                formik.setFieldValue('cost_center', dependency.cost_center);
                                formik.setFieldValue('management_center', dependency.management_center);
                                set_subs(_subs);
                            }
                        }}
                        filterOption={(input, option) => {
                            return option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                        }}
                    />
                    <ErrorMessage name="dependency" />
                </div>
                <div className="col-3">
                    <label htmlFor="subdependency_id" className="form-label">
                        Sub. Dependecia
                    </label>
                    <Field
                        component={Select}
                        name="subdependency"
                        id="subdependency_id"
                        disabled={disabled || !formik.values.dependency || subs.length === 0 || project?.id !== 0}
                        placeholder="Selecciona una Sub. Dependencia"
                        options={subs}
                        showSearch
                        allowClear
                        extra_on_change={(value) => {
                            if (value) {
                                const dependency = dependencias.find((d) => d.name === formik.values.dependency);
                                const subdependency = dependency.subs.find((d) => d.name === value);
                                formik.setFieldValue('cost_center', subdependency.cost_center);
                            }
                        }}
                        filterOption={(input, option) => {
                            return option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                        }}
                    />
                    <ErrorMessage name="subdependency" />
                </div>
                <div className="form-group col-3">
                    <label htmlFor="management_center_id" className="form-label">
                        Centro Gestor
                    </label>
                    <Field
                        disabled
                        type="text"
                        className="form-control"
                        name="management_center"
                        id="management_center_id"
                    />
                    <ErrorMessage name="cost_center" />
                </div>
                <div className="form-group col-3">
                    <label htmlFor="cost_center_id" className="form-label">
                        Centro de Costos
                    </label>
                    <Field disabled type="text" className="form-control" name="cost_center" id="cost_center_id" />
                    <ErrorMessage name="cost_center" />
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
                        maxLength={200}
                    />

                    <ErrorMessage name="name" withCount max={200} />
                </div>
                <div className="form-group col-3">
                    <label htmlFor="registry_number_noc" className="form-label">
                        Número matrícula
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
                        maxLength={20}
                    />
                    <ErrorMessage name="registry_number" withCount max={20} />
                </div>
                <div className="form-group col-3">
                    <label htmlFor="active_code_id" className="form-label">
                        Código Activo
                    </label>
                    <Field
                        disabled
                        name="sap_id"
                        id="sap_id_id"
                        type="text"
                        className="form-control"
                        autoComplete="off"
                    />
                    <ErrorMessage name="sap_id" />
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

                    <ErrorMessage name="destination_type" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-3">
                    <label htmlFor="patrimonial_value_id" className="form-label">
                        Valor Patrimonial
                    </label>
                    <div className="input-group w-100">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            //disabled
                            name="patrimonial_value"
                            id="patrimonial_value_id"
                            type="number"
                            className="form-control text-end"
                            style={{ borderLeft: 'none' }}
                            min={0}
                            max={99999999999999999999}
                        />
                    </div>
                    <ErrorMessage name="patrimonial_value" />
                </div>
                <div className="form-group col-3">
                    <label htmlFor="reconstruction_value_id" className="form-label">
                        Valor de reconstrucción
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
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>

                    <ErrorMessage name="reconstruction_value" />
                </div>
                <div className="form-group col-3">
                    <label htmlFor="total_area_id" className="form-label">
                        Área Total
                    </label>
                    <div className="input-group">
                        <Field
                            disabled={disabled}
                            name="total_area"
                            type="number"
                            id="total_area_id"
                            className="form-control border-end-0"
                            min={0}
                        />
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-start-0">
                                m<sup>2</sup>
                            </span>
                        </div>
                    </div>

                    <ErrorMessage name="total_area" />
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

                    <ErrorMessage name="total_percentage"></ErrorMessage>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-3">
                    <label htmlFor="material_id" className="form-label">
                        Materiales de construcción
                    </label>
                    <Field
                        component={Select}
                        id="material_id"
                        name="materials"
                        disabled={disabled}
                        className="w-100"
                        options={[
                            { name: 'Hormigón', id: 'Hormigón' },
                            { name: 'Madera', id: 'Madera' },
                        ]}
                        mode="multiple"
                    />

                    <ErrorMessage name="materials"></ErrorMessage>
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

                    <ErrorMessage name="zone"></ErrorMessage>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="address" className="form-label">
                        CBML
                    </label>
                    <Field name="address.cbml" id="address" type="text" className="form-control" disabled />

                    <ErrorMessage name="cbml" />
                </div>
                <div className="form-group col-3">
                    <label htmlFor="address" className="form-label">
                        Dirección
                    </label>
                    <div className="input-group">
                        <Field name="address.name" id="address" type="text" className="form-control" disabled />
                        <div className="input-group-prepend">
                            <LocationModal
                                disabled={disabled}
                                view="general"
                                zone={formik.values.zone}
                                onSave={(values) => {
                                    delete values.country_name;
                                    delete values.state_name;
                                    delete values.city_name;
                                    delete values.commune_name;
                                    delete values.neighborhood_name;
                                    return service.getAddress(values).then((res) => {
                                        console.log(res);
                                        formik.setFieldValue('address.id', `${res.id}`, false);
                                        formik.setFieldValue('address.name', `${res.addressAsString}`, false);
                                        formik.setFieldValue('address.cbml', `${res.cbml}`, false);
                                    });
                                }}
                            />
                        </div>
                    </div>

                    <ErrorMessage name="location" />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <label className="form-label">Tipo de activo</label>
                    <div style={{ height: '33.5px', lineHeight: '33.5px' }}>
                        {active_type.map((item, i) => {
                            return (
                                <label key={i} className="d-inline-block ms-1 me-1">
                                    <Field
                                        type="checkbox"
                                        name="active_type"
                                        value={item}
                                        className="me-2"
                                        onChange={onChangeActiveType(formik.values.active_type, formik.setFieldValue)}
                                    />
                                    {item}
                                </label>
                            );
                        })}
                    </div>
                    <ErrorMessage name="active_type" />
                </div>
            </div>
            {englobe && (
                <div className="row">
                    <div className="col-8">
                        <label htmlFor="form-select" className="form-label">
                            Adjuntar Matrícula
                        </label>
                        <Field
                            name="document"
                            component={DocumentModal}
                            btn_label="Adjuntar"

                        />
                        <ErrorMessage name="document" />
                    </div>
                </div>
            )}
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
                        maxLength={1000}
                    />
                    <ErrorMessage name="description" withCount max={1000} />
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
                            <ErrorMessage />
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
                            <ErrorMessage />
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
                            <ErrorMessage />
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
                            <ErrorMessage />
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
                            <ErrorMessage />
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
                            <ErrorMessage />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="assignments" className="form-label">
                                Asignaciones
                            </label>
                            <Field
                                type="number"
                                className="form-control"
                                id="assignments"
                                name="assignments"
                                disabled
                            />
                            <ErrorMessage />
                        </div>
                        <div className="col-4">
                            <label htmlFor="availability_type" className="form-label">
                                Tipo de uso disponibilidad
                            </label>
                            <Field
                                type="number"
                                className="form-control"
                                id="availability_type"
                                name="availability_type"
                                disabled={inventory}
                            />
                            <ErrorMessage />
                        </div>
                        <div className="col-4">
                            <label htmlFor="utilization_value_id" className="form-label">
                                Valor Aprovechamiento
                            </label>
                            <Field
                                type="number"
                                className="form-control"
                                id="utilization_value_id"
                                name="utilization_value"
                                disabled={inventory}
                            />
                            <ErrorMessage />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="authorization_value_id" className="form-label">
                                Valor de Autorización
                            </label>
                            <Field
                                type="number"
                                className="form-control"
                                id="authorization_value_id"
                                name="authorization_value"
                                disabled={inventory}
                            />
                            <ErrorMessage />
                        </div>
                        <div className="col-4">
                            <label htmlFor="canon_value_id" className="form-label">
                                Valor del Canon
                            </label>
                            <Field
                                type="number"
                                className="form-control"
                                id="canon_value_id"
                                name="canon_value"
                                disabled={inventory}
                            />
                            <ErrorMessage />
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
                            <ErrorMessage />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
