<template>
  <div class="landing-page container-fluid p-0 m-0">
    <Navbar />

    <!-- Hero Section -->
    <section class="hero d-flex justify-content-center align-items-center text-center">
      <div class="hero-content">
        <h2 class="hero-title mb-3">Sneaker Heads</h2>
        <p class="hero-subtitle mb-4">Discover exclusive sneakers that elevate your game.</p>
        <router-link to="/products" class="btn btn-warning btn-lg">
          Shop All Products
        </router-link>
      </div>
    </section>

    <!-- Featured Section -->
    <section id="featured" class="featured-section py-5">
      <h2 class="section-title text-center mb-5">Featured Products</h2>
      <div class="main-layout">
        <div class="product-grid">
          <div
            v-for="product in featuredProducts"
            :key="product.id"
            class="card h-100 product-card"
          >
            <img :src="require(`@/assets/${product.image}`)" class="card-img-top" :alt="product.name" />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="fw-bold">${{ product.price }}</p>
              <button class="btn w-100">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sneaker Deals -->
    <section id="deals" class="deals-section container text-center py-5">
      <h2 class="section-title mb-3">Latest Sneaker Deals</h2>
      <p>Find and share the best places to buy your favorite sneakers.</p>
      <div class="alert alert-success mt-4">
        New Deal: 20% off Air Jordans at Footlocker! <a href="#" class="alert-link">Check it out</a>
      </div>
    </section>

    <!-- Community -->
    <section id="community" class="community-section container py-5">
      <h2 class="section-title text-center mb-4">Community Comments</h2>
      <div class="form-group">
        <textarea class="form-control mb-3" rows="4" placeholder="Leave a review..."></textarea>
        <button class="btn btn-outline-light">Post</button>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/AppNavbar.vue'
import Footer from '@/components/AppFooter.vue'

export default {
  name: 'LandingPage',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      featuredProducts: [
        {
          id: 1,
          name: 'Jordan 1 Yellow',
          price: 150,
          image: 'jordan1-yellow.jpg',
          description: 'Bold color-blocking with high-top silhouette.'
        },
        {
          id: 2,
          name: 'Jordan 4 Black',
          price: 180,
          image: 'jordan4-Black.jpg',
          description: 'Timeless black and red classic.'
        },
        {
          id: 3,
          name: 'Nike Air Max',
          price: 130,
          image: 'nike-shoes.jpg',
          description: 'Pastel colorway perfect for spring.'
        }
      ]
    };
  },
  methods: {
    scrollTo(id) {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>


<style scoped>
/* Base Reset */
*,
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Global Layout Fix */
.landing-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #111;
  color: #fff;
  line-height: 1.6;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

/* Page Heading */
h1 {
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
}

/* Layout: Products + Cart Side by Side */
.main-layout {
  display: flex;
  justify-content: center;
}

/* Product Grid Styling */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 5.5rem;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* Product Card Styling */
.product-card {
  width: 100%;
  max-width: 300px;
  ;
  background-color: #1a1a1a;
  color: #fff;
  border: none;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
}
.product-card:hover {
  transform: scale(1.02);
}
.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.product-card .card-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem;
}
.product-card h5 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}
.product-card p {
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}
.product-card button {
  background-color: #f8f9fa;
  color: #111;
  border: none;
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 0.9rem;
}
.product-card button:hover {
  background-color: #ccc;
}

/* Hero Section */
.hero {
  height: 75vh;
  background-image: url("../assets/jordan-kicks.jpg");
  background-size: cover;
  background-position: center;
}
.hero-content {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 0.5rem;
}

/* Header */
.main-header {
  background-color: #000;
}
.logo {
  font-size: 1.75rem;
  font-weight: bold;
  letter-spacing: 1px;
}

/* Form & Footer */
textarea.form-control {
  background-color: #1e1e1e;
  color: #fff;
  border: 1px solid #aba5a5;
}
.main-footer {
  font-size: 0.9rem;
  width: 100vw;
}
</style>
