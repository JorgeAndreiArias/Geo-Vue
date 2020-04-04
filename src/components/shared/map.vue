<template>
  <div :id="getId" style="width: 100%;"></div>
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
    this.initMap()
  },
  computed: {
    getId() {
      return this.mapa[".key"];
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
        console.warn(this.map.center);
        if (this.actividad == "fetch3") {
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

  }
};
</script>

<style scoped>
body {
  background-color: #efefef;
}
</style>