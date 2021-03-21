import {boardsAPI} from "../../api/boardsAPI";
import {Dispatch} from "redux";

export type BoardType = {
    _id?: string
    title: string
}

export type BoardsType = {
    [key: string]: Array<BoardType>
}

type InitialStateType = BoardsType

const initialState = {}

export const boardsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-BOARDS": {
            return {
                ...state,
                [action.teamId] : action.boards
            }
        }

        default:
            return state
    }

}

export const setBoardsAC = (boards: Array<BoardType>, teamId: string) => ({type: "SET-BOARDS", boards, teamId} as const)
export const addBoardAC = (author_id: string, title: string) => ({type: "ADD-BOARDS", author_id, title} as const)

export const getBoardsTC = (teamId: string) => async (dispatch: Dispatch) => {
    const boards = await boardsAPI.getBoards(teamId);
    dispatch(setBoardsAC(boards.data.boards, teamId));
};

export const addBoardTC = (newBoard: any, teamId: string) => async (dispatch: Dispatch<any>) => {
    await boardsAPI.addBoard(newBoard);
    dispatch(getBoardsTC(teamId))
};

export const deleteBoardTC = (id: string, teamId: string) => async (dispatch: Dispatch<any>) => {
    await boardsAPI.deleteBoard(id);
    dispatch(getBoardsTC(teamId))
};

export const updateBoardTC = (id: string, title: string, teamId: string) => async (dispatch: Dispatch<any>) => {
    await boardsAPI.updateBoard(id, title);
    dispatch(getBoardsTC(teamId))
};


type ActionsType = SetBoardsActionType | AddBoardActionType

type SetBoardsActionType = ReturnType<typeof setBoardsAC>
type AddBoardActionType = ReturnType<typeof addBoardAC>
