export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('copy', {
    mounted(el) {
      el.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement
        navigator.clipboard.writeText(target.innerText)
        alert('成功複製訊息')
      })
    },
  })
})
