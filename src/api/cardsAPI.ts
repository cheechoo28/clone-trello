import {instance} from "./instance";

export const cardsAPI = {
  getCards(columnId: string) {
    return instance.get(`/cards?column_id=${columnId}`).then(res => res.data);
  },
  addCard(title: string, columnId: string) {
    return instance.post(`/cards?column_id=${columnId}`, {title});
  },
  deleteColumn(id: string) {
    return instance.delete(`cards/${id}`);
  },
  updateCard(id: string, title: string) {
    return instance.put(`cards/${id}`, {title});
  },
};
