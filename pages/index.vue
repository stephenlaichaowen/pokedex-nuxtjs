<template>
  <div>
    <h1 class="text-4xl mb-8 text-center">NextJS Pokedex</h1>
    <PokemonList :pokemon="pokemon" />

    <!-- <Comment 
      v-for="item in items" 
      :key="item.id" 
      :name="item.name"
      :body="item.body"
    />-->

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
      offset: 0,
      limit: 20
    }
  },
  methods: {
    // async intersected() {
    //   const data = await this.$axios.$get(`/comments?_page=${this.page++}`)
    //   const items = data
    //   this.items = [...this.items, ...items]
    // },

    async intersected() {
      const data = await this.$axios.$get(`/pokemon?offset=${this.offset+=this.limit}&limit=${this.limit}`)
      this.showloader = false
      data.results.map((item, index) => {
        const paddedIndex = ('00' + (index + 1)).slice(-3)
        const image = `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
        const poke = {
          ...item,
          image
        }
        this.pokemon.push(poke)
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
