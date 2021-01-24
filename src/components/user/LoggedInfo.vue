<template>
  <v-container class="login-form-container elevation-4 pa-7">
    <ProfileCard />

    <v-row class="content-center">
      <v-btn dark color="success" class="ma-2" width="90%" @click="goDashboard">
        DASHBOARD
      </v-btn>
    </v-row>

    <LogoutButton />
  </v-container>
</template>

<script>
    import ProfileCard from "@/components/user/ProfileCard.vue";
    import LogoutButton from "@/components/user/LogoutButton.vue";

    export default {
        name: "LoggedInfo",
        components: {
            ProfileCard,
            LogoutButton
        },
        methods: {
            async goDashboard() {
                const userType = this.$store.getters["user/getType"]
                switch (userType) {
                case "Administrator":
                    await this.$router.push('/admin')
                    break
                case "Sales Manager":
                    await this.$router.push('/sales')
                    break
                case "Inventory Manager":
                    await this.$router.push('/inventory')
                    break
                }
            }
        }
    }
</script>

<style scoped>
.content-center {
  justify-content: center;
}

.profile-card {
  margin-bottom: 12px;
  padding: 0;
  width: 95%;
}
</style>