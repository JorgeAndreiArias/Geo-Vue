<template>
  <div>
     <div id="map"></div>
  </div>
</template>

<script>
import mapsService from '../services/mapsService';
import imagen from '../assets/logo.png'

export default {
    mounted: function () {
      mapsService.load().then(function (google) {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: 21.152639, lng: -101.711598 },
          zoom: 15,
        });
        var informacion = new google.maps.InfoWindow;
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function(position){
                    var pos = { 
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    informacion.setPosition(pos);
                    informacion.setContent("Papasconqueso, RUN <br> <img src='" + this.urlImagen + "'>");
                    informacion.open(map);
                    map.setCenter(pos);
                });
            }
      });
    },
    data(){
        return{
            urlImagen:  imagen
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
 #map{
    height: 600px;
    width: 100%;
    background-color: #efefef;
    }
</style>