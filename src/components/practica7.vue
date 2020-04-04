<template>
  <div>
    <fb-mapa
      v-if="marcadores"
      :mapa="map"
      :markers="marcadores"
      :actividad="actividad"
      class="mh-100 p-0 m-0"
      style="height: 100%; position: absolute !important;"
    />
  </div>
</template>

<script>
import FbMapa from "./shared/map.vue";
import markers from "../data/markersPractica7.json";

export default {
  components: {
    FbMapa
  },
  data() {
    return {
      actividad: "Actividad7",
      map: {
        ".key": "q",
        latitude: 31.56391,
        longitude: 47.154312,
        zoom: 3
      },
      marcadores: markers
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>
</style>