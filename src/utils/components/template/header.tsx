import React, { FC, useContext } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, PicRightOutlined } from '@ant-design/icons';
import { TemplateContext } from './template_context';
import Badge from 'antd/lib/badge';
import { DropdownNotification } from '../../../modules/notificacions/views/DropdownNotification';
import Dropdown from 'antd/lib/dropdown';

const Header: FC<{ collapsible: boolean; name: string; user_id: number }> = ({ collapsible, name, user_id }) => {
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
                        Hola, <b>{name}</b>
                    </span>
                    <DropdownNotification user_id={user_id} />
                    <PicRightOutlined
                        onClick={context.drawer_open}
                        style={{ fontSize: 22, marginLeft: 35, color: '#1faeef' }}
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
