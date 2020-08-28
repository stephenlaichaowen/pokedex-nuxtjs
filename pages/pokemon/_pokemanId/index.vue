<template>
  <div class="container">
    <h1 class="text-4xl mb-2 text-center capitalize">{{ pokeman.name }}</h1>
    <img class="mx-auto" :src="pokeman.image" alt="pokeman image" />
    <p>
      <span class="font-bold mr-2">Weight:</span>
      {{ pokeman.weight }}
    </p>
    <p>
      <span class="font-bold mr-2">Height:</span>
      {{ pokeman.height }}
    </p>
    <h2 class="text-2xl mt-6 mb-2">Types</h2>
    <p v-for="(type, index) in pokemanType" :key="index">{{ pokemanType[index] }}</p>
    <p class="mt-10 text-center">
      <nuxt-link to="/" class="text-2xl underline">Home</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const pokeman = await $axios.$get(
      `https://pokeapi.co/api/v2/pokemon/${params.pokemanId}`
    )
    const paddedIndex = ('00' + params.pokemanId).slice(-3)
    const image = `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
    pokeman.image = image
    pokeman.types.map((type, index) => {
      type.type.name
      console.log(type.type.name)
    })
    let pokemanType = []
    pokeman.types.map((type, index) => {
      pokemanType.push(type.type.name)
    })
    return { pokeman, pokemanType }
  }
}
</script>

<style scoped>
@media (max-width: 575px) {
  .container {
    padding: 0 2rem;
  }
}
</style>