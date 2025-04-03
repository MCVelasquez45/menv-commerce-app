<template>
    <div class="checkout-form">
      <h2>Checkout</h2>
      <form @submit.prevent="handleSubmit">
        <input v-model="form.firstName" placeholder="First Name" required />
        <input v-model="form.lastName" placeholder="Last Name" required />
        <input v-model="form.email" type="email" placeholder="Email" required />
        <input v-model="form.creditCard" placeholder="Credit Card Number" required />
  
        <button type="submit">Submit Checkout</button>
      </form>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue'
import axios from 'axios'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  creditCard: ''
})

const cartItems = JSON.parse(localStorage.getItem('cart') || '[]')

const handleSubmit = async () => {
  const payload = { ...form.value, cartItems }

  const apiBase = process.env.VUE_APP_API || 'http://localhost:5000/api'

  try {
    await axios.post(`${apiBase}/checkout`, payload)
    alert('✅ Checkout completed successfully!')
    localStorage.removeItem('cart') // Clear cart
    location.reload()
  } catch (err) {
    alert('❌ Error submitting checkout: ' + err.message)
  }
}
</script>
  
  <style scoped>
  .checkout-form {
    max-width: 400px;
    margin: 20px auto 0;
    padding: 24px;
    border: 1px solid #444;
    border-radius: 12px;
    background-color: #222;
    color: #fff;
  }
  
  .checkout-form h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
  
  .checkout-form input {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #666;
    border-radius: 6px;
    background-color: #333;
    color: white;
  }
  
  .checkout-form button {
    width: 100%;
    padding: 12px;
    background-color: #1db954;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 15px;
  }
  
  .checkout-form button:hover {
    background-color: #159944;
  }
  </style>
  