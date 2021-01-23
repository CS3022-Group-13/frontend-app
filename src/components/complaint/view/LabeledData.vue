<template>
  <div>
  <span class="text-uppercase font-weight-bold" style="font-size: 12pt">
            <v-icon small>{{ icon }}</v-icon>
            {{label}}
          </span>
    <p class="black--text pl-5 pt-1 mb-4" style="font-size: 12pt; font-weight: 600">{{text}}</p>
  </div>
</template>

<script>
export default {
    name: "LabeledData",
    props: [
        'label',
        'icon',
        'text'
    ]
}
</script>

<style scoped>

</style>