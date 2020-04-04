<template>
  <div class="container">
    <div class="row p-3">
      <div class="col-6 text-center">
        <h1>Google Maps Idiomas</h1>
      </div>
      <div class="col-6 text-center">
        <select name="idioma" v-model="lang" class="form-control" @change="initMap(lang)">
          Opciones
          <option value="es">Español</option>
          <option value="en">Ingles</option>
          <option value="it">Italiano</option>
          <option value="zh">Chino</option>
          <option value="ja">Japones</option>
        </select>
      </div>
    </div>
    <div id="qp" class="row mx-auto" style="width: 100%;
        height: 640px;"></div>
  </div>
</template>

<script>
import { Loader } from "google-maps";
import configService from '../services/config'

export default {
  mounted(){
    this.initMap(this.lang)
  },
  data() {
    return {
      lang: "es",
      map: {}
    };
  },
  methods: {
    initMap(langs) {
      let loaderMapService = new Loader(configService.token, {
        language: langs
      });
      loaderMapService.load().then(google => {
        this.map = new google.maps.Map(
          document.getElementById("qp"),
          {
            center: {
              lat: 0,
              lng: 0
            },
            zoom: 2
          }
        );
      });
    }
  }
};
</script>

<style scoped>
</style>

