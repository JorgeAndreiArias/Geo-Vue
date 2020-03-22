import mapa1 from './components/mapa1.vue'
import mapa2 from './components/mapa2.vue'
import mapa3 from './components/mapa3.vue'
import mapa4 from './components/mapa4.vue'
import mapa5 from './components/mapa5.vue'
import firestore from './components/firestoreApp.vue'
import listaEspiados from './components/listaEspiados.vue'
import espiados from './components/espiados.vue'
import index from './components/index.vue'

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
]

export default routes