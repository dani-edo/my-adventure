<template>
  <div class="detail">
    <div class="row container">
      <breadcrumb :data="breadcrumb" />
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
            {{ product.loc }}
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
        <section class="description">
          <div class="title">Description</div>
          <p>
            {{ product.desc }}
          </p>
        </section>
        <section class="include-exclude row">
          <div class="col-6">
            <h3 class="title">Include</h3>
            <ul>
              <li v-for="item in product.includes" :key="item.key">
                <img src="/svg/light/check.svg" alt="check" />
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="col-6">
            <h3 class="title">Exclude</h3>
            <ul>
              <li v-for="item in product.excludes" :key="item.key">
                <img src="/svg/light/uncheck.svg" alt="check" />
                {{ item }}
              </li>
            </ul>
          </div>
        </section>
        <section class="itinenrary">
          <div class="title">Itinerary</div>
          <div class="content">
            <div v-for="item in product.itin" :key="item.key" class="item">
              <span alt="icon" class="icon">
                <span></span>
              </span>
              <span class="text">
                <div class="title">{{ item.title }}</div>
                <div class="description">
                  {{ item.desc }}
                </div>
              </span>
            </div>
          </div>
        </section>
      </div>
      <div class="col-4">
        <div class="cta-card">
          <div class="price">
            {{ product.price }}
          </div>
          <button>BOOK</button>
          <div class="benefit">
            <div class="item">
              <img src="/svg/dark/paperless.svg" alt="Digital ticket" />
              <div class="text">Digital ticket</div>
            </div>
            <div class="item">
              <img
                src="/svg/dark/verification.svg"
                alt="Instant confirmation"
              />
              <div class="text">Instant confirmation</div>
            </div>
          </div>
        </div>
      </div>

      <div class="recommendation row container mt-10">
        <h3 class="title">You might like this too</h3>
        <div
          v-for="item in products.filter((e, i) => suggestIndex.includes(i))"
          :key="item.key"
          class="col-4 p-2"
        >
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'
import Breadcrumb from '~/components/Breadcrumb'

export default {
  name: 'Detail',
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    Breadcrumb,
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
      breadcrumb: [
        {
          title: 'Home',
          link: '/',
        },
        {
          title: 'Detail Product',
          link: '#',
        },
      ],
      suggestIndex: [],
      suggestion: [],
    }
  },
  computed: {
    product() {
      const data = this.$store.state.products.filter(
        (e) => e.id === parseInt(this.$route.params.id)
      )
      return data[0] ? data[0] : []
    },
    products() {
      if (this.$store.state.products) this.getRandomProduct()
      return this.$store.state.products
    },
  },
  mounted() {
    if (this.product.length === 0) {
      this.getData()
    }
  },
  methods: {
    ...mapMutations(['addProducts']),
    ...mapActions(['getData']),
    getRandomProduct() {
      while (this.suggestIndex.length < 3) {
        const number = Math.round(Math.random() * 8)
        if (
          !this.suggestIndex.includes(number) &&
          number !== this.$route.params.id - 1
        )
          this.suggestIndex.push(number)
      }
    },
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
