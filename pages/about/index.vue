<template>
  <article class="container">
    <section>
      <img :src="`https://picsum.photos/298/300?image=${index}`" alt="image" />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque nesciunt perferendis reprehenderit. Magni maiores tempora laudantium dolorum obcaecati, explicabo fugiat, in laboriosam tenetur repellendus quo!</p>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      maxPerPage: 1,
      totalResults: 100,
      showloader: true
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.totalResults / this.maxPerPage)
    },
    pageOffset() {
      return this.maxPerPage * this.currentPage
    }
  },
  methods: {
    scrollTrigger() {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0 && this.currentPage < this.pageCount) {
            this.showloader = true
            setTimeout(() => {
              this.currentPage += 1
              this.showloader = false
            }, 500)
          }
        })
      })
      observer.observe(this.$refs.infinitescrolltrigger)
    }
  },
  mounted() {
    this.scrollTrigger()
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #aaa;
  min-height: 100vh;
}

article {
  border-radius: 10px;
}

section {
  width: 300px;
  border: 1px solid;
  margin-bottom: 1rem;
  border-radius: 10px;
}

img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

p {
  padding: 1rem;
}

/* footer {
  position: relative;
  width: 400px;
  height: ;
}

#scroll-trigger {
  height: 50px;
}

.circle-loader {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.2);
  border-top: 5px solid #fff;
  animation: animate 1.5s infinite linear;
}

@keyframes animate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
} */
</style>