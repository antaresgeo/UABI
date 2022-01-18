import { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux';
import { Link, Card, Table as UiTable } from '../../../../utils/ui';
import { swal, swal_warning } from '../../../../utils';
import FilterForm from '../../../../utils/ui/filter_form';
// import { guards } from '../../routes';

const Dependecies = () => {
    const dispatch = useDispatch();
    const dependencies: any = useSelector((store: any) => store.generalList.dependencies.value);
    const loading: boolean = useSelector((store: any) => store.generalList.dependencies.loading);
    const { total_results } = useSelector((store: any) => store.generalList.dependencies.pagination);
    const [filters, set_filters] = useState(null);
    // const user = useSelector((store: any) => store.auth.user);
    // const aux_user = {
    //     ...user,
    //     permits: user?.permits.map((a) => a.name) || [],
    //     roles: user?.roles.map((a) => a.name) || [],
    // };


    const filter = async (_filters, _) => {
        set_filters(_filters);
        await dispatch(actions.get_all_dependencies(_filters));
    };

    const change_page = (page, pageSize) => {
        dispatch(actions.get_all_dependencies({ page, pageSize, ...filters }));
    };

    const deleteDependency = (id) => async () => {
        let res: any;
        if (id !== '' && id !== undefined) {
            // res = await dispatch(actions.getRealEstatesByInsuranceBroker(id));
        }
        if (res && res.length !== 0) {
            const result = await swal_warning.fire({
                title: '¡Precaución!',
                text: `La Dependencia contiene ${res?.length || ''} valores asociados.\n\n`,
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Continuar',
                denyButtonText: `Cancelar`,
            });

            if (result.isConfirmed) {
                swal_warning.fire({
                    icon: 'info',
                    title: '¡Última oportunidad!',
                    text: '¿Está seguro que quiere inactivar esta Dependencia?',
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: 'Continuar',
                    denyButtonText: `Cancelar`,
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        await dispatch(actions.delete_dependency(id));
                        await filter({}, null);
                    } else if (result.isDenied) {
                        swal.close();
                    }
                });
            } else if (result.isDenied) {
                swal.close();
            }
        } else {
            const result = await swal_warning.fire({
                title: '¿Está seguro?',
                text: '¿Está seguro que quiere inactivar esta Dependencia?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Continuar',
                denyButtonText: `Cancelar`,
            });

            if (result.isConfirmed) {
                await dispatch(actions.delete_dependency(id));
                await filter({}, null);
            } else if (result.isDenied) {
                swal.close();
            }
        }
    };

    const acciones = {
        title: 'Acciones',
        fixed: true,
        children: [],
    }

    const ver = {
        title: 'Ver',
        dataIndex: 'id',
        align: 'center' as 'center',
        render: (id) => {
            return (
                <Link
                    to={`/general_list/dependency/${id}/`}
                    name=""
                    avatar={false}
                    icon={<i className="fa fa-eye" aria-hidden="true" />}
                />
            );
        },
    }

    const editar = {
        title: 'Editar',
        dataIndex: 'id',
        align: 'center' as 'center',
        render: (id) => {
            return (
                <Link
                    to={`/general_list/dependency/edit/${id}/`}
                    name=""
                    avatar={false}
                    icon={<i className="fa fa-pencil" aria-hidden="true" />}
                />
            );
        },
    }

    const eliminar = {
        title: 'Desactivar',
        dataIndex: 'id',
        align: 'center' as 'center',
        render: (id) => {
            return (
                <div className="text-danger" onClick={deleteDependency(id)}>
                    <i className="fa fa-times-circle" aria-hidden="true" />
                </div>
            );
        },
    }

    const table_columns: any = [
        {
            title: 'ID',
            dataIndex: 'id',
            align: 'center' as 'center',
        },
        {
            title: 'Dependencia',
            dataIndex: 'dependency',
            align: 'left' as 'left',
        },
        {
            title: 'Centro Gestor',
            dataIndex: 'management_center',
            align: 'left' as 'left',
        },
        // {
        //     title: 'Creado por',
        //     dataIndex: 'audit_trail',
        //     align: 'left' as 'left',
        //     render: (audit_trail) => audit_trail?.created_by,
        // },

    ];

    // if (guards.detailInsuranceBroker({ user: aux_user })) {
        acciones.children.push(ver)
    // }
    // if (guards.editInsuranceBroker({ user: aux_user })) {
        acciones.children.push(editar)
    // }
    // if (guards.deleteInsuranceBroker({ user: aux_user })) {
        acciones.children.push(eliminar)
    // }
    // if (acciones.children.length > 0) {
        table_columns.push(acciones)
    // }

    useEffect(() => {
        dispatch(actions.clear_all_tipologies());
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Dependencias"
                        extra={
                            <>
                                {/* {guards.createInsuranceBroker({ user: aux_user }) && ( */}
                                    <Link to="/general_list/dependency/create/" name="Crear" iconText="+" />
                                {/* )} */}
                            </>
                        }
                    >
                        <div className="row justify-content-between">
                            <div className="col-5 d-flex">
                                <div className="col-6 ">
                                    <FilterForm filters={[{ key: 'name', name: 'Nombre' }]} onSubmit={filter} />
                                </div>
                            </div>
                        </div>
                        <UiTable
                            columns={table_columns}
                            items={dependencies}
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

export default Dependecies;
