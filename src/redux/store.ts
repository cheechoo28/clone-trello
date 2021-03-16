import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import {boardsReducer} from "./reducers/boards-reducer";


const reducers = combineReducers({
   boards: boardsReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare));


export type RootStateType = ReturnType<typeof reducers>;

// @ts-ignore
window.store = store;