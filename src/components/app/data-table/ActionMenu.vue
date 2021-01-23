<template>
  <v-menu
          transition="slide-y-transition"
          offset-x
          rounded
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
              x-small
              color="green"
              v-bind="attrs"
              v-on="on"
      >
        <v-icon small>mdi-chevron-double-right</v-icon>
      </v-btn>
    </template>

    <div class="container">
      <slot class="container"/>

    </div>

  </v-menu>
</template>

<script>
export default {
    name: "ActionMenu"
}
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    align-items: center;
    background-color: #545863;
    padding: 5px;
}
</style>