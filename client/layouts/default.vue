<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
      color="red"
      dense
    >
      <v-toolbar-title class="mr-12 align-center">
        <span class="title" style="color:#fff">MEVN bolier plate</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <nav-bar />
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>

import NavBar from '~/components/NavBar';

export default {
  components: {

  },
  props: {
    source: String,
  },
  data: () => ({
    
  }),
  created () {
    this.$vuetify.theme.light = true
  },
}
</script>
