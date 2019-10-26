<template>
  <v-app>
    <!--v-app-bar app dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>MY</span>            
        <span class="font-weight-light">Accounting APP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>    
    </v-app-bar-->

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
    
  },
  data: () => ({
    //
  }),
};
</script>
