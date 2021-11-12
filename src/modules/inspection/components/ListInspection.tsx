import React from 'react';
import { Card, Link, Table as UiTable } from '../../../utils/ui';

const ListInspection = ({ inspections, change_page, total_results, loading }) => {
    const table_columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            align: 'center' as 'center',
        },
        {
            title: 'Bien Inmueble',
            dataIndex: '',
            align: 'left' as 'left',
        },
        {
            title: 'Matrícula',
            dataIndex: '',
            align: 'left' as 'left',
        },
        {
            title: 'Dirección',
            dataIndex: 'status',
            align: 'left' as 'left',
        },

        {
            title: 'Fecha de Inspección',
            dataIndex: '',
            align: 'left' as 'left',
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
                                to={`/`}
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
                                to={`/`}
                                name=""
                                avatar={false}
                                icon={<i className="fa fa-pencil" aria-hidden="true" />}
                            />
                        );
                    },
                },
                {
                    title: 'Crear',
                    dataIndex: 'id',
                    align: 'center' as 'center',
                    render: (id) => {
                        return (
                            <Link
                                to={`/inspection/create/`}
                                name=""
                                avatar={false}
                                icon={<i className="fa fa-plus" aria-hidden="true" />}
                            />
                        );
                    },
                },
            ],
        },
    ];
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card title="Inspección">
                        <UiTable
                            columns={table_columns}
                            items={inspections}
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

export default ListInspection;
