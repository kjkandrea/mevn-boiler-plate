<template>
  <v-container class="fill-height">
    <v-row
      justify="center"
      align="center"
    >
      <v-col class="shrink">
        <profile-card
          v-if="profile.login"
          :profile="profile"
        />
        <v-tooltip 
          v-else
          right
        >
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              large
              target="_blank"
              v-on="on"
            >
              <v-icon large>mdi-code-tags</v-icon>
            </v-btn>
          </template>
          <span>Source</span>
        </v-tooltip>
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
}
</script>
