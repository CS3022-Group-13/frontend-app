<template>
  <v-container class="pl-10 pr-10">
    <v-row>
      <v-col class="ma-2">
        <v-btn :loading="loading" @click="placeOrder" color="primary">Place Order</v-btn>
      </v-col>
      <v-col class="ma-2">
        <h3> Total Price (LKR): {{ total }}</h3>
      </v-col>
      <v-col class="ma-2" cols="6">
      </v-col>
    </v-row>

    <DataTable :headers="headers" :items="selectedProducts" :loading="loading">
<!--      <template v-slot:item-action="{ item }">-->
<!--        <ActionButton-->
<!--            color="yellow"-->
<!--            @click="markPaid(item)"-->
<!--            class="mr-1"-->
<!--        > Set Paid-->
<!--        </ActionButton>-->
<!--      </template>-->
    </DataTable>
    <DataTable :headers="headers" :items="products" :loading="loading">
      <template v-slot:item-action="{ item }">
        <ActionButton
            color="blue"
            @click="addToCart(item)"
            class="mr-1"
        > ADD
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
        text: 'Product',
        value: 'productName'
      },
      {
        text: 'Quantity',
        value: 'quantity'
      },
      {
        text: 'Unit Price',
        value: 'unitPrice'
      },
      {
        text: 'Actions',
        value: 'actions',
        align: 'center',
        width: 200
      }
    ],
    products: [],
    selectedProducts: []
  }),
  computed: {
    total() {
      let price = 0
      for (let item of this.selectedProducts) {
        price += item.quantity * item.unitPrice
      }
      return price
    },
    customerId() {
      return this.$store.state.customer.customerData.customerId
    }

  },
  methods: {
    async placeOrder() {
      this.loading = true;
      const status = await api.order.placeOrder({
        customerId: this.customerId,
        orderTotal: this.total,
        orderItems: this.selectedProducts.map(p => {
          let p2 = {...p}
          delete p2["productName"]
          return p2
        })
      })
      if (status.code === 200) {
        this.$vToastify.info("Order Placed", "Done")
      } else {
        this.$vToastify.error(status.message, "Error")
      }
      this.loading = false;
    },
    async addToCart(item) {
      item.quantity -= 1
      for (let selectedItem of this.selectedProducts) {
        if (selectedItem.productId === item.productId) {
          selectedItem.quantity += 1
          return
        }
      }
      this.selectedProducts.push({...item, quantity: 1})
    },
  },
  async created() {
    this.loading = true
    const [productList, status] = await api.product.getProducts({})
    if (status.code === 200) {
      this.products = productList
    } else {
      this.$vToastify.error(status.message, "Error")
    }
    this.loading = false
  }
}
</script>