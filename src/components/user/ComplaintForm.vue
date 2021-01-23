<template>
  <v-container
      class="elevation-4  pa-0 white">
    <v-stepper v-model="stepCount">
      <v-stepper-header>
        <v-stepper-step :complete="stepCount > 1" step="1">Customer Details</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="stepCount > 2" step="2">Complaint Details</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Upload Evidences</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1" class="pa-10">
          <CustomerDetails class="ml-4 mr-4" @submit="submitCustomer" @cancel="cancel"/>
        </v-stepper-content>

        <v-stepper-content step="2" class="pa-10">
          <ComplaintDetails
                  class="ml-4 mr-4"
                  :loading="loading"
                  @submit="submitComplaint"
                  @cancel="cancel"
                  direct-only=true
          />
        </v-stepper-content>

        <v-stepper-content step="3" class="pa-10">
          <UploadEvidences class="ml-4 mr-4" :complaint-id="complaintData.complaintId"/>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
import CustomerDetails from "../complaint/new/CustomerDetails";
import ComplaintDetails from "../complaint/new/ComplaintDetails";
import UploadEvidences from "../complaint/new/UploadEvidences";
import {api} from "../../api";

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
