import {instance} from "./instance";
import {BoardType} from "../redux/reducers/boards-reducer";


export const boardsAPI = {
  getBoards() {
    return instance.get("/boards").then(res => res.data);
  },
  addBoard(newBoard: BoardType) {
    return instance.post("/boards", newBoard).then(res => res.data);
  },
  deleteBoard(id: string) {
    return instance.delete(`boards/${id}`);
  },
  updateBoard(id: string, title: string) {
    return instance.put(`boards/${id}`, {title});
  },
};
