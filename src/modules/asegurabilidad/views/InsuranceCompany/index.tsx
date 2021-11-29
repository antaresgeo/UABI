import { useEffect, useState /*, useState*/ } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux';
import { Link, Card, Table as UiTable } from '../../../../utils/ui';
import {  swal } from '../../../../utils';

const InsuranceCompanies = () => {
    const dispatch = useDispatch();
    const insurance_companies: any = useSelector((store: any) => store.insurability.companies.value);
    const loading: boolean = useSelector((store: any) => store.insurability.companies.loading);
    const { total_results } = useSelector((store: any) => store.insurability.companies.pagination);
    const [query, set_query] = useState<string>('');

    const filter = () => {
        const filters = { page: 1, ...(query ? { q: query } : {}) };
        dispatch(actions.get_all_companies(filters));
    };

    const change_page = (page, pageSize) => {
        const filters = { page, pageSize, ...(query ? { q: query } : {}) };
        dispatch(actions.get_all_companies(filters));
    };

    const deleteInsuranceCompany = (id) => async () => {
        let res: any;
        if (id !== '' && id !== undefined) {
            // res = await dispatch(actions.getRealEstatesByInsuranceCompany(id));
        }
        if (res && res.length !== 0) {
            const result = await swal.fire({
                icon: 'warning',
                title: '¡Precaución!',
                text: `La Compañia contiene ${res?.length || ''} valores asociados.\n\.`,
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Continuar',
                denyButtonText: `Cancelar`,
            });

            if (result.isConfirmed) {
                swal.fire({
                    icon: 'info',
                    title: '¡Última oportunidad!',
                    text: '¿Está seguro que quiere inactivar la compañia?',
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: 'Continuar',
                    denyButtonText: `Cancelar`,

                }).then(async (result) => {
                    if (result.isConfirmed) {
                        await dispatch(actions.delete_company(id));
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
                text: '¿Está seguro que quiere inactivar la compañia?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Continuar',
                denyButtonText: `Cancelar`,
            });

            if (result.isConfirmed) {
                await dispatch(actions.delete_company(id));
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
                                to={`/insurabilities/company/${id}/`}
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
                                to={`/insurabilities/company/edit/${id}/`}
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
                            <div className="text-danger" onClick={deleteInsuranceCompany(id)}>
                                <i className="fa fa-trash" aria-hidden="true" />
                            </div>
                        );
                    },
                },
            ],
        },
    ];

    useEffect(() => {
        dispatch(actions.get_all_companies());
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Compañias Aseguradoras"
                        extra={<Link to="/insurabilities/company/create/" name="Crear" iconText="+" />}
                    >
                        <UiTable
                            columns={table_columns}
                            items={insurance_companies}
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

export default InsuranceCompanies;
