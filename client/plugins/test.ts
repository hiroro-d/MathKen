export default defineNuxtPlugin(() => {

  return {
    provide: {
      hello(message: string) {
        return `Hello ${ message }!`;
      }
    }
  }
})