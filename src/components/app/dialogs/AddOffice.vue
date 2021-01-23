<template>
  <DialogBox
    :title="title"
    :show="dialog"
    ok="ADD"
    @submit="submit"
    @cancel="$emit('cancel')"
  >
    <template v-slot:fields>
      <v-text-field
              label="Name"
              prepend-icon="mdi-rename-box"
              required
              v-model="item.name"
      />
      <v-text-field
              label="Address"
              prepend-icon="mdi-map-marker"
              v-model="item.address"
      />
    </template>
  </DialogBox>
</template>

<script>
import DialogBox from "./DialogBox";
export default {
    name: "AddOffice",
    components: {DialogBox},
    props: [
        'dialog',
        'title'
    ],
    data: () => ({
        item: {
            name: '',
            address: ''
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