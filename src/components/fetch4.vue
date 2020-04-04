<template>
  <div>
    <fb-mapa
      v-if="marcadores"
      :mapa="map"
      :markers="marcadores"
      class="mh-100 p-0 m-0"
      style="height: 100%; position: absolute !important;"
    />
  </div>
</template>

<script>
import FbMapa from "./shared/map.vue";
export default {
  mounted() {
    this.getPaises();
  },
  components: {
    FbMapa
  },
  data() {
    return {
      map: {
        ".key": "z",
        latitude: 0,
        longitude: 0,
        zoom: 2
      },
      marcadores: []
    };
  },
  methods: {
    async getPaises() {
      await fetch("https://corona.lmao.ninja/countries")
        .then(response => {
          response
            .json()
            .then(paises => {
              this.marcadores = paises;
            })
            .catch(error => {
              console.error("Error al convertir a json", error);
            });
        })
        .catch(error => {
          console.error("Error al extraer los datos", error);
        });
    }
  }
};
</script>

<style>
</style>