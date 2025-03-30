<template>
  <div class="landing-page">
    <header class="main-header">
      <h1 class="logo">MENV Commerce</h1>
      <nav class="main-nav">
        <ul>
          <li><a href="#featured">Featured</a></li>
          <li><a href="#deals">Deals</a></li>
          <li><a href="#community">Community</a></li>
        </ul>
      </nav>
    </header>

    <section class="hero">
      <div class="hero-content">
        <h2 class="hero-title">Sneaker Heads </h2>
        <p class="hero-subtitle">Discover exclusive sneakers that elevate your game.</p>
        <button class="cta-button" @click="scrollTo('featured')">Shop Featured</button>
      </div>
    </section>

    <section id="featured" class="featured-section">
      <h2 class="section-title">Featured Products</h2>
      <div class="product-grid">
        <div v-for="product in featuredProducts" :key="product.name" class="product-card">
          <div class="image-wrapper">
           <img :src="require(`@/assets/${product.image}`)" :alt="product.name" />
          </div>
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">${{ product.price }}</p>
        </div>
      </div>
    </section>

    <!-- Sneaker Deals Section -->
    <section id="deals" class="deals-section container">
      <h2 class="section-title text-center">Latest Sneaker Deals</h2>
      <p class="text-center">Find and share the best places to buy your favorite sneakers.</p>
      <div class="alert alert-success text-center">
        New Deal: 20% off Air Jordans at Footlocker! <a href="#">Check it out</a>
      </div>
    </section>

    <section id="community" class="community-section">
      <div class="community-box">
        <h2 class="section-title">Community Comments</h2>
        <textarea placeholder="Leave a review..."></textarea>
        <button>Post</button>
      </div>
    </section>

    <footer class="main-footer">
      <p>&copy; 2025 MENV Commerce. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      featuredProducts: [
        {
          name: 'Jordan 1 Yellow',
          price: 150,
          image: 'jordan1-yellow.jpg'
        },
        {
          name: 'Jordan 4 Black',
          price: 180,
          image: 'jordan4-Black.jpg'
        },
        {
          name: 'Nike Air Max',
          price: 130,
          image: 'nike-shoes.jpg'
        }
      ]
    }
  },
  methods: {
    scrollTo(id) {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.landing-page {
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #121212;
  color: white;
  line-height: 1.6;
}

.logo {
  font-size: 1.75rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.main-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #333;
}

.main-header ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.main-header a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.main-header a:hover {
  color: #ffcc00;
}

.hero {
  background: url('../assets/airJordanBg.jpeg') no-repeat center center/cover;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-content {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 3rem;
  border-radius: 8px;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: #ccc;
}

.cta-button {
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: #ffffff;
  color: #121212;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.cta-button:hover {
  background-color: #ffcc00;
  transform: translateY(-2px);
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  letter-spacing: 1px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.product-card {
  background-color: #1e1e1e;
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.image-wrapper img {
  height: 100%;
  object-fit: contain;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
}

.product-name {
  font-size: 1.2rem;
  font-weight: 600;
}

.product-price {
  color: #ffcc00;
  font-weight: bold;
}

.alert {
  background-color: rgba(40, 167, 70, 0.55);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 1rem;
  border: none;
}

.alert a {
  color: #fff;
  text-decoration: underline;
  margin-left: 0.5rem;
}

.community-box {
  padding: 2rem;
  border-radius: 8px;
  width: 80%;
  margin: 0 auto;
}

.community-section textarea {
  width: 100%;
  height: 100px;
  margin-top: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  resize: none;
}

.community-section button {
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  background-color: white;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.main-footer {
  background-color: #000;
  padding: 2rem;
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px solid #333;
}
</style>
