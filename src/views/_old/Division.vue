<template>
  <v-container class="pl-10 pr-10">
    <DataTable :headers="headers" :items="divisions" :loading="loading">
      <template v-slot:actions>
        <v-btn
                style="grid-column: 1/2"
                color="success"
                width="100"
                @click="dialogBox = true"
        >
          <v-icon>mdi-sticker-plus</v-icon>
          <span class="ml-2"> Add</span>
        </v-btn>
      </template>
      <template v-slot:item-action="{ item }">
        <ActionButton
                color="red"
                @click="removeDivision(item)"
        >Delete
        </ActionButton>
      </template>
    </DataTable>
    <AddOffice
            title="Add Divisional Office"
            :dialog="dialogBox"
            @submit="addNewDivision"
            @cancel="dialogBox = false"
    />
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
import AddOffice from "../../../components/app/dialogs/AddOffice";
import DataTable from "../../../components/app/data-table/DataTable";
import {api} from "../../../api";
import ActionButton from "../../../components/app/data-table/ActionButton";

export default {
    name: "Division",
    components: {
        ActionButton,
        DataTable,
        AddOffice
    },
    data: () => ({
        loading: false,
        search: '',
        headers: [
            {
                text: 'Divisional Office',
                align: 'start',
                sortable: true,
                value: 'name',
                width: 250,
            },
            {text: 'Address', value: 'address'},
            {
                text: 'Actions',
                value: 'actions',
                width: 100
            }
        ],

        dialogBox: false
    }),
    methods: {
        async addNewDivision(data) {
            this.loading = true
            const status = await this.$store.dispatch('utils/addDivision', data)
            if (status.code !== 200) {
                this.$notify(status.message, "error")
            }
            this.loading = false
        },
        async removeDivision(item) {
            const status = await this.$store.dispatch("utils/removeDivision", item)
            if (status.code !== 200) {
                this.$notify("Cannot remove divisional office", "error")
                return
            }
            this.$notify("Divisional Office Removed", "success")
        }
    },
    computed: {
        ...mapState({
            divisions: (state) => state.utils.divisions
        })
    }
}
</script>
