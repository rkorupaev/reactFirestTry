import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "6ffeb622-4cc5-475e-b725-e0a8f58b513e"
    }
});

export const usersAPI = {
    getUsers(pageSize, currentPage) {
        return axiosInstance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => {
            return response.data;
        });
    },
    followUser(userId) {
        return axiosInstance.post(`follow/` + userId);
    },
    unfollowUser(userId) {
        return axiosInstance.delete(`follow/` + userId);
    },
    getProfile(userId) {
        return axiosInstance.get(`profile/` + userId).then(response => {
            return response.data;
        });
    }
}

export const authApi = {
    getLoggedUser () {
        return axiosInstance.get(`auth/me`).then(response => {
           return response.data;
        });
    }
}
