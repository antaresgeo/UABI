import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

// import { reducer as exampleReducer } from "./modules/example_module/redux";
import { reducer as acquisitionReducer } from "./../modules/acquisitions/redux";
import { reducer as asegurabiltyReducer } from "./../modules/asegurabilidad/redux";
import { reducer as notificationReducer } from "./../modules/notificacions/redux";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({

        // example: exampleReducer
        acquisitions: acquisitionReducer,
        asegurabilty: asegurabiltyReducer,
        notifications: notificationReducer 
    }),
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
export type AppDispatch = typeof store.dispatch;
