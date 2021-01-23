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
                  @click="selectForApprove(item)"
          >
            Approve
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
            title="Mark As Approved"
            :show="dialogBoxApprove"
            :ref-no="selectedComplaint.refNo"
            @cancel="cancelSelect"
            @ok="markAsApproved"
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
    name: "ApproveComplaint",
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
        dialogBoxApprove: false,
        dialogBoxReject: false
    }),
    methods: {
        selectForApprove(item) {
            this.selectedComplaint = item
            this.dialogBoxApprove = true
        },
        selectForReject(item) {
            this.selectedComplaint = item
            this.dialogBoxReject = true
        },
        cancelSelect() {
            this.selectedComplaint = {}
            this.dialogBoxApprove = false
            this.dialogBoxReject = false
        },
        async markAsApproved(log) {
            this.loading = true
            const status = await api.complaint.mark.markAsApproved(this.selectedComplaint.complaintId, log)
            if (status.code !== 200) {
                this.$notify(status.message, 'error')
                this.loading = false
                return
            }
            this.$notify("Complaint Approved", 'success')
            this.complaints = this.complaints.filter((c) => c.complaintId !== this.selectedComplaint.complaintId)
            this.dialogBoxApprove = false
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
        const [complaintList, status] = await api.complaint.getComplaints({status: 'Awaiting Approval'})
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