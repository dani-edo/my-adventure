<template>
  <div class="detail">
    <div class="row container">
      <div class="col-8 mr-auto">
        <h1 class="title">{{ product.title }}</h1>
        <div class="scedule">
          <div class="date">
            <img src="/svg/dark/date-dark.svg" alt="date" class="mr-1" />
            {{ product.date }}
          </div>
          <div class="time ml-2">
            <img src="/svg/dark/clock-dark.svg" alt="clock" class="mr-1" />
            {{ product.time }}
          </div>
          <div class="time ml-2">
            <img
              src="/svg/dark/location-dark.svg"
              alt="location"
              class="mr-1"
            />
            {{ product.location }}
          </div>
        </div>
      </div>
      <div class="col-8 mb-5">
        <hooper :settings="settings">
          <slide v-for="item in product.img" :key="item.key">
            <img :src="item" alt="" />
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
        <div class="description">
          <div class="title">Description</div>
          <p>
            After doing the Tokyo-Kyoto-Osaka route on my first visit to Japan
            earlier this year, I wanted to try something a bit more
            off-the-beaten-path for my second trip to the country. I heard great
            things here and there about Shirakawa-go, Takayama and Kanazawa and
            was excited to learn that these three places were all in the same
            region of Japan, along a well serviced route from both Tokyo and
            Osaka-Kyoto. Takayama, Shirakawa-go and Kanazawa is a great
            itinerary to consider as it offers a great mix of sights and foods
            to appeal to a wide audience whilst being undiscovered enough to not
            feel like everybody’s here during your visit.
          </p>
        </div>
      </div>
      <div class="col-4">
        <div class="cta-card">
          <div class="price">
            {{ product.price }}
          </div>
          <button>BOOK</button>
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
  head() {
    return {
      title: `My Adventure | ${
        this.product ? this.product.title : 'Product Detail'
      }`,
    }
  },
}
</script>
