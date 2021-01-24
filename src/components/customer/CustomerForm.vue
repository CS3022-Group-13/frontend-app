<template>
  <v-form v-model="valid" ref="form" @submit.prevent="submit" lazy-validation>

    <v-text-field
        prepend-icon="mdi-account-circle"
        label="Username"
        type="text"
        required
        v-model="customerData.username"
        :error-messages="username_errors"
    ></v-text-field>

    <v-text-field
        prepend-icon="mdi-lock"
        ref="password"
        label="Password"
        type="password"
        required
        v-model="customerData.password"
        :error-messages="password_errors"
    ></v-text-field>

    <v-text-field
        prepend-icon="mdi-lock"
        label="Confirm Password"
        type="password"
        required
        v-model="confirmPass"
        :error-messages="confirm_password_errors"
    ></v-text-field>

    <v-row>
      <v-col>
        <v-text-field
            v-model="customerData.firstName"
            label="First name"
            prepend-icon="mdi-rename-box"
            required
            :rules="rules.noneEmpty"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
            v-model="customerData.lastName"
            label="Last name"
            prepend-icon="mdi-rename-box"
            required
            :rules="rules.noneEmpty"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col
          cols="12"
          md="6"
      >
        <v-text-field
            v-model="customerData.email"
            label="Email"
            required
            prepend-icon="mdi-email"
            :rules="rules.email"
        ></v-text-field>
      </v-col>
      <v-col
          cols="12"
          md="6"
      >
        <v-text-field
            v-model="customerData.telephone"
            label="Telephone"
            required
            prepend-icon="mdi-phone"
            :rules="rules.telephone"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-divider/>
    <v-row class="mt-5">

      <v-btn
          color="success"
          class="ma-1"
          type="submit"
          width="100"
          :loading="loading"
          :disabled="!valid"
      >
        ADD
      </v-btn>

      <v-btn
          outlined
          width="100"
          color="primary"
          class="ma-1"
          @click="clear"
      >
        ClEAR
      </v-btn>

    </v-row>
  </v-form>
</template>

<script>
import {api} from "@/api";

export default {
  name: "CustomerForm",
  data: () => ({
    valid: false,
    loading: false,
    alreadyExists: false,

    customerData: {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      telephone: ''
    },
    confirmPass: "",
    username_errors: [],
    password_errors: [],
    confirm_password_errors: [],
    rules: {
      noneEmpty: [
        s => s.length > 0 || "Too short"
      ],
      telephone: [
        s => {
          const re = /^[+]{0,1}[0-9]*$/
          return re.test(String(s).toLowerCase()) || "Invalid telephone number";
        },
        s => s.length > 9 || "telephone number is too short",
        s => s.length < 14 || "telephone number is too long",
      ],
      email: [
        (email) => {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(email).toLowerCase()) || "Invalid email address";
        }
      ]
    }
  }),
  computed: {},
  methods: {
    async clear() {
      await this.$refs.form.reset()
      this.username_errors = []
      this.password_errors = []
      this.confirm_password_errors = []
    },

    async submit() {
      await this.$refs.form.validate();
      await this.validateUsername();
      await this.validateConfirmation();
      await this.validatePassword();

      if (this.valid) {
        this.loading = true

        const [customerId, status] = await api.customer.addCustomer(this.customerData)
        if (status.code !== 200) {
          this.$vToastify.error(status.message, 'Error')
          this.loading = false
          return
        }
        this.loading = false
        this.$vToastify.info('Customer account is added', 'Done')
      }
    },
    async validateUsername() {
      if (this.customerData.username.length < 5) {
        this.username_errors = ['Username must be at least 5 character long']
        return;
      }

      this.username_errors = []
    },
    async validatePassword() {
      if (this.customerData.password.length < 5) {
        this.password_errors = ['Password must be at least 5 character long']
        return;
      }

      if (this.confirmPass !== this.customerData.password) {
        this.confirm_password_errors = [`Password doesn't match`]
      }

      this.password_errors = []
      this.confirm_password_errors = []
    },
    async validateConfirmation() {
      if (this.confirmPass !== this.customerData.password) {
        this.confirm_password_errors = [`Password doesn't match`]
        return;
      }
      this.confirm_password_errors = []
    }
  },
  watch: {
    async 'customerData.username'() {
      await this.validateUsername()
    },
    async 'customerData.password'() {
      await this.validatePassword()
    },
    async 'confirmPass'() {
      await this.validateConfirmation()
    }
  }
}
</script>