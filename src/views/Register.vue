<template>
    <v-app>
        <v-main class="bg4">
            <v-container
                    fluid
                    class="fill-height"
                    style="padding-left: 25%; padding-right: 25%"
            >
                <RegisterForm/>
            </v-container>

        </v-main>
        <HomeButton />

    </v-app>
</template>

<script>
    import RegisterForm from "../components/user/RegisterForm";
    import HomeButton from "../components/home/HomeButton";

    export default {
        name: "Register",
        components: {
            HomeButton,
            RegisterForm
        },
        async created() {
            const status = await this.$store.dispatch('utils/loadAll')
            if (status.code !== 200) {
                this.$notify("Something Wrong!", "error")
            }
        }
    }
</script>

<style scoped>
</style>