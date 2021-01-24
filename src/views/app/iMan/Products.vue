<template>
  <v-container class="pl-10 pr-10">
    <DataTable :loading="loading" :items="products" :headers="headers">
      <template v-slot:actions>
        <v-btn
            style="grid-column: 1/2"
            color="success"
            width="100"
            @click="dialogAddProduct = true"
        >
          <v-icon>mdi-sticker-plus</v-icon>
          <span class="ml-2"> Add</span>
        </v-btn>
      </template>
      <template v-slot:item-action="{item}">
        <ActionButton
            color="orange"
            class="ma-1"
            @click="selectForUpdate(item)"
        >
          Update
        </ActionButton>
        <ActionButton
            color="red"
            class="ma-1"
            @click="removeProduct(item)"
        >
          Remove
        </ActionButton>
      </template>
    </DataTable>

    <AddProduct
      :dialog="dialogAddProduct"
      @submit="submitAddProduct"
      @cancel="dialogAddProduct = false"
    />
    <UpdateProduct
        :dialog="dialogUpdateProduct"
        :item="selectedProduct"
        @submit="submitUpdateProduct"
        @cancel="dialogUpdateProduct = false"
    />
  </v-container>
</template>

<script>
import {api} from "../../../api";
import DataTable from "../../../components/app/data-table/DataTable";
import ActionButton from "../../../components/app/data-table/ActionButton";
import ActionMenu from "../../../components/app/data-table/ActionMenu";
import AddProduct from "../../../components/app/dialogs/AddProduct";
import UpdateProduct from "../../../components/app/dialogs/UpdateProduct";

export default {
  name: "Products",
  components: {
    ActionMenu,
    ActionButton,
    DataTable,
    AddProduct,
    UpdateProduct
  },
  data: () => ({
    loading: false,
    search: '',
    headers: [
      {
        text: 'Product Name',
        value: 'productName'
      },
      {
        text: 'Quantity',
        value: 'quantity'
      },
      {
        text: 'Unit Price (LKR)',
        value: 'unitPrice'
      },
      {
        text: 'Actions',
        value: 'actions',
        align: 'center'
      }
    ],

    products: [],
    dialogAddProduct: false,
    dialogUpdateProduct: false,
    selectedProduct: {},
    selectFor: ''
  }),
  methods: {
    selectForUpdate(item) {
        this.selectedProduct = item
        this.dialogUpdateProduct = true
    },
    async submitAddProduct(item) {
      this.loading = true
      console.log(item)
      const status = await api.product.addProduct(item)
      if (status.code !== 200) {
        this.$vToastify.error(status.message, 'error')
        this.loading = false
        return
      }
      this.$vToastify.info(status.message, 'Done')
      this.products.push(item)
      this.dialogBoxForward = false
      this.loading = false
    },
    async submitUpdateProduct(item) {
      this.loading = true
      const productId = item.productId
      delete item["productId"]
      const status = await api.product.updateProduct(productId, item)
      if (status.code !== 200) {
        this.$vToastify.error(status.message, 'error')
        this.loading = false
        return
      }
      this.$vToastify.info(status.message, 'Done')
      this.products.push(item)
      this.dialogBoxForward = false
      this.loading = false
    },
    async removeProduct(item) {
      this.loading = true
      console.log(item.productId)
      const status = await api.product.removeProduct(item.productId)
      if (status.code !== 200) {
        this.$vToastify.error(status.message, 'error')
        this.loading = false
        return
      }
      this.$vToastify.info(status.message, 'Done')
      this.products = this.products.filter(v => v.productId !== item.productId)
      this.dialogBoxForward = false
      this.loading = false
    },
  },
  async created() {
    this.loading = true
    const [products, status] = await api.product.getProducts({})
    if (status.code === 200) {
      this.products = products
    } else {
      this.$vToastify.error(status.message, 'Error')
    }
    this.loading = false
  }
}
</script>