import * as bootstrap from 'bootstrap'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      bootstrap: {
        modal: (item: HTMLElement) => new bootstrap.Modal(item),
        offcanvas: (item: HTMLElement) => new bootstrap.Offcanvas(item),
      },
    },
  }
})
