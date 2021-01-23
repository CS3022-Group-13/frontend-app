<template>
  <v-form v-model="valid" ref="form" @submit.prevent="submit" lazy-validation>
    <v-row>
      <v-col>
        <v-text-field
                prepend-icon="mdi-rename-box"
                label="First Name"
                type="text"
                :rules="[s => s.length > 4 || 'Too short']"
                required
                v-model="userData.firstName"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
                prepend-icon="mdi-rename-box"
                label="Last Name"
                type="text"
                :rules="[s => s.length > 4 || 'Too short']"
                required
                v-model="userData.lastName"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-text-field
            prepend-icon="mdi-email"
            label="Email"
            type="text"
            :rules="rules.email"
            required
            v-model="userData.email"
    ></v-text-field>

    <v-text-field
            prepend-icon="mdi-phone"
            label="Telephone"
            type="text"
            v-model="userData.telephone"
            :rules="rules.telephone"
            required
    ></v-text-field>

    <v-row>
      <v-col>
        <v-select
                prepend-icon="mdi-format-list-bulleted"
                label="Type"
                :items="roles"
                :rules="[s => roles.includes(s) || 'Select user role']"
                v-model="userData.userType"
        ></v-select>
      </v-col>
      <v-col>
      </v-col>
    </v-row>


    <v-btn
            color="success"
            rounded
            class="ma-2"
            type="submit"
            :loading="loading"
            :disabled="!valid"
    >
      Register
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
export default {
    name: "RegStep2",
    props: [
        'loading'
    ],
    data: () => ({
        valid: false,
        userData: {
            firstName: '',
            lastName: '',
            email: '',
            telephone: '',
            userType: '',
        },
        roles: [
          "Administrator",
          "Sales Manager",
          "Inventory Manager"
        ],
        rules: {
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
    methods: {
        async submit() {
            await this.$refs.form.validate();
            if (this.valid) {
                this.$emit('submit', this.userData)
            }
        }
    }
}
</script>

<style scoped>

</style>