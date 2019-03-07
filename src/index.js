if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    window.navigator.serviceWorker.register('/sw.js').then(
      registration => {
        console.log(
          'ServiceWorker registration successful with scope: ',
          registration.scope
        )
      },
      err => {
        console.log('fail', err)
      }
    )
  })
}
