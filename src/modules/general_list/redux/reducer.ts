import types from './types';
import { Tipology } from './service';
import { Loadable, Pageable } from '../../../custom_types';
import { Dependency } from './service/dependency';

interface State {
    tipology: Loadable<Tipology>;
    tipologies: Pageable<Tipology>;
    dependency: Loadable<Dependency>;
    dependencies: Pageable<Dependency>;
}

const emptyInitialState: State = {
    tipology: {
        value: null,
        loading: false,
        loaded: false,
    },
    tipologies: {
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
    dependency: {
        value: null,
        loading: false,
        loaded: false,
    },
    dependencies: {
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
};
const initialState = emptyInitialState;

const reducer = (state: State = initialState, action: any): State => {
    return {
        ...state,
        ...tipologyReducer(state, action),
        ...dependencyReducer(state, action),
    };
};

const tipologyReducer = (aux_state: State, action: any): any => {
    const { tipology, tipologies } = aux_state;
    const state = { tipology, tipologies };
    switch (action.type) {
        case types.create_tipology.default:
        case types.update_tipology.default:
        case types.delete_tipology.default:
        case types.get_tipology.default: {
            return {
                ...state,
                tipology: {
                    ...state.tipology,
                    loading: true,
                    loaded: false,
                },
            };
        }
        case types.update_tipology.success:
        case types.create_tipology.success:
        case types.get_tipology.success: {
            return {
                ...state,
                tipology: {
                    ...state.tipology,
                    value: action.payload.results,
                    loading: false,
                    loaded: true,
                },
            };
        }
        case types.create_tipology.fail:
        case types.update_tipology.fail:
        case types.delete_tipology.fail:
        case types.delete_tipology.success:
        case types.clear_tipology.success:
        case types.get_tipology.fail: {
            return {
                ...state,
                tipology: {
                    ...state.tipology,
                    value: emptyInitialState.tipology.value,
                    loading: false,
                    loaded: false,
                },
            };
        }
        case types.get_list_tipologies.default:
        case types.get_all_tipologies.default: {
            return {
                ...state,
                tipologies: {
                    ...state.tipologies,
                    loading: true,
                    loaded: false,
                },
            };
        }
        case types.get_all_tipologies.success: {
            return {
                ...state,
                tipologies: {
                    ...state.tipologies,
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
        case types.get_list_tipologies.fail:
        case types.get_all_tipologies.fail: {
            return {
                ...state,
                tipologies: {
                    ...state.tipologies,
                    value: emptyInitialState.tipologies.value,
                    pagination: emptyInitialState.tipologies.pagination,
                    loading: false,
                    loaded: false,
                },
            };
        }
        case types.get_list_tipologies.success: {
            return {
                ...state,
                tipologies: {
                    ...state.tipologies,
                    value: action.payload || [],
                    pagination: emptyInitialState.tipologies.pagination,
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
const dependencyReducer = (aux_state: State, action: any): any => {
    const { dependency, dependencies } = aux_state;
    const state = { dependency, dependencies };
    switch (action.type) {
        case types.create_dependency.default:
        case types.update_dependency.default:
        case types.delete_dependency.default:
        case types.get_dependency.default: {
            return {
                ...state,
                dependency: {
                    ...state.dependency,
                    loading: true,
                    loaded: false,
                },
            };
        }
        case types.update_dependency.success:
        case types.create_dependency.success:
        case types.get_dependency.success: {
            return {
                ...state,
                dependency: {
                    ...state.dependency,
                    value: action.payload.results,
                    loading: false,
                    loaded: true,
                },
            };
        }
        case types.create_dependency.fail:
        case types.update_dependency.fail:
        case types.delete_dependency.fail:
        case types.delete_dependency.success:
        case types.clear_dependency.success:
        case types.get_dependency.fail: {
            return {
                ...state,
                dependency: {
                    ...state.dependency,
                    value: emptyInitialState.dependency.value,
                    loading: false,
                    loaded: false,
                },
            };
        }
        case types.get_list_dependencies.default:
        case types.get_all_dependencies.default: {
            return {
                ...state,
                dependencies: {
                    ...state.dependencies,
                    loading: true,
                    loaded: false,
                },
            };
        }
        case types.get_all_dependencies.success: {
            return {
                ...state,
                dependencies: {
                    ...state.dependencies,
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
        case types.get_list_dependencies.fail:
        case types.get_all_dependencies.fail: {
            return {
                ...state,
                dependencies: {
                    ...state.dependencies,
                    value: emptyInitialState.dependencies.value,
                    pagination: emptyInitialState.dependencies.pagination,
                    loading: false,
                    loaded: false,
                },
            };
        }
        case types.get_list_dependencies.success: {
            return {
                ...state,
                dependencies: {
                    ...state.dependencies,
                    value: action.payload || [],
                    pagination: emptyInitialState.dependencies.pagination,
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
