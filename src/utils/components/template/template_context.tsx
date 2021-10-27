import React, { FC, useState } from 'react';
import ConfigProvider from 'antd/lib/config-provider';
import esES from 'antd/lib/locale/es_ES';
import 'moment/locale/es';

type KeyPath = [string, string];
interface TemplateProps {
    menu_collapsed: boolean;
    drawer_collapsed: boolean;
    menu_toggle: () => void;
    drawer_open: () => void;
    drawer_close: () => void;
    menu_key_path: KeyPath;
    set_menu_key_path: Function;
}
export const TemplateContext = React.createContext<TemplateProps>(null);

const TemplateProvider: FC = ({ children }) => {
    const [menu_collapsed, set_menu_collapsed] = useState<boolean>(false);
    const [menu_key_path, set_menu_key_path] = useState<KeyPath>(['1', 'sub1']);
    const [drawer_collapsed, set_drawer_collapsed] = useState(false);
    return (
        <ConfigProvider locale={esES}>
            <TemplateContext.Provider
                value={{
                    menu_collapsed,
                    drawer_collapsed,
                    menu_key_path,
                    set_menu_key_path,
                    menu_toggle: () => set_menu_collapsed((collapsed) => !collapsed),
                    drawer_open: () => set_drawer_collapsed(true),
                    drawer_close: () => set_drawer_collapsed(false),
                }}
            >
                {children}
            </TemplateContext.Provider>
        </ConfigProvider>
    );
};

export default TemplateProvider;
