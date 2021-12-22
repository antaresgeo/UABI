import React from 'react'
import { Link, Table } from '../../../utils/ui';

const Master_formatsList = () => {
    const table_columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            align: 'center' as 'center',
        },
        {
            title: 'Módulo',
            dataIndex: 'name',
            align: 'left' as 'left',
        },
        {
            title: 'Nombre',
            dataIndex: 'registry_number',
            align: 'left' as 'left',
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
                        icon={<i className="fa fa-file-text" aria-hidden="true" />}
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

export default Master_formatsList
