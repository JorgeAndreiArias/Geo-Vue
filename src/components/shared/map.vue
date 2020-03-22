<template>
  <div :id="getId" style=" width: 100%;
  "></div>
</template>

<script>
import mapsService from "../../services/mapsService";

export default {
  props: {
    mapa: {
      type: Object,
      required: true
    }
  },
  mounted: async function() {
    let maps = this.mapa;
    mapsService.load().then(function(google) {
      console.log(maps[".key"]);
      let map = new google.maps.Map(document.getElementById(maps[".key"]), {
        center: { lat: parseFloat(maps.latitude), lng: parseFloat(maps.longitude) },
        zoom: 15
      });
      map.data;
    });
  },
  computed: {
    getId(){
      return this.mapa[".key"];
    }
  }
};
</script>

<style scoped>
body {
  background-color: #efefef;
}

#map {
  width: 100%;
  height: 25rem;
}
</style>