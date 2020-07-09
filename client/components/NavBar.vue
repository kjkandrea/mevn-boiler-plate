<template>
  <nav class="navbar">
    <nuxt-link to="/login">
      <v-btn
        text
        class="white--text">
        로그인
      </v-btn>
    </nuxt-link>
    <nuxt-link to="/register">
      <v-btn
        text
        class="white--text"
      >
        회원가입
      </v-btn>
    </nuxt-link>
    <v-btn
      text
      class="white--text"
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