<template>
  <div class="product-card">
    <img class="product-image" :src="img" alt="bali" />
    <div class="label">
      <div class="title">
        {{ title }}
      </div>
      <div class="scedule">
        <div class="date mr-2">
          <img src="/svg/light/date.svg" alt="date" class="mr-1" />
          {{ date }}
        </div>
        <div class="time mr-2">
          <img src="/svg/light/clock.svg" alt="clock" class="mr-1" />
          {{ time }}
        </div>
        <div class="time">
          <img src="/svg/light/location.svg" alt="location" class="mr-1" />
          {{ location }}
        </div>
      </div>
      <div class="price">{{ price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    title: {
      type: String,
      default: null,
    },
    date: {
      type: String,
      default: null,
    },
    time: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      default: null,
    },
    price: {
      type: String,
      default: null,
    },
    img: {
      type: String,
      default: null,
    },
  },
}
</script>
