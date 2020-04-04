<template>
  <div>
    <div class="container-fluid">
      <div id="titulo">
        <p id="header">Curso de Sistemas Georeferenciados</p>
        <p id="subheader">Jorge Andrei Arias Montoya</p>
      </div>
      <div class="container">
        <!-- Inicio de Menu -->
        <div v-on:click="changePage('googleMaps')" class="contenedor" id="uno">
          <img class="icon" :src="urlImage" />
          <p class="texto">Google Maps</p>
        </div>

        <div v-on:click="changePage('navigatorProps')" class="contenedor" id="dos">
          <img class="icon" :src="urlImage" />
          <p class="texto">Navigator Props</p>
        </div>

        <div v-on:click="changePage('getCurrentLocation')" class="contenedor" id="tres">
          <img class="icon" :src="urlImage" />
          <p class="texto">Get Current Location</p>
        </div>

        <div v-on:click="changePage('mapsOnImage')" class="contenedor" id="cuatro">
          <img class="icon" :src="urlImage" />
          <p class="texto">Set Maps on Image</p>
        </div>

        <div v-on:click="changePage('infoOnMaps')" class="contenedor" id="cinco">
          <img class="icon" :src="urlImage" />
          <p class="texto">Information on Maps</p>
        </div>

        <div v-on:click="changePage('cloudFirestore')" class="contenedor" id="dos">
          <img class="cloud" :src="cloudImg" />
          <p class="texto">Cloud Firestore</p>
        </div>

        <div v-on:click="changePage('listSpy')" class="contenedor" id="cinco">
          <img class="icon" :src="urlImage" />
          <p class="texto">List Spy</p>
        </div>

        <div v-on:click="changePage('spy')" class="contenedor" id="cinco">
          <img class="icon" :src="urlImage" />
          <p class="texto">Spy </p>
        </div>

        <div v-on:click="changePage('fetch')" class="contenedor" id="tres">
          <img class="icon" :src="urlImage" />
          <p class="texto">Fetch</p>
        </div>

        <div v-on:click="changePage('fetch2')" class="contenedor" id="cuatro">
          <img class="icon" :src="urlImage" />
          <p class="texto">Fetch 2</p>
        </div>

        <div v-on:click="changePage('fetch3')" class="contenedor" id="dos">
          <img class="icon" :src="urlImage" />
          <p class="texto">Fetch 3</p>
        </div>

        <div v-on:click="changePage('fetch4')" class="contenedor" id="cinco">
          <img class="icon" :src="urlImage" />
          <p class="texto">Fetch 4</p>
        </div>
        <div v-on:click="changePage('practica7')" class="contenedor" id="cinco">
          <img class="icon" :src="urlImage" />
          <p class="texto">Practica 7</p>
        </div>
        <div v-on:click="changePage('practica8')" class="contenedor" id="cinco">
          <img class="icon" :src="urlImage" />
          <p class="texto">Practica 8</p>
        </div>
        <!-- Fin de Menu -->
      </div>
    </div>
  </div>
</template>

<script>
import image from "../assets/icon.png"
import cloudimg from "../assets/fireimg.png"

export default {
  data() {
    return {
      page: 1,
      urlImage: image,
      cloudImg: cloudimg
    };
  },
  methods: {
    changePage(pag) {
      this.$router.push(pag);
    }
  }
};
</script>

<style scoped>
@import url("../css/menu_style.css");
</style>
