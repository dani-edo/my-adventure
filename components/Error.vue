<template>
  <div class="error">
    Product data not found!
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
