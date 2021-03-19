import {Dispatch} from "redux";
import {teamsAPI} from "../../api/teamsAPI";


export type TeamType = {
    _id: string
    name: string
    creator_id: string
}

type InitialStateType = {
    teams: Array<TeamType>
    count: number | null
}

const initialState = {
    teams: [] ,
    count: null as (number | null)
}


export const teamsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-TEAMS":
            return {
                ...state,
                teams: action.teams
            }


        default:
            return state
    }

}

export const setTeamAC = (teams: Array<TeamType>) => ({type: "SET-TEAMS", teams} as const)

export const getTeamsTC = (userId: string) => async (dispatch: Dispatch) => {
    const teams = await teamsAPI.getTeams(userId);
    dispatch(setTeamAC(teams.data.teams));
};
//
// export const addCardTC = (title: string, columnId: string) => async (dispatch: Dispatch<any>) => {
//     await cardsAPI.addCard(title, columnId);
//     dispatch(getCardsTC(columnId))
// };
//
// export const deleteCardTC = (id: string, columnId: string) => async (dispatch: Dispatch<any>) => {
//     await cardsAPI.deleteColumn(id);
//     dispatch(getCardsTC(columnId))
// };
//
// export const updateCardTC = (id: string, title: string, columnId: string) => async (dispatch: Dispatch<any>) => {
//     await cardsAPI.updateCard(id, title);
//     dispatch(getCardsTC(columnId))
// };
//
type ActionsType = SetTeamsActionType

type SetTeamsActionType = ReturnType<typeof setTeamAC>

