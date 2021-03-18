import {instance} from "./instance";

export const columnsAPI = {
  getColumns(boardId: string) {
    return instance.get(`/column?board_id=${boardId}`).then(res => res.data);
  },
  addColumn(title: string, boardId: string) {
    return instance.post(`/column?board_id=${boardId}`, {title});
  },
  // deleteBoard(id: string) {
  //   return instance.delete(`boards/${id}`);
  // },
  // updateBoard(id: string, title: string) {
  //   return instance.put(`boards/${id}`, {title});
  // },
};
