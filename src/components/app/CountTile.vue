<template>
  <v-card class="tile" :color="color">

    <v-icon v-if="loading" color="black" size="40">mdi-spin mdi-loading</v-icon>

    <h1 v-else>
      {{ count }}
    </h1>

    <v-card-subtitle class="font-weight-bold">
      {{ caption }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
    name: "CountTile",
    props: [
        'count',
        'caption',
        'color',
        'loading'
    ]
}
</script>

<style scoped>
.tile {
    display: grid;
    grid-template-rows: 5fr 1fr;
    grid-template-columns: 1fr;
    align-items: center;
    text-align: center;
    width: 160px;
    height: 150px;
    margin: 20px;
}

.tile > h1 {
    font-size: 40pt;
}
</style>