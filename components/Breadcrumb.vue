<template>
  <div class="breadcrumb col-12">
    <nuxt-link v-for="(item, i) in data" :key="i" :to="item.link">
      {{ item.title }}
      <span v-if="i < data.length - 1"> > </span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    data: {
      type: Array,
      default() {},
    },
  },
}
</script>
