import React, { FC, useContext } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, PicRightOutlined, BellOutlined } from '@ant-design/icons';
import { TemplateContext } from './template_context';
import Badge from 'antd/lib/badge';

const Header: FC<{ collapsible: boolean }> = ({ collapsible }) => {
    const context = useContext(TemplateContext);
    return (
        <div className="bar">
            <div className="d-flex justify-content-between align-items-center">
                <span>
                    {collapsible &&
                        React.createElement(context.menu_collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: context.menu_toggle,
                        })}
                </span>
                <span className="d-flex align-items-center">
                    <span>
                        Hola, <b>Luisa María Sánchez Cadavid</b>
                    </span>
                    <Badge count={100} style={{ backgroundColor: 'transparent', color: '#FF8900' }} offset={[10, 5]}>
                        <i className="fa fa-bell" style={{ fontSize: 22, marginLeft: 16, color: '#FF8900' }}/>
                    </Badge>
                    <PicRightOutlined
                        onClick={context.drawer_open}
                        style={{ fontSize: 22, marginLeft: 22, color: '#1faeef' }}
                    />
                    {/*<button onClick={context.drawer_open}>Open</button>*/}
                </span>
            </div>
        </div>
    );
};

Header.defaultProps = {
    collapsible: false,
};

export default Header;
