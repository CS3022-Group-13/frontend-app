<template>
  <v-container fluid>
    <v-btn
            text
            small
            @click="$router.back()"
    >
      <v-icon>mdi-arrow-left-circle</v-icon>
      <span>Back</span>
    </v-btn>

    <v-btn
            text
            small
            @click="$router.forward()"
    >
      <v-icon>mdi-arrow-right-circle</v-icon>
      <span>Forward</span>
    </v-btn>

    <v-btn
            text
            small
            @click="$router.go(0)"
    >
      <v-icon>mdi-refresh-circle</v-icon>
      <span>Reload</span>
    </v-btn>

  </v-container>
</template>

<script>
export default {
    name: "AddressBar"
}
</script>