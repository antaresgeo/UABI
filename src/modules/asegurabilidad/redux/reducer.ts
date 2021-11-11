import types from './types';
import { policiesRealEstate } from './service';

//interface State {}

const fake_policy = {
    id: '-1',
    registry_number: '',
    vigency_start: '',
    vigency_end: '',
    policy_type: '',
    insurance_broker: '',
    insurance_companies: [
        {
            insurance_company: '',
            total_percentage: 0,
        },
    ],
    type_assurance: '',
    insurance_value: '',
    insurance_document_id: 0,
    real_estate_id: '',
    audit_trail: {
        created_by: '',
        created_on: '',
        updated_by: null,
        updated_on: null,
        updated_values: null,
    },
    status: 1,
};

const emptyInitialState: any = {
    policy: {
        value: fake_policy,
        loading: false,
        loaded: false,
    },
    policies: {
        value: [fake_policy],
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
    policiesRealEstate: {
        value: [
            {
                id: "-1",
                registry_number: "",
                vigency_start: "",
                vigency_end: "",
                policy_type:"",
                insurance_broker: "",
                insurance_companies: [
                    {
                        insurance_company: "",
                        total_percentage: 0
                    }
                ],
                type_assurance: "",
                insurance_value: "",
                insurance_document_id: 0,
                real_estate_id: 0,
                name_real_estate: "",
                audit_trail: {
                    created_by: '',
                    created_on: '',
                    updated_by: null,
                    updated_on: null,
                    updated_values: null,
                },
                status: 1,
            },
        ],
        loading: false,
        loaded: false,
    },
    company: {
        value: null,
        loading: false,
        loaded: false,
    },
    companies: {
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
    broker: {
        value: null,
        loading: false,
        loaded: false,
    },
    brokers: {
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

        case types.policiesRealEstate.default: {
            return {
                ...state,
                policiesRealEstate: { ...state.policiesRealEstate, loading: true },
            };
        }

        case types.policiesRealEstate.success: {
            return {
                ...state,
                policiesRealEstate: {
                    ...state.policiesRealEstate,
                    value: action.payload,
                    loading: false,
                    loaded: true,
                },
            };
        }

        case types.create_company.default:
        case types.update_company.default:
        case types.delete_company.default:
        case types.get_company.default: {
            return {
                ...state,
                company: {
                    ...state.company,
                    loading: true,
                    loaded: false,
                },
            };
        }
        case types.update_company.success:
        case types.create_company.success:
        case types.get_company.success: {
            return {
                ...state,
                company: {
                    ...state.company,
                    value: action.payload.results,
                    loading: false,
                    loaded: true,
                },
            };
        }

        case types.policiesRealEstate.fail: {
            return {
                ...state,
                policiesRealEstate: {
                    ...state.policiesRealEstate,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.policiesRealEstate.value,
                },
            };
        }
        
        case types.create_company.fail:
        case types.update_company.fail:
        case types.delete_company.fail:
        case types.delete_company.success:
        case types.clear_company:
        case types.get_company.fail: {
            return {
                ...state,
                company: {
                    ...state.company,
                    value: emptyInitialState.company.value,
                    loading: false,
                    loaded: false,
                },
            };
        }
        case types.get_list_companies.default:
        case types.get_all_companies.default: {
            return {
                ...state,
                companies: {
                    ...state.companies,
                    loading: true,
                    loaded: false,
                },
            };
        }
        case types.get_all_companies.success: {
            return {
                ...state,
                companies: {
                    ...state.companies,
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
        case types.get_list_companies.fail:
        case types.get_all_companies.fail: {
            return {
                ...state,
                companies: {
                    ...state.companies,
                    value: emptyInitialState.companies.value,
                    pagination: emptyInitialState.companies.pagination,
                    loading: false,
                    loaded: false,
                },
            };
        }
        case types.get_list_companies.success: {
            return {
                ...state,
                companies: {
                    ...state.companies,
                    value: action.payload || [],
                    pagination: emptyInitialState.companies.pagination,
                    loading: false,
                    loaded: true,
                },
            };
        }

        case types.create_broker.default:
        case types.update_broker.default:
        case types.delete_broker.default:
        case types.get_broker.default: {
            return {
                ...state,
                broker: {
                    ...state.broker,
                    loading: true,
                    loaded: false,
                },
            };
        }
        case types.update_broker.success:
        case types.create_broker.success:
        case types.get_broker.success: {
            return {
                ...state,
                broker: {
                    ...state.broker,
                    value: action.payload.results,
                    loading: false,
                    loaded: true,
                },
            };
        }
        case types.create_broker.fail:
        case types.update_broker.fail:
        case types.delete_broker.fail:
        case types.delete_broker.success:
        case types.clear_broker.success:
        case types.get_broker.fail: {
            return {
                ...state,
                broker: {
                    ...state.broker,
                    value: emptyInitialState.broker.value,
                    loading: false,
                    loaded: false,
                },
            };
        }
        case types.get_list_brokers.default:
        case types.get_all_brokers.default: {
            return {
                ...state,
                brokers: {
                    ...state.brokers,
                    loading: true,
                    loaded: false,
                },
            };
        }
        case types.get_all_brokers.success: {
            return {
                ...state,
                brokers: {
                    ...state.brokers,
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
        case types.get_list_brokers.fail:
        case types.get_all_brokers.fail: {
            return {
                ...state,
                brokers: {
                    ...state.brokers,
                    value: emptyInitialState.brokers.value,
                    pagination: emptyInitialState.brokers.pagination,
                    loading: false,
                    loaded: false,
                },
            };
        }
        case types.get_list_brokers.success: {
            return {
                ...state,
                brokers: {
                    ...state.brokers,
                    value: action.payload || [],
                    pagination: emptyInitialState.brokers.pagination,
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
