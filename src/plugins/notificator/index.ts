import _Vue from 'vue'

type NotifyType = 'success' | 'info' | 'warning' | 'error'

export const container = {
    listener: {
        isShow: false,
        text: 'Welcome',
        type: 'info'
    }
}

export const Notificator = {
    install(Vue: typeof _Vue, options?: any) {
        Vue.prototype.$setListener = function (l: any) {
            container.listener = l
        }
        Vue.prototype.$notify = function (msg: string, type: NotifyType) {
            if (container.listener) {
                container.listener.isShow = false
                container.listener.text = msg
                container.listener.type = type
                container.listener.isShow = true
            }
        }
    }
}