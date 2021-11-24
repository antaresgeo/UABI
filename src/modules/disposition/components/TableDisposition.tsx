import { FC } from "react";
import { Link, Table } from "../../../utils/ui";

interface DispositionListProps {
    filters?: any;
    init?: boolean;
}

export const TableDisposition: FC<DispositionListProps> = ({  filters, init })  => {
    const table_columns = [
        {
            title: 'ID Proyecto',
            dataIndex: '',
            align: 'left' as 'left',
        },
        {
            title: 'Matrículas BI',
            dataIndex: '',
            align: 'left' as 'left',
        },
        {
            title: 'Nombre',
            dataIndex: '',
            align: 'left' as 'left',
        },
        {
            title: 'Dirección',
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
