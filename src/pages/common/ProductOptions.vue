<template>
  <div class="dash-date-con-area">
    <div class="dash-select-product-area-inner">
      <select
        class="select-product"
        v-model="selectedProduct"
        @change="getSelectedProduct(selectedProduct)"
      >
        <option value="All">All Products</option>
        <option
          v-for="product in products"
          v-bind:key="product.sku"
          v-bind:value="product.sku"
        >
          {{ product.title }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
// import VueElementLoading from 'vue-element-loading'

export default defineComponent({
  name: 'ProductOptions',
  props: {
    getSelectedProduct: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      products: [],
      selectedProduct: null,
      isActive: false,
    }
  },
  methods: {
    getProducts() {
      axios.get(`common/all_products`).then((response) => {
        const result = response.data.all_products
        this.products = result
      })
    },
  },
  mounted() {
    this.getProducts()
  },
  watch: {
    //this.getProducts();
  },
})
</script>
<style scoped></style>
