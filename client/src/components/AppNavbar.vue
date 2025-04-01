<template>
    <header class="main-header d-flex justify-content-between align-items-center px-4 py-3 shadow-sm">
      <router-link to="/" class="logo text-white text-decoration-none">
        MENV Commerce
      </router-link>
      <nav class="main-nav">
        <ul class="nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-white">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link text-white">Products</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppNavbar'
  }
  </script>
  
  <style scoped>
  .main-header {
    background-color: #000;
  }
  .logo {
    font-size: 1.75rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
  </style>
  