<template>
    <v-container
            class="login-form-container elevation-4  pa-7">

        <ProfileCard/>

        <v-row class="content-center">
            <v-btn
                    dark
                    color="success"
                    class="ma-2"
                    width="90%"
                    to="/customer"
            >
                DASHBOARD
            </v-btn>
        </v-row>

        <LogoutButton/>

    </v-container>
</template>

<script>
    import ProfileCard from "@/components/customer/ProfileCard.vue";
    import LogoutButton from "@/components/customer/LogoutButton.vue";

    export default {
        name: "LoggedInfo",
        components: {
            ProfileCard,
            LogoutButton
        }
    }
</script>

<style scoped>
    .content-center {
        justify-content: center
    }

    .profile-card {
        margin-bottom: 12px;
        padding: 0;
        width: 95%;
    }
</style>