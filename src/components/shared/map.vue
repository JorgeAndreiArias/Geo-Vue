<template>
  <div style="width: 100%;">
    <div class="row p-3" v-if="actividad === 'Actividad7'">
      <div class="col-3 text-center">
        <button class="btn btn-primary btn-block" @click="setStyleMap('roadmap')">roadmap</button>
      </div>
      <div class="col-3 text-center">
        <button class="btn btn-warning btn-block" @click="setStyleMap('satellite')">satellite</button>
      </div>
      <div class="col-3 text-center">
        <button class="btn btn-danger btn-block" @click="setStyleMap('hybrid')">hybrid</button>
      </div>
      <div class="col-3 text-center">
        <button class="btn btn-success btn-block" @click="setStyleMap('terrain')">terrain</button>
      </div>
    </div>

    <div :id="getId" class="row mx-auto" :style="getStyle"></div>
  </div>
</template>

<script>
import mapsService from "../../services/mapsService";
import coronatimeIcon from "../../assets/coronatime.png";
import MarkerClusterer from "node-js-marker-clusterer";

export default {
  props: {
    mapa: {
      type: Object,
      required: true
    },
    markers: {
      type: Array,
      required: false
    },
    actividad: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      coronaicon: coronatimeIcon,
      googleMarkes: [],
      map: {}
    };
  },
  mounted() {
    this.initMap();
  },
  computed: {
    getId() {
      return this.mapa[".key"];
    },
    getStyle(){
      let style = ''
      if(this.actividad == "Actividad7"){
        style = 'height: 92%;'
      }
      if(this.actividad == "fetch3" || this.actividad == "fetch4"){
        style = 'height: 100%;'
      }
      if(this.actividad == "lista"){
        style = 'height: 15rem;'
      }
      if(this.actividad == "general"){
        style = 'height: 30rem;'
      }
      return style
    }
  },
  methods: {
    initMap() {
      mapsService.load().then(google => {
        this.map = new google.maps.Map(
          document.getElementById(this.mapa[".key"]),
          {
            center: {
              lat: parseFloat(this.mapa.latitude),
              lng: parseFloat(this.mapa.longitude)
            },
            zoom: this.mapa.zoom ? this.mapa.zoom : 15
          }
        );
        if (this.actividad == "fetch3" || this.actividad == "fetch4") {
          this.practicaFetch3(google);
        }

        if (this.actividad == "Actividad7") {
          this.actividad7(google);
        }
      });
    },
    practicaFetch3(google) {
      for (var marcador of this.markers) {
        var informacion =
          "<strong>País:</strong> " +
          marcador.country +
          "<br><strong>Casos:</strong> " +
          marcador.cases +
          "<br><strong>Nuevos hoy:</strong> " +
          marcador.todayCases +
          "<br><strong>Muertes:</strong> " +
          marcador.deaths +
          "<br><strong>Muertes Hoy:</strong> " +
          marcador.todayDeaths +
          "<br><strong>Recuperados:</strong> " +
          marcador.recovered +
          "<br><strong>Activos:</strong> " +
          marcador.active +
          "<br><strong>Críticos:</strong> " +
          marcador.critical +
          "<br><strong>Casos por millón:</strong> " +
          marcador.casesPerOneMillion;

        var infowindow = new google.maps.InfoWindow({
          content: informacion
        });
        let marker = new google.maps.Marker({
          map: this.map,
          position: new google.maps.LatLng(
            marcador.countryInfo.lat,
            marcador.countryInfo.long
          ),
          title: marcador.country,
          icon: this.coronaicon
        });

        marker.addListener("click", function() {
          infowindow.open(this.map, marker);
        });
      }
    },
    actividad7(google) {
      let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let cuenta = 1;
      this.markers.forEach(marker => {
        let marcador = new google.maps.Marker({
          map: this.map,
          position: marker.countryInfo,
          label: labels[cuenta % labels.length]
        });
        this.googleMarkes.push(marcador);
        cuenta++;
      });
      let makerCluster = new MarkerClusterer(this.map, this.googleMarkes, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
        maxZoom: 10
      });
      makerCluster;
    },
    setStyleMap(style){
      this.map.setMapTypeId(style)
    }    
  }
};
</script>

<style scoped>
body {
  background-color: #efefef;
}
</style>