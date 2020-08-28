<template>
  <div class="comment">
    <h4>{{ name }}</h4>
    <p>{{ body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    // postId: {
    //   type: Number,
    //   required: true
    // },
    // id: {
    //   type: Number,
    //   required: true
    // },
    name: {
      type: String,
      required: true
    },
    // email: {
    //   type: String,
    //   required: true
    // },
    body: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.comment {
  padding: 2rem;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin: 1rem;
}
</style>