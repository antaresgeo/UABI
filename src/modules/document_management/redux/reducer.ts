import { Loadable } from "../../../custom_types";
import types from './types';

interface State {
    files: Loadable<any>;
}

const emptyInitialState: State = {
    files: {
        value: null,
        loading: false,
        loaded: false,
    },
};
const initialState = emptyInitialState;

const reducer = (state: State = initialState, action: any): State => {
    return {
        ...state,
        ...FilesReducer(state, action),
    };
};

const FilesReducer = (aux_state: State, action: any) => {
    const {  files } = aux_state;
    const state = {  files };
    switch (action.type) {
        case types.files.default: {
            return {
                ...state,
                files: { ...state.files, loading: true },
            };
        }
        case types.files.success: {
            return {
                ...state,
                files: {
                    ...state.files,
                    loading: false,
                    loaded: true,
                    value: action.payload,
                },
            };
        }
        case types.files.fail: {
            return {
                ...state,
                files: {
                    ...state.files,
                    loading: false,
                    loaded: false,
                    value: emptyInitialState.files.value,
                },
            };
        }

        default: {
            return state;
        }
    }
};

export default reducer;
