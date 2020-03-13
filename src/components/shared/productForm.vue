<template>
  <transition name="modal" class="container-fluid">
    <div class="modal d-block">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Modificación de Producto</h4>
          </div>
          <div class="modal-body">
            <!--  -->
            <form v-on:submit.prevent="addProduct">
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Nombre</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    v-model="nombre"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Código</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    v-model="codigo"
                    
                  />
                </div>
              </div>
            </form>
            <!--  -->
          </div>
          <div class="modal-footer">
              <button class="btn btn-danger  btn-block" @click="$emit('close')">Cancelar</button> 
            <button class="btn btn-primary  btn-block" @click="editProduct()">Modificar</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  created(){
      this.nombre = this.product.nombre;
      this.codigo = this.product.codigo;
  },
  data(){
      return{
          nombre: '',
          codigo: '',
      }
  },
  methods:{
      editProduct(){
          this.product.nombre = this.nombre;
          this.product.codigo = this.codigo;
          console.error(this.product);
          this.$emit('updating', this.product);
          this.$emit('close')
      }
  }
};
</script>

<style>
</style>