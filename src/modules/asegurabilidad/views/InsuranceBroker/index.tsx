import { useEffect, useState /*, useState*/ } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux';
import { Link, Card, Table as UiTable } from '../../../../utils/ui';
import { formatDate, swal } from '../../../../utils';

const InsuranceBrokers = () => {
    const dispatch = useDispatch();
    const insurance_brokers: any = useSelector((store: any) => store.insurability.brokers.value);
    const loading: boolean = useSelector((store: any) => store.insurability.brokers.loading);
    const { total_results } = useSelector((store: any) => store.insurability.brokers.pagination);
    const [query, set_query] = useState<string>('');

    const filter = () => {
        const filters = { page: 1, ...(query ? { q: query } : {}) };
        dispatch(actions.get_all_brokers(filters));
    };

    const change_page = (page, pageSize) => {
        const filters = { page, pageSize, ...(query ? { q: query } : {}) };
        dispatch(actions.get_all_brokers(filters));
    };

    const deleteInsuranceBroker = (id) => async () => {
        let res: any;
        if (id !== '' && id !== undefined) {
            // res = await dispatch(actions.getRealEstatesByInsuranceBroker(id));
        }
        if (res && res.length !== 0) {
            const result = await swal.fire({
                icon: 'warning',
                title: '¡Precaución!',
                text: `El Corredor de seguros contiene ${res?.length || ''} valores asociados.\n\n`,
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Continuar',
                denyButtonText: `Cancelar`,
            });

            if (result.isConfirmed) {
                swal.fire({
                    icon: 'info',
                    title: '¡Última oportunidad!',
                    text: '¿Está seguro que quiere inactivar el corredor de seguros?',
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: 'Continuar',
                    denyButtonText: `Cancelar`,
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        await dispatch(actions.delete_broker(id));
                        await filter();
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
                text: '¿Está seguro que quiere inactivar el corredor de seguros?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Continuar',
                denyButtonText: `Cancelar`,
            });

            if (result.isConfirmed) {
                await dispatch(actions.delete_broker(id));
                await filter();
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
            title: 'Nit',
            dataIndex: 'nit',
            align: 'left' as 'left',
        },
        {
            title: 'Telefono',
            dataIndex: 'phone',
            align: 'left' as 'left',
        },
        {
            title: 'Creado por',
            dataIndex: 'audit_trail',
            align: 'left' as 'left',
            render: (audit_trail) => audit_trail?.created_by,
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
                                to={`/insurabilities/broker/${id}/`}
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
                                to={`/insurabilities/broker/edit/${id}/`}
                                name=""
                                avatar={false}
                                icon={<i className="fa fa-pencil" aria-hidden="true" />}
                            />
                        );
                    },
                },
                {
                    title: 'Desactivar',
                    dataIndex: 'id',
                    align: 'center' as 'center',
                    render: (id) => {
                        return (
                            <div className="text-danger" onClick={deleteInsuranceBroker(id)}>
                                <i className="fa fa-times-circle" aria-hidden="true" />
                            </div>
                        );
                    },
                },
            ],
        },
    ];

    useEffect(() => {
        dispatch(actions.get_all_brokers());
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Corredoras de seguros"
                        extra={<Link to="/insurabilities/broker/create/" name="Crear" iconText="+" />}
                    >
                        <UiTable
                            columns={table_columns}
                            items={insurance_brokers}
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

export default InsuranceBrokers;
