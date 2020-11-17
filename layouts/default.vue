<template>
  <div>
    <Loader v-if="loading" />
    <Error v-if="error" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import Loader from '~/components/Loader'
import Error from '~/components/Error'

export default {
  components: { Footer, Loader, Error },
  computed: {
    loading() {
      return this.$store.state.loading
    },
    error() {
      return this.$store.state.error
    },
  },
}
</script>
