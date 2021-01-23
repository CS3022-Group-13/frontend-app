<template>
  <v-tooltip right>
    <template v-slot:activator="{on, attrs}">
      <v-btn
              absolute
              v-bind="attrs"
              v-on="on"
              color="secondary"
              class="logo"
              to="/"
      >
        <v-icon color="black">mdi-home</v-icon>
        <span class="ml-2 text">Home</span>
      </v-btn>

    </template>
    <span>Visit Home Page</span>
  </v-tooltip>

</template>

<script>
export default {
    name: "HomeButton"
}
</script>

<style scoped>
.logo {
    top: 20px;
    left: 20px;
    border-radius: 12px;
}

.text {
    display: inline;
    color: black;
}

</style>