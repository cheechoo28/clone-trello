import {instance} from "./instance";

export const teamsAPI = {
  getTeams(userId: string) {
    return instance.get(`/team/my-teams?user_id=${userId}`).then(res => res.data);
  },
  addTeam(dateTeam: any) {
    return instance.post(`/team`, dateTeam);
  },
  deleteTeam(id: string) {
    return instance.delete(`team/${id}`);
  },
  updateTeam(id: string, name: string) {
    return instance.put(`team/${id}`, {name});
  },
};
