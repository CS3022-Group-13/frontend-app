<template>
  <v-dialog
          persistent
          width="350px"
          class="rounded-0"
          v-model="show"
  >
    <v-card>
      <v-form ref="form" v-model="valid" @submit.prevent="submit">
        <v-card-title class="header">
          {{ title }}
        </v-card-title>
        <v-divider/>
        <v-card-text>
          <slot name="fields"></slot>
        </v-card-text>
        <v-divider/>
        <v-card-actions class="display-grid">
          <v-btn
                  small
                  color="success"
                  type="submit"
                  class="item1"
                  :disabled="!valid"
          >
            {{ ok }}
          </v-btn>
          <v-btn
                  small
                  color="warning"
                  class="item2"
                  @click="$emit('cancel')"
          >
            CANCEL
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    name: "DialogBox",
    props: [
        'show',
        'title',
        'ok'
    ],
    data: () => ({
        valid: false
    }),
    methods: {
        async submit() {
            console.log(this.valid)
            await this.$refs.form.validate();
            if (this.valid) {
                this.$emit('submit')
            }
        }
    }
}
</script>

<style scoped>

.header {
    background-color: #ffc324;
    text-transform: uppercase;
    font-weight: bold;
    border-bottom: #ff9524 solid;
    font-size: 13pt;
    padding-bottom: 7px;
}

.display-grid {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 3fr 1fr;
    align-items: center;
    padding-bottom: 15px;
    background-color: #ffc324;
}

.item1 {
    grid-column: 2/3;
}

.item2 {
    grid-column: 4/5;
}
</style>