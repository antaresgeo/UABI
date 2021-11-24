import React from 'react'
import { Link, Table } from '../../../../utils/ui';

export const TableContract = () => {
    const table_columns = [
        {
            title: 'ID',
            dataIndex: '',
            align: 'left' as 'left',
        },
        {
            title: 'Numero de contrato',
            dataIndex: '',
            align: 'left' as 'left',
        },
        {
            title: 'Estado',
            dataIndex: '',
            align: 'left' as 'left',
        },
        {
            title: 'Fecha Inicio',
            dataIndex: '',
            align: 'left' as 'left',

        },
        {
            title: 'Fecha Terminación',
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
                                to={""}
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
                                to={""}
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
    return (
        <Table
            columns={table_columns}
            items={[]}
            with_pagination
            //count={total_results}
            //change_page={change_page}
            //loading={loading}
        />
    )
}
