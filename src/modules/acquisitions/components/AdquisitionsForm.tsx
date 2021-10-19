import React, { FC, Fragment, useState } from "react";
import { Table } from "semantic-ui-react";
import CheckboxGroup from "react-checkbox-group";
import { IAuditTrail } from "../../../utils/interfaces/components.interfaces";

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

const AdquisitionsFrom: FC<any> = ({ type }) => {
    const inicial_values: AdquisitionsItf = {
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
    const [adquisitions, set_adquisitions] = useState<AdquisitionsItf[]>([]);
    // console.log(adquisitions);
    const [adquisition, set_adquisition] = useState<AdquisitionsItf>(inicial_values);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        // console.log("handleChange", { name, value });
        const data = {
            ...adquisition,
            [name]: value,
        };
        set_adquisition(data);
    };

    const addAdquisition = (new_adquisition: AdquisitionsItf) => {
        set_adquisitions([...adquisitions, new_adquisition]);
    };

    const clearAdquisition = () => {
        set_adquisition(inicial_values);
    };

    return (
        <div
            className="row py-3 my-3"
            style={{
                backgroundColor: "#f7f7f7",
                borderRadius: 15,
                border: "1px solid",
            }}
        >
            <h5>Información de Adquisición</h5>

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
                                // value={adquisition.acquisition_type}
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
                                value={adquisition.active_type || []}
                                onChange={(data) => {
                                    set_adquisition({ ...adquisition, active_type: data.length > 0 ? data : ["1"] });
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
                                value={adquisition.title_type}
                            >
                                <option value="None">-- Seleccione Tipo de Título --</option>
                                <option value="Acta">Acta</option>
                                <option value="Mejora">Mejora</option>
                                <option value="Construcción">Construcción para demoler</option>
                            </select>
                        </div>
                        <div className="col-6">
                            {adquisition.title_type !== "None" && (
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">
                                        Documento de {adquisition.title_type}
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
                                value={adquisition.act_number || ""}
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
                                value={adquisition.act_value || ""}
                            />
                        </div>
                        <div className="col-6">
                            {adquisition.active_type?.includes("1") && (
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
                                        value={adquisition.plot_area || ""}
                                    />
                                </>
                            )}
                        </div>
                        <div className="col-6">
                            {(adquisition.active_type?.includes("2") ||
                                adquisition.active_type?.includes("3") ||
                                adquisition.active_type?.includes("4")) && (
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
                                        value={adquisition.construction_area || ""}
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
                                value={adquisition.acquired_percentage || ""}
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
                                value={adquisition.seller}
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
                                value={adquisition.entity_type}
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
                                value={adquisition.entity_number || ""}
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
                                    console.log("add adquisition", adquisition);

                                    addAdquisition(adquisition);
                                    clearAdquisition();
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
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Tipo de Adquisición</Table.HeaderCell>
                                <Table.HeaderCell>No Acto administrativo</Table.HeaderCell>
                                <Table.HeaderCell>Valor de adquisición</Table.HeaderCell>
                                {type === "view" && (
                                    <Fragment>
                                        <Table.HeaderCell>Tipo de Título</Table.HeaderCell>
                                        <Table.HeaderCell>Tipo de activo</Table.HeaderCell>
                                        <Table.HeaderCell>Vendedor</Table.HeaderCell>
                                        <Table.HeaderCell>Porcentaje Adquirido</Table.HeaderCell>
                                        <Table.HeaderCell>Area Total</Table.HeaderCell>
                                        <Table.HeaderCell>Tipo de Entidad</Table.HeaderCell>
                                        <Table.HeaderCell>No. Entidad</Table.HeaderCell>
                                        <Table.HeaderCell>Dirección</Table.HeaderCell>
                                    </Fragment>
                                )}
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {adquisitions.map((row) => {
                                return (
                                    <Table.Row>
                                        <Table.Cell>{row.acquisition_type}</Table.Cell>
                                        <Table.Cell>{row.act_number}</Table.Cell>
                                        <Table.Cell>{row.act_value}</Table.Cell>
                                        {type === "view" && (
                                            <Fragment>
                                                <Table.Cell>{row.title_type}</Table.Cell>
                                                <Table.Cell>{row.active_type?.join(", ")}</Table.Cell>
                                                <Table.Cell>{row.seller}</Table.Cell>
                                                <Table.Cell>{row.acquired_percentage}</Table.Cell>
                                                <Table.Cell>{row.plot_area}</Table.Cell>
                                                <Table.Cell>{row.entity_type}</Table.Cell>
                                                <Table.Cell>{row.entity_number}</Table.Cell>
                                                <Table.Cell>{row.address}</Table.Cell>
                                            </Fragment>
                                        )}
                                    </Table.Row>
                                );
                            })}
                            {adquisitions.length === 0 && type !== "view" && (
                                <Table.Row>
                                    <Table.Cell colSpan="3">No se encontraron adquisiciónes</Table.Cell>
                                </Table.Row>
                            )}
                            {adquisitions.length === 0 && type === "view" && (
                                <Table.Row>
                                    <Table.Cell colSpan="11">No se encontraron adquisiciónes</Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default AdquisitionsFrom;
