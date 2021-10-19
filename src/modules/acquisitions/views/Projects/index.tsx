import { useEffect/*, useState*/ } from "react";
import { IProjectAttributes/*, IProjectsResponse*/ } from "../../../../utils/interfaces/components.interfaces";
// import ItemProject from "../../components/ItemProject";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux";
import { Link, Card, Table as UiTable } from "../../../../utils/ui";
import { altStatusProject } from "../../../../apis/uabi";
import { formatDate } from "../../../../utils";

const table_columns = [
    {
        title: "ID",
        dataIndex: "id",
        align: "center" as "center",
    },
    {
        title: "Nombre",
        dataIndex: "name",
        align: "center" as "center",
    },
    {
        title: "Dependencia",
        dataIndex: "dependency",
        align: "center" as "center",
    },
    {
        title: "Fecha Creación",
        dataIndex: "audit_trail",
        align: "center" as "center",
        render: (dates) => formatDate(dates?.created_on),
    },
    {
        title: "Creado por",
        dataIndex: "audit_trail.created_by",
        align: "center" as "center",
    },
    {
        title: "Acciones",
        fixed: true,
        children: [
            {
                title: "Ver",
                dataIndex: "id",
                align: "center" as "center",
                render: (id) => {
                    return (
                        <Link
                            to={`/acquisitions/projects/${id}/`}
                            name=""
                            avatar={false}
                            icon={<i className="fa fa-eye" aria-hidden="true" />}
                        />
                    );
                },
            },
            {
                title: "Editar",
                dataIndex: "id",
                align: "center" as "center",
                render: (id) => {
                    return (
                        <Link
                            to={`/acquisitions/projects/edit/${id}/`}
                            name=""
                            avatar={false}
                            icon={<i className="fa fa-pencil" aria-hidden="true" />}
                        />
                    );
                },
            },
            {
                title: "Eliminar",
                dataIndex: "id",
                align: "center" as "center",
                render: (id) => {
                    return (
                        <div
                            className="text-danger"
                            onClick={async () => {
                                await altStatusProject(parseInt(id));
                            }}
                        >
                            <i className="fa fa-trash" aria-hidden="true" />
                        </div>
                    );
                },
            },
        ],
    },
];

const Projects = () => {
    const dispatch = useDispatch();
    const projects: IProjectAttributes[] = useSelector((states: any) => states.acquisitions.projects.value);
    
    useEffect(() => {
        dispatch(actions.getProjects());
    }, []);

    useEffect(() => {
        dispatch(actions.getProjects());
    }, [projects]);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Administrar Proyectos"
                        extra={<Link to="/acquisitions/projects/create/" name="Crear" iconText="+" />}
                    >
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
                                                <span>
                                                    <i className="fa fa-search" aria-hidden="true"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <Link
                                        to=""
                                        className="ml-4"
                                        name="Filtro de búsqueda"
                                        avatar={false}
                                        icon={<i className="fa fa-filter" aria-hidden="true" />}
                                    />
                                </div>
                            </div>
                        </form>
                        <UiTable
                            columns={table_columns}
                            items={projects}
                            with_pagination
                            count={10}
                            change_page={() => {}}
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Projects;
