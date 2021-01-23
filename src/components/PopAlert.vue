<template>
  <v-snackbar
          right
          rounded
          timeout="7000"
          dark
          tile
          v-model="notifyData.isShow"
  >
    <v-alert width="103%" tile :type="notifyData.type" style="font-size: 11pt">
      {{ notifyData.text }}
      <template v-slot:close>
        <v-btn
                dark
                icon
                small
                class="ml-1"
                @click="notifyData.isShow = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-alert>
  </v-snackbar>
</template>

<script>
export default {
    name: "PopAlert",
    data: () => ({
        notifyData: {
            isShow: false,
            text: 'Welcome',
            type: 'info'
        }
    }),
    created() {
        this.$setListener(this.notifyData)
    }
}
</script>