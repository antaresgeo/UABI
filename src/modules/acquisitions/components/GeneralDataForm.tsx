import { FC } from "react";

const GeneralDataForm: FC<any> = ({ handleChange, type, data }) => {
    return (
        <div className="row my-5 py-3">
            <div className="col-3">
                <label htmlFor="form-select" className="form-label">
                    Dependencia a cargo
                </label>
                <select
                    className="form-select"
                    aria-label="dependency"
                    name="dependency"
                    onChange={handleChange}
                    value={data.dependency}
                >
                    <option value="" selected disabled hidden>
                        -- Seleccione Dependencia --
                    </option>
                    <option value="Secretaría Suministros">Secretaría Suministros</option>
                    <option value="Secretaría Salud">Secretaría Salud</option>
                    <option value="Secretaría Cultura">Secretaría Cultura</option>
                    <option value="POR DEFINIR">POR DEFINIR</option>
                </select>
            </div>
            <div className="col-3">
                <label htmlFor="form-select" className="form-label">
                    Tipo Destinación
                </label>
                <select
                    className="form-select"
                    aria-label="destination_type"
                    name="destination_type"
                    onChange={handleChange}
                    value={data.destination_type}
                >
                    <option value="" selected disabled hidden>
                        -- Seleccione Destinación --
                    </option>
                    <option value="PÚBLICO">Público</option>
                    <option value="FISCAL">Fiscal</option>
                    <option value="MIXTO">Mixto</option>
                </select>
            </div>
            <div className="col-3">
                <label htmlFor="form-select" className="form-label">
                    Cuenta Contable
                </label>
                <select
                    className="form-select"
                    aria-label="accounting_account"
                    name="accounting_account"
                    onChange={handleChange}
                    value={data.accounting_account}
                >
                    <option value="" selected disabled hidden>
                        -- Seleccione Cuenta Contable --
                    </option>
                    <option value="PÚBLICO">Público</option>
                    <option value="FISCAL">Fiscal</option>
                    <option value="MIXTO">Mixto</option>
                    <option value="POR DEFINIR">POR DEFINIR</option>
                </select>
            </div>
            <div className="col-3">
                <label htmlFor="form-select" className="form-label">
                    Centro de Costos
                </label>
                <select
                    className="form-select"
                    aria-label="cost_center"
                    name="cost_center"
                    onChange={handleChange}
                    value={data.cost_center}
                >
                    <option value="" selected disabled hidden>
                        -- Seleccione Centro de Costos --
                    </option>
                    <option value="PÚBLICO">Público</option>
                    <option value="FISCAL">Fiscal</option>
                    <option value="MIXTO">Mixto</option>
                    <option value="POR DEFINIR">POR DEFINIR</option>
                </select>
            </div>

            <div className="col-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Número Matricula
                </label>
                <input
                    type=""
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="registry_number"
                    onChange={handleChange}
                    value={data.registry_number}
                />
                <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="col-3">
                {type !== "edit" && (
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">
                            Documento de Matricula
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                        <div id="emailHelp" className="form-text">
                            Matricula.pdf
                        </div>
                    </div>
                )}
            </div>

            <div className="col-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Nombre Inmueble
                </label>
                <input
                    type=""
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                />
            </div>
            <div className="col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Descripción Inmueble
                </label>
                <input
                    type=""
                    className="form-control"
                    id="description"
                    aria-describedby="description"
                    name="description"
                    onChange={handleChange}
                    value={data.description}
                />
                <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="col-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Valor Patrimonial
                </label>
                <input
                    type=""
                    className="form-control"
                    id="patrimonial_value"
                    aria-describedby="patrimonial_value"
                    name="patrimonial_value"
                    onChange={handleChange}
                    value={data.patrimonial_value}
                />
            </div>

            <div className="col-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Dirección
                </label>
                <input
                    type=""
                    className="form-control"
                    id="address"
                    name="address"
                    onChange={handleChange}
                    placeholder="Pop Up"
                />
            </div>
            <div className="col-2">
                <label className="form-label">Area Total (m2)</label>
                <input
                    type="number"
                    className="form-control"
                    id="total_area"
                    name="total_area"
                    value={data.total_area}
                    onChange={handleChange}
                />
            </div>
            <div className="col-2">
                <label className="form-label">Porcentaje Total (%)</label>
                <input
                    type="number"
                    className="form-control"
                    id="total_percentage"
                    name="total_percentage"
                    value={data.total_percentage}
                    onChange={handleChange}
                />
            </div>

            <div className="col-2">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        id="flexRadioDefault2"
                        name="estate_type"
                        onChange={handleChange}
                        checked
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Urbano
                    </label>
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        id="flexRadioDefault1"
                        name="estate_type"
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Rural
                    </label>
                </div>
            </div>
            <div className="col-3">
                <label className="form-label">Tipología</label>
                <select
                    className="form-select"
                    name="tipology"
                    id="tipology"
                    onChange={handleChange}
                    value={data.tipology}
                >
                    <option value="" selected disabled hidden>
                        -- Seleccione Tipología --
                    </option>
                    <option value="2">Secretaría Salud</option>
                    <option value="3">Secretaría Cultura</option>
                    <option value="POR DEFINIR">POR DEFINIR</option>
                </select>
            </div>
        </div>
    );
};

export default GeneralDataForm;
