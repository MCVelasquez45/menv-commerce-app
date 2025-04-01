<template>
    <div class="products-page container-fluid p-0 m-0">
      <AppNavbar />
  
      <h1 class="text-center my-4">All Products</h1>
      <div class="main-layout">
        <!-- Product Grid -->
        <div class="product-grid">
          <ProductCard
            v-for="product in products"
            :key="product._id"
            :product="product"
            @add-to-cart="addToCart"
          />
        </div>
  
        <!-- Cart Section -->
        <div class="cart-section">
          <div class="card shadow">
            <h4 class="card-title">🛒 Shopping Cart</h4>
            <ul class="list-group mb-3">
              <li
                v-for="(item, index) in cart"
                :key="index"
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                {{ item.name }}
                <span>${{ item.price }}</span>
              </li>
            </ul>
            <h5>Total: ${{ total.toFixed(2) }}</h5>
          </div>
        </div>
      </div>
  
      <AppFooter />
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import ProductCard from '@/components/ProductCard.vue'
  import AppNavbar from '@/components/AppNavbar.vue'
  import AppFooter from '@/components/AppFooter.vue'
  
  export default {
    name: 'ProductsPage',
    components: {
      ProductCard,
      AppNavbar,
      AppFooter
    },
    data() {
      return {
        products: [],
        cart: []
      }
    },
    computed: {
      total() {
        return this.cart.reduce((sum, item) => sum + item.price * 1.08, 0)
      }
    },
    methods: {
      async fetchProducts() {
        const apiBase = process.env.VUE_APP_API || 'http://localhost:5000/api'
        console.log('🌐 Using API URL:', apiBase)
  
        try {
          const res = await axios.get(`${apiBase}/products`)
          this.products = res.data
        } catch (err) {
          console.error('❌ Error fetching products:', err)
        }
      },
      addToCart(product) {
        this.cart.push(product)
      }
    },
    mounted() {
      this.fetchProducts()
    }
  }
  </script>
  
  <style scoped>
  .products-page {
    background-color: #111;
    color: #fff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  /* Layout */
  .main-layout {
    display: flex;
    flex-wrap: nowrap;
    gap: 2rem;
    padding: 1rem;
  }
  
  /* Product Grid */
  .product-grid {
    flex: 3;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    overflow-y: auto;
    max-height: 85vh;
  }
  
  /* Cart */
  .cart-section {
    flex: 1;
    min-width: 280px;
    position: sticky;
    top: 1rem;
    height: fit-content;
  }
  
  .list-group-item {
    background-color: #1a1a1a;
    color: #fff;
    border: 1px solid #333;
  }
  </style>
  