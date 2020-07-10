<template>
  <v-container class="fill-height">
    <v-row
      justify="center"
      align="center"
    >
      <v-col class="shrink">
        <profile-card
          :profile="profile"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import ProfileCard from '~/components/ProfileCard'

export default {
  components: {
    ProfileCard
  },
  computed: {
    profile() {
      return this.$store.state.users.auth
    }
  },
  middleware: 'authenticated'
}
</script>
