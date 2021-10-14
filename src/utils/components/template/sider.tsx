import { FC, useContext } from "react";
import tmpImg from "../../assets/img/medellin.png";
import Menu from "antd/lib/menu";
import { TemplateConstext } from "./template_context";
import { useHistory } from "react-router-dom";

const Sider: FC<{ width: number }> = ({ width }) => {
    const { SubMenu } = Menu;
    const context = useContext(TemplateConstext);
    const history = useHistory();
    const handleClick = (e) => {
        console.log("click ", e);
        context.set_menu_key_path(e.keyPath);
    };

    const goTo = (to) => () => history.push(to);
    return (
        <>
            <div className="text-center" style={{ backgroundColor: "#6DA3FC" }}>
                <img src={tmpImg} className="img-fluid" alt="" width="80%" style={{ paddingTop: "16px" }} />
                <div className="text-white" style={{ fontWeight: 400, padding: "8px 0" }}>
                    UABI
                </div>
            </div>
            {/*<SideBar />*/}

            <Menu
                onClick={handleClick}
                style={{ width }}
                mode="inline"
                selectedKeys={[context.menu_key_path[0]]}
                defaultOpenKeys={[context.menu_key_path[1]]}
            >
                <SubMenu key="sub1" title="Inicio">
                    <Menu.Item key="1" onClick={goTo("/")}>
                        Inicio
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="Adquisición">
                    <Menu.Item key="2" onClick={goTo("/acquisitions/projects/")}>
                        Proyectos
                    </Menu.Item>
                    <Menu.Item key="3" onClick={goTo("/acquisitions/real-estates/")}>
                        Bienes Inmuebles
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="sub3" title="Asegurabilidad">
                    <Menu.Item key="4" onClick={goTo("/asegurabilidad/")}>Asegurabilidad</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title="Disposición">
                    <Menu.Item key="5" onClick={goTo("/acquisitions/real-estates/areas/")}>Áreas</Menu.Item>

                </SubMenu>
                <SubMenu key="sub5" title="Supervisión" />
                <SubMenu key="sub6" title="Facturación" />
                <SubMenu key="sub7" title="Mantenimiento" />
                <SubMenu key="sub8" title="Consultas" />
                <SubMenu key="sub9" title="Informes y Logs" />
            </Menu>
        </>
    );
};

export default Sider;
