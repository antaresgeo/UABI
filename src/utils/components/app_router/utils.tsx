import { Redirect } from 'react-router-dom';
import React, { FC } from 'react';
import { CanAccess } from './custom_types';

export const redirect_fn = (can_access: boolean, location: any) => {
    return can_access
        ? location?.state?.form
            ? compute_redirect(location.state.from, location)
            : compute_redirect('/', location)
        : null;
};

export const get_can_access = (can_access: CanAccess, props: any): boolean => {
    let has_access = !!can_access;
    if (has_access) {
        if (typeof can_access === 'function') {
            has_access = can_access(props);
        }
    }
    return has_access;
};

export const compute_redirect = (to: string, location: any) => {
    const prev_state = location.state;
    return (
        <Redirect
            to={{
                pathname: to,
                state: { ...prev_state, from: location },
            }}
        />
    );
};

export const withSuspense = (props: any, dr: any, suspense: boolean = true): FC<any> => {
    return (WrappedComponent) => {
        if (WrappedComponent) {
            if (suspense) {
                return (
                    <React.Suspense fallback={'Cargando'}>
                        <WrappedComponent {...props} />
                    </React.Suspense>
                );
            } else {
                return <WrappedComponent {...props} />;
            }
        }
        /*
            else if (render) {
            console.log("this have a render", render);
        }
         */
        return dr;
    };
};
