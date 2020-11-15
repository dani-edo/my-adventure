<template>
  <div>
    <div :class="['hero-image', { scrolled: scrolled }]">
      <img src="/img/bali.jpg" alt="bali" />
      <div class="caption">
        <h1>My Adventure</h1>
        <p>Make your dream come true</p>
      </div>
    </div>
    <div class="content">hello</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
