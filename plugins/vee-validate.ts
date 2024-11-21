import { defineRule, configure } from 'vee-validate'
import { required } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

export default defineNuxtPlugin((nuxtApp) => {
  defineRule('required', required)
  defineRule('username', (value: string) => {
    const regex = /^[a-zA-Z0-9_]{3,15}$/
    return regex.test(value) || '使用者名稱只能包含字母、數字與底線，且長度須為 3 至 15 字元'
  })

  configure({
    generateMessage: localize({ zh_TW: zhTW }),
    validateOnInput: true,
  })

  setLocale('zh_TW')
})
