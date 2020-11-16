export const state = () => ({
  products: [],
  notfound: false,
})

export const mutations = {
  addProducts(state, payload) {
    state.products = payload
    state.notfound = false
  },
  notFound(state) {
    state.notfound = true
  },
}

export const actions = {
  getData(context) {
    this.$axios
      .$get(
        'https://my-json-server.typicode.com/dani-edo/my-adventure/products'
      )
      .then((data) => {
        context.commit('addProducts', data)
      })
      .catch((err) => {
        console.log(err)
        context.commit('notFound')
      })
  },
}
