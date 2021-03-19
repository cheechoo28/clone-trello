import {instance} from "./instance";
import {LoginDataUserType, RegisterDataUserType} from "../redux/reducers/auth-reducer";

export const authAPI = {
    authMe() {
        return instance.get(`/auth/me`);
    },
    register(dataUser: RegisterDataUserType) {
        return instance.post(`/auth/register`, dataUser);
    },
    login(dataUser: LoginDataUserType) {
        return instance.post(`/auth/login`, dataUser);
    },
    logout() {
        return instance.delete(`/auth/logout`);
    },

};
