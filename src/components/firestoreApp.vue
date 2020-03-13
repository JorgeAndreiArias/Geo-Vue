<template>
  <div class="container">
    <div class="container-fluid">
      <div class="column">
        <h1>Lista de productos</h1>
      </div>
      <div class="column">
        <form v-on:submit.prevent="addProduct">
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Nombre</label>
            <div class="col-sm-10">
              <input type="text" v-model="nameOfProduct" class="form-control" placeholder="Nombre" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Código</label>
            <div class="col-sm-10">
              <input type="text" v-model="codeOfProduct" class="form-control" placeholder="Código" />
            </div>
          </div>
          <button
            v-on:mouseover="mouseover()"
            v-on:mouseleave="mouseleave()"
            class="btn btn-primary  btn-lg"
            type="submit"
          >Agregar</button>
        </form><br>
      </div>
      <div class>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th>Folio</th>
              <th>Nombre</th>
              <th>Codigo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(p, index) in products" :key="index">
              <td>{{ index }}</td>
              <td>{{ p.nombre }}</td>
              <td>{{ p.codigo }}</td>
              <th>
                <input
                  type="button"
                  v-on:click="deleteProduct(p)"
                  class="btn btn-danger  btn-block"
                  value="Eliminar"
                />
                <input
                  type="button"
                  v-on:click="editProduct(p)"
                  class="btn btn-success  btn-block"
                  value="Editar"
                />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <fb-product-form
      :product="product"
      v-if="showModal"
      @updating="updateProduct(product)"
      @close="showModal = false"
    ></fb-product-form>
  </div>
</template>

<script>
import { db } from "../services/firebase.js";
import FbProductForm from "./shared/productForm.vue";

export default {
  components: {
    FbProductForm
  },
  data() {
    return {
      products: [],
      nameOfProduct: "",
      codeOfProduct: "",
      mouse: false,
      product: {},
      showModal: false
    };
  },
  firestore() {
    return {
      products: db.collection("productos")
    };
  },
  methods: {
    addProduct() {
      if (this.mouse) {
        this.$firestore.products.add({
          nombre: this.nameOfProduct,
          codigo: this.codeOfProduct
        });
        this.nameOfProduct = "";
        this.codeOfProduct = "";
      } else {
        console.log("Click de manera programada");
      }
    },
    deleteProduct(product) {
      this.$firestore.products.doc(product[".key"]).delete();
    },
    editProduct(product) {
      this.product = product;
      this.showModal = true;
    },
    updateProduct(updatedProduct) {
      this.$firestore.products.doc(updatedProduct[".key"]).set(updatedProduct);
    },
    mouseover() {
      this.mouse = true;
    },
    mouseleave() {
      this.mouse = false;
    }
  }
};
</script>

<style>
</style>