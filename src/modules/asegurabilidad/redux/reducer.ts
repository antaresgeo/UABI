import types from "./types";

//interface State {}

const emptyInitialState: any = {
    policy: {
        value: [
            {
                id: "-1",
                registration_number: "",
                start_date: "",
                insurance_broker: "",
                insurance_company: "",
                insured_value: "",
                policy_document_id: "",
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
    policies: {
        value: [
            {
                id: "-1",
                registration_number: "",
                start_date: "",
                insurance_broker: "",
                insurance_company: "",
                insured_value: "",
                policy_document_id: "",
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
};
const initialState = emptyInitialState;

const reducer = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case types.policy.default: {
            return {
                ...state,
                policy: { ...state.policy, loading: true },
            };
        }

        case types.policy.success: {
            return {
                ...state,
                policy: {
                    ...state.policy,
                    loading: false,
                    loaded: true,
                    value: action.payload,
                },
            };
        }

        case types.policy.fail: {
            return {
                ...state,
                policy: {
                    ...state.policy,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.policy.value,
                },
            };
        }

        case types.policies.default: {
            return {
                ...state,
                policies: { ...state.policies, loading: true },
            };
        }

        case types.policies.success: {
            return {
                ...state,
                policies: {
                    ...state.policies,

                    loading: false,
                    loaded: true,
                    value: action.payload,
                },
            };
        }

        case types.policies.fail: {
            return {
                ...state,
                policies: {
                    ...state.policies,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.policies.value,
                },
            };
        }

        default: {
            return state;
        }

    }

};

export default reducer;
