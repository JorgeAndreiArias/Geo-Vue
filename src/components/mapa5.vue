<template>
  <div>
     <div id="mapa1"></div>
  </div>
</template>

<script>
import mapsService from '../services/mapsService';
import imagen from '../assets/logo.png'

export default {
    mounted: function () {
      var html = "<Papasconqueso, RUN <br> <img src=\"" + this.urlImagen1.toString() + "\">";
      mapsService.load().then(function (google) {
        var map = new google.maps.Map(document.getElementById('mapa1'), {
          center: { lat: 50.152639, lng: -100.3 },
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
                    informacion.setContent(html);
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
    computed:{
            urlImagen1: {
                get: function () {
                    return this.urlImagen;
                },
                set: function (v) {
                    this.urlImagen = v;
                }
            }, 
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