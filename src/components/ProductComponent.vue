<script>
import axios from "axios";

export default {
  name: "ProductComponent",
  data(){
    return {
      product: null,
    }
  },
  mounted() {
    this.getProduct();
  },
  props: ['id', 'page'],
  methods:{
    async getProduct(){
      console.log('ok')
      axios
      //.get('https://www.perenual.com/api/species-list?page=1&key=sk-kVLs63fdcfb31bac7138')
      .then(
        (response) => {
          this.product = response.data;
        }
      )
      console.log(this.product);
    }
  }
}
</script>

<template>
Product Page
  <div v-if="product != null">
    {{ product }}
  </div>
</template>


<style>
  .bloc{
    display: block;
  }
</style>