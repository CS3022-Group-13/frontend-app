import {userApi} from "@/api/modules/user";
import {utilApi} from "@/api/modules/util";
import {apiConn} from "@/api/conn";
import {complaintApi} from "@/api/modules/complaint";
import {fileApi} from "@/api/modules/file";
import {customerApi} from "@/api/modules/customer";

const token = {
    set(token: string) {
        apiConn.enableAuth(token)
    },
    remove() {
        apiConn.removeAuth()
    }
}

export interface API {
    user: typeof userApi
    util: typeof utilApi
    complaint: typeof complaintApi
    customer: typeof customerApi
    file: typeof fileApi
    token: typeof token
}

export const api: API = {
    user: userApi,
    util: utilApi,
    complaint: complaintApi,
    customer: customerApi,
    file: fileApi,
    token
}