<template>
   <div class="carousel-wrapper">
      <v-carousel
        v-model="activeIndex"
        cycle
        hide-delimiters
        class="carousel"
      >
      <v-carousel-item v-for="(program, index) in programs" :key="index">
        <div class="image-wrapper">
          <v-img :src="program.image" aspect-ratio="1"></v-img>
          <div class="overlay">
            <div class="program-details">
              <h3 class="program-title">{{ program.title }}</h3>
              <p class="program-description">{{ program.description }}</p>
              <v-btn color="primary" @click="enroll(program)">Inscribirse</v-btn>
            </div>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      programs: [
        {
          title: 'Programa de Ventas Estratégicas',
          description: 'Aprende las mejores estrategias de ventas para maximizar tus resultados.',
          image:require('../assets/poster.jpg')
        },
        {
          title: 'Programa de Liderazgo en Ventas',
          description: 'Desarrolla tus habilidades de liderazgo y lidera a tu equipo hacia el éxito en ventas.',
          image: 'path-to-image2.jpg'
        },
        {
          title: 'Programa de Negociación Avanzada',
          description: 'Domina las técnicas de negociación avanzadas para cerrar acuerdos exitosos.',
          image: 'path-to-image3.jpg'
        }
      ]
    };
  },
  methods: {
    enroll(program) {
      // Lógica para redirigir a la página de inscripción del programa seleccionado
    }
  }
};
</script>

<style scoped>
.carousel-wrapper {
  width: 100%; /* Ajusta el ancho del carrusel según tus necesidades */
  height: 80vh; /* Ajusta la altura del carrusel según tus necesidades */
  margin: auto; /* Centra el carrusel horizontalmente */
}

.carousel {
  width: 100%;
  height: 100%;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
}

.program-details {
  padding: 20px;
}

.program-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;  
}

.program-description {
  font-size: 16px;
  margin-bottom: 20px;
}

.v-btn {
  margin-top: 10px;
}
</style>
