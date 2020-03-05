<template>
  <div class="container-fluid">
      <div class="container">
        <div class="column">
          <h1>Lista de productos</h1>
        </div>
        <div class="column">
          <form  v-on:submit.prevent="addProduct">
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Nombre</label>
              <div class="col-sm-10">
                <input type="text" v-model="nameOfProduct" class="form-control" placeholder="Nombre">
              </div>
            </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Código</label>
            <div class="col-sm-10">
              <input type="text" v-model="codeOfProduct" class="form-control" placeholder="Código">
            </div>
          </div>
          <button v-on:mouseover="mouseover()" v-on:mouseleave="mouseleave()" class="btn btn-primary" type="submit">Agregar</button>
        </form>
      </div>
      <div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Código</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products" :key="index">
              <th>{{ index }}</th>
              <td>{{ product.nombre }}</td>
              <td> {{ product.codigo}} </td>
              <td>
                <button @click="deleteProduct(product)">
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table> 
      </div>
    </div>
  </div>
</template>

<script>import { db } from '../services/firebase.js'
export default {
  data(){
    return{
      products: [],
      nameOfProduct: '',
      codeOfProduct: '',
      mouse: false
    }
  },
  firestore(){
    return{
      products: db.collection('productos'),
    }
  },
  methods: {
    addProduct(){
          if(this.mouse){
            this.$firestore.products.add({
              nombre: this.nameOfProduct,
              codigo: this.codeOfProduct
            });
            this.nameOfProduct = '';
            this.codeOfProduct = '';
          }else{
            console.log('Click de manera programada');
          }
    },
    deleteProduct(product){
      this.$firestore.products.doc(product['.key']).delete();
    },
    mouseover(){
      console.log(this.mouse);
      this.mouse = true;
    },
    mouseleave(){
      console.log(this.mouse);
      this.mouse = false;
    }
  }

}
</script>

<style>

</style>