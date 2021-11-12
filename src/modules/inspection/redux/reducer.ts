import types from './types';
import { Inspection } from './service';
import { Loadable, Pageable } from '../../../custom_types';

interface State {
    inspection: Loadable<Inspection>;
    inspections: Pageable<Inspection>;
}

const fake_inspection: Inspection = {
    id: -1,
}

const emptyInitialState: State = {
    inspection: {
        value: fake_inspection,
        loading: false,
        loaded: false,
    },
    inspections: {
        value: [ fake_inspection ],
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
};
const initialState = emptyInitialState;

const reducer = (state: State = initialState, action: any): State => {
    return {
        ...state,
        ...inspectionReducer(state, action),
    };
};

const inspectionReducer = (aux_state: State, action) => {
    const { inspection, inspections } = aux_state;
    const state = { inspection, inspections };
    switch (action.type) {
        case types.create_inspection.default:
        case types.update_inspection.default:
        case types.delete_inspection.default:
        case types.get_inspection.default: {
            return {
                ...state,
                inspection: {
                    ...state.inspection,
                    loading: true,
                    loaded: false,
                },
            };
        }
        case types.update_inspection.success:
        case types.create_inspection.success:
        case types.get_inspection.success: {
            return {
                ...state,
                inspection: {
                    ...state.inspection,
                    value: action.payload.results,
                    loading: false,
                    loaded: true,
                },
            };
        }
        case types.create_inspection.fail:
        case types.update_inspection.fail:
        case types.delete_inspection.fail:
        case types.delete_inspection.success:
        case types.clear_inspection.success:
        case types.get_inspection.fail: {
            return {
                ...state,
                inspection: {
                    ...state.inspection,
                    value: emptyInitialState.inspection.value,
                    loading: false,
                    loaded: false,
                },
            };
        }
        case types.get_list_inspections.default:
        case types.get_all_inspections.default: {
            return {
                ...state,
                inspections: {
                    ...state.inspections,
                    loading: true,
                    loaded: false,
                },
            };
        }
        case types.get_all_inspections.success: {
            return {
                ...state,
                inspections: {
                    ...state.inspections,
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
        case types.get_list_inspections.fail:
        case types.get_all_inspections.fail: {
            return {
                ...state,
                inspections: {
                    ...state.inspections,
                    value: emptyInitialState.inspections.value,
                    pagination: emptyInitialState.inspections.pagination,
                    loading: false,
                    loaded: false,
                },
            };
        }
        case types.get_list_inspections.success: {
            return {
                ...state,
                inspections: {
                    ...state.inspections,
                    value: action.payload || [],
                    pagination: emptyInitialState.inspections.pagination,
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
