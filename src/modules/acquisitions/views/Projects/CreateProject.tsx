import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import { IProjectAttributes } from "../../../../utils/interfaces/components.interfaces";
import { actions } from "../../redux";

const CreateRealEstate = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const project: IProjectAttributes = useSelector((states: any) => states.acquisitions.project.value);

    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [dependency, setDependency] = useState("");

    const createProject = async () => {
        const response: any = await dispatch(actions.createProject(projectName, projectDescription, dependency));
        await swal("Message", response.message, "success");
        history.push(`/acquisitions/projects`);
    };

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
                                <b>Creación</b> de Proyecto
                            </h5>
                            <hr />
                            <div className="container">
                                <form>
                                    <div className="row">
                                        <div className="col-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Nombre Proyecto
                                            </label>
                                            <input
                                                type=""
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                placeholder="Ej.: Puente de la Madre Laura"
                                                value={projectName}
                                                onChange={(e) => setProjectName(e.target.value)}
                                            />
                                            <div id="emailHelp" className="form-text"></div>
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Descripción Proyecto
                                            </label>
                                            <input
                                                type=""
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                placeholder="Descripción del Proyecto"
                                                value={projectDescription}
                                                onChange={(e) => setProjectDescription(e.target.value)}
                                            />
                                            <div id="emailHelp" className="form-text"></div>
                                        </div>

                                        <div className="col">
                                            <label htmlFor="form-select" className="form-label">
                                                Dependecia
                                            </label>
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                onChange={(e: any) => {
                                                    setDependency(e.target.value);
                                                }}
                                            >
                                                <option value="" selected disabled hidden>
                                                    Selecciona una Destinación
                                                </option>
                                                <option value="Dependencia Infraestructura">
                                                    Dependencia Infraestructura
                                                </option>
                                                <option value="Dependencia Salud">Dependencia Salud</option>
                                                <option value="Dependencia Educación">Dependencia Educación</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col text-center">
                                <div className="btn btn-success my-3" onClick={createProject}>
                                    Guardar
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateRealEstate;
