import React, { FC, useContext, useEffect } from 'react';
import Layout from 'antd/lib/layout';
import { TemplateContext } from './template_context';
import Drawer from 'antd/lib/drawer';
import AppSider from './sider';
import AppHeader from './header';
import { Link, useHistory } from 'react-router-dom';
import { Breadcrumb } from '../app_router/custom_types';
import Menu from 'antd/lib/menu';
import {useDispatch} from "react-redux";
import {actions} from "../../../modules/notificacions/redux";
import notification from "antd/lib/notification";

interface ITemplate {
    breadcrumbs?: Breadcrumb[];
    show_breadcrumbs?: boolean;
    user: any;
}

const Template: FC<ITemplate> = ({ children, breadcrumbs, show_breadcrumbs, user }) => {
    const dispatch = useDispatch();
    const { Header, Sider, Content } = Layout;
    const history = useHistory();
    const context = useContext(TemplateContext);
    const collapsible = false; // TO DO: verificar si esto debe ser collapsible
    const sider_ops = {
        width: 280,
        style: { backgroundColor: 'white' },
        ...(collapsible
            ? {
                  trigger: null,
                  collapsible,
                  collapsed: context.menu_collapsed,
              }
            : {}),
    };
    const name = `${(user && Object.values(user?.names).join(' ')) || ''} ${
        (user && Object.values(user?.surnames).join(' ')) || ''
    }`;

    const openNotification = (data) => {
        console.log('new:notification', data);
        notification.info({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            placement: 'bottomRight',
        });
        const init = async (id) => {
            await dispatch(actions.get_list_notifications(id));
        };
        init(user.id);
    };

    useEffect(() => {
        context.socket?.on('new:notification', (data) => {
            openNotification(data);
        });
    }, [user]);

    return (
        <>
            <Layout className="w-100 h-100">
                <Sider {...sider_ops}>
                    <AppSider width={sider_ops.width} />
                </Sider>
                <Layout className="site-layout">
                    <Header className="sabi-header p-0">
                        <AppHeader collapsible={collapsible} name={name} user_id={user?.id} />
                    </Header>
                    <Content>
                        <div className={`deck ${context.drawer_menu_collapsed ? 'active' : ''}`} />
                        <div className="d-flex flex-column w-100">
                            {show_breadcrumbs && (
                                <div
                                    className="d-flex justify-content-between align-items-center bar"
                                    style={{
                                        backgroundColor: '#6DA3FC',
                                        padding: '4px 24px',
                                        color: 'white',
                                        boxShadow: 'inset 0px 5px 3px #00000015',
                                    }}
                                >
                                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                                </div>
                            )}
                            <div className="content sabi-main-content overflow-auto">{children}</div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
            <Drawer
                placement="right"
                onClose={context.drawer_close}
                visible={context.drawer_collapsed}
                width={300}
                className="user-drawer"
            >
                <div
                    className="d-flex justify-content-center align-items-center text-white"
                    style={{
                        backgroundColor: '#1FAEEF',
                        borderRight: '1px solid #2ea1fe',
                        height: 180,
                        letterSpacing: '-0.4px',
                    }}
                >
                    <div className="d-flex align-start flex-column">
                        <span style={{ fontWeight: 'bold', fontSize: 22 }}>{name}</span>
                        {user && (
                            <span
                                style={{
                                    fontWeight: 400,
                                    fontSize: 16,
                                    lineHeight: '40px',
                                }}
                            >
                                C.C. {new Intl.NumberFormat().format(user.id_number)}
                            </span>
                        )}
                    </div>
                </div>
                <div className="drawer-content">
                    <Menu mode="inline" selectedKeys={[]}>
                        <Menu.Item
                            style={{ borderBottom: '0.5px solid #00000029' }}
                            key="1"
                            onClick={() => {
                                context.toggle_pass_modal();
                                context.drawer_close();
                            }}
                        >
                            Cambiar contraseña
                        </Menu.Item>
                        <Menu.Item
                            style={{ borderBottom: '0.5px solid #00000029' }}
                            key="2"
                            onClick={() => {
                                history.push(`/users/edit/${user.id}/`);
                                context.drawer_close();
                            }}
                        >
                            Editar usuario
                        </Menu.Item>
                    </Menu>
                </div>
                <div
                    className=" p-4 session-close"
                    onClick={() => {
                        localStorage.removeItem('_tk_');
                        localStorage.removeItem('_uk_');
                        context.drawer_close();
                        history.push('/auth/login/');
                    }}
                >
                    CERRAR SESIÓN
                </div>
            </Drawer>
        </>
    );
};

const Breadcrumbs: FC<{ breadcrumbs: Breadcrumb[] }> = ({ breadcrumbs }) => {
    return (
        <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">
                <Link to="/" className="text-white">
                    <i className="fa fa-home" style={{ fontSize: 16 }} />
                </Link>
            </li>
            {breadcrumbs &&
                breadcrumbs.length > 0 &&
                breadcrumbs.map((breadcrumb, i) => {
                    const content = (
                        <>
                            {breadcrumb.icon} {breadcrumb.name}
                        </>
                    );
                    return (
                        <li key={`breadcrumb-${i}`} className="breadcrumb-item" aria-current="page">
                            {breadcrumb.to && (
                                <Link to={breadcrumb.to} className="text-white">
                                    {content}
                                </Link>
                            )}
                            {!breadcrumb.to && content}
                        </li>
                    );
                })}
        </ol>
    );
};

Template.defaultProps = {
    show_breadcrumbs: true,
};

export default Template;
