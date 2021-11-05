// export {default as Insurability} from './CreatePolicy';
import { useDispatch } from 'react-redux';
import { IPolicyAttributes } from '../../../../utils/interfaces/insurability';
import { useSelector } from 'react-redux';
import { actions } from '../../redux';
import { useEffect } from 'react';
import moment from 'moment';
import { formatDate } from '../../../../utils';
import { Link, Card, Table as UiTable } from '../../../../utils/ui';

const table_columns = [
    {
        title: 'ID',
        dataIndex: 'real_estate',
        align: 'center' as 'center',
        render: (data) => data?.id,
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
        render: (dates) => {
            const tmpDate = new Date(parseInt(dates));
            const newDate = moment(tmpDate).format('MM/DD/YYYY');
            return newDate
        }

    },
    {
        title: "Fecha finalización",
        dataIndex: "vigency_end",
        align: "center" as "center",
        render: (dates) => {
            const tmpDate = new Date(parseInt(dates));
            const newDate = moment(tmpDate).format('MM/DD/YYYY');
            return newDate
        }
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
                dataIndex: 'real_estate',
                align: 'center' as 'center',
                render: (data) => {
                    if (data) {
                        return (
                            <Link
                                to={`/insurabilities/policy/${data?.id}/`}
                                name=""
                                avatar={false}
                                icon={<i className="fa fa-eye" aria-hidden="true" />}
                            />
                        );
                    } else {
                        return '';
                    }

                },
            },
            {
                title: 'Editar',
                dataIndex: 'real_estate',
                align: 'center' as 'center',
                render: (data) => {
                    if (data) {
                        return (
                            <Link
                                to={`/insurabilities/policy/edit/${data?.id}/`}
                                name=""
                                avatar={false}
                                icon={<i className="fa fa-pencil" aria-hidden="true" />}
                            />
                        );
                    }else {
                        return '';
                    }
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
                    } else {
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
    useEffect(() => {
        dispatch(actions.getPolicies());
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Registro de Pólizas"
                        extra={<Link to="/insurabilities/policy/create/" name="Crear" iconText="+" />}
                    >
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
