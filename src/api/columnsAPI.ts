import {instance} from "./instance";

export const columnsAPI = {
  getColumns(boardId: string) {
    return instance.get(`/column?board_id=${boardId}`).then(res => res.data);
  },
  addColumn(title: string, boardId: string) {
    return instance.post(`/column?board_id=${boardId}`, {title});
  },
  deleteColumn(id: string) {
    return instance.delete(`column/${id}`);
  },
  // updateBoard(id: string, title: string) {
  //   return instance.put(`boards/${id}`, {title});
  // },
};
