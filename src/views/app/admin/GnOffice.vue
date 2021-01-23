<template>
  <v-container class="pl-10 pr-10">
    <DataTable :headers="headers" :items="gnOffices" :loading="loading">
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
                @click="removeGNOffice(item)"
        >Delete
        </ActionButton>
      </template>
    </DataTable>
    <AddOffice
            title="Add GN Office"
            :dialog="dialogBox"
            @submit="addNewGNOffice"
            @cancel="dialogBox = false"
    />
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
import AddOffice from "../../../components/app/dialogs/AddOffice";
import DataTable from "../../../components/app/data-table/DataTable";
import ActionButton from "../../../components/app/data-table/ActionButton";

export default {
    name: "GnOffice",
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
                text: 'Grama Niladhari Office',
                align: 'start',
                sortable: true,
                value: 'name',
                width: 250,
            },
            {
                text: 'Address',
                value: 'address'
            },
            {
                text: 'Actions',
                value: 'actions',
                width: 100
            }
        ],

        dialogBox: false,

    }),
    methods: {
        async addNewGNOffice(data) {
            this.loading = true
            const status = await this.$store.dispatch('utils/addGNOffice', data)
            if (status.code !== 200) {
                this.$notify(status.message, "error")
            }
            this.loading = false
            this.dialogBox = false
        },
        async removeGNOffice(item) {
            const status = await this.$store.dispatch("utils/removeGNOffice", item)
            if (status.code !== 200) {
                this.$notify("Cannot remove GN office", "error")
                return
            }
            this.$notify("GN Office Removed", "success")
        }
    },
    computed: {
        ...mapState({
            gnOffices: (state) => state.utils.gn_offices
        })
    }
}
</script>

<style scoped>
.table-heading {
    display: grid;
    grid-template-columns: 1fr 7fr 3fr;
}
</style>