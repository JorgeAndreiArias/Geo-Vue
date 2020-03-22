<template>
  <div class="container-fluid">
    <div class="container bg-white rounded shadow-lg">
      <div class="row m-5">
        <div class="col-12 p-5">
          <h1 class="text-center">Google Maps con Bootstrap</h1>
          <fb-mapa :mapa="map" style="height: 30rem;"/>
        </div>
      </div>
    </div>
  </div>
  <!--  -->
</template>

<script>
import FbMapa from "./shared/map.vue";

export default {
  components: {
    FbMapa
  },
  data() {
    return {
      map: {
        '.key': 1,
        latitude: 21.152639,
        longitude: -101.711598
      }
    };
  }
};
</script>

<style scoped>
</style>