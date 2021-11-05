import { FC } from 'react';
import Table, { ColumnsType, TablePaginationConfig } from 'antd/lib/table';

interface CompressTableProps {
    columns: ColumnsType<any>;
    items: any[];
    title?: string;
    change_page?: (page: number, pageSize?: number) => void;
    loading?: boolean;
    with_pagination?: boolean;
    count?: number;
    scroll?: boolean;
}

const getPaginator = (
    total: number,
    change_page?: (page: number, pageSize?: number) => void
): TablePaginationConfig => {
    const paginator_format = 'Total de resultados: $TOTAL';
    return {
        position: ['bottomRight', 'topRight'],
        total: total || 0,
        ...(change_page
            ? {
                  onChange: change_page,
                  defaultPageSize: 10,
                  showSizeChanger: true,
                  showQuickJumper: true,
              }
            : {}),
        showTotal: (total, current) => {
            return (
                <>
                    <span>Total de resultados</span>:<span style={{ color: '#F28C02' }}>: {total}</span>
                    <span style={{ fontSize: '11px', marginLeft: '16px' }}> Registros por página: </span>
                </>
            );
        },
    };
};

const CompressTable: FC<CompressTableProps> = ({
    count,
    title,
    columns,
    items,
    change_page,
    loading,
    with_pagination,
    scroll,
}) => {
    items = Array.isArray(items) ? items : [];
    const data = items?.map((item, i) => ({ ...item, key: `compress_table_${i}` }));
    const ops = {
        columns: columns,
        dataSource: data,
        ...(with_pagination
            ? { pagination: getPaginator(count ? count : data?.length, change_page) }
            : { pagination: false }),
        loading: loading,
        bordered: true,
        className: 'w-100',
        ...(scroll ? { scroll: { x: 'max-content' } } : {}),
    };
    return (
        <div style={{ marginTop: 16 }}>
            {title && (
                <>
                    <h3 style={{ fontWeight: 300 }}>{title}</h3>
                    <br />
                </>
            )}
            <Table {...ops} />
        </div>
    );
};

CompressTable.defaultProps = {
    items: [],
    change_page: null,
    loading: false,
    with_pagination: true,
    scroll: true,
};

export default CompressTable;
