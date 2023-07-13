<template>
  
<v-navigation-drawer app v-model="drawer" :clipped="clipped" color="#0D47A1" dark fixed>
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

</template>


<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      items: [
        { title: 'Home', icon: 'mdi-home', path: '/' },
        { title: 'About', icon: 'mdi-information', path: '/about' },
        { title: 'Contact', icon: 'mdi-email', path: '/contact' }
      ]
    }
  }
}
</script>