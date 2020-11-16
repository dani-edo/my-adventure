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
      <!-- <nav class="container">
        <div class="navbar-brand">My Adventure</div>
      </nav> -->
      <div class="box my-5">
        <div class="title container">Japan, Endless Discovery</div>
        <div class="desc">Pilih paket wisatamu ke jepang</div>
      </div>
      <div class="row container">
        <div v-for="item in products" :key="item.key" class="col-4 p-2">
          <product-card
            :title="item.title"
            :date="item.date"
            :time="item.time"
            :price="item.price"
            :img="item.img"
          ></product-card>
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
      products: [
        {
          title: 'Experience Tokyo with Mt Fuji & Hakone Tour',
          date: '17 Agustus 1945',
          time: '4D/3N',
          price: 'IDR 4.718.907',
          img:
            'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1069&q=80',
        },
        {
          title:
            'Experience All Inclusive Package At Club Med Tomamu Hokkaido Japan',
          date: '17 Agustus 1945',
          time: '5D/4N',
          price: 'IDR 16.228.000',
          img:
            'https://images.yuktravel.com/images/upload/tours/wide/5D4N-Experience-All-Inclusive-Package-at-Club-Med-Tomamu-Hokkaido-Japan-19-mobile.jpg',
        },
        {
          title: 'Experience Cityrama Tokyo Tour',
          date: '17 Agustus 1945',
          time: '4D/3N',
          price: 'IDR 3.051.100',
          img:
            'https://images.yuktravel.com/images/upload/tours/wide/4D3N-Experience-Cityrama-Tokyo-Tour-19-480.jpg',
        },
        {
          title: 'Experience Osaka With Universal Studio Japan',
          date: '17 Agustus 1945',
          time: '4D/3N',
          price: 'IDR 4.076.000',
          img:
            'https://images.yuktravel.com/images/upload/tours/wide/mainimage-4d3n-rom-osaka.jpg',
        },
        {
          title:
            'Experience Tokyo Osaka Kyoto Tour With Disneyland Or Disneysea & Universal Studio Japan',
          date: '17 Agustus 1945',
          time: '7D/6N',
          price: 'IDR 12.403.200',
          img:
            'https://images.yuktravel.com/images/upload/tours/wide/7D6N-Experience-Romantic-Tokyo-Osaka-Kyoto-Tour-2017.jpg',
        },
        {
          title: '1-Day Nara & Kyoto Bus Tour',
          date: '17 Agustus 1945',
          time: '1D',
          price: 'IDR 1.395.900',
          img:
            'https://images.yuktravel.com/images/upload/jtours/wide/Kansai-Walking-Tour-480.jpg',
        },
      ],
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
      if (window.scrollY <= 5) {
        this.scrolled = false
      } else {
        this.scrolled = true
      }
    },
  },
}
</script>
