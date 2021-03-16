import {boardsAPI} from "../../api/boardsAPI";
import {Dispatch} from "redux";

export type BoardType = {
    author_id: string
    _id?: string
    title: string
    created?: string
}


type InitialStateType = {
    boards: Array<BoardType>
    title: string
}

const initialState = {
    boards: [],
    title: ''
}

export const boardsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-BOARDS": {
            return {
                ...state,
                boards: action.boards
            }
        }
        case "SET-BOARD-TITLE": {
            return {
                ...state,
                title: action.title
            }
        }
        default:
            return state
    }

}


export const setBoardsAC = (boards: Array<BoardType>) => ({type: "SET-BOARDS", boards} as const)
export const setBoardTitlesAC = (title: string) => ({type: "SET-BOARD-TITLE", title} as const)
export const addBoardAC = (author_id: string, title: string) => ({type: "ADD-BOARDS", author_id, title} as const)


export const getBoardsTC = () => async (dispatch: Dispatch) => {
    const boards = await boardsAPI.getBoards();
    dispatch(setBoardsAC(boards.data.boards));
};

export const addBoardTC = (newBoard: BoardType) => async (dispatch: Dispatch<any>) => {
    await boardsAPI.addBoard(newBoard);
    dispatch(getBoardsTC())
};

export const deleteBoardTC = (id: string) => async (dispatch: Dispatch<any>) => {
    await boardsAPI.deleteBoard(id);
    dispatch(getBoardsTC())
};


type ActionsType = SetBoardsActionType | AddBoardActionType | SetBoardTitlesActionType

type SetBoardsActionType = ReturnType<typeof setBoardsAC>
type AddBoardActionType = ReturnType<typeof addBoardAC>
type SetBoardTitlesActionType = ReturnType<typeof setBoardTitlesAC>