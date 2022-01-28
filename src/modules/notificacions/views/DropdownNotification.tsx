import Menu from 'antd/lib/menu';
import { MailOutlined } from '@ant-design/icons';
import { Link } from '../../../utils/ui';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { actions, service } from '../redux';
import Badge from 'antd/lib/badge';
import Dropdown from 'antd/lib/dropdown';
import { Empty } from 'antd';
import {useDispatch, useSelector} from 'react-redux';

export const DropdownNotification = ({ user_id }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [items, unread] = useSelector((store: any) =>  [
        store.notifications.bell_notifications.value?.results,
        store.notifications.bell_notifications.value?.total_no_readed
    ])

    const handleClick = (e) => {
        if (e.key !== 'ver mas') {
            history.push(`/notification/${e.key}/`);
        }
    };
    useEffect(() => {
        if (user_id) {
            const init = async (id) => {
                await dispatch(actions.get_list_notifications(id));
            };
            init(user_id);
        }
    }, [user_id]);

    return (
        <>
            {/*<button className="btn btn-primary" onClick={openNotification}>*/}
            {/*    noc*/}
            {/*</button>*/}
            <Dropdown
                overlay={
                    <Menu onClick={handleClick} style={{ width: 250, boxShadow: '0 0 10px #CCC', borderRadius: '5px' }}>
                        {items?.length > 0 &&
                            items.map((item) => (
                                <Menu.Item key={item.id} icon={<MailOutlined />}>
                                    <div className="text-center">{item.subject}</div>
                                </Menu.Item>
                            ))}
                        {items?.length === 0 && (
                            <Empty
                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                imageStyle={{ height: 60 }}
                                description={<span className="text-primary">No hay notificaciones pendientes.</span>}
                            />
                        )}
                        <Menu.Item
                            key="ver mas"
                            className="text-center"
                            style={{ borderTop: '1px solid #CCC', color: 'rgb(109, 163, 250)' }}
                        >
                            <Link to={`/notification/`} name="ver todas..." />
                        </Menu.Item>
                    </Menu>
                }
            >
                <Badge count={unread} style={{ backgroundColor: 'transparent', color: '#FF8900' }} offset={[8, 0]}>
                    <i className="fa fa-bell" style={{ fontSize: 18, marginLeft: 20, color: '#FF8900' }} />
                </Badge>
            </Dropdown>
        </>
    );
};
