<template>
  <v-container>
    <v-card elevation="0" class="pa-2 ma-4">
      <v-card-title class="font-weight-bold" style="font-size: 40px">
        EIMS Administrator Panel
      </v-card-title>
      <v-card-subtitle style="font-size: 15px; letter-spacing: 1px;" class="mt-1">
        You are signed in as <span class="font-weight-bold"> {{ fullName }} ({{ userType }}) </span>
        <span v-if="userType.includes('Division')">@ <span class="font-weight-bold">{{ office }}</span> Divisional Secretariat Office</span>
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script>
import {api} from "@/api";

export default {
    name: "Dashboard",
    data: () => ({
        tiles: [],

    }),
    computed: {
        fullName() {
            return `${this.$store.state.user.userData.firstName} ${this.$store.state.user.userData.lastName}`
        },
        userType() {
            return this.$store.state.user.userData.userType
        }
    }
}
</script>

<style scoped>
.tile-plate {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 180px);
}
</style>