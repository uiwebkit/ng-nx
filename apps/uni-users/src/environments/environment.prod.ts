import { Env } from './env.interface';

const server = 'https://dummyjson.com';
const api = `${server}`; // `${server}/api/v1`

export const env: Env = {
  production: true,
  server,
  api,
  users: `${api}/users/search`,
};
