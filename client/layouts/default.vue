<template>
  <v-app>
    {{auth}}
    <v-app-bar
      app
      clipped-left
      color="red"
      dense
    >
      <v-toolbar-title class="mr-12 align-center">
        <nuxt-link to="/" style="text-decoration:none">
          <span class="title" style="color:#fff">MEVN</span>
        </nuxt-link>
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
    NavBar
  },
  props: {
    source: String,
  },
  data: () => ({
    
  }),
  computed: {
    auth() {
      return this.$store.state.users.auth
    }
  },
  created () {
    this.$vuetify.theme.light = true

    this.$store.dispatch('users/auth')
  },
}
</script>

<style lang="scss">
  .v-main {
    background-color: #f4f5f4;
  }
</style>