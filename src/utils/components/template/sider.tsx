import { FC, useContext } from 'react';
import tmpImg from '../../assets/img/medellin.png';
import Menu from 'antd/lib/menu';
import { TemplateContext } from './template_context';
import { useHistory } from 'react-router-dom';

const Sider: FC<{ width: number }> = ({ width }) => {
    const { SubMenu } = Menu;
    const context = useContext(TemplateContext);
    const history = useHistory();
    const handleClick = (e) => {
        context.set_menu_key_path(e.keyPath);
    };

    const goTo = (to) => () => history.push(to);
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

            <Menu onClick={handleClick} style={{ width }} mode="vertical" onOpenChange={(...args) => {
                console.log('onOpenChange', args)
            }}>
                <Menu.Item key="1" onClick={goTo('/')}>
                    Inicio
                </Menu.Item>
                <SubMenu key="sub2" title="Usuarios">
                    <Menu.Item key="2" onClick={goTo('/users')}>
                        Usuarios
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title="Adquisición">
                    <Menu.Item key="3" onClick={goTo('/acquisitions/projects/')}>
                        Proyectos
                    </Menu.Item>
                    <Menu.Item key="4" onClick={goTo('/acquisitions/real-estates/')}>
                        Bienes Inmuebles
                    </Menu.Item>
                    <Menu.Item key="5" onClick={goTo('/acquisitions/registers/')}>
                        Registros
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="sub4" title="Asegurabilidad">
                    <Menu.Item key="6" onClick={goTo('/insurabilities/policy/')}>
                        Polizas de Seguro
                    </Menu.Item>
                    <Menu.Item key="7" onClick={goTo('/insurabilities/company/')}>
                        Empresas Aseguradoras
                    </Menu.Item>
                    <Menu.Item key="8" onClick={goTo('/insurabilities/broker/')}>
                        Corredores de Seguros
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" title="Inspección" />
                <SubMenu key="sub6" title="Disposición">
                    {/*<Menu.Item key="9" onClick={goTo('/acquisitions/real-estates/areas/')}>*/}
                    {/*    Áreas*/}
                    {/*</Menu.Item>*/}
                </SubMenu>
                <SubMenu key="sub7" title="Supervisión" />
                <SubMenu key="sub8" title="Facturación" />
                <SubMenu key="sub9" title="Mantenimiento" />
                <SubMenu key="sub10" title="Consultas" />
                <SubMenu key="sub11" title="Informes y Logs" />
            </Menu>
        </>
    );
};

export default Sider;
