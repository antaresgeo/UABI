import { FC, useEffect } from 'react';
import { Link, Table } from '../../../utils/ui';
import { IRealEstateAttributes } from '../../../utils/interfaces';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../acquisitions/redux';

interface DispositionListProps {
    filters?: any;
    init?: boolean;
}

export const TableDiszposition: FC<DispositionListProps> = ({ filters /*, init*/ }) => {
    const dispatch = useDispatch();

    const realEstates: IRealEstateAttributes[] = useSelector((store: any) => store.acquisitions.realEstates.value);
    const loading: boolean = useSelector((store: any) => store.acquisitions.realEstates.loading);
    const { total_results } = useSelector((store: any) => store.acquisitions.realEstates.pagination);
    console.log(realEstates);
    const table_columns = [
        {
            title: 'ID', //TODO: ID del proyecto
            dataIndex: 'project',
            align: 'left' as 'left',
            render: (data) => data.id,
        },
        {
            title: 'Proyecto',
            dataIndex: 'project',
            align: 'left' as 'left',
            render: (data) => data.name,
        },
        {
            title: 'Matrícula BI',
            dataIndex: 'registry_number',
            align: 'left' as 'left',
        },
        {
            title: 'Nombre',
            dataIndex: 'name',
            align: 'left' as 'left',
        },
        {
            title: 'Dirección',
            dataIndex: 'address',
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
                                to={`/disposition/${id}/`}
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
                                to={`/disposition/edit/${id}/`}
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

    const change_page = (page, pageSize) => {
        dispatch(actions.getRealEstates({ page, pageSize, with: 'pagination', ...filters }));
    };

    useEffect(() => {
        dispatch(actions.getRealEstates({ with: 'pagination' })); //TODO: mirar filtro de poliza
    }, []);

    return (
        <Table
            columns={table_columns}
            items={realEstates}
            with_pagination
            count={total_results}
            change_page={change_page}
            loading={loading}
        />
    );
};
