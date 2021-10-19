import { RouteProps } from "react-router-dom";
import { ReactNode } from "react";

export type CanAccess = ((props: any) => boolean) | boolean;
export type Breadcrumb = { to?: any, name: string, icon?: any}
export interface IRoute extends RouteProps {
    is_private: boolean;
    can_access?: CanAccess;
    defaultRedirect?: string;
    privateRedirect?: string;

    // Preloader for lazy loading
    fallback?: NonNullable<ReactNode> | null;
    // Sub routes
    routes?: IRoute[];
    // Redirect path
    redirect?: any;
    // If router is private, this is going to be true
    lazy?: boolean;
    location?: any;
    breadcrumbs?: Breadcrumb[]
}

export interface IAppRouter {
    routes: IRoute[];
    defaultRedirect?: string;
    privateRedirect?: string;
    lazy?: boolean;
    template?: any;
}
