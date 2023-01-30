import { PUBLIC_HOST } from '$env/static/public'

export const HOST = PUBLIC_HOST;
export const URL = `${HOST}/api`;
export const ADMIN_URL = `${HOST}/api/admin`;

// session
export const LOGIN_URL = `${URL}/session/login`;
export const USER_URL = `${URL}/session/profile`;

// user's URLS
export const SONGS_URL = `${URL}/songs`;
export const TAGS_URL = `${URL}/tags`;

// admin's URLS
export const ADMIN_SONGS_URL = `${ADMIN_URL}/songs`;
export const ADMIN_TAGS_URL = `${ADMIN_URL}/tags`;
export const ADMIN_USERS_URL = `${ADMIN_URL}/users`;
