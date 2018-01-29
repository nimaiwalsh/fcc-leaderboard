import axios from 'axios';
export const FETCH_USERS = 'FETCH_USERS';
const API_URL_TOP30 = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const API_URL_ALLTIME = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

export function fetchUsers(list, callback) {
  const apicall = (list) ? API_URL_ALLTIME : API_URL_TOP30
  const request = axios.get(apicall)
  return {
      type: FETCH_USERS,
      payload: request,
  }
}