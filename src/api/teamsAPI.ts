import {instance} from "./instance";

export const teamsAPI = {
  getTeams(userId: string) {
    return instance.get(`/team/my-teams?user_id=${userId}`).then(res => res.data);
  },
  addTeam(dateTeam: any) {
    console.log(dateTeam)
    return instance.post(`/team`, dateTeam);
  },
  // deleteColumn(id: string) {
  //   return instance.delete(`cards/${id}`);
  // },
  // updateCard(id: string, title: string) {
  //   return instance.put(`cards/${id}`, {title});
  // },
};
