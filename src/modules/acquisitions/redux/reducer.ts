import { swal } from "../../../utils";
import types from "./types";

interface State {}

const emptyInitialState: any = {
    projects: {
        value: [
            {
                id: "",
                name: "",
                description: "",
                dependency: "",
                audit_trail: {
                    created_by: "",
                    created_on: "",
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
    realEstates: {
        value: [
            {
                id: -1,
                dependency: "",
                destination_type: "",
                accounting_account: "",
                cost_center: "",

                registry_number: "",
                name: "",
                description: "",

                total_area: -1,
                total_percentage: -1,
                estate_type: "",
                tipology: "",

                project_id: -1,

                audit_trail: {
                    created_by: "",
                    created_on: "",
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
    acquisitions: {
        value: [
            {
                title_type: "None",
                acquisition_type: "1",
                active_type: ["1"],
                seller: "1",
                entity_type: "1",
                acquired_percentage: 0,
                acquisition_value: 0,
                act_number: "",
                address: "",
                area: 0,
                entity_number: "",
            },
        ],
        loading: false,
        loaded: false,
    },
    project: {
        value: {
            id: "",
            name: "",
            description: "",
            dependency: "",
            audit_trail: {
                created_by: "",
                created_on: "",
                updated_by: null,
                updated_on: null,
                updated_values: null,
            },
            status: -1,
        },

        loading: false,
        loaded: false,
    },
    realEstate: {
        value: {
            id: -1,
            dependency: "",
            destination_type: "",
            accounting_account: "",
            cost_center: "",

            registry_number: "",
            name: "",
            description: "",

            total_area: -1,
            total_percentage: -1,
            estate_type: "",
            tipology: "",

            project_id: -1,

            audit_trail: {
                created_by: "",
                created_on: "",
                updated_by: null,
                updated_on: null,
                updated_values: null,
            },
            status: -1,
        },
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
                    loading: false,
                    loaded: true,
                    value: action.payload,
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

                    loading: false,
                    loaded: true,
                    value: action.payload,
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
                    loading: false,
                    loaded: true,
                    value: action.payload,
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

        default: {
            return state;
        }
    }
};

export default reducer;
