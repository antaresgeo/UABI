import types from './types';

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
                    created_by: '',
                    created_on: '',
                    updated_by: null,
                    updated_on: null,
                    updated_values: null,
                },
                status: -1,
            },
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
                    created_by: '',
                    created_on: '',
                    updated_by: null,
                    updated_on: null,
                    updated_values: null,
                },
                status: -1,
            },
        ],
        loading: false,
        loaded: false,
    },
    rol: {
        value: [
            {
                id: -1,
                permits: [],
                rol: '',
                audit_trail: {
                    created_by: '',
                    created_on: '',
                    updated_by: null,
                    updated_on: null,
                    updated_values: null,
                },
                status: -1,
            },
        ],
        loading: false,
        loaded: false,
    },
    roles: {
        value: [
            {
                id: -1,
                id_rol: '',
                permits: [],
                audit_trail: {
                    created_by: '',
                    created_on: '',
                    updated_by: null,
                    updated_on: null,
                    updated_values: null,
                },
                status: -1,
            },
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
    rolesSelect: {
        value: [
            {
                id: 0,
                name: "",
                status: -1,
                audit_trail: {
                    created_by: '',
                    created_on: '',
                    updated_by: null,
                    updated_on: null,
                    updated_values: null,
                },
            },
        ]
    },
    permits: {
        value: [
            {
                id: 0,
                name: ""
            }
        ],
        loading: false,
        loaded: false,
    },
};
const initialState = emptyInitialState;

const reducer = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case types.users.default: {
            return {
                ...state,
                users: { ...state.users, loading: true },
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
            };
        }

        case types.users.fail: {
            return {
                ...state,
                users: {
                    ...state.users,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.users.value,
                },
            };
        }

        case types.user.default: {
            return {
                ...state,
                user: { ...state.user, loading: true },
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
                },
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
                    value: emptyInitialState.user.value,
                },
            };
        }

        case types.roles.default: {
            return {
                ...state,
                roles: { ...state.roles, loading: true },
            };
        }

        case types.roles.success: {
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
            };
        }

        case types.roles.fail: {
            return {
                ...state,
                roles: {
                    ...state.roles,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.roles.value,
                },
            };
        }

        case types.rol.default: {
            return {
                ...state,
                rol: { ...state.rol, loading: true },
            };
        }

        case types.rol.success: {
            return {
                ...state,
                rol: {
                    ...state.rol,

                    value: action.payload,

                    loading: false,
                    loaded: true,
                },
            };
        }

        case types.rol.fail: {
            return {
                ...state,
                rol: {
                    ...state.rol,
                    message: emptyInitialState.rol.message,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.rol.value,
                },
            };
        }

        case types.permits.default: {
            return {
                ...state,
                permits: { ...state.permits, loading: true },
            };
        }

        case types.permits.success: {
            return {
                ...state,
                permits: {
                    value: action.payload,
                    loading: false,
                    loaded: true,
                }
            };
        }

        case types.permits.fail: {
            return {
                ...state,
                permits: {
                    ...state.permits,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.permits.value,
                },
            };
        }

        case types.rolesSelect.default: {
            return {
                ...state,
                rolesSelect: { ...state.rolesSelect, loading: true },
            };
        }

        case types.rolesSelect.success: {
            console.log(action.payload)
            return {
                ...state,
                rolesSelect: {
                    value: action.payload,
                    loading: false,
                    loaded: true,
                }
            };
        }

        case types.rolesSelect.fail: {
            return {
                ...state,
                rolesSelect: {
                    ...state.rolesSelect,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.rolesSelect.value,
                },
            };
        }

        default: {
            return state;
        }
    }
};

export default reducer;
