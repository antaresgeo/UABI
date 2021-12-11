import types from './types';

// interface State {}

const emptyInitialState: any = {
    projects: {
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
    realEstates: {
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
    acquisitions: {
        value: [],
        loading: false,
        loaded: false,
    },
    project: {
        value: null,
        loading: false,
        loaded: false,
    },
    realEstate: {
        value: null,
        loading: false,
        loaded: false,
    },
    tipologies: {
        value: [],
        loading: false,
        loaded: false,
    },
    tipology: {
        value: null,
        loading: false,
        loaded: false,
    },
};

const initialState = emptyInitialState;

const reducer = (state: any = initialState, action: any): any => {
    switch (action.type) {
        // PROJECTS
        case types.projects.default: {
            return {
                ...state,
                projects: { ...state.projects, loading: true },
            };
        }

        case types.projects.success: {
            return {
                ...state,
                projects: {
                    ...state.projects,
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

        case types.projects.fail: {
            return {
                ...state,
                projects: {
                    ...state.projects,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.projects.value,
                    pagination: emptyInitialState.projects.pagination,
                },
            };
        }

        // ONE PROJECT
        case types.project.default: {
            return {
                ...state,
                project: { ...state.project, loading: true },
            };
        }

        case types.project.success: {
            return {
                ...state,
                project: {
                    ...state.project,

                    value: action.payload,

                    loading: false,
                    loaded: true,
                },
            };
        }

        case types.project.fail: {
            return {
                ...state,
                project: {
                    ...state.project,
                    message: emptyInitialState.project.message,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.project.value,
                },
            };
        }

        // REAL ESTATES
        case types.realEstates.default: {
            return {
                ...state,
                realEstates: { ...state.realEstates, loading: true },
            };
        }

        case types.realEstates.success: {
            return {
                ...state,
                realEstates: {
                    ...state.realEstates,
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

        case types.realEstates.fail: {
            return {
                ...state,
                realEstates: {
                    ...state.realEstates,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.realEstates.value,
                    pagination: emptyInitialState.realEstates.pagination,
                },
            };
        }

        // ONE REAL ESTATE
        case types.realEstate.default: {
            return {
                ...state,
                realEstate: { ...state.realEstate, loading: true },
            };
        }

        case types.realEstate.success: {
            return {
                ...state,
                realEstate: {
                    ...state.realEstate,
                    loading: false,
                    loaded: true,
                    value: action.payload,
                },
            };
        }

        case types.realEstate.fail: {
            return {
                ...state,
                realEstate: {
                    ...state.realEstate,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.realEstate.value,
                },
            };
        }

        case types.clearRealEstate.success: {
            return {
                ...state,
                realEstate: {
                    ...state.realEstate,
                    loading: false,
                    loaded: true,
                    value: action.payload,
                },
            };
        }

        case types.tipologies.default: {
            return {
                ...state,
                tipologies: { ...state.tipologies, loading: true },
            };
        }

        case types.tipologies.success: {
            return {
                ...state,
                tipologies: {
                    ...state.tipologies,
                    loading: false,
                    loaded: true,
                    value: action.payload,
                },
            };
        }

        case types.tipologies.fail: {
            return {
                ...state,
                tipologies: {
                    ...state.tipologies,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.tipologies.value,
                },
            };
        }

        case types.tipology.default: {
            return {
                ...state,
                tipology: { ...state.tipology, loading: true },
            };
        }

        case types.tipology.success: {
            return {
                ...state,
                tipology: {
                    ...state.tipology,
                    loading: false,
                    loaded: true,
                    value: action.payload,
                },
            };
        }

        case types.tipology.fail: {
            return {
                ...state,
                tipology: {
                    ...state.tipology,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.tipology.value,
                },
            };
        }

        default: {
            return state;
        }
    }
};

export default reducer;
