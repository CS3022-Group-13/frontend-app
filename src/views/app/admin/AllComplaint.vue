<template>
  <v-container class="pl-10 pr-10">
    <DataTable :loading="loading" :items="complaints" :headers="headers">
      <template v-slot:item-action="{item}">
        <ActionButton

                color="orange"
                class="ma-1"
                @click="$router.push({path: '/app/complaint/view/' + item.complaintId})"
        >
          View
        </ActionButton>
      </template>
    </DataTable>
  </v-container>
</template>

<script>
import {api} from "../../../api";
import DataTable from "../../../components/app/data-table/DataTable";
import ActionButton from "../../../components/app/data-table/ActionButton";

export default {
    name: "AllComplaint",
    components: {
        ActionButton,
        DataTable,
    },
    data: () => ({
        loading: false,
        search: '',
        headers: [
            {
                text: 'Ref',
                align: 'start',
                sortable: true,
                value: 'refNo',
                width: 80,
            },
            {
                text: 'Type',
                value: 'type',
                width: 180
            },
            {
                text: 'Date',
                value: 'createdDate'
            },
            {
                text: 'Subject',
                value: 'subject'
            },
            {
                text: 'Status',
                value: 'status'
            },
            {
                text: 'Actions',
                value: 'actions',
                align: 'center'
            }
        ],

        complaints: [],
        dialogBoxAssign: false,
        dialogBoxForward: false,
        dialogBoxReject: false,
        selectedComplaint: {},
        selectFor: ''
    }),
    async created() {
        this.loading = true
        const [complaintList, status] = await api.complaint.getComplaints({})
        if (status.code === 200) {
            this.complaints = complaintList
            this.complaints.forEach(c => {
                c.createdDate = new Date(c.createdDate).toLocaleDateString()
            })
        } else {
            this.$notify("Something Wrong!", 'error')
        }
        this.loading = false
    }
}
</script>