import React, { FC, Fragment, useState } from 'react';
import { Table } from 'semantic-ui-react';
import CheckboxGroup from 'react-checkbox-group';
import { AdquisitionsItf, IAuditTrail } from '../../../../utils/interfaces';
import AcquisitionList from './AcquisitionList';
import { Card } from '../../../../utils/ui';

interface AcquisitionsFromProps {
    type?: 'view' | 'edit' | 'create';
    disabled?: boolean;
    setFieldValue?: Function;
    acquisitions?: AdquisitionsItf[];
}

const AcquisitionsFrom: FC<AcquisitionsFromProps> = ({ type, acquisitions, setFieldValue, disabled }) => {
    const [count, set_count] = useState<number>(acquisitions.length || 0);
    const initial_values: AdquisitionsItf = {
        acquisition_type: '',
        active_type: [],
        title_type: '',
        act_number: '',
        act_value: 0,
        plot_area: 0,
        acquired_percentage: 0,
        seller: '',
        entity_type: '',
        entity_number: '',
        real_estate_id: 0,
    };
    const [acquisition, set_acquisition] = useState<AdquisitionsItf>(initial_values);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        console.log('handleChange', { name, value });
        const data = {
            ...acquisition,
            [name]: value,
        };
        set_acquisition(data);
    };

    const addAcquisition = (new_acquisition: AdquisitionsItf) => {
        setFieldValue(`acquisitions[${count}]`, new_acquisition);
        set_count((c) => c + 1);
    };

    const clearAcquisition = () => {
        set_acquisition(initial_values);
    };

    return (
        <Card title="Información de Adquisición">
            <div className="row">
                {(type !== 'view' || !disabled) && (
                    <>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-4">
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
                                        <option value="0" selected disabled hidden>
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
                                </div>
                                <div className="col-8">
                                    <label htmlFor="form-select" className="form-label">
                                        Tipo de activo
                                    </label>

                                    <CheckboxGroup
                                        name="active_type"
                                        value={acquisition.active_type || []}
                                        onChange={(data) => {
                                            console.log(data);
                                            set_acquisition({
                                                ...acquisition,
                                                active_type: data.length > 0 ? data : ['Lote'],
                                            });
                                        }}
                                    >
                                        {(Checkbox) => (
                                            <>
                                                <label className="d-inline-block me-3">
                                                    <Checkbox value="Lote" /> Lote
                                                </label>
                                                <label className="d-inline-block me-3">
                                                    <Checkbox value="Construccion" /> Construccion
                                                </label>
                                                <label className="d-inline-block me-3">
                                                    <Checkbox value="Construccion para Mejora" /> Construccion para
                                                    Mejora
                                                </label>
                                                <label className="d-inline-block me-3">
                                                    <Checkbox value="Construcción para demoler" /> Construcción para
                                                    demoler
                                                </label>
                                            </>
                                        )}
                                    </CheckboxGroup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
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
                                        <option value="Acta">Acta</option>
                                        <option value="Mejora">Mejora</option>
                                        <option value="Construcción">Construcción para demoler</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    {acquisition.title_type !== 'None' && (
                                        <div className="mb-3">
                                            <label htmlFor="formFile" className="form-label">
                                                Documento {acquisition.title_type ? `de ${acquisition.title_type}` : ''}
                                            </label>
                                            <input className="form-control" type="file" id="title_type_document_id" />
                                            {/*<div id='emailHelp' className='form-text'>*/}
                                            {/*    Escritura.pdf*/}
                                            {/*</div>*/}
                                        </div>
                                    )}
                                </div>
                                <div className="col-2">
                                    <label htmlFor="act_number_id" className="form-label">
                                        No Acto administrativo
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
                                </div>
                                <div className="col-2">
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
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Area Total Lote (m2)
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="plot_area"
                                        aria-describedby="plot_area"
                                        name="plot_area"
                                        onChange={handleChange}
                                        value={acquisition.plot_area || ''}
                                        disabled={!acquisition.active_type?.includes('Lote')}
                                    />
                                </div>
                                <div className="col-2">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Area Construccion (m2)
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="area_construccion"
                                        aria-describedby="construction_area"
                                        name="construction_area"
                                        onChange={handleChange}
                                        value={acquisition.construction_area || ''}
                                        disabled={
                                            !(
                                                acquisition.active_type?.includes('Construccion') ||
                                                acquisition.active_type?.includes('Construccion para Mejora') ||
                                                acquisition.active_type?.includes('Construcción para demoler')
                                            )
                                        }
                                    />
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
                                <div className="col-2">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Porcentaje Adquirido
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="acquired_percentage"
                                        aria-describedby="acquired_percentage"
                                        name="acquired_percentage"
                                        onChange={handleChange}
                                        value={acquisition.acquired_percentage || ''}
                                    />
                                    <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="form-select" className="form-label">
                                        Vendedor
                                    </label>
                                    <select
                                        className="form-select"
                                        aria-label="seller"
                                        id="seller"
                                        name="seller"
                                        onChange={handleChange}
                                        value={acquisition.seller}
                                    >
                                        <option value="1">Alexander</option>
                                        <option value="2">Sergio</option>
                                        <option value="3">Ximena</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
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
                                        <option value="1">Notaría</option>
                                        <option value="2">Sergio</option>
                                        <option value="3">Ximena</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        No.Entidad
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
                                    <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Dirección
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        name="address"
                                        onChange={handleChange}
                                        placeholder="Pop Up - Departamento y Municipio"
                                    />
                                </div>
                            </div>
                            <div className="row pt-3 pb-3">
                                <div className="col-9" />
                                <div className="col-3">
                                    <button
                                        type="button"
                                        className="btn btn-primary mr-3"
                                        onClick={() => {
                                            console.log('add adquisition', acquisition);
                                            addAcquisition(acquisition);
                                            clearAcquisition();
                                        }}
                                    >
                                        Agregar Adquisición
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                <div className="col-12">
                    <div className="row">
                        <AcquisitionList acquisitions={acquisitions || []} type={type} />
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default AcquisitionsFrom;
