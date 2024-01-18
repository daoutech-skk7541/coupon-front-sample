import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const isLoggedIn = ref(false)
    const destinationPath = ref('/')

    function login() {
        isLoggedIn.value = true
    }
    function logout() {
        isLoggedIn.value = false
    }
    return { login, logout, isLoggedIn, destinationPath }
})
