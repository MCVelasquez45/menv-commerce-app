<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <section class="heading">
          <div class="title">
            <h1>Sell With Us</h1>
            <button class="btn btn-warning" @click="$emit('close')">X</button>
          </div>
          <p>Having trouble selling your sneaker?</p>
          <p>We can help you with that! Sell you sneaker here!</p>
        </section>

        <section class="form-section mx-auto my-3">
          <form class="create-form" @submit.prevent="onSubmit">
            <div class="form-item">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="product.name" required>
            </div>
            <div class="form-item">
              <label for="brand">Brand</label>
              <select name="brand" id="brand" v-model="product.brand" required>
                <option disabled value="">Please Select A Brand</option>
                <option v-for="(option, index) in brands" :key="index" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>
            <div class="form-item">
              <label for="price">Price</label>
              <input type="number" id="price" v-model="product.price" required>
            </div>
            <div class="form-item">
              <label for="description">Description</label>
              <textarea name="description" id="description" v-model="product.description"></textarea>
            </div>
            <div class="form-item">
              <label for="image">Image</label>
              <input type="text" id="image" v-model="product.image">
            </div>
            <button class="btn btn-primary my-3" type="submit">{{ verb }}</button>
          </form>
        </section>
      </div>
    </div>
  </Transition>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    show: Boolean,
    verb: {
      type: String,
      required: true
    },
    values: Object
  },
  created() {
    if (this.verb === 'Update') {
      this.product = this.values
    }
  },
  data() {
    return {
      brands: ["Nike", "Adidas", "Under Armour", "New Balance", "Timberland"],
      product: {
        name: "",
        brand: "",
        price: 0,
        description: "",
        image: "",
        seeded: false
      },
    }
  },
  methods: {
    async onSubmit() {
      if (this.verb === 'Create') {
        try {
          const res = await axios.post(`${process.env.VUE_APP_API}/products/create`, this.product)
          console.log(res)
        } catch (error) {
          console.error(error);
          return
        }
        this.$emit('close')
        this.$router.push('/products');
      } else if (this.verb === 'Update') {
        try {
          const res = await axios.put(`${process.env.VUE_APP_API}/products/update/${this.product._id}`, this.product)
          let cart = JSON.parse(localStorage.getItem('cart'));
          if (cart) {
            const itemToUpdate = cart.findIndex(item => item._id === this.product._id);
            cart.splice(itemToUpdate, 1, { ...this.product })
          }
          localStorage.setItem('cart', JSON.stringify(cart));
          console.log(res)
        } catch (error) {
          console.error(error)
        }
        this.$emit('close')
      }
      // clear the form inputs
      this.product = {
        name: "",
        brand: "",
        price: 0,
        description: "",
        image: "",
        seeded: false
      }
    }
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 400px;
  margin: auto;
  color: white;
  background: black;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 6px 5px 10px #514E49;
  transition: all 0.3s ease;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

h1 {
  font-size: 2.5rem;
}

p {
  font-size: 1.5rem;
}

.title {
  display: flex;
  justify-content: space-between;
}

.form-section {
  width: 100%;
}

.error-item {
  font-size: 14px;
  background: red;
  border-radius: 2px;
  text-align: center;
  width: 70%;
  margin-left: auto;
}

.form-item {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 5px 0;
}

@media only screen and (max-width: 500px) {
  .heading {
    width: 100%;
  }

  .form-section {
    width: 100%;
  }
}
</style>
