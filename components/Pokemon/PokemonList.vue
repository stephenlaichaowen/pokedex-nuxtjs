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
