<template>
  <div id="app">
      <div v-show="page == 1" class="container-fluid">
        <div id="titulo">
          <p id="header">Curso de Sistemas Georeferenciados</p>
          <p id="subheader">Jorge Andrei Arias Montoya</p>	
        </div>
        <div class="container">
          <!-- Inicio de Menu -->
          <div v-on:click="changePage(2)" class="contenedor" id="uno">
            <img class="icon" :src="urlImage">
            <p class="texto">Google Maps</p>
          </div>

          <div v-on:click="changePage(3)" class="contenedor" id="dos">
            <img class="icon" :src="urlImage">
            <p class="texto">Navigator Props</p>
          </div>

          <div v-on:click="changePage(4)" class="contenedor" id="tres">
            <img class="icon" :src="urlImage">
            <p class="texto">Get Current Location</p>
          </div>

          <div class="contenedor" id="cuatro">
            <img class="icon" :src="urlImage">
            <p class="texto">Actividad 4</p>
          </div>

          <div class="contenedor" id="cinco">
            <img class="icon" :src="urlImage">
            <p class="texto">Actividad 5</p>
          </div>
          <!-- Fin de Menu -->
        </div>
      </div>
      <div class="container">
        <mapa1 v-show="page == 2"/>
        <mapa2 v-show="page == 3"/>
        <mapa3 v-show="page == 4"/> 
        <br>
        <input class="btn btn-dark" type="button" v-if="page != 1" value="Regresar a menú" v-on:click="changePage(1)">
      </div>
        
  </div>
  
</template>

<script>

import mapa1 from './components/mapa1.vue'
import mapa2 from './components/mapa2.vue'
import mapa3 from './components/mapa3.vue'
import image from "./assets/icon.png"

export default {
  name: 'App',
  components: {
    mapa1, mapa2, mapa3
  }, 
  data(){
    return{
      page: 1,
      urlImage: image
    }
  },
  methods: {
    changePage(pag){
      this.page = pag;
    }
  }
}
</script>

<style scoped>

@import url('./css/menu_style.css');
</style>
