<template>
    <v-menu
            offset-y
            origin="center top"
            transition="scale-transition"
            tile
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                    icon
                    small
                    color="black"
                    class="ma-2"
                    v-bind="attrs"
                    v-on="on"
            >
                <v-icon>mdi-dots-vertical-circle</v-icon>
            </v-btn>
        </template>
        <v-list dense color="secondary">
            <v-list-item link @click="logout">
                <v-list-item-icon>
                    <v-icon>mdi-power</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    export default {
        name: "AppMenu",
        methods: {
            async logout() {
                await this.$store.dispatch('user/logout')
                await this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>

</style>