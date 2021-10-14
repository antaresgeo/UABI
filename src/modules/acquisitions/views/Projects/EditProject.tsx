import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getProject, updateProject } from "../../../../apis/uabi";
import {
    IProjectAttributes,
    IProjectResponse,
    IProjectsResponse,
} from "../../../../utils/interfaces/components.interfaces";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux";

interface IProps {
    id: string;
}

const DetailProject = () => {
    const { id } = useParams<IProps>();
    const dispatch = useDispatch();
    const history = useHistory();

    const project: IProjectAttributes = useSelector((states: any) => states.acquisitions.project.value);

    // const _getProject = async () => {
    //     let projectResponse: IProjectResponse | string = await getProject(id);

    //     if (typeof projectResponse !== "string") {
    //         let tmpData = projectResponse.data;

    //         setProject(tmpData);
    //     }
    // };

    const _updateProject = async () => {
        let res: any = await updateProject(
            { name: project.name, description: project.description },
            parseInt(project.id)
        );

        console.log(res);
        await alert(res.data.message);
        history.push(`/adquisitions/projects/${project.id}`);
    };

    useEffect(() => {
        dispatch(actions.getProject(id));
    }, []);

    const handleChange = (e: any) => {
        const key = e.target.name;

        project[key] = e.target.value;
        // setProject({
        //     ...project,
        //     [e.target.name]: e.target.value,
        // });
    };

    return (
        <section className="pt-5" id="texto-superior">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div style={{ backgroundColor: "white", borderRadius: 15 }}>
                            <h5>
                                <b>Editando:</b> {project.name}
                            </h5>
                            <hr />
                            <div className="container">
                                <form>
                                    <div className="row">
                                        <div className="col-3">
                                            <fieldset disabled>
                                                <label htmlFor="disabledTextInput" className="form-label">
                                                    Código Proyecto
                                                </label>
                                                <input
                                                    type="text"
                                                    id="disabledTextInput"
                                                    className="form-control"
                                                    placeholder="1ABC3"
                                                    value={project.id}
                                                    disabled
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-3">
                                            <label htmlFor="name" className="form-label">
                                                Nombre Proyecto
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={project.name}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="md-form col-6">
                                            <label htmlFor="description">Descripción del Proyecto</label>
                                            <textarea
                                                id="description"
                                                className="md-textarea form-control"
                                                rows={3}
                                                name="description"
                                                value={project.description}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>

                                        <div className="col">
                                            <label htmlFor="form-select" className="form-label">
                                                Destinación
                                            </label>
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                name="dependency"
                                                onChange={handleChange}
                                            >
                                                <option value="PÚBLICO" selected={project.dependency === "PÚBLICO"}>
                                                    Público
                                                </option>
                                                <option value="FISCAL" selected={project.dependency === "FISCAL"}>
                                                    Fiscal
                                                </option>
                                                <option value="MIXTO" selected={project.dependency === "MIXTO"}>
                                                    Mixto
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col text-center">
                                <div className="btn btn-success my-3" onClick={_updateProject}>
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

export default DetailProject;
