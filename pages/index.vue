<template>
  <div class="home">
    <div :class="['hero-image', { scrolled: scrolled }]">
      <img src="/img/bali.jpg" alt="bali" />
      <div class="caption">
        <h1>My Adventure</h1>
        <p>Make your dream come true</p>
      </div>
    </div>
    <div class="content">
      <div class="box my-10">
        <div class="title container">Japan, Endless Discovery</div>
        <div class="desc">Choose the trip package that you love</div>
      </div>
      <div class="row container">
        <div v-for="item in products" :key="item.key" class="col-4 p-2">
          <nuxt-link :to="`/detail/${item.id}`">
            <product-card
              :title="item.title"
              :date="item.date"
              :time="item.time"
              :price="item.price"
              :location="item.loc"
              :img="item.img[0]"
            ></product-card>
          </nuxt-link>
        </div>
        <div v-if="products.length === 0 && !notfound" class="loader">
          Loading data ...
        </div>
        <div v-if="products.length === 0 && notfound" class="loader">
          Products not found!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
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
  computed: {
    products() {
      return this.$store.state.products
    },
    notfound() {
      return this.$store.state.notfound
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  mounted() {
    if (this.products.length === 0) {
      this.getData()
    }
  },
  methods: {
    onScroll() {
      if (window.scrollY <= 5) {
        this.scrolled = false
      } else if (window.scrollY > 10) {
        this.scrolled = true
      }
    },
    ...mapMutations(['addProducts']),
    ...mapActions(['getData']),
  },
  head() {
    return {
      title: 'My Adventure | Japan',
    }
  },
}
</script>
