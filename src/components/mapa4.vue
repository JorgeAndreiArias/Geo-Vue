<template>
  <div>
      <button v-on:click="GetLocation()">Obtener Ubicacion</button>
      <img :src="this.imagenUrl" >
  </div>
</template>

<script>

import config from '../services/config'
export default {
    data(){
        return{
            coordenadas: '',
            imagenUrl: '',
        }
    },
    methods:{
        GetLocation(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(this.muestraPosicion);
            }
            else
            {
                alert("No");
            }
        },
        muestraPosicion(posicion){
            alert("Hola");
            this.coordenadas = posicion.coords.latitude + "," + posicion.coords.longitude;
            console.log(this.coordenadas);
            this.imagenUrl = "https://maps.googleapis.com/maps/api/staticmap?center=" + this.coordenadas + "&zoom=20&size=800x800&key=" + config.token;
            console.log(this.url);
        }
    }
}
</script>

<style>

</style>