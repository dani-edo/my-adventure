export const state = () => ({
  products: [],
  notfound: false,
  loading: false,
  error: false,
})

export const mutations = {
  addProducts(state, payload) {
    state.products = payload
    state.notfound = false
  },
  notFound(state) {
    state.notfound = true
  },
  loading(state, payload) {
    state.loading = payload
  },
  error(state, payload) {
    state.error = payload
  },
}

export const actions = {
  getData(context) {
    context.commit('loading', true)
    context.commit('error', false)
    this.$axios
      .$get(
        'https://my-json-server.typicode.com/dani-edo/my-adventure/products'
      )
      .then((data) => {
        context.commit('addProducts', data)
        context.commit('loading', false)
      })
      .catch((err) => {
        console.log(err)
        context.commit('notFound')
        context.commit('loading', false)
        context.commit('error', true)
      })
  },
}
