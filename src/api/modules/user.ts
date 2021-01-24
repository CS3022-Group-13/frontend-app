import {apiConn} from "@/api/conn";
import { toStatus, Status } from "@/api/core";

export const userApi = {


    /**
     * Register a new user to the system
     * @param userData
     * @return userId
     */
    async register(userData: any): Promise<[string, Status]> {
      try {
          console.log(userData)
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
            return [{token, userData:data.userData}, toStatus(res)];
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
            const res = await apiConn.get('api/user/get-users');
            return [res.data.data, toStatus(res)];
        } catch (e) {
            return [null, toStatus(e.response)]
        }
    },

    async getUserDetails(userId: string): Promise<[any, Status]> {
        try {
            const res = await apiConn.get(`api/user/get-details/${userId}`);
            return [res.data.data, toStatus(res)];
        } catch (e) {
            return [null, toStatus(e.response)]
        }
    },

    async updateUser(userId: string, data: any): Promise<Status> {
        try {
            const res = await apiConn.put(`api/user/update-details/${userId}`, data);
            return toStatus(res);
        } catch (e) {
            return toStatus(e.response)
        }
    },

    async updateCredentials(userId: string, data: any): Promise<Status> {
        try {
            const res = await apiConn.put(`api/user/update-credentials  /${userId}`, data);
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
            const res = await apiConn.put(`api/user/change-status/${userId}`, {verified: true});
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
            const res = await apiConn.put(`api/user/change-status/${userId}`, {verified: false});
            return toStatus(res);
        } catch (e) {
            return toStatus(e.response)
        }
    },

    async resetPassword(userId: string): Promise<[any, Status]> {
        try {
            const res = await apiConn.put(`api/user/reset-pass/${userId}`);
            console.log(res)
            return [res.data.data.password, toStatus(res)];
        } catch (e) {
            return [null, toStatus(e.response)]
        }
    }


}