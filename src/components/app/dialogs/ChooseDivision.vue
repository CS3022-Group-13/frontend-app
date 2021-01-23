<template>
  <DialogBox
          title="Assign a Divisional Office"
          ok="Choose"
          :show="show"
          @submit="choose"
          @cancel="$emit('cancel')"
  >
    <template v-slot:fields>
      <p>{{refNo}}</p>
      <v-select
              v-model="division"
              label="Select Divisional Office"
              :items="divisions"
              :rules="[
              d => d.length > 0? true : 'Cannot be empty!'
          ]"
      ></v-select>
    </template>
  </DialogBox>
</template>

<script>
import DialogBox from "./DialogBox";

export default {
    name: "ChooseDivision",
    components: {
        DialogBox
    },
    props: [
        'show',
        'item',
        'refNo'
    ],
    data: () => ({
        division: ''
    }),
    computed: {
        divisions() {
            return this.$store.getters["utils/getNameOnly_Divisions"]
        }
    },
    methods: {
        choose() {
            this.$emit('choose', this.division)
        }
    }
}
</script>