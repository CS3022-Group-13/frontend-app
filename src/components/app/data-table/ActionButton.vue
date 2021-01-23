<template>
  <v-btn
          x-small
          :width="width"
          :color="color"
          :disabled="disabled"
          @click="$emit('click')"
  >
    <slot/>
  </v-btn>
</template>

<script>
export default {
    name: "ActionButton",
    props: {
        width: {
            type: Number,
            default: 70
        },
        color: {
            type: String,
            default: 'orange'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>

</style>