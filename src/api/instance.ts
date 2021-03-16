import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://trello-clone-back.herokuapp.com/",
});
