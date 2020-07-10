<template>
  <v-container class="fill-height">
    <v-row
      justify="center"
      align="center"
    >
      <v-col class="shrink">
        <register-form />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import RegisterForm from "~/components/RegisterForm"

export default {
  components: {
    RegisterForm
  }
}
</script>
