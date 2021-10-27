import types from "./types";


// interface State {}

const emptyInitialState: any = {
    users: {
        value: [
            {
                id: -1,
                society_type: 'N-Persona Natural',
                entity_type: 'Ninguno',
                id_type: '',
                id_number: '',
                names: '',
                surnames: '',
                email: '',
                location: '',
                cellphone_number: '',
                phone_number: '',
                gender: '',
                id_rol: 0,
                audit_trail: {
                    created_by: "",
                    created_on: "",
                    updated_by: null,
                    updated_on: null,
                    updated_values: null,
                },
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
    user: {
        value: [
            {
                id: -1,
                society_type: 'N-Persona Natural',
                entity_type: 'Ninguno',
                id_type: '',
                id_number: '',
                names: '',
                surnames: '',
                email: '',
                location: '',
                cellphone_number: '',
                phone_number: '',
                gender: '',
                id_rol: 0,
                audit_trail: {
                    created_by: "",
                    created_on: "",
                    updated_by: null,
                    updated_on: null,
                    updated_values: null,
                },
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
        case types.users.default: {
            return {
                ...state,
                users: { ...state.users, loading: true }
            };
        }

        case types.users.success: {
            return {
                ...state,
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
            }
        }

        case types.users.fail: {
            return {
                ...state,
                users: {
                    ...state.users,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.users.value
                }
            }
        }

        case types.user.default: {
            return {
                ...state,
                user: { ...state.user, loading: true }
            };
        }

        case types.user.success: {
            return {
                ...state,
                user: {
                    ...state.user,

                    value: action.payload,

                    loading: false,
                    loaded: true,
                }
            };
        }

        case types.user.fail: {
            return {
                ...state,
                user: {
                    ...state.user,
                    message: emptyInitialState.user.message,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.user.value
                }
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
