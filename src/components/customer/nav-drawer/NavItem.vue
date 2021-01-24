<template>
    <v-list-item link :to="link">
        <v-list-item-icon>
            <v-icon>{{icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
            <v-list-item-title>{{name}}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
    export default {
        name: "NavItem",
        props: [
            'name',
            'icon',
            'link'
        ]
    }
</script>

<style scoped>

</style>