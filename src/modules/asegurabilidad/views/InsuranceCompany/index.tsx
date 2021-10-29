import { useEffect, useState /*, useState*/ } from 'react';
// import { IInsuranceCompanyAttributes /*, IInsuranceCompaniesResponse*/ } from '../../../../utils/interfaces';
// import ItemInsuranceCompany from "../../components/ItemInsuranceCompany";
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux';
import { Link, Card, Table as UiTable } from '../../../../utils/ui';
import { formatDate, swal } from '../../../../utils';

const InsuranceCompanies = () => {
    const dispatch = useDispatch();
    // const insurance_companies: IInsuranceCompanyAttributes[] = useSelector((states: any) => states.insurabilities.insurance_companies.value);
    // const loading: boolean = useSelector((store: any) => store.insurabilities.insurance_companies.loading);
    // const { total_results } = useSelector((store: any) => store.insurabilities.insurance_companies.pagination);
    const [query, set_query] = useState<string>('');

    const filter = () => {
        // dispatch(actions.getInsuranceCompanies({ page: 1, q: query }));
    };

    const change_page = (page, pageSize) => {
        // dispatch(actions.getInsuranceCompanies({ page, pageSize, q: query }));
    };

    const deleteInsuranceCompany = (id) => async () => {
        let res: any;
        if (id !== '' && id !== undefined) {
            // res = await dispatch(actions.getRealEstatesByInsuranceCompany(id));
        }
        if (res.length !== 0) {
            const result = await swal.fire({
                icon: 'warning',
                title: '¡Precaución!',
                text: `El proyecto contiene ${res.length} bienes inmuebles asociados.\n\nSi desea continuar los proyectos quedarán sin proyecto y se les debe asignar uno nuevo.`,
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
                        // await dispatch(actions.deleteInsuranceCompany(id));
                        // await dispatch(actions.getInsuranceCompanies());
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
                // await dispatch(actions.deleteInsuranceCompany(id));
                // await dispatch(actions.getInsuranceCompanies());
                // const _res: any = await dispatch(actions.deleteInsuranceCompany(id));
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
            align: 'center' as 'center',
        },
        {
            title: 'Nit',
            dataIndex: 'nit',
            align: 'center' as 'center',
        },
        {
            title: 'Telefono',
            dataIndex: 'phone',
            align: 'center' as 'center',
        },
        {
            title: 'Creado por',
            dataIndex: 'audit_trail',
            align: 'center' as 'center',
            render: (audit_trail) => audit_trail?.created_by,
        },
        {
            title: 'Acciones',
            fixed: true,
            children: [
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
                    title: 'Eliminar',
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
        // dispatch(actions.getInsuranceCompanies());
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Empresas Aseguradoras"
                        extra={<Link to="/insurabilities/company/create/" name="Crear" iconText="+" />}
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
                                                    <i className="fa fa-search" aria-hidden="true"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <UiTable
                            columns={table_columns}
                            items={[]}
                            with_pagination
                            change_page={change_page}
                            // count={total_results}
                            // loading={loading}
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default InsuranceCompanies;
