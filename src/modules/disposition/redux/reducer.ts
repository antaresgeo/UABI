import types from './types';
import {Loadable, Pageable} from "../../../custom_types";
import { IContractAttributes } from './../../../utils/interfaces/contracts';
interface State {
    contract: Loadable<IContractAttributes>;
    contracts: Pageable<IContractAttributes>;
    // disposition: Loadable<any>;
    // dispositions: Pageable<any>;
}


const emptyInitialState: State = {
    contract: {
        value: null,
        loading: false,
        loaded: false,
    },
    contracts: {
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
        ...contractReducer(state, action),
    };
};

const contractReducer = (aux_state: State, action: any) => {
    const { contract, contracts } = aux_state;
    const state = { contract, contracts };
    switch (action.type) {
        case types.create_contract.default:
        case types.update_contract.default:
        case types.get_contract.default: {
            return {
                ...state,
                contract: {
                    ...state.contract,
                    loading: true,
                    loaded: false,
                },
            };
        }
        case types.update_contract.success:
        case types.create_contract.success:
        case types.get_contract.success: {
            return {
                ...state,
                company: {
                    ...state.contract,
                    value: action.payload.results,
                    loading: false,
                    loaded: true,
                },
            };
        }
        case types.create_contract.fail:
        case types.update_contract.fail:
        case types.get_contract.fail: {
            return {
                ...state,
                contract: {
                    ...state.contract,
                    value: emptyInitialState.contract.value,
                    loading: false,
                    loaded: false,
                },
            };
        }
        case types.get_list_contracts.default:
        case types.get_all_contracts.default: {
            return {
                ...state,
                contracts: {
                    ...state.contracts,
                    loading: true,
                    loaded: false,
                },
            };
        }
        case types.get_all_contracts.success: {
            return {
                ...state,
                contracts: {
                    ...state.contracts,
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
        case types.get_list_contracts.success: {
            return {
                ...state,
                companies: {
                    ...state.contracts,
                    value: action.payload || [],
                    pagination: emptyInitialState.contracts.pagination,
                    loading: false,
                    loaded: true,
                },
            };
        }
        case types.get_list_contracts.fail:
        case types.get_all_contracts.fail: {
            return {
                ...state,
                contracts: {
                    ...state.contracts,
                    value: emptyInitialState.contracts.value,
                    pagination: emptyInitialState.contracts.pagination,
                    loading: false,
                    loaded: false,
                },
            };
        }

        default: {
            return state;
        }
    }
}

export default reducer;
