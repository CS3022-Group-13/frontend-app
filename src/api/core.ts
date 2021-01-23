import {AxiosResponse} from "axios";

export type Status = { code: number, message: string }

export function toStatus(res: AxiosResponse): Status {
    if (!res || !res.status) {
        return { code: 408, message: 'Check your connection!' }
    }
    return { code: res.status, message: res.data.message }
}