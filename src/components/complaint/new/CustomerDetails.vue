<template>
  <v-form v-model="valid" ref="form" @submit.prevent="submit">

    <v-row style="display: flex;">
      <v-col
              cols="12"
              md="6"
      >
        <v-text-field
                label="NIC"
                required
                prepend-icon="mdi-card-account-details"
                :append-icon="actionIcon"
                @click:append="checkCustomer"
                v-model="customerData.nic"
                :rules="rules.nic"
                :loading="loadingCustomer"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
                v-model="customerData.fullName"
                label="Full name"
                prepend-icon="mdi-rename-box"
                required
                :rules="rules.noneEmpty"
                :disabled="alreadyExists"
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
                :disabled="alreadyExists"
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
                :disabled="alreadyExists"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
                v-model="customerData.address"
                label="Address"
                required
                prepend-icon="mdi-map-marker"
                :rules="rules.noneEmpty"
                :disabled="alreadyExists"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-select
                v-model="customerData.divisionalOffice"
                label="Divisional Secretariat"
                :items="divisions"
                prepend-icon="mdi-office-building-marker"
                required
                :rules="rules.noneEmpty"
                :disabled="alreadyExists"
        ></v-select>

      </v-col>
      <v-col>
        <v-select
                prepend-icon="mdi-home-account"
                label="GN Office"
                required
                :items="gnOffices"
                v-model="customerData.gnOffice"
                :rules="rules.noneEmpty"
                :disabled="alreadyExists"
        ></v-select>
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
        {{ submitButtonText }}
      </v-btn>

      <v-btn
              text
              width="100"
              color="secondary"
              class="ma-1"
              @click="cancel"
      >
        Cancel
      </v-btn>

    </v-row>
  </v-form>
</template>

<script>
import {api} from "../../../api";

export default {
    name: "CustomerDetails",
    data: () => ({
        valid: false,
        loading: false,
        loadingCustomer: false,
        alreadyExists: false,

        customerData: {
            customerId: '',
            fullName: '',
            nic: '',
            email: '',
            telephone: '',
            address: '',
            divisionalOffice: '',
            gnOffice: '',
        },

        rules: {
            nic: [
                s => s.length >= 10 || "Too short NIC number",
                // s => s.toLowerCase().includes('v') || "Invalid NIC number"
            ],
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
    computed: {
        divisions() {
            return this.$store.getters["utils/getNameOnly_Divisions"]
        },
        gnOffices() {
            return this.$store.getters["utils/getNameOnly_GnOffices"]
        },
        actionIcon() {
            if (this.loadingCustomer) {
                return 'mdi-spin mdi-chart-donut'
            } else {
                return 'mdi-checkbox-marked-circle-outline'
            }
        },
        submitButtonText() {
            if (this.customerData.customerId === '')
                return 'Save'
            return 'Use'
        }
    },
    methods: {
        async submit() {
            await this.$refs.form.validate();
            if (this.valid) {
                this.loading = true
                if (this.alreadyExists) {
                    this.$emit('submit', this.customerData.customerId);
                    return
                }
                delete this.customerData.customerId
                const [customerId, status] = await api.customer.addCustomer(this.customerData)
                if (status.code !== 200) {
                    this.$notify(status.message, 'error')
                    this.loading = false
                    return
                }
                this.$emit('submit', customerId);
                this.loading = false
                this.$notify('Customer Details are saved', 'success')
            }
        },
        cancel() {
            this.$emit('cancel')
        },
        async checkCustomer() {
            this.loadingCustomer = true
            const [data, status] = await api.customer.getCustomer({nic: this.customerData.nic})
            if (status.code !== 200) {
                this.$notify(status.message, 'error')
                this.loadingCustomer = false
                return;
            }
            if (data.length > 0) {
                this.alreadyExists = true
                Object.assign(this.customerData, data[0])
                console.log('found')
            } else if (this.alreadyExists) {
                this.alreadyExists = false
                for (let k in this.customerData) {
                    if (k === 'nic') continue
                    this.customerData[k] = ''
                }
            }
            this.loadingCustomer = false
        }
    },
    watch: {
        async 'customerData.nic'() {
            if (this.customerData.nic.length > 9) {
                await this.checkCustomer()
            }
        }
    }
}
</script>