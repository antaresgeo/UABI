import { Card, Link, Table as UiTable } from '../../../utils/ui';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actions } from '../redux';
import { formatDate } from '../../../utils';
import { LinkButton } from '../../../utils/ui/link';

const table_columns = [
    {
        title: 'Titulo',
        dataIndex: 'title',
        align: 'left' as 'left',
    },
    {
        title: 'Descripcion',
        dataIndex: 'description',
        align: 'left' as 'left',
    },
    {
        title: 'Fecha',
        dataIndex: 'audit_trail',
        align: 'center' as 'center',
        render: (audit_trail) => formatDate(audit_trail?.created_on),
    },
    {
        title: '',
        dataIndex: 'action',
        align: 'center' as 'center',
        render: (action) => {
            return <Link to={action} name="Acceso directo"/>
        },
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
        store.auth.user?.detailsUser,
    ]);

    useEffect(() => {
        const to = user.user_id;
        dispatch(actions.get_all_notifications({ ...(user ? { to } : {}) }));
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
