import {Dispatch} from "redux";
import {columnsAPI} from "../../api/columnsAPI";
import {authAPI} from "../../api/authAPI";

export type RegisterDataUserType = {
    email: string
    password: string
}

export type LoginDataUserType = {
    email: string
    password: string
    rememberMe: boolean
}

type InitialStateType = {
    id: string | null
    email: string | null
    isAuth: boolean
}

const initialState = {
    id: null,
    email: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-DATA-USER":
            return {
                ...state,
                id: action.id,
                email: action.email,
                isAuth: true
            }

        default:
            return state
    }

}

export const setDataUsersAC = (id: string, email: string) => ({type: "SET-DATA-USER", id, email} as const)


export const loginTC = (dataUser: LoginDataUserType) => async (dispatch: Dispatch<any>) => {
    await authAPI.login(dataUser);
    alert("great")
};

export const logoutTC = () => async (dispatch: Dispatch<any>) => {
    await authAPI.logout();
    alert("you got out")
};

export const registerTC = (dataUser: RegisterDataUserType) => async (dispatch: Dispatch<any>) => {
    await authAPI.register(dataUser);
    alert("great")
};

export const authMeTC = () => async (dispatch: Dispatch<any>) => {
    const authMe = await authAPI.authMe();
    authMe.data.resultCode === 0 && dispatch(setDataUsersAC(authMe.data.data.id, authMe.data.data.email))
    alert("great")
};


type ActionsType = SetDataUsersActionType

type SetDataUsersActionType = ReturnType<typeof setDataUsersAC>


