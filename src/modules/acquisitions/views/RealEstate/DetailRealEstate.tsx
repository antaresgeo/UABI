import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { TextArea } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

import { IRealEstateAttributes } from "../../../../utils/interfaces/components.interfaces";
import AcquisitionsFrom from "../../components/AdquisitionsForm";
import { actions } from "../../redux";

interface IParams {
    id: string;
}

const DetailRealEstate = () => {
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();

    const realEstate: IRealEstateAttributes = useSelector((states: any) => states.acquisitions.realEstate.value);

    useEffect(() => {
        dispatch(actions.getRealEstate(id));
    }, []);

    return (
        <section className="pt-5" id="texto-superior">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: 15,
                                padding: "10px 20px",
                            }}
                        >
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="m-0">Bien Inmueble</h5>
                                <Link
                                    to={`/acquisitions/real-estates/edit/${realEstate.id}`}
                                    className="btn btn-success"
                                >
                                    Editar
                                </Link>
                            </div>
                            <hr />
                            <div className="container">
                                <form>
                                    <div className="row my-5 py-3">
                                        <div className="col-3">
                                            <label htmlFor="form-select" className="form-label">
                                                Dependencia a cargo
                                            </label>
                                            <select
                                                className="form-select"
                                                aria-label="dependency"
                                                name="dependency"
                                                value={realEstate.dependency}
                                                disabled
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
                                                value={realEstate.destination_type}
                                                disabled
                                            >
                                                <option value="" selected disabled hidden>
                                                    -- Seleccione Destinación --
                                                </option>
                                                <option value="Público">Público</option>
                                                <option value="Fiscal">Fiscal</option>
                                                <option value="Mixto">Mixto</option>
                                                <option value="POR DEFINIR">POR DEFINIR</option>
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
                                                value={realEstate.accounting_account}
                                                disabled
                                            >
                                                <option value="" selected disabled hidden>
                                                    -- Seleccione Cuenta Contable --
                                                </option>
                                                <option value="Público">Público</option>
                                                <option value="2">Fiscal</option>
                                                <option value="3">Mixto</option>
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
                                                value={realEstate.cost_center}
                                                disabled
                                            >
                                                <option value="" selected disabled hidden>
                                                    -- Seleccione Centro de Costos --
                                                </option>
                                                <option value="Público">Público</option>
                                                <option value="2">Fiscal</option>
                                                <option value="3">Mixto</option>
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
                                                value={realEstate.registry_number}
                                                disabled
                                            />
                                            <div id="emailHelp" className="form-text"></div>
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
                                                value={realEstate.name}
                                                disabled
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
                                                value={realEstate.description}
                                                disabled
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
                                                value={realEstate.address}
                                                disabled
                                                placeholder="Integración con Localización (Pop Up)"
                                            />
                                        </div>
                                        <div className="col-2">
                                            <label className="form-label">Area Total (m2)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="total_area"
                                                name="total_area"
                                                value={realEstate.total_area}
                                                disabled
                                            />
                                        </div>
                                        <div className="col-2">
                                            <label className="form-label">Porcentaje Total (%)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="total_percentage"
                                                name="total_percentage"
                                                value={realEstate.total_percentage}
                                                disabled
                                            />
                                        </div>

                                        {/* <div className='col-3'>
											<label
												className='form-label'
											>
												Avalúo
											</label>
											<input
												type=''
												className='form-control'
												id='exampleInputEmail1'
											/>
										</div> */}
                                        <div className="col-2">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="flexRadioDefault2"
                                                    name="estate_type"
                                                    value={realEstate.zone}
                                                    disabled
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
                                                    value={realEstate.zone}
                                                    disabled
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
                                                value={realEstate.tipology}
                                                disabled
                                            >
                                                <option value="" selected disabled hidden>
                                                    -- Seleccione Tipología --
                                                </option>
                                                <option value="2">Secretaría Salud</option>
                                                <option value="3">Secretaría Cultura</option>
                                                <option value="POR DEFINIR">POR DEFINIR</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Creado por
                                            </label>
                                            <input
                                                type=""
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={realEstate.audit_trail?.created_by}
                                                disabled
                                            />
                                        </div>
                                        <div className="col-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Fecha creación
                                            </label>
                                            <input
                                                type=""
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                // value={realEstate.audit_trail?.created_on}
                                                disabled
                                            />
                                        </div>
                                        <div className="col-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Sociedad
                                            </label>
                                            <input
                                                type=""
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={`FIMM`}
                                                disabled
                                            />
                                        </div>
                                        <div className="col-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Importe Contable
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                // value={realEstate.audit_trail?.created_by}
                                            />
                                        </div>
                                        <div className="col-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Periodo contable
                                            </label>
                                            <input
                                                type=""
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                // value={realEstate.audit_trail?.created_by}
                                                disabled
                                                // EL MES
                                            />
                                        </div>
                                        <div className="col-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Contrapartida
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                // ES UNA LISTA
                                                // value={realEstate.audit_trail?.created_by}
                                            />
                                        </div>
                                        <TextArea className="col-12" placeholder="Comentarios y anotaciones" />
                                    </div>

                                    {/* Adquisitions */}
                                    <AcquisitionsFrom type="view" />
                                    {/* END Adquisitions */}

                                    <div
                                        className="row py-3 my-3"
                                        style={{
                                            backgroundColor: "#f7f7f7",
                                            borderRadius: 15,
                                            border: "1px solid",
                                        }}
                                    >
                                        <div className="col-3">
                                            <label htmlFor="form-select" className="form-label">
                                                Tipo Documento
                                            </label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option value="1" selected>
                                                    Escritura
                                                </option>
                                                <option value="2">Matricula</option>
                                                <option value="3">Contrato</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <div className="mb-3">
                                                <label htmlFor="formFile" className="form-label">
                                                    Default file input example
                                                </label>
                                                <input className="form-control" type="file" id="formFile" />
                                                <div id="emailHelp" className="form-text">
                                                    Escritura.pdf
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mt-5">
                                        <button type="submit" className="btn btn-success btn-lg text-uppercase">
                                            exportar a sap
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailRealEstate;
