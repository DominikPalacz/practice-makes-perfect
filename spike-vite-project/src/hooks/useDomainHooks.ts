import { ENDPOINTS } from "../api/endpoints"
import type { Albums, Comments, Photos, Posts, Todos, Users } from "../types"
import { UsersSchema } from "../types"
import useData from "./useData"

export const useAlbumsData = () => {
    return useData<Albums>(ENDPOINTS.ALBUMS)
}
export const useCommentsData = () => {
    return useData<Comments>(ENDPOINTS.COMMENTS)
}
export const usePhotosData = () => {
    return useData<Photos>(ENDPOINTS.PHOTOS)
}
export const usePostsData = () => {
    return useData<Posts>(ENDPOINTS.POSTS)
}
export const useTodosData = () => {
    return useData<Todos>(ENDPOINTS.TODOS)
}
export const useUsersData = () => {
    return useData<Users>(ENDPOINTS.USERS, UsersSchema)
}


