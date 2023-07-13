<template>



<v-sheet width="1000" class="mx-auto" >   
 
   <p>{{ local.name }}</p>
    <v-card v-for="(formulario, index) in formularios" :key="index" class="mb-4">
      <v-card-title>    
      <v-col class="d-flex justify-center aling-center">
                <h3 class="headline">FORMACION DE PREGRADO</h3>
                <v-btn v-if="index !== 0" icon @click="eliminarFormulario(index)">
                <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-col>
          </v-card-title>  
          <v-card-text>
            <v-col>
        <v-row>
            <v-col>
                <v-text-field v-model="formulario.unipre" label="Universidad o Institución" required ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field v-model="formulario.carrerapre" label="Carrera" required ></v-text-field>
            </v-col>
            <v-col>
                <v-select
                    v-model="formulario.EstudyTypePre"
                    :items="NivelEstudio"
                    label="Nivel de Estudio"
                    outlined
                ></v-select>
            </v-col>
        </v-row>
        <v-row>
        <v-col>
            <v-text-field v-model="formulario.paispre" label="País" required ></v-text-field>
        </v-col>
        <v-col>
            <v-select
            v-model="formulario.selectedYearPre"
            :items="years"
            label="Año de titulación"
            outlined
            ></v-select>
        </v-col>
        <v-col>
                    <v-select
                    v-model="formulario.selectedModalityTypePre"
                    :items="ModalidadGraduacion"
                    label="Modalidad Graduación"
                    outlined
                    ></v-select>
                </v-col>
        <v-col>
            <v-file-input
            v-model="formulario.archivopre"
            accept="application/pdf"
            label="Seleccionar archivo PDF"
            outlined
            ></v-file-input> <p style="text-align: right;">Adjuntar título escaneado</p>
        </v-col>
        </v-row>
    </v-col>

          </v-card-text>
         
</v-card>


<v-col>

<v-btn v-if="formularios.length < 3" @click="agregarFormulario"  color="warning"  class="fixed-bottom mr-2">AGREGAR NUEVA FORMACIÓN</v-btn>
  
</v-col>
<v-col>


</v-col>



<v-card v-for="(formulario2, index2) in formularios2" :key="index2" class="mb-4">
    <v-card-title>
        <v-col class="d-flex justify-center aling-center">
            <h3 class="headline">FORMACION DE POSTGRADO</h3>
            <v-btn v-if="index2 !== 0" icon @click="eliminarFormulario2(index2)">
            <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-col>
    </v-card-title>
<v-card-text>
        <v-col>
            <v-row>
                <v-col>
                    <v-text-field v-model="formulario2.universidadPost" label="Universidad o Institución" required ></v-text-field>
                </v-col>
                <v-col> 
                    <v-text-field v-model="formulario2.carreraPost" label="Nombre del postgrado" required ></v-text-field>
                </v-col>
                <v-col>
                    <v-select
                    v-model="formulario2.PostEstudyType"
                    :items="PostNivelEstudio"
                    label="Grado"
                    outlined
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field v-model="formulario2.paisPost" label="País" required ></v-text-field>
                </v-col>
                <v-col>
                    <v-select
                    v-model="formulario2.yearPost"
                    :items="years"
                    label="Año de titulación"
                    outlined
                    ></v-select>
                </v-col>
                <v-col>
                    <v-select
                    v-model="formulario2.ModalitPostType"
                    :items="ModalidadGraduacionPost"
                    label="Modalidad de graduación"
                    outlined
                    ></v-select>
                </v-col>
                <v-col>
                    <v-file-input
                    v-model="formulario2.archivoPost"
                    accept="application/pdf"
                    label="Seleccionar archivo PDF"
                    outlined
                    ></v-file-input> <p style="text-align: right;">Adjuntar título escaneado</p>
                   
                </v-col>
            </v-row>
        </v-col>
</v-card-text>
</v-card>
<v-col>
<v-btn v-if="formularios2.length < 3" @click="agregarFormulario2"  color="warning"  class="fixed-bottom mr-2">AGREGAR NUEVO POSTGRADO</v-btn>


<v-col>
  <v-btn class="success" @click="guardardatosPre();guardardatosPost();changeestate(false)" >guardar</v-btn>  


</v-col>

<v-dialog v-model="dialogVisible" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Datos guardados</span>
        </v-card-title>
        <v-card-text>
          <p>Los datos se han guardado exitosamente.</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" to="/form3">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</v-col>

<v-row>

 
</v-row>
 



</v-sheet> 

</template>
  
  <script>
