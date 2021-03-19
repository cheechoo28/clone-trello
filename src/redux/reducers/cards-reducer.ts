import {Dispatch} from "redux";
import {cardsAPI} from "../../api/cardsAPI";

export type CardType = {
    board_id: string
    _id: string
    title: string
    created?: string
}

export type CardsType = {
    [key: string]: Array<CardType>
}

export type InitialStateType = CardsType


const initialState = {}


export const cardsReducer = (state:InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-CARDS": {
            return {
                ...state,
                [action.columnId] : action.cards
            }
        }
            //const todoListTask = copyState[action.toDoListId]
            //copyState[action.toDoListId] = [newTask, ...todoListTask]
        default:
            return state
    }

}


export const setCardsAC = (cards: Array<CardType>, columnId: string) => ({type: "SET-CARDS", cards, columnId} as const)

export const getCardsTC = (columnId: string) => async (dispatch: Dispatch) => {
    const cards = await cardsAPI.getCards(columnId);
    dispatch(setCardsAC(cards.data.cards, columnId));
};

export const addCardTC = (title: string, columnId: string) => async (dispatch: Dispatch<any>) => {
    await cardsAPI.addCard(title, columnId);
    dispatch(getCardsTC(columnId))
};

export const deleteCardTC = (id: string, columnId: string) => async (dispatch: Dispatch<any>) => {
    await cardsAPI.deleteColumn(id);
    dispatch(getCardsTC(columnId))
};
//
// export const updateColumnTC = (id: string, title: string, boardId: string) => async (dispatch: Dispatch<any>) => {
//     await columnsAPI.updateColumn(id, title);
//     dispatch(getColumnsTC(boardId))
// };


type ActionsType = SetCardsActionType

type SetCardsActionType = ReturnType<typeof setCardsAC>

