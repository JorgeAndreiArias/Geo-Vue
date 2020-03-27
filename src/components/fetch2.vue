<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row border bg-light" v-for="(pais, index) in paises" :key="index">
        <div class="col-12">
          <p>País: {{ pais.country }}, casos: {{ pais.cases }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getPaises();
  },
  data() {
    return {
      paises: []
    };
  },
  methods: {
    getPaises() {
      fetch("https://corona.lmao.ninja/countries")
        .then(response => {
          response.json().then(paises =>{
              this.paises = paises;
          }).catch(error => {
              console.error(error);
          })
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style>
</style>