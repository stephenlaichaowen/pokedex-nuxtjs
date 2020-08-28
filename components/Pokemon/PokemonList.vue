<template>
  <ul class="card">
    <PokemonPreview
      v-for="(poke, index) in pokemon"
      :key="index"
      :index="index"
      :image="poke.image"
      :name="poke.name"
    />
    <div v-if="loading" class="loading">
      <img src="https://www.intogif.com/resource/image/loading/spin.gif" alt="">
    </div>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    }
  },
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
.loading {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;  
}
@media (max-width: 575px) {
  .loading {
    width: 100%;
  }
}
</style>