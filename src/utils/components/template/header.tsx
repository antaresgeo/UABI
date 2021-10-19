import React, { FC, useContext } from "react";
// import Menu from "antd/lib/menu";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    // UploadOutlined,
    // UserOutlined,
    // VideoCameraOutlined,
} from "@ant-design/icons";
import { TemplateConstext } from "./template_context";

const Header: FC<{ collapsible: boolean }> = ({ collapsible }) => {
    const context = useContext(TemplateConstext);
    return (
        <div className="bar">
            <div className="d-flex justify-content-between align-items-center">
                <span>
                    {collapsible &&
                        React.createElement(context.menu_collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: "trigger",
                            onClick: context.toggle_collapsed,
                        })}
                </span>
                <span className="d-flex align-items-center">
                    <span>
                        Hola, <b>Andrea Canasteros Marulanda</b>
                    </span>
                    <span
                        className="d-inline-block mx-2"
                        onClick={() => {
                            // history.replace("/auth/signin");
                            // window.location.reload();
                        }}
                    >
                        Salir
                    </span>
                </span>
            </div>
        </div>
    );
};

Header.defaultProps = {
    collapsible: false,
};

export default Header;
