<template>
  <v-container class="pl-10 pr-10">
    <DataTable :headers="headers" :items="orders" :loading="loading">
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
    </DataTable>
  </v-container>
</template>

<script>
import {api} from "@/api";
import DataTable from "@/components/app/data-table/DataTable";
import ActionMenu from "@/components/app/data-table/ActionMenu";
import ActionButton from "@/components/app/data-table/ActionButton";

export default {
  name: "OrderList",
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
        text: 'Order ID',
        value: 'orderId'
      },
      {
        text: 'Customer',
        value: 'customerId'
      },
      {
        text: 'Status',
        value: 'orderStatus'
      }
    ],
    orders: []
  }),
  computed: {
    customerId() {
      return this.$store.state.customer.customerData.customerId
    }
  },
  async created() {
    console.log(this.customerId)
    this.loading = true
    const [orderList, status] = await api.order.viewDetails({customerId: this.customerId})
    console.log(orderList)
    if (status.code === 200) {
      this.orders = orderList
    } else {
      this.$vToastify.error(status.message, "Error")
    }
    this.loading = false
  }
}
</script>