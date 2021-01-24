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

      <v-divider/>

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
import ProfileCard from "@/components/customer/ProfileCard";
import LogoutButton from "@/components/customer/LogoutButton";

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
            return this.$store.getters["customer/getType"]
        }
    }
}
</script>

<style scoped>

</style>