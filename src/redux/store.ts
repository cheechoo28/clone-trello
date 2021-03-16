import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";


const reducers = combineReducers({

});

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare));


export type RootStateType = ReturnType<typeof reducers>;

// @ts-ignore
window.store = store;