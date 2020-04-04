<template>
  <div>
    <fb-mapa
      :mapa="map"
      :markers="marcadores"
      :actividad="actividad"
      style="height: 100%; position: absolute !important;"
    />
  </div>
</template>

<script>
import FbMapa from "./shared/map.vue";

export default {
  components: {
    FbMapa
  },
  data() {
    return {
      actividad: "fetch3",
      map: {
        ".key": "z",
        latitude: 0,
        longitude: 0,
        zoom: 2
      },
      marcadores: [
        {
          country: "México",
          countryInfo: {
            long: "-99.1276",
            lat: "19.427"
          }
        },
        {
          country: "Brazil",
          countryInfo: {
            long: "-47.9292",
            lat: "-15.7801"
          }
        },
        {
          country: "Spain",
          countryInfo: {
            long: "-3.70327",
            lat: "40.4167"
          }
        }
      ]
    };
  }
};
</script>

<style>
</style>

