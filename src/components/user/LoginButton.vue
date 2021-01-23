<template>
    <div>
<!--        <v-btn to="/app" small color="success">DASHBOARD</v-btn>-->
        <!-- <v-btn  small color="success">USER LOGIN</v-btn> -->
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
        name: "LoginButton",
        props: ["text", "route"],
        computed: {
        }
    }
</script>

<style scoped>

</style>