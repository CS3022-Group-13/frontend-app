<template>
  <DialogBox
      title="Update Product"
      :show="dialog"
      ok="Update"
      @submit="submit"
      @cancel="$emit('cancel')"
  >
    <template v-slot:fields>
      <v-text-field
          label="Product Name"
          prepend-icon="mdi-rename-box"
          required
          v-model="item.productName"
      />
      <v-text-field
          label="Quantity"
          prepend-icon="mdi-rename-box"
          required
          v-model="item.quantity"
      />
      <v-text-field
          label="Unit Price"
          prepend-icon="mdi-map-marker"
          v-model="item.unitPrice"
      />
    </template>
  </DialogBox>
</template>

<script>
import DialogBox from "./DialogBox";

export default {
  name: "UpdateProduct",
  components: {DialogBox},
  props: [
      'item',
      'dialog'
  ],
  data: () => ({
    item: {
      productId: '',
      productName: '',
      quantity: '',
      unitPrice: ''
    }
  }),
  methods: {
    submit() {
      this.$emit('submit', {...this.item})
      this.$emit('cancel')
    }
  }
}
</script>