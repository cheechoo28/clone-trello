import {Dispatch} from "redux";
import {teamsAPI} from "../../api/teamsAPI";


export type TeamType = {
    _id: string
    name: string
}

type InitialStateType = {
    teams: Array<TeamType>
    count: number | null
    name: string
    description: string
    id: string
}

const initialState = {
    teams: [],
    count: null as (number | null),
    name: '',
    description: '',
    id: ''
}


export const teamsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-TEAMS":
            return {
                ...state,
                teams: action.teams
            }
        case "SET-TEAM-NAME":
        case "SET-TEAM-DESCRIPTION":
        case "SET-TEAM-ID":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }

}

export const setTeamAC = (teams: Array<TeamType>) => ({type: "SET-TEAMS", teams} as const)
export const setTeamNameAC = (name: string) => ({type: "SET-TEAM-NAME", payload: {name}} as const)
export const setTeamDescriptionAC = (description: string) => ({type: "SET-TEAM-DESCRIPTION", payload: {description}} as const)
export const setTeamIdAC = (teamId: string) => ({type: "SET-TEAM-ID", payload: {teamId}} as const)

export const getTeamsTC = (userId: string) => async (dispatch: Dispatch) => {
    const teams = await teamsAPI.getTeams(userId);
    dispatch(setTeamAC(teams.data.teams));
};


export const addTeamTC = (dateTeam: any, userId: string) => async (dispatch: Dispatch<any>) => {
    await teamsAPI.addTeam(dateTeam);
    dispatch(getTeamsTC(userId))
};

export const deleteTeamTC = (id: string, userId: string) => async (dispatch: Dispatch<any>) => {
    await teamsAPI.deleteTeam(id);
    dispatch(getTeamsTC(userId))
};

export const updateTeamTC = (id: string, title: string, userId: string) => async (dispatch: Dispatch<any>) => {
    await teamsAPI.updateTeam(id, title);
    dispatch(getTeamsTC(userId))
};

type ActionsType = SetTeamsActionType | SetTeamNameActionType | SetTeamDescriptionActionType | SetTeamIdActionType

type SetTeamsActionType = ReturnType<typeof setTeamAC>
type SetTeamNameActionType = ReturnType<typeof setTeamNameAC>
type SetTeamDescriptionActionType = ReturnType<typeof setTeamDescriptionAC>
type SetTeamIdActionType = ReturnType<typeof setTeamIdAC>

