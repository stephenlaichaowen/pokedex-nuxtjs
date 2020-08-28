<template>
  <ul class="card">
    <PokemonPreview
      v-for="(poke, index) in pokemon"
      :key="index"
      :index="index"
      :image="poke.image"
      :name="poke.name"
    />
  </ul>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  padding: 1rem;
}
</style>