import { db } from './Form.vue'; 
import { storage } from './Form.vue';
  
  export default {



    data() {
      return {
        dialogVisible: false,
        estate:true,
        local:'',
        fileNamePre:[],

        formularios: [
          {
            unipre: '',
            carrerapre: '',
            EstudyTypePre:'',
            paispre:'',
            selectedYearPre:'',
            selectedModalityTypePre:'',
            archivopre:null,
          }
        ],
        formularios2: [
          {
            universidadPost: '',
            carreraPost: '',
            PostEstudyType:'',
            paisPost:'',
            yearPost:'',
            ModalitPostType:'',
            archivoPost:null 
          }
        ],
        selectedPostEstudyType: null,
        PostNivelEstudio: [
        'Diplomado',
        'Especialidad Técnica',
        'Especialidad Superior',
        'Especialidad Clínico Quirúrgico',
        'Maestría M.Sc.',
        'Maestría Mgr.',
        'Master',
        'Doctorado Ph.D.',
        'Posdoctorado'
      ], 

        selectedEstudyType: null,
      NivelEstudio: [
        'Licenciatura',
        'Tecnico universitario'
      ], 
      selectedModalityPostType: '',
      ModalidadGraduacionPost: [
     'Monografia',
     'Tesis',
     'Otros'
      ], 
      selectedModalityType: '',
      ModalidadGraduacion: [
        'Tesis',
        'Exámen de Grado',
        'Proyecto de Grado',
        'Trabajo Dirigido',
        'Excelencia Académica',
        'Doble Titulación'
      ], 
      selectedYear: null,
      years: []
      }
    },

created(){
  const storageData=localStorage.getItem('formData');
  if(storageData){
    this.local=JSON.parse(storageData);
  }


},

    mounted() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
      this.years.push(year.toString());
    }
  },
    methods: {

changeestate(change){
this.estate=change


},


      agregarFormulario() {
        if (this.formularios.length < 3) {
          this.formularios.push({
            unipre: '',
            carrerapre: '',
            EstudyTypePre:'',
            paispre:'',
            selectedYearPre:'',
            selectedModalityTypePre:'',
            archivopre:'',
          });
        }
      },
      agregarFormulario2() {
        if (this.formularios2.length < 3) {
          this.formularios2.push({
            universidadPost: '',
            carreraPost: '',
            PostEstudyType:'',
            paisPost:'',
            yearPost:'',
            ModalitPostType:'',
            archivoPost:'' 
          });
        }
      },
      eliminarFormulario(index) {
        this.formularios.splice(index, 1);
      },
      eliminarFormulario2(index2) {
        this.formularios2.splice(index2, 1);
      },
  
      guardardatosPre(){
        const nombre = this.local.name
      const storageRef = storage.ref();
      const databaseRef = db.ref(nombre);

      this.formularios.forEach(formulario => {
        if (formulario.archivopre) {
          console.log(this.formularios.length+'largo formulario')

          const fileRef = storageRef.child(nombre+'/pdfs/'+formulario.archivopre.name);
          fileRef.put(formulario.archivopre)
            .then(snapshot => {
              snapshot.ref.getDownloadURL()
                .then(downloadURL => {
                  const formData = {
                    unipre: formulario.unipre,
                    carrerapre: formulario.carrerapre,
                    EstudyTypePre: formulario.EstudyTypePre,
                    paispre:formulario.paispre,
                    selectedYearPre:formulario.selectedYearPre,
                    selectedModalityTypePre: formulario.selectedModalityTypePre,
                    pdfURL: downloadURL
                  };
                  databaseRef.push(formData);
                  console.log(`PDF ${formulario.archivopre.name} subido exitosamente a Firebase Storage.`);
                })
                .catch(error => {
                  console.log(`Error al obtener la URL del PDF ${formulario.archivopre.name}:`, error);
                });
            })
            .catch(error => {
              console.log(`Error al subir el PDF ${formulario.archivopre.name}:`, error);
            });
        }
      });
        },
        guardardatosPost(){
        const nombre = this.local.name
      const storageRef = storage.ref();
      const databaseRef = db.ref(nombre);

      this.formularios2.forEach(formulario2 => {
        if (formulario2.archivoPost) {
          console.log(this.formularios2.length+'largo formulario')

          const fileRef = storageRef.child(nombre+'/pdfs/'+formulario2.archivoPost.name);
          fileRef.put(formulario2.archivoPost)
            .then(snapshot => {
              snapshot.ref.getDownloadURL()
                .then(downloadURL => {
                  const formDatas = {
                    universidadPost: formulario2.universidadPost,
                    carreraPost: formulario2.carreraPost,
                    PostEstudyType: formulario2.PostEstudyType,
                    paisPost: formulario2.paisPost,
                    yearPost:formulario2.yearPost,
                    ModalitPostType: formulario2.ModalitPostType,
                    pdfURL: downloadURL
                  };
                  databaseRef.push(formDatas);
                  console.log(`PDF ${formulario2.archivoPost.name} subido exitosamente a Firebase Storage.`);
                })
                .catch(error => {
                  console.log(`Error al obtener la URL del PDF ${formulario2.archivoPost.name}:`, error);
                });
            })
            .catch(error => {
              console.log(`Error al subir el PDF ${formulario2.archivoPost.name}:`, error);
            });
        }
      });
      this.dialogVisible = true;    
    }



    }
  }
  </script>
  <style>





</style>