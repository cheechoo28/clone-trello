import {instance} from "./instance";

export const teamsAPI = {
  getTeams(userId: string) {
    return instance.get(`/team/my-teams?user_id=${userId}`).then(res => res.data);
  },
  // addCard(title: string, columnId: string) {
  //   return instance.post(`/cards?column_id=${columnId}`, {title});
  // },
  // deleteColumn(id: string) {
  //   return instance.delete(`cards/${id}`);
  // },
  // updateCard(id: string, title: string) {
  //   return instance.put(`cards/${id}`, {title});
  // },
};
