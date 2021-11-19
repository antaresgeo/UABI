import types from './types';
import {Loadable, Pageable} from "../../../custom_types";
import { registration } from './service';

interface State {
    registration: Loadable<registration>
    registrations: Pageable<registration>
}

const emptyInitialState: State = {
    registration: {
        value: null,
        loading: false,
        loaded: false,
    },
    registrations:{
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
    }

};
const initialState = emptyInitialState;

const reducer = (state: State = initialState, action: any): State => {
    return {
        ...state,
        ...registrationReducer(state, action),
    };
};

const registrationReducer = (aux_state: State, action: any): any => {
    const { registration, registrations } = aux_state;
    const state = { registration, registrations };
    switch (action.type) {
        case types.create_registration.default:
        case types.update_registration.default:
        case types.delete_registration.default:
        case types.get_registration.default: {
            return {
                ...state,
                broker: {
                    ...state.registration,
                    loading: true,
                    loaded: false,
                },
            };
        }
        case types.update_registration.success:
        case types.create_registration.success:
        case types.get_registration.success: {
            return {
                ...state,
                broker: {
                    ...state.registration,
                    value: action.payload.results,
                    loading: false,
                    loaded: true,
                },
            };
        }
        case types.create_registration.fail:
        case types.update_registration.fail:
        case types.delete_registration.fail:
        case types.delete_registration.success:
        case types.clear_registration.success:
        case types.get_registration.fail: {
            return {
                ...state,
                broker: {
                    ...state.registration,
                    value: emptyInitialState.registration.value,
                    loading: false,
                    loaded: false,
                },
            };
        }
        case types.get_list_registrations.default:
        case types.get_all_registrations.default: {
            return {
                ...state,
                brokers: {
                    ...state.registration,
                    loading: true,
                    loaded: false,
                },
            };
        }
        case types.get_all_registrations.success: {
            return {
                ...state,
                brokers: {
                    ...state.registrations,
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
        case types.get_list_registrations.fail:
        case types.get_all_registrations.fail: {
            return {
                ...state,
                brokers: {
                    ...state.registrations,
                    value: emptyInitialState.registrations.value,
                    pagination: emptyInitialState.registrations.pagination,
                    loading: false,
                    loaded: false,
                },
            };
        }
        case types.get_list_registrations.success: {
            return {
                ...state,
                brokers: {
                    ...state.registrations,
                    value: action.payload || [],
                    pagination: emptyInitialState.registrations.pagination,
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

export default reducer;
