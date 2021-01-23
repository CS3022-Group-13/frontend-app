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
        <ActionMenu>
          <ActionButton
                  color="green"
                  class="ma-1"
                  @click="selectForAccept(item)"
          >
            Accept
          </ActionButton>
          <ActionButton
                  color="red"
                  class="ma-1"
                  @click="selectForReject(item)"
          >
            Reject
          </ActionButton>
        </ActionMenu>
      </template>
    </DataTable>

    <WriteLog
            title="Mark As Accepted"
            :show="dialogBoxAccept"
            :ref-no="selectedComplaint.refNo"
            @cancel="cancelSelect"
            @ok="markAsAccepted"
    />
    <WriteLog
            title="Reject Complaint"
            :show="dialogBoxReject"
            :ref-no="selectedComplaint.refNo"
            @cancel="cancelSelect"
            @ok="markAsRejected"
    />
  </v-container>
</template>

<script>
import {api} from "../../../api";
import DataTable from "../../../components/app/data-table/DataTable";
import ActionButton from "../../../components/app/data-table/ActionButton";
import ActionMenu from "../../../components/app/data-table/ActionMenu";
import WriteLog from "../../../components/app/dialogs/WriteLog";

export default {
    name: "AcceptComplaint",
    components: {
        WriteLog,
        ActionMenu,
        ActionButton,
        DataTable
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
                value: 'type'
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
                text: 'Division',
                value: 'assignedDiv'
            },
            {
                text: 'Actions',
                value: 'actions',
                align: 'center'
            }
        ],

        complaints: [],
        selectedComplaint: {},
        dialogBoxAccept: false,
        dialogBoxReject: false
    }),
    methods: {
        selectForAccept(item) {
            this.selectedComplaint = item
            this.dialogBoxAccept = true
        },
        selectForReject(item) {
            this.selectedComplaint = item
            this.dialogBoxReject = true
        },
        cancelSelect() {
            this.selectedComplaint = {}
            this.dialogBoxAccept = false
            this.dialogBoxReject = false
        },
        async markAsAccepted(log) {
            this.loading = true
            const status = await api.complaint.mark.markAsAccepted(this.selectedComplaint.complaintId, log)
            if (status.code !== 200) {
                this.$notify(status.message, 'error')
                this.loading = false
                return
            }
            this.$notify("Complaint Accepted", 'success')
            this.complaints = this.complaints.filter((c) => c.complaintId !== this.selectedComplaint.complaintId)
            this.dialogBoxAccept = false
            this.loading = false
        },
        async markAsRejected(log) {
            this.loading = true
            const status = await api.complaint.mark.markAsRejected(this.selectedComplaint.complaintId, log)
            if (status.code !== 200) {
                this.$notify(status.message, 'error')
                this.loading = false
                return
            }
            this.$notify("Complaint is marked as rejected", 'success')
            this.complaints = this.complaints.filter((c) => c.complaintId !== this.selectedComplaint.complaintId)
            this.dialogBoxReject = false
            this.loading = false
        }
    },
    async created() {
        this.loading = true
        const [complaintList, status] = await api.complaint.getComplaints({
            status: 'Awaiting Accept',
            assigned_div: this.$store.getters["user/getOffice"]
        })
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