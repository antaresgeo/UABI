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
    active_type?: string[];
    onChange: (values, count) => Promise<any>;
}

const AcquisitionsFrom: FC<AcquisitionsFromProps> = ({
    type,
    disabled,
    acquisition,
    onChange,
    innerRef,
    active_type,
}) => {
    const initial_values = {
        acquisition_type: '',
        construction_area: '',
        plot_area: '',
        area: '',
        title_type: '',
        act_number: '',
        act_value: '',
        acquired_percentage: '',
        origin: '',
        entity_type: '',
        entity_number: '',
        city: '',
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
            {({ values, setFieldValue }) => {
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
                                <Field as="select" className="form-select" aria-label="origin" id="origin_id" name="origin">
                                    <option value="">-- Seleccione Procedencia --</option>
                                    <option value="Alexander">Alexander</option>
                                    <option value="Sergio">Sergio</option>
                                    <option value="Ximena">Ximena</option>
                                </Field>
                                <ErrorMessage name="origin" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="area_id" className="form-label">
                                    Área
                                </label>
                                <div className="input-group">
                                    <Field
                                        type="number"
                                        className="form-control border-end-0"
                                        id="area_id"
                                        name="area"
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
                                <label htmlFor="address_id" className="form-label">
                                    Ciudad
                                </label>
                                <div className="input-group">
                                    <Field
                                        name="city"
                                        id="address_id"
                                        type="text"
                                        className="form-control"
                                        disabled
                                    />
                                    <div className="input-group-prepend">
                                        <LocationModal
                                            disabled={disabled}
                                            onSave={async (_values) => {
                                                setFieldValue('city', _values.city_name, false);
                                            }}
                                        />
                                    </div>
                                </div>

                                <ErrorMessage name="city_name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="entity_type_id" className="form-label">
                                    Tipo de Entidad
                                </label>
                                <Field as="select" className="form-select" id="entity_type_id" name="entity_type">
                                    <option value="">-- Seleccione Tipo de Entidad --</option>
                                    <option value="Notaría">Notaría</option>
                                </Field>
                                <ErrorMessage name="entity_type" />
                            </div>
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

                            <div className="col-6">
                                <label htmlFor="vigency_start" className="form-label mt-3 mt-lg-0">
                                    Fecha de Adquisición
                                </label>
                                <Field
                                    type="date"
                                    id="vigency_start"
                                    name="acquisition_date"
                                    className="form-control"
                                    disabled={disabled}
                                />
                                <ErrorMessage name="acquisition_date" />
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

AcquisitionsFrom.defaultProps = {};

export default AcquisitionsFrom;
