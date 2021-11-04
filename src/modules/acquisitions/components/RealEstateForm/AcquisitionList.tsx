import { FC } from 'react';
import { Link, Table } from '../../../../utils/ui';

interface AcquisitionListProps {
    acquisitions: any[];
    type: 'view' | 'edit' | 'create';
}

const AcquisitionList: FC<AcquisitionListProps> = ({ acquisitions, type }) => {
    const acquisition_columns = [
        {
            title: 'Tipo de Adquisición',
            align: 'center' as 'center',
            dataIndex: 'acquisition_type',
        },
        {
            title: 'No Acto administrativo',
            align: 'center' as 'center',
            dataIndex: 'act_number',
        },
        {
            title: 'Valor de adquisición',
            align: 'center' as 'center',
            dataIndex: 'act_value',
        },
        ...(type === 'view'
            ? [
                  {
                      title: 'Tipo de Título',
                      align: 'center' as 'center',
                      dataIndex: 'title_type',
                  },
                  {
                      title: 'Tipo de activo',
                      align: 'center' as 'center',
                      dataIndex: 'active_type',
                  },
                  {
                      title: 'Vendedor',
                      align: 'center' as 'center',
                      dataIndex: 'seller',
                  },
                  {
                      title: 'Porcentaje Adquirido',
                      align: 'center' as 'center',
                      dataIndex: 'acquired_percentage',
                  },
                  {
                      title: 'Area Total',
                      align: 'center' as 'center',
                      dataIndex: 'area',
                  },
                  {
                      title: 'Tipo de Entidad',
                      align: 'center' as 'center',
                      dataIndex: 'entity_type',
                  },
                  {
                      title: 'No. Entidad',
                      align: 'center' as 'center',
                      dataIndex: 'entity_number',
                  },
                  {
                      title: 'Dirección',
                      align: 'center' as 'center',
                      dataIndex: 'address',
                  },
                  {
                      title: 'Ver',
                      dataIndex: 'id',
                      align: 'center' as 'center',
                      render: (id) => {
                          return <i className="fa fa-eye" aria-hidden="true" style={{ color: '#aaa' }} />;
                      },
                  },
              ]
            : []),
        ...(type === 'edit'
            ? [
                  {
                      title: 'Editar',
                      dataIndex: 'id',
                      align: 'center' as 'center',
                      render: (id) => {
                          return (
                              <i className="fa fa-pencil" aria-hidden="true" style={{ color: '#aaa' }} />

                          );
                      },
                  },
              ]
            : []),
        {
            title: 'Inactivar',
            dataIndex: '',
            align: 'center' as 'center',
            render: (id) => {
                return (
                    <Link
                        to=""
                        name=""
                        avatar={false}
                        icon={<i className="fa fa-times-circle" aria-hidden="true"></i>}
                    />
                );
            },
        },
    ];
    return <Table columns={acquisition_columns} items={acquisitions} />;
};

export default AcquisitionList;
