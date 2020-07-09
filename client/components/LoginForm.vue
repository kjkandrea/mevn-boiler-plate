<template>
  <v-card style="min-width:325px;">
    <v-toolbar
      color="red"
      dark
      flat
    >
      <v-toolbar-title>로그인</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          label="이메일"
          name="email"
          type="email"
        ></v-text-field>

        <v-text-field
          label="비밀번호"
          name="password"
          type="password"
        ></v-text-field>
        <v-btn 
        color="red"
        large
        dark
        >로그인 하기
        </v-btn>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  components: {

  }
}
</script>
