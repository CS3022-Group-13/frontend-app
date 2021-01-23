<template>
    <v-row class="content-center">
        <v-btn
                v-bind:small="small"
                class="ma-2"
                width="90%"
                outlined
                @click="logout"
        >
          <v-icon small >mdi-power</v-icon> <span class="ml-2" v-show="!mini">LOGOUT</span>
        </v-btn>
    </v-row>
</template>

<script>
    export default {
        name: "LogoutButton",
        props: {
            small: Boolean,
            mini: {
                default: false,
                type: Boolean
            }
        },
        methods: {
            async logout() {
                await this.$store.dispatch('user/logout')
                await this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>
    .content-center {
        justify-content: center
    }
</style>