<template>
  <div :id="getId" style=" width: 100%;
  "></div>
</template>

<script>
import mapsService from "../../services/mapsService";
import coronatimeIcon from "../../assets/coronatime.png";

export default {
  props: {
    mapa: {
      type: Object,
      required: true
    },
    markers: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      coronaicon: coronatimeIcon
    };
  },
  mounted: async function() {
    let maps = this.mapa;
    let markers = this.markers;
    let icon = this.coronaicon;

    mapsService.load().then(function(google) {
      let map = new google.maps.Map(document.getElementById(maps[".key"]), {
        center: {
          lat: parseFloat(maps.latitude),
          lng: parseFloat(maps.longitude)
        },
        zoom: maps.zoom
      });
      console.log(markers);
      if (markers) {
        const marcadores = markers;
        for (var marcador of marcadores) {

          var información =
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
            content: información
          });


          let marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(
              marcador.countryInfo.lat,
              marcador.countryInfo.long
            ),
            title: marcador.country,
            icon: icon
          });

          
          marker.addListener("click", function() {
            infowindow.open(map, marker);
          });

          console.warn(marker);
        }
      }
    });
  },
  computed: {
    getId() {
      return this.mapa[".key"];
    }
  }
};
</script>

<style scoped>
body {
  background-color: #efefef;
}
</style>