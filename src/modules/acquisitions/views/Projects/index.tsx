import { useEffect, useState /*, useState*/ } from 'react';
import { IProjectAttributes /*, IProjectsResponse*/ } from '../../../../utils/interfaces';
// import ItemProject from "../../components/ItemProject";
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux';
import { Link, Card, Table as UiTable } from '../../../../utils/ui';
import { formatDate, swal } from '../../../../utils';
import Tag from 'antd/lib/tag';

const Projects = () => {
    const dispatch = useDispatch();
    const projects: IProjectAttributes[] = useSelector((states: any) => states.acquisitions.projects.value);
    const loading: boolean = useSelector((states: any) => states.acquisitions.projects.loading);
    const { total_results } = useSelector((store: any) => store.acquisitions.projects.pagination);
    const [query, set_query] = useState<string>('');

    const filter = () => {
        dispatch(actions.getProjects({ page: 1, q: query }));
    };

    const change_page = (page, pageSize) => {
        dispatch(actions.getProjects({ page, pageSize, q: query }));
    };

    const deleteProject = (id) => async () => {
        let res: any;
        if (id !== '' && id !== undefined) {
            res = await dispatch(actions.getRealEstatesByProject(id));
        }
        if (res?.total && res.total !== 0) {
            const result = await swal.fire({
                icon: 'warning',
                title: '¡Precaución!',
                text: `El proyecto contiene ${
                    res?.total || ''
                } bienes inmuebles asociados.\n\nSi desea continuar los proyectos quedarán sin proyecto y se les debe asignar uno nuevo.`,
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Continuar',
                denyButtonText: `Cancelar`,
            });

            if (result.isConfirmed) {
                swal.fire({
                    icon: 'info',
                    title: '¡Última oportunidad!',
                    text: '¿Está seguro que quiere inactivar el proyecto?',
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: 'Continuar',
                    denyButtonText: `Cancelar`,
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        await dispatch(actions.deleteProject(id));
                        await dispatch(actions.getProjects());
                        // swal.fire({
                        //     title: "Proyecto Inactivado",
                        //     text: message,
                        //     icon: "success",
                        //     showConfirmButton: false,
                        //     timer: 1500,
                        // });
                    } else if (result.isDenied) {
                        swal.close();
                    }
                });
            } else if (result.isDenied) {
                swal.close();
            }
        } else {
            const result = await swal.fire({
                icon: 'warning',
                title: '¿Está seguro?',
                text: '¿Está seguro que quiere inactivar el proyecto?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Continuar',
                denyButtonText: `Cancelar`,
            });

            if (result.isConfirmed) {
                await dispatch(actions.deleteProject(id));
                await dispatch(actions.getProjects());
                // const _res: any = await dispatch(actions.deleteProject(id));

                // swal.fire({
                //     title: "Proyecto Inactivado",
                //     text: message,
                //     icon: "success",
                //     showConfirmButton: false,
                //     timer: 1500,
                // });
            } else if (result.isDenied) {
                swal.close();
            }
        }
    };

    const table_columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            align: 'center' as 'center',
        },
        {
            title: 'Nombre',
            dataIndex: 'name',
            align: 'left' as 'left',
        },
        {
            title: 'Dependencia',
            dataIndex: 'dependency',
            align: 'left' as 'left',
        },
        {
            title: 'Fecha Creación',
            dataIndex: 'audit_trail',
            align: 'left' as 'left',

            render: (audit_trail) => formatDate(audit_trail?.created_on),
        },
        {
            title: 'Creado por',
            dataIndex: 'audit_trail',
            align: 'left' as 'left',
            render: (audit_trail) => audit_trail?.created_by,
        },
        {
            title: 'Estado',
            dataIndex: 'status',
            align: 'center' as 'center',
            render: (s) => {
                if (s === 'Activo') return <Tag color="success">{s}</Tag>;
                return <Tag color="default">{s}</Tag>;
            },
        },
        {
            title: 'Acciones',
            fixed: true,
            children: [
                {
                    title: 'Ver',
                    dataIndex: 'id',
                    align: 'center' as 'center',
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
                    title: 'Editar',
                    dataIndex: 'id',
                    align: 'center' as 'center',
                    render: (id) => {
                        if (id !== 0) {
                            return (
                                <Link
                                    to={`/acquisitions/projects/edit/${id}/`}
                                    name=""
                                    avatar={false}
                                    icon={<i className="fa fa-pencil" aria-hidden="true" />}
                                />
                            );
                        } else {
                            return <i className="fa fa-pencil" aria-hidden="true" style={{ color: '#aaa' }} />;
                        }
                    },
                },
                {
                    title: 'Desactivar',
                    dataIndex: 'id',
                    align: 'center' as 'center',
                    render: (id) => {
                        if (id !== 0) {
                            return (
                                <div className="text-danger" onClick={deleteProject(id)}>
                                    <i className="fa fa-times-circle" aria-hidden="true" />
                                    {/*<Switch size="small" />*/}
                                </div>
                            );
                        } else {
                            return <i className="fa fa-times-circle" aria-hidden="true" style={{ color: '#aaa' }} />;
                            // return <Switch size="small" disabled />;
                        }
                    },
                },
            ],
        },
    ];

    useEffect(() => {
        dispatch(actions.getProjects());
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Proyectos"
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
                                                placeholder="Dependencia / Código"
                                                aria-label="Dependencia / Código"
                                                aria-describedby="button-addon2"
                                                value={query}
                                                onChange={(e) => {
                                                    set_query(e.target.value);
                                                }}
                                            />
                                            <span className="input-group-text" onClick={filter}>
                                                <span>
                                                    <i className="fa fa-search" aria-hidden="true" />
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <UiTable
                            columns={table_columns}
                            items={projects}
                            with_pagination
                            change_page={change_page}
                            count={total_results}
                            loading={loading}
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Projects;
