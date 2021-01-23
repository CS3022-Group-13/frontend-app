<template>
  <v-data-table
      :loading="loading"
      :headers="headers"
      :items="items"
      :search="search"
      hide-default-footer
  >
    <template v-slot:top >
      <div class="table-heading" >
        <slot name="actions" style="grid-column: 1/3">
        </slot>
        <v-text-field
            style="grid-column: 3/4"
            append-icon="mdi-magnify"
            label="Quick Search"
            outlined
            hide-details
            rounded
            dense
            filled
            v-model="search"
        ></v-text-field>
      </div>
    </template>
    <template v-slot:item.actions="{ item }">
      <slot name="item-action" :item="item"></slot>
    </template>

  </v-data-table>
</template>

<script>
export default {
  name: "DataTable",
  props: [
    'loading',
    'headers',
    'items'
  ],
  data: () => ({
    search: ''
  })
}
</script>

<style scoped>
.table-heading {
  display: grid;
  grid-template-columns: 1fr 7fr 3fr;
  align-items: center;
  margin-bottom: 20px;
  padding: 5px;
}
</style>