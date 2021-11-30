import { useEffect } from 'react'
import { formatDate, swal } from '../../../../utils';
import { Card, Link, Table as UiTable } from '../../../../utils/ui';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux';
import { Switch } from "antd";
import { IRolAttributes, IRoleSelectAttributes } from '../../../../utils/interfaces/roles';


export const ListRoles = () => {
    const dispatch = useDispatch();
    const roles: IRoleSelectAttributes[] = useSelector((store: any) => {

        return store.users.rolesSelect.value

    });
    //  const loading: boolean = useSelector((store: any) => store.users.roles.loading);
    //  const { total_results } = useSelector((store: any) => store.users.roles.pagination);

    // const change_page = (page, pageSize) => {
    //     dispatch(actions.getRoles());
    // };
    useEffect(() => {
        dispatch(actions.getRoles())
    }, [])

    const deleteRol = (id) => async () => {
        let res: any;
        if (id !== '' && id !== undefined) {
            //res = await dispatch(actions.getRealEstatesByProject(id));
        }
        if (res?.total && res.total !== 0) {
            const result = await swal.fire({
                icon: 'warning',
                title: '¡Precaución!',
                text: `El rol contiene ${res?.total || ''} usuarios asociados.\n\nSi desea continuar los usuario quedarán sin rol asiciado.`,
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Continuar',
                denyButtonText: `Cancelar`,
            });

            if (result.isConfirmed) {
                swal.fire({
                    icon: 'info',
                    title: '¡Última oportunidad!',
                    text: '¿Está seguro que quiere inactivar el rol?',
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: 'Continuar',
                    denyButtonText: `Cancelar`,
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        console.log('inactivar rol con usuarios')
                        // await dispatch(actions.deleteRole(id));
                        // await dispatch(actions.getRoles());


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
                text: '¿Está seguro que quiere inactivar el rol?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Continuar',
                denyButtonText: `Cancelar`,
            });

            if (result.isConfirmed) {
                console.log('inactivar rol sin usuarios')
                await dispatch(actions.deleteRole(id));
                await dispatch(actions.getRoles());

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
            title: 'Rol',
            dataIndex: 'role_name',
            align: 'center' as 'center',
        },
        {
            title: 'Fecha Creación',
            dataIndex: 'audit_trail',
            align: 'center' as 'center',
            render: (dates) => formatDate(dates?.created_on),
        },
        {
            title: 'Creado por',
            dataIndex: 'audit_trail',
            align: 'center' as 'center',
            render: (data) => (data?.created_by),
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
                                to={`/roles/${id}/`}
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
                        return (
                            <Link
                                to={`/roles/edit/${id}/`}
                                name=""
                                avatar={false}
                                icon={<i className="fa fa-pencil" aria-hidden="true" />}
                            />
                        );
                    },
                },
                {
                    title: 'Inactivar',
                    dataIndex: 'id',
                    align: 'center' as 'center',
                    render: (id) => {
                        if (id !== 0) {
                            return (
                                <div className="text-danger" onClick={deleteRol(id)}>
                                    <i className="fa fa-times-circle" aria-hidden="true" />
                                    {/*<Switch size="small" />*/}
                                </div>
                            );
                        } else {
                            return  <i className="fa fa-times-circle" aria-hidden="true" />
                        }
                    },
                },
            ],
        },
    ];




    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Registro de roles"
                        extra={<Link to="/roles/create/" name="Crear" iconText="+" />}
                    >
                        <UiTable
                            columns={table_columns}
                            items={roles}
                        //with_pagination
                        //count={total_results}
                        //loading={loading}
                        //change_page={change_page}
                        />

                    </Card>
                </div>
            </div>
        </div>

    )
}
