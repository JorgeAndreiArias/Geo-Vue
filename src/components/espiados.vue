<template>
  <div class="container-fluid">
    <div class="container">
      <form class="form-inline card m-3 p-3" v-on:submit.prevent="getLocation">
        <div class="form-group mx-sm-3 mb-2">
          <label for="inputPassword2" class="sr-only">Name</label>
          <input type="text" class="form-control" id="inputPassword2" placeholder="Name" />
        </div>
        <button type="submit" class="btn btn-dark">Agregar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "../services/firebase.js";

export default {
  data() {
    return {
      maps: []
    };
  },
  firestore(){
    return {
      maps: db.collection("maps")
    }
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.setPosition);
      } else {
        this.long = "El navegador no dispone la capacidad de geolocalización";
      }
    },
    setPosition(position) {
      console.warn({
          name: this.name,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      this.$firestore.maps.add({
          name: this.name,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        this.name = "";
    }
  }
};
</script>

<style>
</style>