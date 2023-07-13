<template>



    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent>
        
        <v-col cols="12">
        <v-img
          :src="require('../assets/logo-esam - copia.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
        
        <v-text-field
          v-model="firstName"
          label="User Name"
          :rules="firstNameRules"
        ></v-text-field>
  
        <v-text-field
          v-model="email"
          label="E-mail"
          :rules="emailRules"
          required
        ></v-text-field>
  
        <v-btn type="submit" block class="mt-2" color="warning">Iniciar Sesion</v-btn>
      </v-form>
    </v-sheet>
  </template>
  <script>
  export default {
    data: () => ({
      firstName: '',
      firstNameRules: [
        value => {
          if (value?.length > 3) return true

          return 'Username must be at least 3 characters.'
        },
      ],
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
    }),
  }
</script>