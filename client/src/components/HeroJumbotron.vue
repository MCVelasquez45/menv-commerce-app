<template>
  <section class="jumbotron d-flex align-items-center text-center text-white">
    <div class="container">
      <h1 class="display-3 fw-bold">Step into Style</h1>
      <p class="lead mb-4">Discover exclusive sneakers that elevate your game.</p>
      <button class="btn btn-lg btn-outline-light" @click="scrollToFeatured">
        Browse Featured Kicks
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroJumbotron', // ✅ Multi-word name
  methods: {
    scrollToFeatured() {
      const section = document.getElementById('featured-products');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.jumbotron {
  height: 90vh;
  background: linear-gradient(to bottom right, #000000, #1a1a1a);
  display: flex;
  justify-content: center;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
}
</style>

