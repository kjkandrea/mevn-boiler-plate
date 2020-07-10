<template>
  <v-card 
    class="profile-card"
    style="text-align:center;padding-top:10px;padding-bottom:10px;"
  >
    <v-container>
      <v-card-text style="padding-top:0;padding-bottom:0">
        <v-avatar size="96">
          <v-img src="https://wireframe.kr/wp-content/uploads/2020/07/john.jpg" />
        </v-avatar>
      </v-card-text>
      <v-card-title style="justify-content:center">{{profile.name}}</v-card-title>
      <v-card-subtitle class="pb-0">{{profile.name}} 님 환영합니다.</v-card-subtitle>
      <v-btn
        color="red"
        dark
        style="margin-top:20px;"
        @click="onClickLogout"
      >로그아웃
      </v-btn>
    </v-container>
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