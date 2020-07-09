<template>
  <v-container class="fill-height">
    <v-row
      justify="center"
      align="center"
    >
      <v-col class="shrink">
        <login-form />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import LoginForm from "~/components/LoginForm"

export default {
  components: {
    LoginForm
  }
}
</script>
