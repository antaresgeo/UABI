// export {default as Insurability} from './CreatePolicy';
import { useDispatch } from 'react-redux';
import { IPolicyAttributes } from '../../../../utils/interfaces/insurability';
import { useSelector } from 'react-redux';
import { actions } from '../../redux';
import { useEffect } from 'react';
import moment from 'moment';

import { Link, Card, Table as UiTable } from '../../../../utils/ui';

const table_columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        align: 'center' as 'center',
    },
    {
        title: 'Compañias Aseguradoras',
        dataIndex: 'insurance_companies',
        align: 'left' as 'left',
        render: (date) => date.map(d => d.nit).join(" - ")

    },
    {
        title: 'Bienes Inmuebles',
        dataIndex: 'real_estates',
        align: 'center' as 'center',
    },
    {
        title: 'Estado',
        dataIndex: 'status',
        align: 'center' as 'center',
    },
    {
        title: 'Fecha de Inicio',
        dataIndex: 'vigency_start',
        align: 'center' as 'center',
        render: (dates) => {
            const tmpDate = new Date(parseInt(dates));
            const newDate = moment(tmpDate).format('MM/DD/YYYY');
            return newDate;
        },
    },
    {
        title: 'Fecha finalización',
        dataIndex: 'vigency_end',
        align: 'center' as 'center',
        render: (dates) => {
            const tmpDate = new Date(parseInt(dates));
            const newDate = moment(tmpDate).format('MM/DD/YYYY');
            return newDate;
        },
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
        ],
    },
];

const Policies = () => {
    const dispatch = useDispatch();
    const policies: IPolicyAttributes[] = useSelector((store: any) => store.insurability.policies.value);
    const loading: boolean = useSelector((store: any) => store.insurability.policies.loading);
    const { total_results } = useSelector((store: any) => store.insurability.policies.pagination);
    const change_page = (page, pageSize) => {
        dispatch(actions.getPolicies({ page, pageSize, pagination: 'pagination' }));
    };

    useEffect(() => {
        dispatch(actions.getPolicies({pagination: 'pagination'}));
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
                            count={total_results}
                            loading={loading}
                            change_page={change_page}
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Policies;
