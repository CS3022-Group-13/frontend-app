<template>
    <v-form v-model="valid" @submit.prevent="submit" lazy-validation>
        <v-text-field
                prepend-icon="mdi-account-circle"
                label="Username"
                class="ma-1"
                type="text"
                required
                v-model="username"
                :error-messages="username_errors"

        ></v-text-field>

        <v-text-field
                prepend-icon="mdi-lock"
                ref="password"
                label="Password"
                type="password"
                class="ma-1"
                required
                v-model="password"
                :error-messages="password_errors"
        ></v-text-field>

        <v-text-field
                prepend-icon="mdi-lock"
                label="Confirm Password"
                type="password"
                class="ma-1"
                required
                v-model="confirmPassword"
                :error-messages="confirm_password_errors"
        ></v-text-field>

        <v-btn
                color="success"
                rounded
                class="ma-2"
                type="submit"
                :loading="loading"
                :disabled="!valid"
        >
            Continue
        </v-btn>

        <v-btn
                color="secondary"
                rounded
                class="ma-2"
                @click="$emit('cancel')"
        >
            Cancel
        </v-btn>
    </v-form>
</template>

<script>
    import {api} from "../../api";

    export default {
        name: "RegStep1",
        data: () => ({
            valid: false,
            loading: false,

            username: '',
            password: '',
            confirmPassword: '',

            username_errors: [],
            password_errors: [],
            confirm_password_errors: []
        }),
        methods: {
            async submit() {
                this.loading = true;
                await this.validateUsername()
                await this.validatePassword()
                await this.validateUsername()

                if (this.valid) {
                    const {username, password} = this
                    this.$emit('submit', {username, password})
                }
                this.loading = false;
            },

            async validateUsername() {
                if (this.username.length < 6) {
                    this.username_errors = ['Username must be at least 6 character long']
                    return;
                }

                const [res, status] = await api.user.checkUsername(this.username)
                if (status.code !== 200 || res !== false) {
                    this.username_errors = ['Username is taken']
                    return;
                }

                this.username_errors = []
            },

            async validatePassword() {
                if (this.password.length < 6) {
                    this.password_errors = ['Password must be at least 6 character long']
                    return;
                }

                if (this.confirmPassword !== this.password) {
                    this.confirm_password_errors = [`Password doesn't match`]
                }

                this.password_errors = []
                this.confirm_password_errors = []
            },
            async validateConfirmation() {
                if (this.confirmPassword !== this.password) {
                    this.confirm_password_errors = [`Password doesn't match`]
                    return;
                }
                this.confirm_password_errors = []
            }
        },
        watch: {
            'username': function () {
                this.validateUsername();
            },
            'password': function () {
                this.validatePassword();
            },
            'confirmPassword': function () {
                this.validateConfirmation();
            }
        }
    }
</script>

<style scoped>

</style>