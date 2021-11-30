import { FC, useContext } from 'react';
import tmpImg from '../../assets/img/medellin.png';
import Menu from 'antd/lib/menu';
import { TemplateContext } from './template_context';
import { useHistory, useLocation } from 'react-router-dom';

const Sider: FC<{ width: number }> = ({ width }) => {
    const { SubMenu } = Menu;
    const context = useContext(TemplateContext);
    const history = useHistory();
    const location = useLocation<{ menu: any[] }>();
    const goTo = (to) => (ev) => {
        history.push({ pathname: to, state: { menu: ev.keyPath } });
    };
    const menu_selected: any = location.state?.menu || [];

    let menu_config: any = [
        {
            path: '/',
            name: 'Inicio',
        },
        {
            name: 'Usuarios',
            children: [
                {
                    path: '/users/',
                    name: 'Usuarios',
                },
                {
                    path: '/roles/',
                    name: 'Roles y permisos',
                },
            ],
        },
        {
            name: 'Adquisición',
            children: [
                {
                    path: '/acquisitions/projects/',
                    name: 'Proyectos',
                },
                {
                    path: '/acquisitions/real-estates/',
                    name: 'Bienes Inmuebles',
                },
                {
                    path: '/acquisitions/real-estates/create/',
                    name: 'Registro de BI',
                },
            ],
        },
        {
            path: '/InventoryRecordList',
            name: 'Administración de inventario',
        },
        {
            name: 'Asegurabilidad',
            children: [
                {
                    path: '/insurabilities/policy/',
                    name: 'Polizas de Seguro',
                },
                {
                    path: '/insurabilities/company/',
                    name: 'Compañias Aseguradoras',
                },
                {
                    path: '/insurabilities/broker/',
                    name: 'Corredores de Seguros',
                },
            ],
        },
        {
            name: 'Inspección',
            path: "/inspection/",
        },
        {
            name: 'Disposición',
            children: [
                {
                    path: '/disposition/list/',
                    name: 'Disposición',
                },
                {
                    path: '/dispositions/contract/list',
                    name: 'Contratos',
                },
            ],
        },
        {
            name: 'Supervisión',
            children: [],
        },
        {
            name: 'Facturación',
            children: [],
        },
        {
            name: 'Mantenimiento',
            children: [],
        },
        {
            name: 'Consultas',
            children: [],
        },
        {
            name: 'Informes y Logs',
            children: [],
        },
    ];

    menu_config = menu_config.map((m, i) => {
        return {
            ...m,
            is_submenu: !!m.children,
            is_disabled: m.children?.length === 0 || false,
            ...(m.children
                ? {
                      children: m.children.map((s, j) => {
                          return { ...s, key: `s${i}-${j}`, is_disabled: false };
                      }),
                  }
                : {}),
            key: `p${i}`,
        };
    });

    return (
        <>
            <div className="text-center" style={{ backgroundColor: '#6DA3FC', borderRight: '1px solid #2ea1fe' }}>
                <img src={tmpImg} className="img-fluid" alt="" width="80%" style={{ paddingTop: '16px' }} />
                <div
                    className="text-white"
                    style={{ fontWeight: 400, padding: '8px 0', width: '80%', margin: '0 auto' }}
                >
                    Sistema para la Administración de Bienes Inmuebles
                </div>
            </div>
            {/*<SideBar />*/}

            <Menu
                style={{ width }}
                mode="vertical"
                defaultSelectedKeys={menu_selected}
                onOpenChange={(open) => {
                    if (open.length > 0) {
                        context.set_drawer_menu_collapsed(true);
                    } else {
                        context.set_drawer_menu_collapsed(false);
                    }
                }}
            >
                {menu_config.map((menu, i) => {
                    return !menu.is_submenu ? (
                        <Menu.Item key={menu.key} onClick={goTo(menu.path)} disabled={menu.is_disabled}>
                            {menu.name}
                        </Menu.Item>
                    ) : (
                        <SubMenu key={menu.key} title={menu.name} disabled={menu.is_disabled}>
                            {menu.children.map((sub, j) => {
                                return (
                                    <Menu.Item key={`s${i}-${j}`} disabled={sub.is_disabled} onClick={goTo(sub.path)}>
                                        {sub.name}
                                    </Menu.Item>
                                );
                            })}
                        </SubMenu>
                    );
                })}
            </Menu>
        </>
    );
};

export default Sider;
