import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import {boardsReducer} from "./reducers/boards-reducer";
import {columnReducer} from "./reducers/column-reducer";
import {cardsReducer} from "./reducers/cards-reducer";


const reducers = combineReducers({
   boards: boardsReducer,
   columns: columnReducer,
   cards: cardsReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare));


export type RootStateType = ReturnType<typeof reducers>;

// @ts-ignore
window.store = store;