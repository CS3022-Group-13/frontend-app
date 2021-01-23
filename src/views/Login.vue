<template>
    <v-app>
      <h1 class="page-header">Galle Public Grievance Management System</h1>
        <v-main class="bg2">
            <v-container
                    fluid
                    class="fill-height"
            >
                <v-spacer/>
                <LoggedInfo v-if="isAuth"/>
                <LoginForm v-else/>
                <v-spacer/>
            </v-container>
        </v-main>
        <HomeButton />
        <PopAlert/>
    </v-app>
</template>

<script>
    import store from '../store'
    import LoginForm from "../components/user/LoginForm.vue";
    import LoggedInfo from "../components/user/LoggedInfo";
    import PopAlert from "../components/PopAlert";
    import HomeButton from "../components/home/HomeButton";

    export default {
        name: 'Login',
        components: {
            HomeButton,
            PopAlert,
            LoginForm,
            LoggedInfo
        },
        computed: {
            isAuth() {
                return this.$store.getters["user/isAuth"]
            }
        },
        beforeRouteEnter(from, to, next) {
            store.dispatch('user/loadLocalStorage')
            next()
        }
    }
</script>

<style scoped>
  .page-header {
      position: absolute;
      z-index: 100;
      left: 150px;
      top: 20px;
      font-size: 18pt;
      color: #FF3A0050;
      /*-webkit-text-fill-color: white; !* Will override color (regardless of order) *!*/
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #000000AA;
      letter-spacing: 1px;
  }
</style>