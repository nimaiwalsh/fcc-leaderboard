export const FETCH_USERS = 'FETCH_USERS';

export function fetchUsers() {
  return {
    type: FETCH_USERS,
    payload: 'Data has been fetched',
  }
}