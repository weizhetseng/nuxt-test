export default defineNuxtRouteMiddleware((to, from) => {
  const nuxtApp = useNuxtApp()

  if (import.meta.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) {
    return
  }
})
 