import types from "./types";

interface State {}

const emptyInitialState: State = {};
const initialState = emptyInitialState;

const reducer = (state: State = initialState, action: any): State => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};

export default reducer;
