import types from "./types";


const emptyInitialState: any = {
    notifications: {
        Value: [
            {
                id: "-1",
                title: "",
                description: "",
                path: "",
                status: -1,
            }
        ],
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
        value: [
            {
                id: "-1",
                title: "",
                description: "",
                path: "",
                status: -1,
            }
        ],
        loading: false,
        loaded: false,
    }

};
const initialState = emptyInitialState;

const reducer = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case types.notifications.default: {
            return {
                ...state,
                notifications: { ...state.notifications, loading: true },
            };
        }

        case types.notifications.success: {
            return {
                ...state,
                notifications: {
                    ...state.notifications,
                    value: action.payload,

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

        case types.notifications.fail: {
            return {
                ...state,
                notifications: {
                    ...state.notifications,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.notifications.value,
                },
            };
        }

        // ONE NOTIFICATION
        case types.notification.default: {
            return {
                ...state,
                notification: { ...state.notification, loading: true },
            };
        }

        case types.notification.success: {
            return {
                ...state,
                notification: {
                    ...state.notification,

                    value: action.payload,

                    loading: false,
                    loaded: true,
                },
            };
        }

        case types.notification.fail: {
            return {
                ...state,
                notification: {
                    ...state.notification,
                    message: emptyInitialState.notification.message,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.notification.value,
                },
            };
        }


        default: {
            return state;
        }
    }
};

export default reducer;
