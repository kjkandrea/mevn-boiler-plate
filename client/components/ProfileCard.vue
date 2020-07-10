<template>
  <v-card class="profile-card">
    <h1>{{profile.name}} 님 환영합니다.</h1>
  </v-card>
</template>

<script>
export default {
  name: "ProfileCard",
  props: {
    profile: Object
  },
  data: () => ({
  }),
  methods: {
    onClickLogout(){
      this.$store.dispatch('users/logout');
    }
  }
}
</script>

<style lang="scss">

.profile-card {
  width: 420px;
}

</style>