import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', () => {
  const token = ref('elk-vue')
  function setToken(value) {
    token.value = value
  }

  return { token, setToken }
})
