<template>
    <div class="text-center" style="font-size:25px">
      <v-progress-circular
        :indeterminate="indeterminate === true"
        rotate=0
        size=64
        :value="value"
        width=6
        :color="color"
      >{{ value }}</v-progress-circular>
    </div>
</template>

<script>
  export default {
      name:"ProgressIndicator",
      props: [
          'value',
          'color',
          'indeterminate'
      ]
  }
</script>
