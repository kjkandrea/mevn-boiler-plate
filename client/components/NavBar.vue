<template>
  <nav class="navbar">
    <nuxt-link v-if="loggedIn" to="/profile">
      <v-btn
        text
        class="white--text">
        프로필
      </v-btn>
    </nuxt-link>
    <nuxt-link v-if="!loggedIn" to="/login">
      <v-btn
        text
        class="white--text">
        로그인
      </v-btn>
    </nuxt-link>
    <nuxt-link v-if="!loggedIn" to="/register">
      <v-btn
        text
        class="white--text"
      >
        회원가입
      </v-btn>
    </nuxt-link>
    <v-btn
      v-if="loggedIn"
      text
      class="white--text"
      @click="onClickLogout"
    >
      로그아웃
    </v-btn>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
  }),
  computed: {
    loggedIn() {
      return this.$store.state.users.auth.login
    }
  },
  methods: {
    onClickLogout(){
      this.$store.dispatch('users/logout');
    }
  }
}
</script>

<style lang="scss">
  .navbar {
    a {
      text-decoration: none;
      .v-btn {
        font-weight: 600;
        text-transform: none;
      }
    }
  }
</style>