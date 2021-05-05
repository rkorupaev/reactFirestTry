import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "749b9aed-ae37-4143-bb9a-b6be167df55a"
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
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return axiosInstance.get(`profile/` + userId).then(response => {
            return response.data;
        });
    },
    getProfileStatus(userId) {
        return axiosInstance.get(`/profile/status/${userId}`).then(response => {
            return response.data;
        });
    },
    updateProfileStatus(status) {
        return axiosInstance.put(`/profile/status/`, {status: status});
    }
}

export const authApi = {
    getLoggedUser() {
        return axiosInstance.get(`auth/me`).then(response => {
            return response.data;
        });
    },
    logIn(email, password, rememberMe = false) {
        return axiosInstance.post(`/auth/login`, {email, password, rememberMe});
    },
    logOut() {
        return axiosInstance.delete(`/auth/login`);
    }
}
