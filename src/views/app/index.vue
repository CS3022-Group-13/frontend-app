<template>
  <v-app>
    <v-app-bar
            color="primary"
            class="pa-0"
            dense
            flat
            app
    >
      <DrawerToggle
              :drawer="drawer"
              @toggle="(args) => this.drawer = args"
      />

      <AddressBar class="ma-1"/>

      <v-spacer/>

      <v-btn
              icon
              small
              color="black"
              to="/"
      >
        <v-icon>mdi-home-circle</v-icon>
      </v-btn>

      <AppMenu/>
    </v-app-bar>

    <NavDrawer :toggle="drawer" />

    <v-main class="secondary">
      <div class="main fill-height">
        <router-view/>
      </div>
    </v-main>
  </v-app>

</template>

<script>
import store from "../../store"
import NavDrawer from "../../components/app/nav-drawer/NavDrawer";
import DrawerToggle from "../../components/app/nav-drawer/DrawerToggle";
import AddressBar from "../../components/app/AddressBar";
import AppMenu from "../../components/app/AppMenu";
import AppNotification from "../../components/app/AppNotification";

export default {
    name: "App",
    components: {
        AppNotification,
        AppMenu,
        AddressBar,
        NavDrawer,
        DrawerToggle,
    },
    data: () => ({
        drawer: true
    }),

    async beforeRouteEnter(from, to, next) {
        await store.dispatch('user/loadLocalStorage');
        if (store.getters['user/isAuth'] === false) {
            next('/login');
            return;
        }
        next();
    },
}
</script>

<style scoped>
.main {
    padding: 10px;
    border-top-left-radius: 6px;
    background-color: white;
}


</style>