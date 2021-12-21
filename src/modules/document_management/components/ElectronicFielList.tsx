import React from 'react'
import { Link, Table } from '../../../utils/ui';

const ElectronicFielList = () => {
    const table_columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            align: 'center' as 'center',
        },
        {
            title: 'Proyecto',
            dataIndex: 'name',
            align: 'left' as 'left',
        },
        {
            title: 'Bien Inmueble',
            dataIndex: 'registry_number',
            align: 'left' as 'left',
        },
        {
            title: 'Activo Fijo',
            dataIndex: 'audit_trail',
            align: 'center' as 'center',
        },
        {
            title: 'Dirección',
            dataIndex: 'audit_trail',
            align: 'left' as 'left',

        },
        {
            title: 'Matrícula',
            dataIndex: 'audit_trail',
            align: 'center' as 'center',

        },
        {
            title: 'Acciones',
            dataIndex: 'audit_trail',
            align: 'center' as 'center',
            render: (id) => {
                return (
                    <Link
                        to={`/inventoryrecord/real-estates/edit/${id}/`}
                        name=""
                        avatar={false}
                        icon={<i className="fa fa-file-text" aria-hidden="true"/>}
                    />
                );
            },

        },
    ];
    return (
        <Table
            columns={table_columns}
            items={[]}
            with_pagination
            // count={}
            // change_page={}
            // loading={}
        />
    )
}

export default ElectronicFielList
