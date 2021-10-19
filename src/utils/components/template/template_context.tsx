import React, { FC, useState } from "react";
import ConfigProvider from "antd/lib/config-provider";
import esES from "antd/lib/locale/es_ES";
import "moment/locale/es";

type KeyPath = [string, string];
interface TemplateProps {
    menu_collapsed: boolean;
    toggle_collapsed: () => void;
    menu_key_path: KeyPath;
    set_menu_key_path: Function;
}
export const TemplateConstext = React.createContext<TemplateProps>(null);

const TemplateProvider: FC = ({ children }) => {
    const [menu_collapsed, set_menu_collapsed] = useState<boolean>(false);
    const [menu_key_path, set_menu_key_path] = useState<KeyPath>(["1", "sub1"]);
    return (
        <ConfigProvider locale={esES}>
            <TemplateConstext.Provider
                value={{
                    menu_collapsed,
                    menu_key_path,
                    set_menu_key_path,
                    toggle_collapsed: () => set_menu_collapsed((collapsed) => !collapsed),
                }}
            >
                {children}
            </TemplateConstext.Provider>
        </ConfigProvider>
    );
};

export default TemplateProvider;
