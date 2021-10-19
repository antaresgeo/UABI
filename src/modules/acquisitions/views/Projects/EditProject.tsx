import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { actions } from "../../redux";

// SERVICES
import { useSelector, useDispatch } from "react-redux";

// INTERFACES
import {
    IProjectAttributes,
    IProjectResponse,
    IProjectsResponse,
} from "../../../../utils/interfaces/components.interfaces";
import swal from "sweetalert";

interface IParams {
    id: string;
}

interface IProps {
    view?: string;
}

const DetailProject = ({ view }: IProps) => {
    const { id } = useParams<IParams>();
    const history = useHistory();
    const dispatch = useDispatch();

    const project: IProjectAttributes = useSelector((states: any) => states.acquisitions.project.value);
    const [projectForm, setProjectForm] = useState<IProjectAttributes>({
        id: "",
        name: "",
        description: "",
        dependency: "",
        audit_trail: {
            created_by: "",
            created_on: "",
            updated_by: null,
            updated_on: null,
            updated_values: null,
        },
        status: -1,
    });

    // const _getProject = async () => {
    //     let projectResponse: IProjectResponse | string = await getProject(id);

    //     if (typeof projectResponse !== "string") {
    //         let tmpData = projectResponse.data;

    //         setProjectForm(tmpData);
    //     }
    // };

    const _updateProject = async () => {
        let res: any;
        res = await dispatch(
            actions.updateProject(
                { name: projectForm.name, description: projectForm.description, dependency: projectForm.dependency },
                id
            )
        );

        console.log(res);
        await swal("Proyecto actualizado", res.data.message, "success");
        history.push(`/acquisitions/projects/${project.id}`);
    };

    useEffect(() => {
        dispatch(actions.getProject(id));
    }, []);

    useEffect(() => {
        setProjectForm(project);
    }, [project]);

    const handleChange = (e: any) => {
        setProjectForm({
            ...projectForm,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section className="pt-5" id="texto-superior">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div style={{ backgroundColor: "white", borderRadius: 15 }}>
                            <h5>
                                <b>Editando:</b> {projectForm.name}
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
                                                    value={projectForm.id}
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
                                                value={projectForm.name}
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
                                                value={projectForm.description}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>

                                        <div className="col">
                                            <label htmlFor="form-select" className="form-label">
                                                Dependencia
                                            </label>
                                            <select
                                                className="form-select"
                                                aria-label="dependency"
                                                name="dependency"
                                                onChange={handleChange}
                                            >
                                                <option
                                                    value="Dependencia Infraestructura"
                                                    selected={projectForm.dependency === "Dependencia Infraestructura"}
                                                >
                                                    Dependencia Infraestructura
                                                </option>
                                                <option
                                                    value="Dependencia Salud"
                                                    selected={projectForm.dependency === "Dependencia Salud"}
                                                >
                                                    Dependencia Salud
                                                </option>
                                                <option
                                                    value="Dependencia Educación"
                                                    selected={projectForm.dependency === "Dependencia Educación"}
                                                >
                                                    Dependencia Educación
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
