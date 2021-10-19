import React, { FC, useContext } from "react";
import Layout from "antd/lib/layout";
import { TemplateConstext } from "./template_context";
import AppSider from "./sider";
import AppHeader from "./header";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../app_router/custom_types";

interface ITemplate {
    breadcrumbs?: Breadcrumb[];
}

const Template: FC<ITemplate> = ({ children, breadcrumbs }) => {
    const { Header, Sider, Content } = Layout;
    const context = useContext(TemplateConstext);
    const collapsible = false; // TO DO: verificar si esto debe ser collapsible
    const sider_ops = {
        width: 280,
        style: { backgroundColor: "white" },
        ...(collapsible
            ? {
                  trigger: null,
                  collapsible,
                  collapsed: context.menu_collapsed,
              }
            : {}),
    };
    return (
        <Layout className="w-100 h-100">
            <Sider {...sider_ops}>
                <AppSider width={sider_ops.width} />
            </Sider>
            <Layout className="site-layout">
                <Header className="uabi-header" style={{ padding: 0 }}>
                    <AppHeader collapsible={collapsible} />
                </Header>
                <Content>
                    <div className="d-flex flex-column w-100">
                        <div
                            className="d-flex justify-content-between align-items-center bar"
                            style={{
                                backgroundColor: "#6DA3FC",
                                padding: "4px 24px",
                                color: "white",
                                boxShadow: "inset 0px 5px 3px #00000015",
                            }}
                        >
                            <Breadcrumbs breadcrumbs={breadcrumbs} />
                        </div>
                        <div className="content uabi-main-content" style={{ overflow: "auto" }}>
                            {children}
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
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

export default Template;
