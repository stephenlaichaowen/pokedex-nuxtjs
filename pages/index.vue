<template>
  <div>
    <h1 class="text-4xl mb-8 text-center">NextJS Pokedex</h1>
    <PokemonList :pokemon="pokemon" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Pokedex'
    }
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get('/pokemon?limit=150')
    let pokemon = []
    data.results.map((item, index) => {
      const paddedIndex = ('00' + (index + 1)).slice(-3)
      const image = `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
      const poke = {
        ...item,
        image
      }
      pokemon.push(poke)
    })
    return { pokemon }
  }
}
</script>