import React, { FC } from 'react';
import { Route as ReactRoute } from 'react-router-dom';
import { compute_redirect, get_can_access, withSuspense, redirect_fn } from './utils';
import { IRoute } from './custom_types';

interface RouteWithSubRoutesProps extends IRoute {
    template: any;
    defaultRedirect: string;
    privateRedirect: string;
    user: any;
    test: boolean;
}

const Route: FC<RouteWithSubRoutesProps> = ({
    routes,
    redirect,
    is_private,
    can_access,
    render,
    component,
    defaultRedirect,
    privateRedirect,
    location,
    lazy,
    template,
    template_props,
    test,
    ..._props
}) => {
    if (test) {
        console.log({
            routes,
            redirect,
            is_private,
            can_access,
            render,
            component,
            defaultRedirect,
            privateRedirect,
            location,
            lazy,
            template,
            template_props,
            ..._props,
        });
    }
    if(is_private === false){
        can_access = true;
    }
    const custom_render = (props: any) => {
        const dr = compute_redirect(defaultRedirect, location);
        if (redirect) {
            return compute_redirect(redirect, location);
        }
        const ops = {
            ...props,
            ...(routes ? { routes } : {}),
            ...(!is_private ? { redirect: redirect_fn } : {}),
        };
        const cp = lazy ? withSuspense(ops, dr)(component) : withSuspense(ops, dr, false)(component);
        if (is_private) {
            const has_access = get_can_access(can_access, _props);
            if (has_access) {
                const Template = template;
                const template_ops = { ...template_props, user: _props.user?.detailsUser, roles_user: _props.user?.roles };
                return template ? <Template {...template_ops}>{cp}</Template> : cp;
            } else {
                return compute_redirect(privateRedirect, location);
            }
        }
        return cp;
    };

    return <ReactRoute {..._props} render={custom_render} />;
};

export default Route;
