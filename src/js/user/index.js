import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        username: '',
        avatar: '',
        url: '',
        access_token: ''
    }),
    getters: {
        getUsername: (state) => state.username,
        getAvatar: (state) => state.avatar,
        getUrl: (state) => state.url,
    },
    actions: {
    },
})