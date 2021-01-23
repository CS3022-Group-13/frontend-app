import Vue from 'vue'

declare module 'vue/types/vue' {
    interface Vue {
        $setListener: (o: any) => void
        $notify: (msg: string, type: 'success' | 'info' | 'warning' | 'error') => void
    }
}