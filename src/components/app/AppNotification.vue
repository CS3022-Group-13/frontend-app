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
                <v-icon>mdi-bell-circle</v-icon>
            </v-btn>
        </template>
        <v-list dense color="secondary">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>No Notifications</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    export default {
        name: "AppNotification"
    }
</script>

<style scoped>

</style>