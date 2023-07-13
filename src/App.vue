<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" :clipped="clipped" color="#0D47A1" dark fixed temporary>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.path" router>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="#0D47A1" :clipped-left="clipped">



      
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-italic">ESAM Escuela  De Negocios</v-toolbar-title>
<v-spacer></v-spacer>
<v-btn class="warning" :to="itemrout.path1"> Registrate</v-btn>
      <v-btn class="success" :to="itemrout.path2">Iniciar</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>


 

  </v-app>
</template>

<script>
import footer from '../src/components/Footer.vue'
import form from '../src/components/Form.vue'

export default {
components:{
footer,
form

},

  data() {
    return {
      currentYear: new Date().getFullYear(),
      clipped: false,
      drawer: false,
      itemrout:{
        path1:'/form',
        path2:'/inicio'

      },
      items: [
        { title: 'Home', icon: 'mdi-home', path: '/' },
        { title: 'About', icon: 'mdi-information', path: '/about' },
        { title: 'Contact', icon: 'mdi-email', path: '/contact' }
      ]
    }
  }
}
</script>
