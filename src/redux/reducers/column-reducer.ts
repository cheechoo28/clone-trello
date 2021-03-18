import {Dispatch} from "redux";
import {columnsAPI} from "../../api/columnsAPI";

export type ColumnType = {
    board_id: string
    _id: string
    title: string
    created?: string

}

type InitialStateType = {
    columns: Array<ColumnType>
    title: string
}

const initialState = {
    columns: [],
    title: ''
}

export const columnReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-COLUMNS": {
            return {
                ...state,
                columns: action.columns
            }
        }
        case "SET-COLUMN-TITLE": {
            return {
                ...state,
                title: action.title
            }
        }
        default:
            return state
    }

}


export const setColumnsAC = (columns: Array<ColumnType>) => ({type: "SET-COLUMNS", columns} as const)
export const setColumnTitleAC = (title: string) => ({type: "SET-COLUMN-TITLE", title} as const)


export const getColumnsTC = (boardId: string) => async (dispatch: Dispatch) => {
    const columns = await columnsAPI.getColumns(boardId);
    dispatch(setColumnsAC(columns.data.columns));
};

export const addColumnTC = (title: string, boardId: string) => async (dispatch: Dispatch<any>) => {
    await columnsAPI.addColumn(title, boardId);
    dispatch(getColumnsTC(boardId))
};
//
// export const deleteBoardTC = (id: string) => async (dispatch: Dispatch<any>) => {
//     await boardsAPI.deleteBoard(id);
//     dispatch(getBoardsTC())
// };
//
// export const updateBoardTC = (id: string, title: string) => async (dispatch: Dispatch<any>) => {
//     await boardsAPI.updateBoard(id, title);
//     dispatch(getBoardsTC())
// };


type ActionsType = SetColumnsActionType | SetColumnTitleActionType

type SetColumnsActionType = ReturnType<typeof setColumnsAC>
type SetColumnTitleActionType = ReturnType<typeof setColumnTitleAC>
