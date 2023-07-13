<template>
  <Login />

 
</template>
<script>
import Login from '../components/PDF'

export default {
  name: 'Inicio',

  components: {
    Login,
  },
}
</script>

<style>
.blue-column {
  height: calc(50vh - 64px); /* 50% de la altura de la ventana menos el espacio de los márgenes */
}

.circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: yellow;
}
</style>
