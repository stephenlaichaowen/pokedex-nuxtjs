<template>
  <li>
    <nuxt-link :to="`/pokemon/${index + 1}`">
      <img :src="image" alt="pokemon image" />
      <p>{{ index + 1 }}. {{ name }}</p>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.nav-item a:hover {
  cursor: pointer;
}
li {
  margin: 1rem;
}
p {
  text-align: center;
}
</style>