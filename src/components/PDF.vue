<template>
  <div>
    <div v-if="pdfLoaded">
      <p>PDF cargado:</p>
      <embed :src="pdfUrl" type="application/pdf" width="100%" height="500px" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pdfLoaded: false, // Indicador de carga de PDF
      pdfUrl: '', // URL del PDF cargado
    };
  },
  mounted() {
    const pdfUrl = '/assets/cv.pdf'; // Ruta al archivo PDF
    this.loadPDF(pdfUrl);
  },
  methods: {
    loadPDF(pdfUrl) {
      this.pdfUrl = pdfUrl;
      this.pdfLoaded = true;
    },
  },
};
</script>
