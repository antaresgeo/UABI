import types from './types';
import {Loadable, Pageable, Action} from "../../../custom_types";
import {Notification} from "./service";

interface State {
    notification: Loadable<Notification>;
    notifications: Pageable<Notification>;
}
const emptyInitialState: State = {
    notifications: {
        value: [],
        pagination: {
            page: 1,
            count: 0,
            next_page: null,
            previous_page: null,
            total_results: 0,
        },
        loading: false,
        loaded: false,
    },
    notification: {
        value: null,
        loading: false,
        loaded: false,
    },
};
const initialState = emptyInitialState;

const reducer = (state: State = initialState, action: Action): State=> {
    return {
        ...state,
        ...notificationReducer(state, action)
    }
};

export default reducer;


const notificationReducer = (aux_state: State, action: Action): State => {
    const { notification, notifications } = aux_state;
    const state = { notification, notifications };
    switch (action.type) {
        case types.create_notification.default:
        case types.update_notification.default:
        case types.delete_notification.default:
        case types.get_notification.default: {
            return {
                ...state,
                notification: {
                    ...state.notification,
                    loading: true,
                    loaded: false,
                },
            };
        }
        case types.update_notification.success:
        case types.create_notification.success:
        case types.get_notification.success: {
            return {
                ...state,
                notification: {
                    ...state.notification,
                    value: action.payload.results,
                    loading: false,
                    loaded: true,
                },
            };
        }
        case types.create_notification.fail:
        case types.update_notification.fail:
        case types.delete_notification.fail:
        case types.delete_notification.success:
        case types.clear_notification.success:
        case types.get_notification.fail: {
            return {
                ...state,
                notification: {
                    ...state.notification,
                    value: emptyInitialState.notification.value,
                    loading: false,
                    loaded: false,
                },
            };
        }
        case types.get_list_notifications.default:
        case types.get_all_notifications.default: {
            return {
                ...state,
                notifications: {
                    ...state.notifications,
                    loading: true,
                    loaded: false,
                },
            };
        }
        case types.get_all_notifications.success: {
            return {
                ...state,
                notifications: {
                    ...state.notifications,
                    value: action.payload?.results || [],
                    pagination: {
                        page: action.payload?.page || 1,
                        count: action.payload?.count || 0,
                        next_page: action.payload?.next_page,
                        previous_page: action.payload?.previous_page,
                        total_results: action.payload?.total_results || 0,
                    },
                    loading: false,
                    loaded: true,
                },
            };
        }
        case types.get_list_notifications.fail:
        case types.get_all_notifications.fail: {
            return {
                ...state,
                notifications: {
                    ...state.notifications,
                    value: emptyInitialState.notifications.value,
                    pagination: emptyInitialState.notifications.pagination,
                    loading: false,
                    loaded: false,
                },
            };
        }
        case types.get_list_notifications.success: {
            return {
                ...state,
                notifications: {
                    ...state.notifications,
                    value: action.payload || [],
                    pagination: emptyInitialState.notifications.pagination,
                    loading: false,
                    loaded: true,
                },
            };
        }

        default: {
            return state;
        }
    }
};
