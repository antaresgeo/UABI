import authTypes from './types';
import { TokenPayload } from './actions';

const token: string = localStorage.getItem('_tk_');
const emptyInitialState = {
    can_access: false,
    isLogout: false,
    user: null,
    error: null,
};
const initialState = token
    ? { can_access: true, user: null, error: null }
    : emptyInitialState;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case authTypes.LOGIN: {
            return {
                ...state,
                can_access: false,
            };
        }

        case authTypes.LOGIN_SUCCESS: {
            const user = action.payload.user;
            return {
                ...state,
                can_access: true,
                user,
            };
        }

        case authTypes.LOGIN_FAIL: {
            return {
                ...state,
                can_access: false,
                user: null,
                error: action.payload,
            };
        }

        case authTypes.LOGOUT: {
            localStorage.removeItem('_tk_');
            localStorage.removeItem('_rf_');
            return {
                ...state,
                can_access: false,
                isLogout: true,
                user: null,
                profile: null,
                error: null,
            };
        }

        case authTypes.EXPIRED_TOKEN: {
            localStorage.removeItem('_tk_');
            return {
                ...state,
                can_access: false,
                user: null,
                error: null,
            };
        }

        case authTypes.NEW_TOKEN: {
            const { access }: TokenPayload = action.payload;
            if (access) {
                localStorage.setItem('_tk_', access);
            }
            // if (refresh) {
            //     localStorage.setItem('_rf_', refresh);
            // }
            return state;
        }

        // case authTypes.FIRST_LOGIN: {
        //     const new_user = {
        //         ...state.user,
        //         is_new_user: false,
        //     };
        //     return {
        //         ...state,
        //         user: new_user,
        //     };
        // }

        default: {
            return state;
        }
    }
};

export default reducer;
