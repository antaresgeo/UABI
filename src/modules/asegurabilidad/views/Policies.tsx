// export {default as Insurability} from './CreatePolicy';
import { useDispatch } from 'react-redux';
import { IPolicyAttributes } from '../../../utils/interfaces/components.interfaces';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { formatDate } from '../../../utils';
import { actions } from '../redux';
import { Link, Card, Table as UiTable } from '../../../utils/ui';

const table_columns = [
    {
        title: "ID",
        dataIndex: "id",
        align: "center" as "center",
    },
    {
        title: "Matricula",
        dataIndex: "matricula",
        align: "center" as "center",
    },
    {
        title: "Fecha Inicial",
        dataIndex: "initialDate",
        align: "center" as "center",
        render: (dates) => formatDate(dates?.created_on),
    },
    {
        title: "Fecha Final",
        dataIndex: "finalDate",
        align: "center" as "center",
        render: (dates) => formatDate(dates?.created_on),
    },
    {
        title: "Corredor de Seguros",
        dataIndex: "ensuranceAgent",
        align: "center" as "center",
    },
    {
        title: "Compañía de Seguros",
        dataIndex: "ensuranceCompany",
        align: "center" as "center",
    },
    {
        title: "Valor Asegurado",
        dataIndex: "ensuranceValue",
        align: "center" as "center",
    },
    {
        title: "Póliza",
        dataIndex: "ensuranceFile",
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
                            to={`/insurability/policy/${id}/`}
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
                            to={`/insurability/policy/edit/${id}/`}
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
                                //await altStatusPolicy(parseInt(id));
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

const Policies = () => {
    const dispatch = useDispatch();
    const policies: IPolicyAttributes[] = useSelector((store: any) => store.asegurabilty.policy.value);
    
    useEffect(() => {
        dispatch(actions.getPolicies());
    }, []);

    useEffect(() => {
        dispatch(actions.getPolicies());
    }, [policies]);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Administrar Polizas"
                        extra={<Link to="/insurability/policy/create/" name="Crear" iconText="+" />}
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
                            change_page={() => {}}
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Policies;
