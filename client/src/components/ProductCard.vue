<template>
  <div class="card h-100 product-card">
    <img :src="`/assets/${product.image}`" class="card-img-top" :alt="product.name" />

    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}</p>
      </div>
      <div class="mt-3">
        <p class="fw-bold mb-2">${{ product.price }}</p>
        <button class="btn btn-light w-100" @click="$emit('add-to-cart', product)">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.product-card {
  background-color: #1a1a1a;
  color: #fff;
  border: none;
  border-radius: 12px;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: scale(1.02);
}

.product-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.card-body {
  padding: 0.75rem;
}

.card-title {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.card-text {
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

button.btn {
  font-size: 0.9rem;
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  transition: backgroucdnd 0.2s;
  color: #111;
  background-color: #f8f9fa;
}

button.btn:hover {
  background-color: #ccc;
}
</style>
