<template>
  <div class="mission-vision">
    <section class="section">
      <v-container>
        <v-row align="center">
          <v-col cols="12" sm="6">
            <h2 class="text-h5">ESCUELA DE NEGOCIOS ESAM S.R.L.</h2>
            <p class="subtitle-1">{{ mission }}</p>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img :src="require('../assets/poster.jpg')" contain></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      mission: 'Operando hace más de 26 años, nos especializamos en formar líderes en el ámbito profesional, preparados para dar respuesta a las necesidades de un mundo global. Desempeñamos nuestras funciones bajo el manto de la Universidad Nacional Siglo XX dedicados a brindar conocimiento a través de programas formativos de postgrado, entre los cuales podemos mencionar diplomados, especialidades, maestrías y doctorados, además de cursos de capacitación continua en las distintas áreas de interés.',
      vision: 'Nuestra visión es...'
    };
  }
};
</script>

<style scoped>
.section {
  padding: 60px 0;
}

.v-col {
  display: flex;
  align-items: center;
}

.text-h5 {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
}

.subtitle-1 {
  font-size: 16px;
  color: #666;
  line-height: 1.5;
}
</style>
