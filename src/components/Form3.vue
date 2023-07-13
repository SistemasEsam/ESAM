<template>
    <v-sheet width="1000" class="mx-auto" >  



    
        <v-card v-for="(formulario, index) in formularios" :key="index" class="mb-4">
        <v-card-title>
             <v-col class="d-flex justify-center aling-center">
                <h3 class="headline">CURSOS</h3>
                <v-btn v-if="index !== 0" icon @click="eliminarFormulario(index)">
                <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-col>
        </v-card-title>
  <v-card-text>
    <v-col>
        <v-row>
            <v-col>
                <v-text-field v-model="formulario.unicurso" label="Universidad o Institución" required ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field v-model="formulario.nombrecurso" label="Nombre de Curso o Taller" required ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
        <v-col>
            <v-text-field v-model="formulario.paiscurso" label="País" required ></v-text-field>
        </v-col>
        <v-col>
            <v-select
            v-model="formulario.yearcurso"
            :items="years"
            label="Año de publicación"
            outlined
            ></v-select>
        </v-col>
        <v-col>
            <v-file-input
            v-model="formulario.archivocurso"
            accept="application/pdf"
            label="Seleccionar archivo PDF"
            outlined
            ></v-file-input><p style="text-align: right;">Adjuntar certificado escaneado</p>
        </v-col>
        </v-row>
    </v-col>
  </v-card-text>
</v-card>

<v-col>

<v-btn v-if="formularios.length < 3" @click="agregarFormulario"  color="warning"  class="fixed-bottom mr-2">AGREGAR NUEVO CURSO</v-btn>
</v-col>

<v-col>
  
</v-col>

<v-card v-for="(formulario2, index2) in formularios2" :key="index2" class="mb-4">
        <v-card-title>
             <v-col class="d-flex justify-center aling-center">
                <h3 class="headline">PRODUCCION INTELECTUAL</h3>
                <v-btn v-if="index2 !== 0" icon @click="eliminarFormulario2(index2)">
                <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-col>
        </v-card-title>
  <v-card-text>
    <v-col>
        <v-row>
            <v-col>
                <v-text-field v-model="formulario2.nombrepubli" label="Nombre de publicación" required ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field v-model="formulario2.edipubli" label="Enlace o Editorial de Publicación" required ></v-text-field>
            </v-col>
            <v-col>
                <v-select
                v-model="formulario2.typepubli"
                :items="publishType"
                label="Tipo de publicación"
                outlined
                ></v-select>
              </v-col>
            
        </v-row>
        <v-row>
        <v-col>
            <v-text-field v-model="formulario2.paispubli" label="País" required ></v-text-field>
        </v-col>
        <v-col>
                <v-menu
                ref="menu"
                v-model="formulario2.menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="290px"
                >
                <template v-slot:activator="{ on }">
                  <v-text-field
                  v-model="formulario2.datepubli"
                  label="Fecha de publicación"
                  outlined
                  readonly
                  v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="formulario2.datepubli" @input="menu = false"></v-date-picker>
                </v-menu>
        </v-col>
        <v-col>
            <v-file-input
            v-model="formulario2.archivopubli"
            accept="application/pdf"
            label="Seleccionar archivo PDF"
            outlined
            ></v-file-input>
        </v-col>
        </v-row>
    </v-col>
  </v-card-text>

  
</v-card>    
<v-btn v-if="formularios2.length < 3" @click="agregarFormulario2"  color="warning"  class="fixed-bottom mr-2">Agregar formulario</v-btn>
<v-col>
  <v-btn class="success" @click="guardardatoscurso();guardardatospubli();changeestate(false)" >guardar</v-btn>  


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
          <v-btn color="primary" to="/form4">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>





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
      formularios: [
        {
          unicurso:'',
          nombrecurso :'',
          paiscurso:'',
          yearcurso:'',
          archivocurso:null
        }
      ],
      formularios2: [
        {
          nombrepubli: '',
          edipubli: '',
          typepubli:'',
          paispubli:'',
          datepubli:'',
          archivopubli:null
        }
      ],
      publishType: [
        'Libro',
        'Revista',
        'Articulo'
      ],  
    NivelEstudio: [
      'Licenciado',
      'Magister',
      'Doctor',
      'Otro'
    ], 
    ModalidadGraduacion: [
      'Tesis',
      'Trabajo Dirigido',
      'Doble Titulacion',
      'Otro'
    ], 
      menu: false,
      menu2: false,
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
          unicurso:'',
          nombrecurso :'',
          paiscurso:'',
          yearcurso:'',
          archivocurso:null
        });
      }
    },
    agregarFormulario2() {
      if (this.formularios2.length < 3) {
        this.formularios2.push({
          nombrepubli: '',
          edipubli: '',
          typepubli:'',
          paispubli:'',
          datepubli:'',
          archivopubli:null
        });
      }
    },
    eliminarFormulario(index) {
      this.formularios.splice(index, 1);
    },
    eliminarFormulario2(index2) {
      this.formularios2.splice(index2, 1);
    },
    guardardatoscurso(){
        const nombre = this.local.name
      const storageRef = storage.ref();
      const databaseRef = db.ref(nombre);

      this.formularios.forEach(formulario => {
        if (formulario.archivocurso) {
          console.log(this.formularios.length+'largo formulario')

          const fileRef = storageRef.child(nombre+'/pdfs/'+formulario.archivocurso.name);
          fileRef.put(formulario.archivocurso)
            .then(snapshot => {
              snapshot.ref.getDownloadURL()
                .then(downloadURL => {
                  const formData = {
                    unicurso:formulario.unicurso,
                    nombrecurso :formulario.nombrecurso,
                    paiscurso:formulario.paiscurso,
                    yearcurso:formulario.yearcurso,
                    pdfURL: downloadURL
                  };
                  databaseRef.push(formData);
                  console.log(`PDF ${formulario.archivocurso.name} subido exitosamente a Firebase Storage.`);
                })
                .catch(error => {
                  console.log(`Error al obtener la URL del PDF ${formulario.archivocurso.name}:`, error);
                });
            })
            .catch(error => {
              console.log(`Error al subir el PDF ${formulario.archivocurso.name}:`, error);
            });
        }
      });
        },
        guardardatospubli(){
        const nombre = this.local.name
      const storageRef = storage.ref();
      const databaseRef = db.ref(nombre);

      this.formularios2.forEach(formulario2 => {
        if (formulario2.archivopubli) {
          console.log(this.formularios2.length+'largo formulario')

          const fileRef = storageRef.child(nombre+'/pdfs/'+formulario2.archivopubli.name);
          fileRef.put(formulario2.archivopubli)
            .then(snapshot => {
              snapshot.ref.getDownloadURL()
                .then(downloadURL => {
                  const formDatas = {
                    nombrepubli: formulario2.nombrepubli,
                    edipubli: formulario2.edipubli,
                    typepubli:formulario2.typepubli,
                    paispubli:formulario2.paispubli,
                    datepubli:formulario2.datepubli,
                    pdfURL: downloadURL
                  };
                  databaseRef.push(formDatas);
                  console.log(`PDF ${formulario2.archivopubli.name} subido exitosamente a Firebase Storage.`);
                })
                .catch(error => {
                  console.log(`Error al obtener la URL del PDF ${formulario2.archivopubli.name}:`, error);
                });
            })
            .catch(error => {
              console.log(`Error al subir el PDF ${formulario2.archivopubli.name}:`, error);
            });
        }
      });

      this.dialogVisible = true;   
        }
  }
}
</script>
