// export {default as Insurability} from './CreatePolicy';
import { useDispatch } from 'react-redux';
import { IPolicyAttributes } from '../../../../utils/interfaces/insurability';
import { useSelector } from 'react-redux';
import { actions } from '../../redux';
import { useEffect } from 'react';

import { formatDate } from '../../../../utils';
import { Link, Card, Table as UiTable } from '../../../../utils/ui';

const table_columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        align: 'center' as 'center',
    },
    {
        title: 'Matrícula',
        dataIndex: 'registry_number',
        align: 'center' as 'center',
    },
    {
        title: "Bien Inmueble",
        dataIndex: "real_estate",
        align: "center" as "center",
        render: (data) => data?.name,
    },
    {
        title: "Estado",
        dataIndex: "status",
        align: "center" as "center",
    },

    {
        title: "Fecha de Inicio",
        dataIndex: "vigency_start",
        align: "center" as "center",
        render: (dates) => formatDate(parseInt(dates))

    },
    {
        title: "Fecha finalización",
        dataIndex: "vigency_end",
        align: "center" as "center",
        render: (dates) => formatDate(parseInt(dates)),
    },
    {
        title: 'Creada por',
        dataIndex: 'audit_trail',
        align: 'center' as 'center',
        render: (data) => data.created_by,
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
                            to={`/insurabilities/policy/${id}/`}
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
                            to={`/insurabilities/policy/edit/${id}/`}
                            name=""
                            avatar={false}
                            icon={<i className="fa fa-pencil" aria-hidden="true" />}
                        />
                    );
                },
            },
            {
                title: 'Crear',
                dataIndex: 'real_estate',
                align: 'center' as 'center',
                render: (data) => {
                    if (data) {
                        return (
                            <Link
                                to={`/insurabilities/policy/create/${data?.id}/`}
                                name=""
                                avatar={false}
                                icon={<i className="fa fa-plus" aria-hidden="true" />}
                            />
                        );
                    }else {
                        return "";
                    }
                },
            },
        ],
    },
];

const Policies = () => {
    const dispatch = useDispatch();
    const policies: IPolicyAttributes[] = useSelector((store: any) => store.insurability.policies.value);
    console.log(policies);
    useEffect(() => {
        dispatch(actions.getPolicies());
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Polizas"
                        extra={<Link to="/insurabilities/policy/create/" name="Crear" iconText="+" />}
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
                            items={policies}
                            with_pagination
                            count={10}
                            change_page={() => { }}
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Policies;
