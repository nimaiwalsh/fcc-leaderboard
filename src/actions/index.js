import axios from 'axios';
export const FETCH_USERS = 'FETCH_USERS';
const API_URL_TOP30 = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const API_URL_ALLTIME = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

export function fetchUsers(list) {
  const request = (list) ? axios.get(API_URL_ALLTIME) : axios.get(API_URL_TOP30) 
  return {
    type: FETCH_USERS,
    payload: request,
  }
}