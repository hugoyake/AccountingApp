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
  
  metaInfo: {
    title: '便利貼',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=2,user-scalable=yes' },
      { property: 'og:title', content: '便利貼' },
      { property: 'og:description', content: '包含記事、類別、chart統計的便利貼系統' },
      { property: 'og:site_name', content: '便利貼' },
      { property: 'og:image:url', content: 'favicon.ico' },
      { property: 'og:locale', content: 'zh_TW' },
      { property: 'og:url', content: 'http://www.accountingapp.com/' }
    ]
  },
};
</script>
