<template>
  <div>
        <div class="container">
            <h1 class="d-flex align-content-center">Ejemplo de Navigator</h1>
        </div>
        <div class="d-flex flex-row-reverse">
        <button class="btn btn-outline-primary p-2" id="btn" v-on:click="getData()"> Obtiene datos del navegador</button>        </div>
        
        <ul id="navegador" class="list-group list-group-flush">
            <li class="list-group-item">Nombre del Navegador es: {{ codeName }}
            </li>
            <li class="list-group-item">La version del navegador es: {{ version }}</li>
            <li class="list-group-item">Estatus de internet:  {{ online }}</li>
            <li class="list-group-item">Plataforma: {{ platform }}</li>
            <li class="list-group-item">Producto: {{ product }}</li>
        </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            codeName: '',
            version: '',
            online: '',
            platform: '',
            product: ''
        }
    },
    methods:{
        getData(){
            this.codeName =  navigator.appCodeName;
            this.version = navigator.appVersion;
            this.online = navigator.onLine ? "Conectado" : "Desconectado";
            this.platform = navigator.platform;
            this.product = navigator.product;

        }
    }
}
</script>

<style>

</style>