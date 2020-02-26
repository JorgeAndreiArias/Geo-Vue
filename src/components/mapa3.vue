<template>
  <div>
    <p>Haz clic para obtener las coordenadas de tu dispositivo</p>

    <button v-on:click="getLocation()">Obtener Coordenadas</button>
    
    <p>{{ long }}</p><br>
    <p>{{ lat }}</p>

  
  </div>
</template>

<script>
export default {
    data(){
        return{
            long: '',
            lat: ''
        }
    },
    methods:{
        getLocation(){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            } else { 
                this.long = "El navegador no dispone la capacidad de geolocalización";
            } 
        },
        showPosition(position) {
            this.lat = "Latitude: " + position.coords.latitude;
            this.long = "Longitude: " + position.coords.longitude;
        }
    }
}
</script>

<style>

</style>