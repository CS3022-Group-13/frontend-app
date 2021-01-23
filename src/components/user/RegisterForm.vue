<template>
  <v-container
          class="elevation-4  pa-0 white">
    <v-stepper v-model="stepCount">
      <v-stepper-header>
        <v-stepper-step :complete="stepCount > 1" step="1">Credentials</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="stepCount > 2" step="2">Basic Information</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Verification</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1" class="pa-10">
          <RegStep1 @submit="submitStep1" @cancel="cancel"/>
        </v-stepper-content>

        <v-stepper-content step="2" class="pa-10">
          <RegStep2 @submit="submitStep2" @cancel="cancel" :loading="loading"/>
        </v-stepper-content>

        <v-stepper-content step="3" class="pa-10">
          <v-alert
                  color="success"
                  outlined
          >
            You are successfully registered as {{ userData.role }} user.
            Please contact an administrator to verify your account.
            After verification is done, You will be able to login to the system.
          </v-alert>

          <v-row class="justify-center">
            <v-btn
                    color="success"
                    width="150px"
                    class="ma-5"
                    to="/login"
            >
              LOGIN
            </v-btn>
          </v-row>

        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
import {api} from "../../api";
import RegStep1 from "../register/RegStep1";
import RegStep2 from "../register/RegStep2";

export default {
    name: "RegisterForm",
    components: {RegStep2, RegStep1},
    data: () => ({
        stepCount: 1,
        loading: false,
        userData: {}
    }),
    methods: {
        async submitStep1(data) {
            Object.assign(this.userData, data)
            this.stepCount = 2
        },

        async submitStep2(data) {
            Object.assign(this.userData, data)
            this.loading = true
            const [_, status] = await api.user.register(this.userData)
            if (status.code !== 200) {
                this.$notify(status.message, 'error')
                this.loading = false
                return
            }
            this.loading = false
            this.stepCount = 3
        },

        cancel() {
            this.$router.back();
        }
    }
}
</script>

<style scoped>
</style>