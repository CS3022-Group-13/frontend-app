<template>
  <v-container class="pl-10 pr-10">
    <DataTable :headers="headers" :items="payments" :loading="loading">
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
            v-if="item.orderStatus === 'Placed'"
            color="yellow"
            @click="markPaid(item)"
            class="mr-1"
        > Set Paid
        </ActionButton>
        <ActionButton
            v-if="item.orderStatus === 'Paid'"
            :width="100"
            color="green"
            @click="markDelivered(item)"
        > Set Delivered
        </ActionButton>
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
        value: 'paymentId'
      },
      {
        text: 'Customer',
        value: 'customerId'
      },
      {
        text: 'Invoice',
        value: 'invoiceId'
      },
      {
        text: 'Amount',
        value: 'amount'
      },
    ],
    payments: []
  }),
  computed: {
    customerId() {
      return this.$store.state.customer.customerData.customerId
    }
  },
  async created() {
    this.loading = true
    const [paymentList, status] = await api.payment.findPayment({customerId: this.customerId})
    if (status.code === 200) {
      this.payments = paymentList
    } else {
      this.$vToastify.error(status.message, "Error")
    }
    this.loading = false
  }
}
</script>