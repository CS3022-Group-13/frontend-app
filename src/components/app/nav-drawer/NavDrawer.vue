<template>
  <v-navigation-drawer
          class="pa-2"
          color="secondary"
          v-model="show"
          stateless
          left
          app
          mini-variant-width="73"
          :mini-variant="!toggle"
  >
    <template v-slot:prepend>
      <ProfileCard />
    </template>

    <v-divider/>

    <v-list
            dense
            nav
    >
      <!-- <NavItem name="Dashboard" icon="mdi-view-dashboard" link="/app"/>

      <v-divider/> -->  

      <slot />

    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <LogoutButton :small="true" :mini="!toggle" />
      </div>
    </template>

  </v-navigation-drawer>
</template>

<script>
import NavItem from "./NavItem";
import ProfileCard from "@/components/user/ProfileCard";
import LogoutButton from "@/components/user/LogoutButton";

export default {
    name: "NavDrawer",
    components: {
        NavItem,
        ProfileCard,
        LogoutButton
    },
    props: [
        'toggle'
    ],
    data: () => ({
        show: true
    }),
    computed: {
        userType() {
            return this.$store.getters["user/getType"]
        }
    }
}
</script>

<style scoped>

</style>