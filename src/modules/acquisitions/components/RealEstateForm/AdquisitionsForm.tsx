import React, { FC, useState } from 'react';
import CheckboxGroup from 'react-checkbox-group';
import { AdquisitionsItf } from '../../../../utils/interfaces';
import AcquisitionList from './AcquisitionList';
import { Card } from '../../../../utils/ui';
import ErrorMessage from '../../../../utils/ui/error_messge';
import LocationModal from '../../../../utils/components/Location/LocationModal';
import { LinkButton } from '../../../../utils/ui/link';
import { clearObjectNulls, is_empty } from '../../../../utils';
import Tooltip from 'antd/lib/tooltip';

interface AcquisitionsFromProps {
    type?: 'view' | 'edit' | 'create';
    disabled?: boolean;
    formik?: any;
}

const active_type = ['Lote', 'Mejora', 'Construccion', 'Construccion para demoler', 'Mejora para demoler'];

const AcquisitionsFrom: FC<AcquisitionsFromProps> = ({ type, formik, disabled }) => {
    const [count, set_count] = useState<number>(formik?.values?.acquisitions?.length || 0);
    const initial_values = {
        acquisition_type: '',
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
        real_estate_id: '',
    };
    const [acquisition, set_acquisition] = useState<any>(initial_values);

    const handleChange = (e: any) => {
        const { name, value, type } = e.target;
        let new_value = value;
        if (type === 'number') {
            new_value = parseInt(value);
        }
        const data = {
            ...acquisition,
            [name]: new_value,
        };
        set_acquisition(data);
    };

    const addAcquisition = (new_acquisition) => {
        if (!is_empty(new_acquisition)) {
            new_acquisition.active_type = new_acquisition.active_type.join(', ');
            formik.setFieldValue(`acquisitions[${count}]`, new_acquisition);
            set_count((c) => c + 1);
        }
    };

    const clearAcquisition = () => {
        set_acquisition(initial_values);
    };

    return (
        <Card
            title="Información de Adquisición"
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
                {(type !== 'view' || !disabled) && (
                    <>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="form-select" className="form-label">
                                        Tipo de Adquisición
                                    </label>
                                    <select
                                        className="form-select"
                                        aria-label="acquisition_type"
                                        name="acquisition_type"
                                        onChange={handleChange}
                                        value={acquisition.acquisition_type}
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
                                    </select>
                                    <ErrorMessage />
                                </div>
                                <div className="col-9">
                                    <label htmlFor="form-select" className="form-label">
                                        Tipo de activo
                                    </label>

                                    <CheckboxGroup
                                        name="active_type"
                                        value={acquisition.active_type || []}
                                        onChange={(data, ...args) => {
                                            const data_now = [...acquisition.active_type];
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
                                            set_acquisition({
                                                ...acquisition,
                                                active_type: data.length > 0 ? aux_data : [],
                                            });
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
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="form-select" className="form-label">
                                        Tipo de Título
                                    </label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        name="title_type"
                                        onChange={handleChange}
                                        value={acquisition.title_type}
                                    >
                                        <option value="None">-- Seleccione Tipo de Título --</option>
                                        <option value="Escritura">Escritura</option>
                                        <option value="Certificado tradición y libertad">
                                            Certificado tradición y libertad
                                        </option>
                                        <option value="Acta de liquidación">Acta de liquidación</option>
                                        <option value="Acta de liquidación">Resolucion</option>
                                    </select>
                                    <ErrorMessage />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="act_number_id" className="form-label">
                                        N° acto administrativo
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="act_number_id"
                                        aria-describedby="act_number"
                                        name="act_number"
                                        onChange={handleChange}
                                        value={acquisition.act_number || ''}
                                    />
                                    <ErrorMessage />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="form-select" className="form-label">
                                        Procedencia
                                        <Tooltip title="Lorem impsu texto descriptivo">
                                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                                        </Tooltip>
                                    </label>
                                    <select
                                        className="form-select"
                                        aria-label="origin"
                                        id="origin"
                                        name="origin"
                                        onChange={handleChange}
                                        value={acquisition.origin}
                                    >
                                        <option value={1}>Alexander</option>
                                        <option value={2}>Sergio</option>
                                        <option value={3}>Ximena</option>
                                    </select>
                                    <ErrorMessage />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Área Total del Lote
                                    </label>
                                    <div className="input-group">
                                        <input
                                            type="number"
                                            className="form-control border-end-0"
                                            id="plot_area"
                                            aria-describedby="plot_area"
                                            name="plot_area"
                                            onChange={handleChange}
                                            value={acquisition.plot_area || ''}
                                            disabled={!acquisition.active_type?.includes('Lote')}
                                            min={0}
                                        />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-white border-start-0">
                                                m<sup>2</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <ErrorMessage />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Área Construcción
                                    </label>
                                    <div className="input-group">
                                        <input
                                            type="number"
                                            className="form-control border-end-0"
                                            id="area_construccion"
                                            aria-describedby="construction_area"
                                            name="construction_area"
                                            onChange={handleChange}
                                            min={0}
                                            value={acquisition.construction_area || ''}
                                            disabled={
                                                !(
                                                    acquisition.active_type?.includes('Construccion') ||
                                                    acquisition.active_type?.includes('Construccion para Mejora') ||
                                                    acquisition.active_type?.includes('Construcción para demoler')
                                                )
                                            }
                                        />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-white border-start-0">
                                                m<sup>2</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <ErrorMessage />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Valor de adquisición
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="acquisition_value"
                                        aria-describedby="acquisition_value"
                                        name="act_value"
                                        onChange={handleChange}
                                        value={acquisition.act_value || ''}
                                    />
                                    <ErrorMessage />
                                </div>

                                {/* {type === "edit" && <div className='col-12'>
                                <div className='mb-3'>
                                    <label htmlFor='formFile' className='form-label'>
                                       Previacion
                                    </label>
                                    <input
                                        className='form-control'
                                        type='file'
                                        id='formFile'
                                    />
                                    <div id='emailHelp' className='form-text'>
                                       Escritura.pdf
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='formFile' className='form-label'>
                                       Avaluo
                                    </label>
                                    <input
                                        className='form-control'
                                        type='file'
                                        id='formFile'
                                    />
                                    <div id='emailHelp' className='form-text'>
                                       Escritura.pdf
                                    </div>
                                </div>
                            </div> } */}
                                <div className="col-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Porcentaje Adquirido
                                    </label>
                                    <div className="input-group">
                                        <input
                                            type="number"
                                            className="form-control border-end-0"
                                            id="acquired_percentage"
                                            aria-describedby="acquired_percentage"
                                            name="acquired_percentage"
                                            onChange={handleChange}
                                            value={acquisition.acquired_percentage || ''}
                                        />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-white border-start-0">%</span>
                                        </div>
                                    </div>
                                    <ErrorMessage />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="form-select" className="form-label">
                                        Tipo de Entidad
                                    </label>
                                    <select
                                        className="form-select"
                                        aria-label="entity_type"
                                        id="entity_type"
                                        name="entity_type"
                                        onChange={handleChange}
                                        value={acquisition.entity_type}
                                    >
                                        <option value="Notaría">Notaría</option>
                                        <option value="Sergio">Sergio</option>
                                        <option value="Ximena">Ximena</option>
                                    </select>
                                    <ErrorMessage />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        N° de entidad
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="entity_number"
                                        aria-describedby="entity_number"
                                        name="entity_number"
                                        onChange={handleChange}
                                        value={acquisition.entity_number || ''}
                                    />
                                    <ErrorMessage />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="address" className="form-label">
                                        Ciudad
                                    </label>
                                    <div className="input-group">
                                        <input
                                            name="location"
                                            id="address"
                                            type="text"
                                            className="form-control"
                                            disabled
                                        />
                                        <div className="input-group-prepend">
                                            <LocationModal
                                                disabled={disabled}
                                                onSave={(values) => {
                                                    handleChange({ target: { value: values.city, name: 'city' } });
                                                    return Promise.resolve();
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <ErrorMessage name="location" />
                                </div>
                                <div className="col-3" />
                                <div className="col-3 d-flex justify-content-end">
                                    <LinkButton
                                        name="Agregar Adquisición"
                                        iconText="+"
                                        avatar
                                        onClick={() => {
                                            addAcquisition(acquisition);
                                            clearAcquisition();
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}
                <div className="col-12">
                    <div className="row">
                        <AcquisitionList acquisitions={formik?.values?.acquisitions || []} type={type} />
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default AcquisitionsFrom;
