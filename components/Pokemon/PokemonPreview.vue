<template>
  <!-- <li>
    <nuxt-link
      :to="`/pokemon/${index + 1}`"
      class="border p-4 border-gray my-2 capitalize flex items-center text-lg bg-gray-200 rounded-md"
    >
      <img loading="lazy" :src="image" alt="pokemon image" class="w-20 h-20 mr-3" />
      <span class="mr-2 font-bold">{{ index + 1 }}.</span>
      {{ name }}
    </nuxt-link>
  </li> -->

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