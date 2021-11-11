import React from 'react'
import { Card, Link, Table as UiTable } from '../../../utils/ui';

const ListInspection = () => {

    const table_columns = [
        {
            title: 'ID',
            dataIndex: '',
            align: 'center' as 'center',
        },
        {
            title: 'Bien Inmueble',
            dataIndex: '',
            align: 'center' as 'center',
        },
        {
            title: "Matrícula",
            dataIndex: "",
            align: "center" as "center",
        },
        {
            title: "Dirección",
            dataIndex: "status",
            align: "center" as "center",
        },

        {
            title: "Fecha de Inspección",
            dataIndex: "",
            align: "center" as "center",
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
                        )
                    },
                },
                {
                    title: 'Editar',
                    dataIndex: 'real_estate',
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
                    dataIndex: 'real_estate',
                    align: 'center' as 'center',
                    render: (id) => {
                        return (
                            <Link
                                to={`/`}
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
                    <Card
                        title="Inspección"
                    >
                        <UiTable
                            columns={table_columns}
                            items={[]}
                            with_pagination
                        />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ListInspection
