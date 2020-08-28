<template>
  <div class="bg-gray-300">
    <nuxt />
  </div>
</template>

<style>
:root {
  --bg-color: rgb(235, 232, 226);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background: var(--bg-color);
}

body {
  height: 100vh;
  max-width: 1440px;
  margin: auto;
  padding-top: 2rem;
  background: var(--bg-color);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
