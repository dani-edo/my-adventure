<template>
  <div class="detail">
    <div class="row container">
      <div class="col-8 mr-auto">
        <h1 class="title">{{ product.title }}</h1>
        <div class="scedule">
          <div class="date">
            <img src="/svg/date-dark.svg" alt="date" class="mr-1" />
            {{ product.date }}
          </div>
          <div class="time ml-2">
            <img src="/svg/clock-dark.svg" alt="clock" class="mr-1" />
            {{ product.time }}
          </div>
        </div>
      </div>
      <div class="col-8">
        <hooper :settings="settings">
          <slide v-for="item in product.img" :key="item.key">
            <img :src="item" alt="" />
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
      </div>
      <div class="col-4">
        <div class="cta-card">
          <div class="price">
            {{ product.price }}
          </div>
          <button>Book</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'Detail',
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },

  data() {
    return {
      settings: {
        autoPlay: true,
        infiniteScroll: true,
        playSpeed: 5000,
        transition: 900,
        wheelControl: false,
      },
    }
  },
  computed: {
    product() {
      const data = this.$store.state.products.filter((e) => {
        return e.id === parseInt(this.$route.params.id)
      })
      return data[0] ? data[0] : []
    },
  },
  mounted() {
    this.getData()
  },
  methods: {
    ...mapMutations(['addProducts']),
    ...mapActions(['getData']),
  },
}
</script>
