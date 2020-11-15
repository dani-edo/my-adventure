<template>
  <div class="home">
    <div :class="['hero-image', { scrolled: scrolled }]">
      <img src="/img/bali.jpg" alt="bali" />
      <div class="caption">
        <h1>My Adventure</h1>
        <p>Make your dream come true</p>
      </div>
    </div>
    <div class="content container mt-20">
      <div class="row">
        <div class="col-4 p-2">
          <product-card></product-card>
        </div>
        <div class="col-4 p-2">
          <product-card></product-card>
        </div>
        <div class="col-4 p-2">
          <product-card></product-card>
        </div>
        <div class="col-4 p-2">
          <product-card></product-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '~/components/ProductCard'
export default {
  name: 'Home',
  components: {
    ProductCard,
  },
  data() {
    return {
      scrolled: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      if (window.scrollY === 0) {
        this.scrolled = false
      } else {
        this.scrolled = true
      }
    },
  },
}
</script>
