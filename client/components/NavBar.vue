<template>
  <nav class="navbar">
    <nuxt-link v-if="profile.login" to="/profile">
      <v-btn
        text
        class="white--text">
         <v-avatar size="32" color="indigo">
          <v-img v-if="profile.avatar" src="profile.avatar" />
          <span v-else class="white--text">{{profile.name[0]}}</span>
        </v-avatar>
      </v-btn>
    </nuxt-link>
    <nuxt-link v-if="!profile.login" to="/login">
      <v-btn
        text
        class="white--text">
        로그인
      </v-btn>
    </nuxt-link>
    <nuxt-link v-if="!profile.login" to="/register">
      <v-btn
        text
        class="white--text"
      >
        회원가입
      </v-btn>
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
  }),
  computed: {
    profile() {
      return this.$store.state.users.auth
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