<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="column p-1 mx-auto col-12 col-md-4" v-for="(map, index) in maps" :key="index">
          <div class="card">
            <fb-mapa style="height: 15rem;" class="card-img-top img-fluid" :mapa="map" :actividad="actividad"  />
            <div class="card-body">
              <h4 class="card-title">{{ map.name }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../services/firebase.js";
import FbMapa from "./shared/map.vue";

export default {
  components: {
    FbMapa
  },
  data() {
    return {
      actividad: "lista", 
      maps: []
    }
  },
  firestore(){
    return {
      maps: db.collection("maps")
    }
  },
  methods: {
    
  }

};
</script>

<style>
</style>