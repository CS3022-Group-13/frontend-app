<template>
  <v-app>
    <v-main class="bg2">
      <v-container
              fluid
              class="fill-height"
      >
        <CustomerForm />
      </v-container>

    </v-main>
  </v-app>
</template>

<script>

import CustomerForm from "../../../components/customer/CustomerForm";

export default {
    name: "AddComplaint",
    components: {
      CustomerForm
    },
}
</script>

<style scoped>
</style>