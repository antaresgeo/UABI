import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./../../redux";

import { IRealEstateAttributes } from "../../../../utils/interfaces/components.interfaces";
import ItemRealEstate from "../../components/ItemRealEstate";

const RealEstates = () => {
    const dispatch = useDispatch();
    const realEstates: IRealEstateAttributes[] = useSelector((states: any) => states.acquisitions.realEstates.value);

    useEffect(() => {
        dispatch(actions.getRealEstates());
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
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <h5>Administrar Bienes Inmuebles</h5>
                                <Link
                                    className="justify-content-end"
                                    style={{
                                        display: "flex",
                                        width: 70,
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        textDecoration: "none",
                                    }}
                                    to="/acquisitions/real-estates/create"
                                >
                                    <i className="fa fa-plus-circle" aria-hidden="true" style={{ fontSize: 20 }}></i>
                                    <p>Crear</p>
                                </Link>
                            </div>
                            <hr />
                            <form>
                                <div className="row justify-content-between">
                                    <div className="col-5 d-flex">
                                        <div className="col-6">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Nombre / Código"
                                                    aria-label="Nombre / Código"
                                                    aria-describedby="button-addon2"
                                                />
                                                <span className="input-group-text">
                                                    <a href="">
                                                        <i className="fa fa-search" aria-hidden="true"></i>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                        <a href="#">
                                            Filtro búsqueda <i className="fa fa-filter" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div
                                        className="col-3 d-flex"
                                        style={{ justifyContent: "end", alignItems: "center" }}
                                    >
                                        <label>Registros por página</label>
                                        <select
                                            style={{ width: "30%" }}
                                            className="form-select form-select-lg mb-3"
                                            aria-label=".form-select-lg example"
                                        >
                                            <option selected>10</option>
                                            <option value="1">20</option>
                                            <option value="2">50</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                            <hr />
                            {/* <table className='table table-hover text-center'> */}
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th scope="col" className="align-top center">
                                            ID
                                        </th>
                                        <th scope="col" className="align-top">
                                            Matricula
                                        </th>
                                        <th scope="col" className="align-top">
                                            Nombre
                                        </th>
                                        <th scope="col" className="align-top">
                                            Proyecto Asociado
                                        </th>
                                        <th scope="col" className="align-top">
                                            Fecha Creación
                                        </th>
                                        <th scope="col" className="align-top">
                                            Creado por
                                        </th>
                                        <th scope="col" className="align-top">
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                }}
                                            >
                                                Acciones
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        width: "100%",
                                                        justifyContent: "space-around",
                                                    }}
                                                >
                                                    <p> Ver </p>
                                                    <p> Editar </p>
                                                    <p> Eliminar </p>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {realEstates.map((realEstate) => {
                                        let creationDate = new Date(
                                            parseFloat(realEstate.audit_trail.created_on)
                                        ).toDateString();
                                        return (
                                            <ItemRealEstate
                                                id={String(realEstate.id)}
                                                matricula={realEstate.registry_number}
                                                name={realEstate.name}
                                                project={realEstate.project_id}
                                                creationDate={creationDate}
                                                createdBy={realEstate.audit_trail.created_by}
                                            />
                                        );
                                    })}
                                </tbody>
                            </Table>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-end">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RealEstates;
