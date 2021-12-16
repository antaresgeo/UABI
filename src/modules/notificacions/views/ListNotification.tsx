import { Card, Link, Table as UiTable } from '../../../utils/ui';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actions } from '../redux';

const table_columns = [
    {
        title: 'Titulo',
        dataIndex: 'title',
        align: 'center' as 'center',
    },
    {
        title: 'Descripcion',
        dataIndex: 'description',
        align: 'center' as 'center',
    },
    {
        title: 'Path',
        dataIndex: 'path',
        align: 'center' as 'center',
    },
    {
        title: 'Ver',
        dataIndex: 'id',
        align: 'center' as 'center',
        render: (id) => {
            return (
                <Link
                    to={`/notification/${id}/`}
                    name=""
                    avatar={false}
                    icon={<i className="fa fa-eye" aria-hidden="true" />}
                />
            );
        },
    },
];
const ListNotification = () => {
    const dispatch = useDispatch();
    const [notifications, loading, total_results, user] = useSelector((store: any) => [
        store.notifications.notifications.value,
        store.notifications.notifications.loading,
        store.notifications.notifications.pagination.total_results,
        store.auth.user.detailsUser,
    ]);

    useEffect(() => {
        dispatch(actions.get_all_notifications({ ...(user ? { to: user.id } : {}) }));
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card title="Notificaciones">
                        <UiTable
                            columns={table_columns}
                            items={notifications}
                            loading={loading}
                            with_pagination
                            count={total_results}
                            change_page={() => {}}
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ListNotification;
