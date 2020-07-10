<template>
  <v-card style="min-width:345px;">
    <v-toolbar
      color="red"
      dark
      flat
    >
      <v-toolbar-title>로그인</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-alert v-if="process.success === false" type="error">
        {{process.message}}
      </v-alert>
      <v-form ref="form" @submit.prevent="onSubmitForm">
        <v-text-field
          label="이메일"
          v-model="email"
          :rules="emailRules"
          name="email"
          type="email"
        ></v-text-field>

        <v-text-field
          label="비밀번호"
          v-model="password"
          :rules="passwordRules"
          name="password"
          type="password"
        ></v-text-field>
        <v-btn
          type="submit"
          color="red"
          large
          dark
          style="margin-top:20px;"
        >로그인 하기
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  data: () => ({
    valid: false,
    email: '',
    password: '',
    emailRules: [
      v => !!v || '이메일은 필수입니다.',
      v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.',
    ],
    passwordRules: [
      v => !!v || '비밀번호는 필수입니다.',
    ],
  }),
  computed: {
    process() {
      return this.$store.state.users.loginProcess
    }
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('users/login', {
          email: this.email,
          password: this.password,
        });
      }
    },
  },
}
</script>
