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
      <ProfileCard/>
    </template>

    <v-divider/>

    <v-list
            dense
            nav
    >
      <NavItem name="Dashboard" icon="mdi-view-dashboard" link="/app"/>

      <v-divider/>

      <AdminNavItems v-if="role === 'Administrator'"/>
      <DisOffNavItems v-else-if="role === 'District Officer'" />
      <DisSecNavItems v-else-if="role === 'District Secretariat'" />
      <DivOffNavItems v-else-if="role === 'Divisional Officer'" />
      <DivSecNavItems v-else-if="role === 'Divisional Secretariat'" />

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
import ProfileCard from "../../user/ProfileCard";
import LogoutButton from "../../user/LogoutButton";
import AdminNavItems from "./modules/AdminNavItems";
import DisOffNavItems from "./modules/DisOffNavItems";
import DisSecNavItems from "./modules/DisSecNavItems";
import DivSecNavItems from "./modules/DivSecNavItems";
import DivOffNavItems from "./modules/DivOffNavItems";

export default {
    name: "NavDrawer",
    components: {
        DivOffNavItems,
        DivSecNavItems,
        DisSecNavItems,
        DisOffNavItems,
        AdminNavItems,
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
        role() {
            return this.$store.getters["user/getRole"]
        }
    }
}
</script>

<style scoped>

</style>