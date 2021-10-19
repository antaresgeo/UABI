import React, { FC, Fragment, useState } from "react";
import { Table } from "semantic-ui-react";
import CheckboxGroup from "react-checkbox-group";
import { IAuditTrail } from "../../../utils/interfaces/components.interfaces";
import AcquisitionList from "./AcquisitionList";

interface AdquisitionsItf {
    id?: number;

    acquisition_type: string;
    active_type: string[];
    title_type: string;
    title_type_document_id?: string;
    act_number: string;
    act_value: number;

    plot_area: number;
    construction_area?: number;
    acquired_percentage: number;
    seller: string;

    entity_type: string;
    entity_number: string;
    address?: string;
    //--------
    real_estate_id: number;
    status?: number;
    audit_trail?: IAuditTrail;
}

const AcquisitionsFrom: FC<any> = ({ type }) => {
    const initial_values: AdquisitionsItf = {
        acquisition_type: "",
        active_type: [],
        title_type: "",
        act_number: "",
        act_value: 0,

        plot_area: 0,
        acquired_percentage: 0,
        seller: "",

        entity_type: "",
        entity_number: "",

        real_estate_id: 0,
    };
    const [acquisitions, set_acquisitions] = useState<AdquisitionsItf[]>([]);
    const [acquisition, set_acquisition] = useState<AdquisitionsItf>(initial_values);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        // console.log("handleChange", { name, value });
        const data = {
            ...acquisition,
            [name]: value,
        };
        set_acquisition(data);
    };

    const addAcquisition = (new_acquisition: AdquisitionsItf) => {
        set_acquisitions([...acquisitions, new_acquisition]);
    };

    const clearAcquisition = () => {
        set_acquisition(initial_values);
    };

    return (
        <div className="row">
            {type !== "view" && (
                <div className="col-6">
                    <div className="row">
                        <div className="col-6">
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
                        <div className="col-6">
                            <label htmlFor="form-select" className="form-label">
                                Tipo de activo
                            </label>

                            <CheckboxGroup
                                name="active_type"
                                value={acquisition.active_type || []}
                                onChange={(data) => {
                                    set_acquisition({ ...acquisition, active_type: data.length > 0 ? data : ["1"] });
                                }}
                            >
                                {(Checkbox) => (
                                    <>
                                        <label>
                                            <Checkbox value="Lote" /> Lote
                                        </label>
                                        <label>
                                            <Checkbox value="Construccion" /> Construccion
                                        </label>
                                        <label>
                                            <Checkbox value="Construccion para Mejora" /> Construccion para Mejora
                                        </label>
                                        <label>
                                            <Checkbox value="Construcción para demoler" /> Construcción para demoler
                                        </label>
                                    </>
                                )}
                            </CheckboxGroup>
                        </div>
                        <div className="col-6">
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
                        <div className="col-6">
                            {acquisition.title_type !== "None" && (
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">
                                        Documento de {acquisition.title_type}
                                    </label>
                                    <input className="form-control" type="file" id="title_type_document_id" />
                                    {/*<div id='emailHelp' className='form-text'>*/}
                                    {/*    Escritura.pdf*/}
                                    {/*</div>*/}
                                </div>
                            )}
                        </div>
                        <div className="col-6">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                No Acto administrativo
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="act_number"
                                aria-describedby="act_number"
                                name="act_number"
                                onChange={handleChange}
                                value={acquisition.act_number || ""}
                            />
                        </div>
                        <div className="col-6">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Valor de adquisición
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="acquisition_value"
                                aria-describedby="acquisition_value"
                                name="acquisition_value"
                                onChange={handleChange}
                                value={acquisition.act_value || ""}
                            />
                        </div>
                        <div className="col-6">
                            {acquisition.active_type?.includes("1") && (
                                <>
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
                                        value={acquisition.plot_area || ""}
                                    />
                                </>
                            )}
                        </div>
                        <div className="col-6">
                            {(acquisition.active_type?.includes("2") ||
                                acquisition.active_type?.includes("3") ||
                                acquisition.active_type?.includes("4")) && (
                                <>
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
                                        value={acquisition.construction_area || ""}
                                    />
                                </>
                            )}
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
                        <div className="col-6">
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
                                value={acquisition.acquired_percentage || ""}
                            />
                            <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div className="col-6">
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
                        {/* <div className='col-3'>
                            <label htmlFor='form-select' className='form-label'>
                                Comprador
                            </label>
                            <select
                                className='form-select'
                                aria-label='Default select example'
                            >
                                <option value='1' selected>
                                    Alexander
                                </option>
                                <option value='2'>Sergio</option>
                                <option value='3'>Ximena</option>
                            </select>
                        </div> */}

                        <div className="col-6">
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
                        <div className="col-6">
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
                                value={acquisition.entity_number || ""}
                            />
                            <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div className="col-6">
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
                        <div className="col-9" />
                        <div className="col-3">
                            <button
                                type="button"
                                className="btn btn-primary mr-3"
                                onClick={() => {
                                    console.log("add adquisition", acquisition);
                                    addAcquisition(acquisition);
                                    clearAcquisition();
                                }}
                            >
                                Agregar Adquisición
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className={`col-${type !== "view" ? 6 : 12}`}>
                <div className="row">
                    <AcquisitionList acquisitions={acquisitions} type={type} />
                </div>
            </div>
        </div>
    );
};

export default AcquisitionsFrom;
