<template>
  <v-card style="min-width:345px;">
    <v-toolbar
      color="red"
      dark
      flat
    >
      <v-toolbar-title>회원가입</v-toolbar-title>
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
        />

        <v-text-field
          label="비밀번호"
          v-model="password"
          :rules="passwordRules"
          name="password"
          type="password"
        />

        <v-text-field
          label="비밀번호 확인"
          v-model="passwordCheck"
          :rules="passwordCheckRules"
          name="passwordCheck"
          type="password"
        />

        <v-text-field
          label="닉네임"
          v-model="nickname"
          type="nickname"
          :rules="nicknameRules"
          required
        />

        <v-checkbox
          v-model="terms"
          required
          :rules="[v => !!v || '약관에 동의해야 합니다.']"
          label="무슨무슨 약관에 동의합니다."
        />

        <v-btn
          type="submit"
          color="red"
          large
          dark
          style="margin-top:20px;"
        >회원가입 하기
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      passwordCheck: '',
      nickname: '',
      terms: false,
      emailRules: [
        v => !!v || '이메일은 필수입니다.',
        v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.',
      ],
      nicknameRules: [
        v => !!v || '닉네임은 필수입니다.',
      ],
      passwordRules: [
        v => !!v || '비밀번호는 필수입니다.',
        v => /^.*(?=^.{8,}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/.test(v) || '최소 8자의 영문/특수문자 및 숫자로 구성되어야 합니다.',
      ],
      passwordCheckRules: [
        v => !!v || '비밀번호 확인은 필수입니다.',
        v => v === this.password || '비밀번호가 일치하지 않습니다.',
      ],
    }
  },
  computed: {
    process() {
      return this.$store.state.users.registerProcess
    }
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('users/register', {
          email: this.email,
          password: this.password,
          name: this.nickname
        });
      }
    }
  },
}
</script>
