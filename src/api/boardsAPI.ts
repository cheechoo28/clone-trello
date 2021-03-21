import {instance} from "./instance";


export const boardsAPI = {
  getBoards(teamId: string) {
    return instance.get(`/boards?team_id=${teamId}`).then(res => res.data);
  },
  addBoard(newBoard: any) {
    return instance.post("/boards", newBoard).then(res => res.data);
  },
  deleteBoard(id: string) {
    return instance.delete(`boards/${id}`);
  },
  updateBoard(id: string, title: string) {
    return instance.put(`boards/${id}`, {title});
  },
};
