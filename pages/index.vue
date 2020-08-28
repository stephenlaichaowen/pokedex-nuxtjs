<template>
  <div>
    <h1 class="text-4xl mb-8 text-center">NuxtJS Pokedex</h1>
    <PokemonList :pokemon="pokemon" /> 
    <div v-if="loading" class="loading">
      <img src="https://www.intogif.com/resource/image/loading/spin.gif" alt="">
    </div>
    <Observer @intersect="intersected" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Demo App'
    }
  },
  data() {
    return {
      items: [],
      pokemon: [],
      page: 1,
      loading: true
      // offset: 0,
      // limit: 20
    }
  },
  methods: {
    // async intersected() {
    //   const data = await this.$axios.$get(`/comments?_page=${this.page++}`)
    //   const items = data
    //   this.items = [...this.items, ...items]
    // },

    async intersected() {
      // const data = await this.$axios.$get(`/pokemon?offset=${this.offset+=this.limit}&limit=${this.limit}`)
      const data = await this.$axios.$get(`/pokemon?page=${this.page++}`)
      data.results.map((item, index) => {
        const paddedIndex = ('00' + (index + 1)).slice(-3)
        const image = `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
        const poke = {
          ...item,
          image
        }
        this.pokemon.push(poke)
        this.loading = false
        console.log(this.pokemon);
      })
    }
  },

  // async asyncData({ $axios }) {
  //   const data = await $axios.$get('/pokemon?limit=150')
  //   let pokemon = []
  //   data.results.map((item, index) => {
  //     const paddedIndex = ('00' + (index + 1)).slice(-3)
  //     const image = `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
  //     const poke = {
  //       ...item,
  //       image
  //     }
  //     pokemon.push(poke)
  //   })
  //   return { pokemon }
  // }
}
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
