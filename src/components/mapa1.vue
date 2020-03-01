<template>
  <div class="container-fluid">
      <div class="container bg-white rounded shadow-lg">
        <div class="row m-5">
          <div class="col-12 p-5">
            <h1 class="text-center">Google Maps con Bootstrap</h1>
            <div id="map"></div>
          </div>
        </div>
      </div>
    </div>
  <!--  -->
</template>

<script>

import mapsService from '../services/mapsService';

export default {
    mounted: function () {
      mapsService.load().then(function (google) {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: 21.152639, lng: -101.711598 },
          zoom: 15,
        });
        map.data;
      });
    }
}
</script>

<style scoped>
  body {
          background-color: #efefef;
        }
  
        #map {
          width: 100%;
          height: 500px;
        }
</style>