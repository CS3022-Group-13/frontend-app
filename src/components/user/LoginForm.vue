<template>
  <div>
    <v-container
        class="login-form-container elevation-4  pa-0">
      <v-form
          ref="form"
          v-model="valid"
          class="ma-4 pa-4"
          @submit.prevent="clickLogin"
      >
        <v-text-field
            prepend-icon="mdi-account-circle"
            v-model="username"
            label="Username"
            class="ma-1"
            type="text"
            required
        ></v-text-field>

        <v-text-field
            prepend-icon="mdi-lock"
            v-model="password"
            label="Password"
            type="password"
            class="ma-1"
            required
        ></v-text-field>


        <v-btn
            dark
            width="100%"
            type="submit"
            class="ma-2"
            color="#23689b"
            :loading="isTrying"
        >
          LOGIN
        </v-btn>
        <v-btn
            dark
            color="#23689b"
            width="100%"
            class="ma-2"
            to="/register"
        >
          REGISTER
        </v-btn>

      </v-form>
    </v-container>

  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data: () => ({
    valid: false,
    isTrying: false,

    username: '',
    password: ''
  }),
  methods: {
    async clickLogin() {
      let {username, password} = this
      this.isTrying = true
      const status = await this.$store.dispatch('user/login', {username, password});
      if (status.code === 200) {
        await this.$router.push('/app')
      } else {
        this.$vToastify.error(status.message, "Error")
      }
      this.isTrying = false
    }
  }
}
</script>

<style>
.login-form-container {
  background-color: #eeeeee;
  width: 350px;
  border-radius: 2px;
  overflow: hidden
}
</style>