import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    IProjectAttributes,
    IProjectsResponse,
    IRealEstateAttributes,
    IRealEstatesResponse,
} from "../../../../utils/interfaces/components.interfaces";
import { Input, Table } from "semantic-ui-react";
import ItemRealEstate from "../../components/ItemRealEstate";
import AdquisitionsFrom from "../../components/AdquisitionsForm";
import GeneralDataForm from "../../components/GeneralDataForm";
import { actions } from "../../redux";
import { createRealEstate } from "../../../../apis/uabi";
import { useLocation, useParams, useRouteMatch } from "react-router-dom";
import { qsToArray } from "../../../../utils";

const RealEstate = () => {
    const { search } = useLocation();
    const dispatch = useDispatch();
    // const params = useParams();
    let qsAsArray = qsToArray(search);

    const [projectSelected, setProjectSelected] = useState({ flag: false, value: "" });

    const realEstates: IRealEstateAttributes[] = useSelector((states: any) => states.acquisitions.realEstates.value);
    // const realEstate: IRealEstateAttributes = useSelector((states: any) => states.acquisitions.realEstate.value);
    const projects: IProjectAttributes[] = useSelector((states: any) => states.acquisitions.projects.value);

    const [realEstate, setRealEstate] = useState<IRealEstateAttributes>({
        dependency: "",
        destination_type: "",
        accounting_account: "",
        cost_center: "",

        registry_number: "",
        name: "",
        description: "",
        patrimonial_value: -1,
        address: "",
        cbml: "",

        total_area: -1,
        total_percentage: -1,
        zone: "",
        tipology: "",

        project_id: -1,

        audit_trail: {
            created_by: "",
            created_on: "",
            updated_by: null,
            updated_on: null,
            updated_values: null,
        },
        status: -1,
    });

    const _createRealEstate = async () => {
        // const response: any = await createRealEstate(realEstate);

        // await alert(response.message);
        // console.log(response);
        // realEstates.push(realEstate);
        // cleanInputs();
        // dispatch(actions.getRealEstates());
        // _getRealEstates();
        console.log(realEstate);
    };

    const cleanInputs = () => {
        setRealEstate({
            dependency: "",
            destination_type: "",
            accounting_account: "",
            cost_center: "",
            registry_number: "",
            name: "",
            description: "",
            patrimonial_value: -1,

            address: "",
            cbml: "",
            total_area: -1,
            total_percentage: -1,
            zone: "",
            tipology: "",
            project_id: -1,
        });
    };

    const handleChange = (e: any) => {
        // if (e.target.type === 'radio')
        // setRealEstate({...realEstate, zone: e.target.name})
        if (projectSelected.flag && e.target.name === "project_id") projectSelected.flag = false;

        if (e.target.type === "number")
            setRealEstate({
                ...realEstate,
                [e.target.name]: parseInt(e.target.value),
            });
        else
            setRealEstate({
                ...realEstate,
                [e.target.name]: e.target.value,
            });
    };

    // Prints
    const printProjects = () => {
        projects.map((project) => {
            return (
                <option value={project.id} selected>
                    <div className="container">{String(project.name)}</div>
                </option>
            );
        });
    };

    useEffect(() => {
        // _getProjects();
        dispatch(actions.getProjects());

        qsAsArray.map(async (qs) => {
            if (qs.key === "project_id") {
                console.log(qs.key === "project_id");
                await setProjectSelected({ flag: true, value: qs.value });

                setRealEstate({ ...realEstate, project_id: parseInt(qs.value) });
            }
        });
    }, []);

    useEffect(() => {
        // _getRealEstates();
        dispatch(actions.getRealEstates());
    }, [realEstate.project_id]);

    useEffect(() => {
        printProjects();
    }, [projects]);

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
                            <h5>
                                <b>Creación</b> de Bien Inmueble
                            </h5>
                            <hr />
                            <div className="container">
                                <form>
                                    <div className="row">
                                        <div className="col-3 d-flex">
                                            {/*	<div className='form-check'>
												<input
													className='form-check-input'
													type='radio'
													name='flexRadioDefault'
													id='flexRadioDefault4'
													checked
												/>
												<label
													className='form-check-label'
													htmlFor='flexRadioDefault4'
												>
													Proyecto Existente
												</label>
											</div> */}
                                            {/* <div className='form-check'>
													<input
														className='form-check-input'
														type='radio'
														name='flexRadioDefault'
														id='flexRadioDefault5'
													/>
													<label
														className='form-check-label'
														htmlFor='flexRadioDefault5'
													>
														Proyecto Nuevo
													</label>
												</div> */}
                                        </div>
                                        <div className="col-6">
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                name="project_id"
                                                onChange={handleChange}
                                                defaultValue={projectSelected.flag && projectSelected.value}
                                            >
                                                <option value="" selected disabled hidden>
                                                    -- Seleccione Proyecto --
                                                </option>
                                                {projects.map((project) => {
                                                    const { name, id } = project;
                                                    return <option value={id}>{name.toUpperCase()}</option>;
                                                })}
                                            </select>
                                        </div>
                                    </div>

                                    <GeneralDataForm type="create" handleChange={handleChange} data={{}} />

                                    {/* Adquisitions */}
                                    <AdquisitionsFrom type="create" />
                                    {/* END Adquisitions */}

                                    <div
                                        className="row py-3 my-3"
                                        style={{
                                            backgroundColor: "#f7f7f7",
                                            borderRadius: 15,
                                            border: "1px solid",
                                        }}
                                    >
                                        <h5>Documentos Soporte</h5>

                                        <div className="col-3">
                                            <label htmlFor="form-select" className="form-label">
                                                Nombre del Documento
                                            </label>
                                            <Input />
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
                                        <div className="col-1">
                                            <label htmlFor=""></label>
                                            <button type="submit" className="btn btn-primary mr-3">
                                                Subir
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-flex my-3">
                                        <button type="submit" className="btn btn-success mr-3">
                                            Guardar
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary mx-3"
                                            onClick={_createRealEstate}
                                        >
                                            Agregar
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <hr />
                            <div className="d-flex flex-row">
                                <h5>Bienes Inmuebles del Proyecto</h5>
                            </div>
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
                                    {realEstates.map((project) => {
                                        let creationDate = new Date(
                                            parseFloat(project.audit_trail.created_on)
                                        ).toDateString();
                                        return (
                                            <ItemRealEstate
                                                id={String(project.id)}
                                                matricula={project.registry_number}
                                                name={project.name}
                                                creationDate={creationDate}
                                                createdBy={project.audit_trail.created_by}
                                            />
                                        );
                                    })}
                                </tbody>
                            </Table>

                            <div className="col text-center">
                                <button type="submit" className="btn btn-success my-3">
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RealEstate;
