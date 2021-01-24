<template>
  <v-card>

    <v-card-title class="header">
      Add New Complaint
    </v-card-title>

    <v-card-text class="pa-0">
      <v-stepper v-model="stepCount" vertical>

        <v-stepper-step :complete="stepCount > 1" step="1">
          Customer Details
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-card color="lighten-1" class="mb-12 ml-10 mr-10 elevation-0">
            <CustomerDetails @submit="submitCustomer" @cancel="cancel"/>
          </v-card>
        </v-stepper-content>

        <v-stepper-step :complete="stepCount > 2" step="2">
          Grievance Details
        </v-stepper-step>
        <v-stepper-content step="2">
          <v-card color="lighten-1" class="mb-12 ml-10 mr-10 elevation-0">
            <ComplaintDetails :loading="loading" @submit="submitComplaint" @cancel="cancel"/>
          </v-card>
        </v-stepper-content>


        <v-stepper-step
                :complete="stepCount > 3"
                step="3"
        >
          Upload Evidences
        </v-stepper-step>
        <v-stepper-content step="3">
          <v-card color="lighten-1" class="mb-12 ml-10 mr-10 elevation-0">
            <UploadEvidences :complaint-id="complaintData.complaintId"/>
          </v-card>
        </v-stepper-content>

      </v-stepper>
    </v-card-text>
  </v-card>
</template>

<script>
import CustomerDetails from "../../../components/complaint/new/CustomerDetails";
import ComplaintDetails from "../../../components/complaint/new/ComplaintDetails";
import {api} from "../../../api";
import UploadEvidences from "../../../components/complaint/new/UploadEvidences";

export default {
    name: "AddComplaint",
    components: {
        UploadEvidences,
        ComplaintDetails,
        CustomerDetails
    },
    data: () => ({
        stepCount: 1,
        loading: false,
        complaintData: {
            complaintId: '',
            customerId: ''
        }
    }),
    methods: {
        async submitCustomer(customerId) {
            this.complaintData.customerId = customerId
            this.stepCount = 2
        },

        async submitComplaint(data) {
            this.loading = true
            Object.assign(this.complaintData, data)
            const [complaintId, status] = await api.complaint.addComplaint(this.complaintData)
            if (status.code !== 200) {
                this.$notify(status.message, 'error')
                this.loading = false
                return;
            }
            this.complaintData.complaintId = complaintId
            this.loading = false
            this.stepCount = 3
            this.$notify('Complaint Added Successfully', 'success')
        },

        cancel() {
            this.$router.back()
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
</style>