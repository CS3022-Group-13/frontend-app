<template>
    <div>
<!--        <v-btn to="/app" small color="success">DASHBOARD</v-btn>-->
        <v-btn rounded to="/login" small color="success">USER LOGIN</v-btn>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "LoginButton",
        computed: {
        }
    }
</script>

<style scoped>

</style>