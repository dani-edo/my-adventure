<template>
  <div class="error">
    Product data not found!
    <a
      href="https://my-json-server.typicode.com/dani-edo/my-adventure/products"
      target="_blank"
    >
      (you can check here:
      https://my-json-server.typicode.com/dani-edo/my-adventure/products)
    </a>
    <button @click="reload">Reload data</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'ErrorPage',
  methods: {
    ...mapMutations(['addProducts']),
    ...mapActions(['getData']),
    reload() {
      this.getData()
    },
  },
}
</script>
