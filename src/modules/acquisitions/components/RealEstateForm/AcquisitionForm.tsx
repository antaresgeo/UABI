import React, { FC, useEffect, useState } from 'react';
import CheckboxGroup from 'react-checkbox-group';
import { AdquisitionsItf } from '../../../../utils/interfaces';
import { Formik, Form, Field } from 'formik';
import ErrorMessage from '../../../../utils/ui/error_messge';
import LocationModal from '../../../../utils/components/Location/LocationModal';
import * as Yup from 'yup';
import Tooltip from 'antd/lib/tooltip';

interface AcquisitionsFromProps {
    innerRef?: any;
    type?: 'view' | 'edit' | 'create';
    disabled?: boolean;
    acquisition?: AdquisitionsItf;
    onChange: (values, count) => Promise<any>;
}

const active_type = ['Lote', 'Mejora', 'Construccion', 'Construccion para demoler', 'Mejora para demoler'];

const AcquisitionsFrom: FC<AcquisitionsFromProps> = ({ type, disabled, acquisition, onChange, innerRef }) => {
    const initial_values = {
        acquisition_type: '',
        construction_area: 0,
        active_type: [],
        title_type: '',
        act_number: '',
        act_value: 0,
        plot_area: 0,
        acquired_percentage: 0,
        origin: '',
        entity_type: '',
        entity_number: '',
        city: '',
        city_name: '',
        real_estate_id: '',
        ...acquisition,
    };

    const schema = Yup.object().shape({});

    const submit = (values, form) => {
        form.setSubmitting(true);
        onChange(values, form).then(() => {
            form.setSubmitting(false);
            form.resetForm();
        });
    };

    return (
        <Formik
            enableReinitialize
            onSubmit={submit}
            initialValues={initial_values}
            validationSchema={schema}
            innerRef={innerRef}
        >
            {({ values, isValid, isSubmitting, setFieldValue, setValues }) => {
                return (
                    <Form>
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="acquisition_type_id" className="form-label">
                                    Tipo de Adquisición
                                </label>
                                <Field
                                    as="select"
                                    className="form-select"
                                    name="acquisition_type"
                                    id="acquisition_type_id"
                                >
                                    <option value="" disabled hidden>
                                        -- Seleccione Tipo de Adquisición --
                                    </option>
                                    <option value="Compraventa">Compraventa</option>
                                    <option value="Donación">Donación</option>
                                    <option value="Expropiación">Expropiación</option>
                                    <option value="Permuta">Permuta</option>
                                    <option value="Cesión a título gratuito">Cesión a título gratuito</option>
                                    <option value="Dación en pago">Dación en pago</option>
                                    <option value="Obigaciones Urbanísticas">Obigaciones Urbanísticas</option>
                                </Field>
                                <ErrorMessage name="acquisition_type" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="title_type_id" className="form-label">
                                    Tipo de Título
                                </label>
                                <Field as="select" className="form-select" name="title_type" id="title_type_id">
                                    <option value="">-- Seleccione Tipo de Título --</option>
                                    <option value="Escritura">Escritura</option>
                                    <option value="Certificado tradición y libertad">
                                        Certificado tradición y libertad
                                    </option>
                                    <option value="Acta de liquidación">Acta de liquidación</option>
                                    <option value="Acta de liquidación">Resolucion</option>
                                </Field>
                                <ErrorMessage name="title_type" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="act_number_id" className="form-label">
                                    N° acto administrativo
                                </label>
                                <Field type="text" className="form-control" id="act_number_id" name="act_number" />
                                <ErrorMessage name="act_number" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="origin_id" className="form-label">
                                    Procedencia
                                    <Tooltip title="Lorem impsu texto descriptivo">
                                        <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                                    </Tooltip>
                                </label>
                                <select className="form-select" aria-label="origin" id="origin_id" name="origin">
                                    <option value="">-- Seleccione Procedencia --</option>
                                    <option value={1}>Alexander</option>
                                    <option value={2}>Sergio</option>
                                    <option value={3}>Ximena</option>
                                </select>
                                <ErrorMessage name="origin" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="plot_area_id" className="form-label">
                                    Área Total del Lote
                                </label>
                                <div className="input-group">
                                    <Field
                                        type="number"
                                        className="form-control border-end-0"
                                        id="plot_area_id"
                                        name="plot_area"
                                        disabled={!acquisition?.active_type?.includes('Lote')}
                                        min={0}
                                    />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white border-start-0">
                                            m<sup>2</sup>
                                        </span>
                                    </div>
                                </div>
                                <ErrorMessage name="plot_area" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="area_construccion_id" className="form-label">
                                    Área Construcción
                                </label>
                                <div className="input-group">
                                    <Field
                                        type="number"
                                        className="form-control border-end-0"
                                        id="area_construccion_id"
                                        name="construction_area"
                                        min={0}
                                        disabled={
                                            !(
                                                acquisition?.active_type?.includes('Construccion') ||
                                                acquisition?.active_type?.includes('Construccion para Mejora') ||
                                                acquisition?.active_type?.includes('Construcción para demoler')
                                            )
                                        }
                                    />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white border-start-0">
                                            m<sup>2</sup>
                                        </span>
                                    </div>
                                </div>
                                <ErrorMessage name="construction_area" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="acquisition_value_id" className="form-label">
                                    Valor de adquisición
                                </label>
                                <Field
                                    type="number"
                                    className="form-control"
                                    id="acquisition_value_id"
                                    name="act_value"
                                />
                                <ErrorMessage name="act_value" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="acquired_percentage_id" className="form-label">
                                    Porcentaje Adquirido
                                </label>
                                <div className="input-group">
                                    <Field
                                        type="number"
                                        className="form-control border-end-0"
                                        id="acquired_percentage_id"
                                        name="acquired_percentage"
                                    />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white border-start-0">%</span>
                                    </div>
                                </div>
                                <ErrorMessage name="acquired_percentage" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="entity_type_id" className="form-label">
                                    Tipo de Entidad
                                </label>
                                <Field as="select" className="form-select" id="entity_type_id" name="entity_type">
                                    <option value="">-- Seleccione Tipo de Entidad --</option>
                                    <option value="Notaría">Notaría</option>
                                    <option value="Sergio">Sergio</option>
                                    <option value="Ximena">Ximena</option>
                                </Field>
                                <ErrorMessage name="entity_type" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="entity_number_id" className="form-label">
                                    N° de entidad
                                </label>
                                <Field
                                    type="test"
                                    className="form-control"
                                    id="entity_number_id"
                                    aria-describedby="entity_number"
                                    name="entity_number"
                                />
                                <ErrorMessage name="entity_number" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="address_id" className="form-label">
                                    Ciudad
                                </label>
                                <div className="input-group">
                                    <input
                                        name="location"
                                        id="address_id"
                                        type="text"
                                        className="form-control"
                                        disabled
                                    />
                                    <div className="input-group-prepend">
                                        <LocationModal
                                            disabled={disabled}
                                            onSave={(_values) => {
                                                console.log("LocationModal", _values)
                                                setValues(
                                                    {
                                                        ...values,
                                                        city: _values.city,
                                                        city_name: _values.city_name,
                                                    },
                                                    false
                                                );
                                                return Promise.resolve();
                                            }}
                                        />
                                    </div>
                                </div>

                                <ErrorMessage name="location" />
                            </div>
                            <div className="col-3" />
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

AcquisitionsFrom.defaultProps = {};

export default AcquisitionsFrom;

/*
<div className="col-9">
                                <label htmlFor="form-select" className="form-label">
                                    Tipo de activo
                                </label>

                                <CheckboxGroup
                                    name="active_type"
                                    value={acquisition?.active_type || []}
                                    onChange={(data, ...args) => {
                                        const data_now = [...acquisition?.active_type];
                                        const diff = data
                                            .filter((x) => !data_now.includes(x))
                                            .concat(data_now.filter((x) => !data.includes(x)))[0];
                                        const key = 'Lote';
                                        let aux_data = [];
                                        if (!data_now.includes(diff)) {
                                            if (data_now.includes(key)) {
                                                aux_data = [key, diff];
                                            } else {
                                                if (diff === key) {
                                                    aux_data = [key, ...data_now];
                                                } else {
                                                    aux_data = [diff];
                                                }
                                            }
                                        } else {
                                            aux_data = [...data_now].filter((x) => x !== diff);
                                        }
                                        // set_acquisition({
                                        //     ...acquisition,
                                        //     active_type: data.length > 0 ? aux_data : [],
                                        // });
                                    }}
                                >
                                    {(Checkbox) => (
                                        <>
                                            {active_type.map((op, i) => (
                                                <label
                                                    key={`active_type_${i}`}
                                                    className="d-inline-block me-3 align-middle"
                                                >
                                                    <Checkbox value={op} />
                                                    <span className="ms-2" style={{ fontWeight: 500 }}>
                                                        {op}
                                                    </span>
                                                </label>
                                            ))}
                                        </>
                                    )}
                                </CheckboxGroup>
                                <ErrorMessage />
                            </div>
* */
