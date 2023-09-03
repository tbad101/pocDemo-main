import {searchController} from "./axiosConfig";


export const getUser = async (pageId) => {
    console.log("🚀 ~ file: api.js:5 ~ getUser ~ pageId:", pageId)
    const data = searchController.get(`api/users?page=${pageId}`)
    .then(res => res)
    .catch(err=>err)
    return data
}
