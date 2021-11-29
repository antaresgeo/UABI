import React, { FC, useState } from 'react';
import ConfigProvider from 'antd/lib/config-provider';
import esES from 'antd/lib/locale/es_ES';
import 'moment/locale/es';

type KeyPath = [string, string?];
interface TemplateProps {
    menu_collapsed: boolean;
    drawer_collapsed: boolean;
    menu_toggle: () => void;
    drawer_open: () => void;
    drawer_close: () => void;
    drawer_menu_collapsed: boolean;
    set_drawer_menu_collapsed: any;
    menu_key_path: KeyPath;
    set_menu_key_path: Function;
    pass_modal: boolean;
    toggle_pass_modal: () => void;
}
export const TemplateContext = React.createContext<TemplateProps>(null);

const TemplateProvider: FC = ({ children }) => {
    const [menu_collapsed, set_menu_collapsed] = useState<boolean>(false);
    const [menu_key_path, set_menu_key_path] = useState<KeyPath>(['p0']);
    const [drawer_collapsed, set_drawer_collapsed] = useState(false);
    const [drawer_menu_collapsed, set_drawer_menu_collapsed] = useState(false);
    const [pass_modal, set_pass_modal] = useState(false);
    return (
        <ConfigProvider locale={esES}>
            <TemplateContext.Provider
                value={{
                    menu_key_path,
                    set_menu_key_path,
                    drawer_menu_collapsed,
                    set_drawer_menu_collapsed,
                    menu_collapsed,
                    drawer_collapsed,
                    pass_modal,
                    menu_toggle: () => set_menu_collapsed((collapsed) => !collapsed),
                    drawer_open: () => set_drawer_collapsed(true),
                    drawer_close: () => set_drawer_collapsed(false),
                    toggle_pass_modal: () => set_pass_modal((collapsed) => !collapsed),
                }}
            >
                {children}
            </TemplateContext.Provider>
        </ConfigProvider>
    );
};

export default TemplateProvider;
