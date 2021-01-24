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

      <v-spacer />

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

    <NavDrawer :toggle="drawer">
        <NavItem name="Dashboard" icon="mdi-view-dashboard" link="/customer"/>  
        <NavItem name="Place Order" icon="mdi-account" link="/customer/place-order"/>  
        <NavItem name="Payment Details" icon="mdi-account" link="/customer/payments"/>  
        <NavItem name="Order Details" icon="mdi-account" link="/customer/orders"/>  
    </NavDrawer>

    <v-main class="secondary">
      <div class="main fill-height">
        <router-view/>
      </div>
    </v-main>

  </v-app>

</template>

<script>
import store from "../../store"
import NavDrawer from "../../components/customer/nav-drawer/NavDrawer";
import DrawerToggle from "../../components/customer/nav-drawer/DrawerToggle";
import AddressBar from "../../components/app/AddressBar";
import AppMenu from "../../components/app/AppMenu";
import AppNotification from "../../components/app/AppNotification";
import NavItem from "@/components/customer/nav-drawer/NavItem";

export default {
    name: "App",
    components: {
        AppNotification,
        AppMenu,
        AddressBar,
        NavDrawer,
        DrawerToggle,
        NavItem
    },
    data: () => ({
        drawer: true
    }),

    async beforeRouteEnter(from, to, next) {
        await store.dispatch('customer/loadLocalStorage');
        if (store.getters['customer/isAuth'] === false) {
            next('/login/customer');
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