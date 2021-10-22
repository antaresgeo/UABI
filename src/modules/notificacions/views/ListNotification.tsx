import { Card, Link, Table as UiTable } from "../../../utils/ui";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { INotificationtAttributes } from './../../../utils/interfaces/notification';
import { useEffect } from 'react';
import { actions } from "../redux";

const table_columns = [
    {
        title: "Titulo",
        dataIndex: "title",
        align: "center" as "center",
    },
    {
        title: "Descripcion",
        dataIndex: "description",
        align: "center" as "center",
    },
    {
        title: "Path",
        dataIndex: "path",
        align: "center" as "center",
    },
    {
        title: "Ver",
        dataIndex: "id",
        align: "center" as "center",
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
        const notifications: INotificationtAttributes[] = useSelector((store: any) => store.notifications.notifications.value);

        useEffect(() => {
            dispatch(actions.getNotifications());
        }, []);

        useEffect(() => {
            dispatch(actions.getNotifications());
        }, [notifications]);
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <Card
                            title="Notificaciones"
                        >
                            <form>
                                <div className="row justify-content-between">
                                    <div className="col-5 d-flex">
                                        <div className="col-6">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Nombre / Código"
                                                    aria-label="Nombre / Código"
                                                    aria-describedby="button-addon2"
                                                />
                                                <span className="input-group-text">
                                                    <span>
                                                        <i className="fa fa-search" aria-hidden="true"></i>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <Link
                                            to=""
                                            className="ml-4"
                                            name="Filtro de búsqueda"
                                            avatar={false}
                                            icon={<i className="fa fa-filter" aria-hidden="true" />}
                                        />
                                    </div>
                                </div>
                            </form>

                            <UiTable
                                columns={table_columns}
                                items={notifications}
                                with_pagination
                                count={10}
                                change_page={() => { }}
                            />
                        </Card>
                    </div>
                </div>
            </div>
        )
    }

    export default ListNotification
