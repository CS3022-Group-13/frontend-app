<template>
    <div>
       <v-btn
            :to="route"
            tile
            color="#51c2d5"
            >
              {{text}}
        </v-btn>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "CustomButton",
        props: ["text", "route"],
        computed: {
        }
    }
</script>

<style scoped>

</style>