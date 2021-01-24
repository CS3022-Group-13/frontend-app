<template>
  <v-container class="pl-10 pr-10">
    <DataTable :headers="headers" :items="customers" :loading="loading">
      <template v-slot:actions>
        <v-btn
            style="grid-column: 1/2"
            color="success"
            width="100"
            disabled
            @click="dialogBox = true"
        >
          <v-icon>mdi-sticker-plus</v-icon>
          <span class="ml-2"> Add</span>
        </v-btn>
      </template>
      <template v-slot:item-action="{ item }">
        <ActionButton
            v-if="item.status"
            color="red"
            @click="disableUser(item)"
        >Disable
        </ActionButton>
        <ActionButton
            v-else
            color="green"
            @click="verifyUser(item)"
        > Verify
        </ActionButton>
      </template>
    </DataTable>
  </v-container>
</template>

<script>
import {api} from "../../../api";
import DataTable from "../../../components/app/data-table/DataTable";
import ActionMenu from "../../../components/app/data-table/ActionMenu";
import ActionButton from "../../../components/app/data-table/ActionButton";

export default {
  name: "UserList",
  components: {
    ActionButton,
    ActionMenu,
    DataTable
  },
  data: () => ({
    loading: false,
    search: '',
    headers: [
      {
        text: 'First Name',
        value: 'firstName'
      },
      {
        text: 'Last Name',
        value: 'lastName'
      },
      {
        text: 'Type',
        value: 'email'
      },
      {
        text: 'Actions',
        value: 'actions',
        align: 'center',
        width: 200
      }
    ],
    customers: []
  }),
  methods: {
    async verifyUser(customer) {
      this.loading = true;
      const status = await api.customer.updateCredentials(customer.customerId, {status: true})
      if (status.code === 200) {
        customer.status = 1
      } else {
        this.$vToastify.error(status.message, "Error")
      }
      this.loading = false;
    },

    async disableUser(customer) {
      this.loading = true;
      const status = await api.customer.updateCredentials(customer.customerId, {status: false})
      if (status.code === 200) {
        customer.status = 0
      }else {
        this.$vToastify.error(status.message, "Error")
      }
      this.loading = false;
    }
  },
  async created() {
    this.loading = true
    const [customerList, status] = await api.customer.getCustomer({})
    console.log(customerList)
    if (status.code === 200) {
      this.customers = customerList
    } else {
      this.$vToastify.error(status.message, "Error")
    }
    this.loading = false
  }
}
</script>