import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as acquisitionReducer } from './../modules/acquisitions/redux';
import { reducer as insurabilityReducer } from './../modules/asegurabilidad/redux';
import { reducer as notificationReducer } from './../modules/notificacions/redux';
import { reducer as userReducer } from './../modules/users/redux';
import { reducer as inspectionReducer } from './../modules/inspection/redux';
import { reducer as authReducer } from './../modules/auth/redux';
import { reducer as generalListReducer } from './../modules/general_list/redux';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        // example: exampleReducer
        acquisitions: acquisitionReducer,
        insurability: insurabilityReducer,
        notifications: notificationReducer,
        users: userReducer,
        inspection: inspectionReducer,
        auth: authReducer,
        generalList: generalListReducer,
    }),
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
export type AppDispatch = typeof store.dispatch;
