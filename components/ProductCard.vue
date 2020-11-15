<template>
  <nuxt-link to="/">
    <div class="product-card">
      <img class="product-image" src="/img/bali.jpg" alt="bali" />
      <div class="label">
        <div class="title">
          Fuji Shibazakura Festival 2020 dan Mt. Fuji 5th Station Day Tour
        </div>
        <div class="scedule">
          <div class="date">
            <img src="/svg/date.svg" alt="date" class="mr-1" />
            17 Agustus 1945
          </div>
          <div class="time ml-2">
            <img src="/svg/clock.svg" alt="clock" class="mr-1" />
            5 hari
          </div>
        </div>
        <div class="price">Rp.1000.000</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
