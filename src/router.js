import mapa1 from './components/mapa1.vue'
import mapa2 from './components/mapa2.vue'
import mapa3 from './components/mapa3.vue'
import mapa4 from './components/mapa4.vue'
import mapa5 from './components/mapa5.vue'
import firestore from './components/firestoreApp.vue'
import listaEspiados from './components/listaEspiados.vue'
import espiados from './components/espiados.vue'
import index from './components/index.vue'
import fetch from './components/fetch.vue'
import fetch2 from './components/fetch2.vue'
import fetch3 from './components/fetch3.vue'
import fetch4 from './components/fetch4.vue'
import practica7 from './components/practica7.vue'
import practica8 from './components/practica8.vue'
import estilo from './components/mapStyled.vue'

const routes = [
    { path: '/', component: index, name: 'index'},
    { path: '/googleMaps', component: mapa1, name: 'googleMaps' },
    { path: '/navigatorProps', component: mapa2, name: 'navigatorProps' },
    { path: '/getCurrentLocation', component: mapa3, name: 'getCurrentLocation' },
    { path: '/mapsOnImage', component: mapa4, name: 'mapsOnImage' },
    { path: '/infoOnMaps', component: mapa5, name: 'infoOnMaps' },
    { path: '/cloudFirestore', component: firestore, name: 'cloudFirestore' },
    { path: '/listSpy', component: listaEspiados, name: 'listSpy' },
    { path: '/spy', component: espiados, name: 'spy' },
    { path: '/fetch', component: fetch, name: 'fetch' },
    { path: '/fetch2', component: fetch2, name: 'fetch2' },
    { path: '/fetch3', component: fetch3, name: 'fetch3' },
    { path: '/fetch4', component: fetch4, name: 'fetch4' },
    { path: '/practica7', component: practica7, name: 'practica7' },
    { path: '/practica8', component: practica8, name: 'practica8' },
    { path: '/estilo', component: estilo, name: 'estilo'}

]

export default routes