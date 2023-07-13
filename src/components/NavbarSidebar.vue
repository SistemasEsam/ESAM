<template>
    <div class="navbar-sidebar">
      <div class="navbar">
        <!-- Contenido de la barra de navegación -->
      </div>
      <div class="sidebar">
        <!-- Contenido de la barra lateral -->

<v-btn>
  dada
</v-btn>
        
      </div>
      <!-- Contenido principal de la aplicación -->
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavbarSidebar'
  }
  </script>
  
  <style>
  .navbar-sidebar {
    display: flex;
  }
  
  .navbar {
    background-color: #0D47A1;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: white;
    width: 100%;
  }
  
  .sidebar {
    width: 200px;
    background-color: #0D47A1;
    height: 100vh;
  }
  
  .content {
    flex: 1;
  }
  </style>
  