const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const ENDPOINTS = {
    ALBUMS: `${BASE_URL}/albums`,
    COMMENTS: `${BASE_URL}/comments`,
    PHOTOS: `${BASE_URL}/photos`,
    POSTS: `${BASE_URL}/posts`,
    TODOS: `${BASE_URL}/todos`,
    USERS: `${BASE_URL}/users`,
} as const;