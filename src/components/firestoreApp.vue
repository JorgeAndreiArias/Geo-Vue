<template>
  <div>
     <h1>Lista de productos</h1>

    <form v-on:submit.prevent="addProduct" id="formulario">
        <input v-model="nameOfProduct" type="text" name="nombre" id="nombre" placeholder="Nombre">
        <input v-model="codeOfProduct" type="text" name="codigo" id="codigo" placeholder="Código">
        <button type="submit">Agregar</button>
    </form>
    <ul>
      <li v-for="(product, index) in products" :key="index" >
        {{ product.nombre }} - {{ product.codigo}}
        <!-- <button @click="deleteReptile(reptile)">
          Remove
        </button> -->
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from '../services/firebase.js'
export default {
  data(){
    return{
      products: [],
      nameOfProduct: '',
      codeOfProduct: '',
    }
  },
  firestore(){
    return{
      products: db.collection('productos'),
    }
  },
  methods: {
    addProduct(){
      this.$firestore.products.add({
        nombre: this.nameOfProduct,
        codigo: this.codeOfProduct
      });
      this.nameOfProduct = '';
      this.codeOfProduct = '';
    },
  }

}
</script>

<style>

</style>