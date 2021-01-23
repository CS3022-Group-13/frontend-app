import {apiConn} from "@/api/conn";
import { toStatus, Status } from "@/api/core";

export const userApi = {
    /**
     * Check whether a username is already registered
     * @param username
     * @return true/false (true if exist)
     */
    async checkUsername(username: string): Promise<[boolean, Status]> {
        try {
            const res = await apiConn.get(`api/user/check-username/${username}`)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return [e.response.data.data, toStatus(e.response)]
        }
    },

    /**
     * Register a new user to the system
     * @param userData
     * @return userId
     */
    async register(userData: any): Promise<[string, Status]> {
      try {
          const res = await apiConn.post('api/user/register', userData)
          return [res.data.data, toStatus(res)]
      } catch (e) {
          return [e.response.data.data, toStatus(e.response)]
      }
    },

    /**
     * Authenticated with backend
     * @param username
     * @param password
     * @return UserData
     */
    async login(username: string, password: string): Promise<[any, Status]> {
        try {
            const res = await apiConn.post('api/user/login', {username, password});
            const {token, data} = res.data;
            return [{token, userData:data}, toStatus(res)];
        } catch (e) {
            return [null, toStatus(e.response)]
        }
    },

    /**
     * Get list of users with given parameters
     * @param condition
     */
    async getUser(condition: any): Promise<[any, Status]> {
        try {
            const res = await apiConn.get('api/user/get-user');
            return [res.data.data, toStatus(res)];
        } catch (e) {
            return [null, toStatus(e.response)]
        }
    },

    async getUserCount(condition: any): Promise<[number, Status]> {
        try {
            const res = await apiConn.get('api/user/get-count', condition)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return [-1, toStatus(e.response)]
        }
    },

    async updateUser(userId: string, data: any): Promise<Status> {
        try {
            const res = await apiConn.put(`api/user/update-user/${userId}`, data);
            return toStatus(res);
        } catch (e) {
            return toStatus(e.response)
        }
    },

    async updateCredentials(userId: string, data: any): Promise<Status> {
        try {
            const res = await apiConn.put(`api/user/update-credential/${userId}`, data);
            return toStatus(res);
        } catch (e) {
            return toStatus(e.response)
        }
    },

    /**
     * Verify User Account
     * @param userId
     */
    async verifyUser(userId: string): Promise<Status> {
        try {
            const res = await apiConn.put(`api/user/verify-user/${userId}`);
            return toStatus(res);
        } catch (e) {
            return toStatus(e.response)
        }
    },

    /**
     * Disable User Account
     * @param userId
     */
    async disableUser(userId: string): Promise<Status> {
        try {
            const res = await apiConn.put(`api/user/disable-user/${userId}`);
            return toStatus(res);
        } catch (e) {
            return toStatus(e.response)
        }
    }
}