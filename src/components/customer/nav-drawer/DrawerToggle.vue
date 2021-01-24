<template>
    <div class="toggle--bg secondary">
        <v-btn icon color="dark"
               small
               v-if="opened" @click="$emit('toggle', false); opened = false"
        >
            <v-icon>mdi-chevron-double-left</v-icon>
        </v-btn>
        <v-btn icon color="dark"
               small
               v-else @click="$emit('toggle', true); opened = true"
        >
            <v-icon>mdi-chevron-double-right</v-icon>
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "DrawerToggle",
        props: [
            'drawer'
        ],
        data: () => ({
            opened: true
        })
    }
</script>

<style scoped>
    .toggle--bg {
        display: grid;
        justify-content: center;
        height: 100%;
        padding: 10px 10px;
        border-bottom-right-radius: 14px;
        border-top-right-radius: 5px;
    }
</style>