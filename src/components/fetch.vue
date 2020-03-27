<template>
  <div>
      <p v-for="(pais, index) in paises" :key="index">
          Pais: {{ pais.country }} Casos: {{ pais.cases }}
      </p>
  </div>
</template>

<script>
import data from '../data/data.json'

export default {
    created(){
        this.getPaises();
    },
    data(){
        return{
            paises: []
        }
    },
    methods: {
        getPaises(){
            this.paises = data;
        }
    }
}
</script>

<style>

</style>