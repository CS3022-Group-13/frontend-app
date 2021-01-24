<template>
  <v-row class="pl-2 pr-2">
    <v-col cols="8" class="ma-0">

      <v-card>
        <v-card-title class="title-container pl-4 pr-4 pt-3 pb-2 primary elevation-2">
          <v-chip
                  label
                  color="blue"
                  style="grid-column: 1/2; justify-self: start"
          >
            <v-icon class="mr-2">mdi-timeline-check</v-icon>
            <span class="mr-2">{{ complaintData.status }}</span>
          </v-chip>
          <v-chip
                  label
                  color="green"
                  style="grid-column: 2/3; justify-self: end"
          >
            <v-icon class="pr-2">mdi-card-bulleted</v-icon>
            {{ complaintData.refNo }}
          </v-chip>
        </v-card-title>
        <v-card-text class="pt-4 pl-5 pr-5">
          <v-skeleton-loader
                  v-if="loading"
                  type="card-heading, list-item-two-line@3, card-heading"
          ></v-skeleton-loader>
          <div v-else>
            <LabeledData
                    icon="mdi-book-variant"
                    label="Subject"
                    :text="complaintData.subject"
            />
            <v-row>
              <v-col>
                <LabeledData
                        icon="mdi-sign-text"
                        label="Complaint Type"
                        :text="complaintData.type"
                />
              </v-col>
              <v-col>
                <LabeledData
                        icon="mdi-timeline-check"
                        label="Current Status"
                        :text="complaintData.status"
                />
              </v-col>
              <v-col>
                <LabeledData
                        icon="mdi-calendar-month-outline"
                        label="Created Date"
                        :text="dateFormat(complaintData.createdDate)"
                />
              </v-col>
            </v-row>
            <LabeledData
                    icon="mdi-view-headline"
                    label="Description"
                    :text="complaintData.description"
            />
            <v-row v-if="complaintData.assignedDiv">
              <v-col>
                <LabeledData
                        icon="mdi-google-maps"
                        label="Assigned Divisional Office"
                        :text="complaintData.assignedDiv"
                />
              </v-col>
              <v-col>
                <LabeledData
                        icon="mdi-calendar-month-outline"
                        label="Assigned Date"
                        :text="dateFormat(complaintData.assignedDate)"
                />
              </v-col>
            </v-row>
          </div>
        </v-card-text>

        <v-expansion-panels
                v-model="panel"
                multiple
        >
          <v-expansion-panel>
            <v-expansion-panel-header class="primary pa-0 pr-4">
              <v-card-title class="pl-4 pr-4 pt-3 pb-2 primary">
                <v-icon color="black" class="pr-3">mdi-calendar-check</v-icon>
                <span class="heading">Activity Log</span>
              </v-card-title>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="pl-0 pr-5">


              <v-timeline
                      dense
              >
                <v-slide-x-reverse-transition
                        group
                        hide-on-leave
                >
                  <v-timeline-item
                          v-for="(log, i) in activityLog"
                          :key="i"
                          small
                          fill-dot
                          color="cyan"
                  >
                    <v-alert
                            color="cyan"
                            value
                    >
                      <div>
                        <div>{{ log.subject }}</div>
                        <p class="text-caption mb-1">{{ log.description }}</p>
                        <v-divider/>
                        <div class="font-weight-normal" style="font-size: 9pt">
                          <strong>{{ log.updaterName }}</strong> @{{ datetimeFormat(log.updateAt) }}
                        </div>
                      </div>
                    </v-alert>
                  </v-timeline-item>
                </v-slide-x-reverse-transition>

              </v-timeline>

            </v-expansion-panel-content>
          </v-expansion-panel>

        </v-expansion-panels>
      </v-card>

    </v-col>
    <v-col cols="4">


      <v-card>
        <v-card-title class="pl-4 pr-4 pt-3 pb-2 primary elevation-2">
          <v-icon color="black" class="pr-3"> mdi-account</v-icon>
          <span class="heading">Customer Details</span>
        </v-card-title>

        <v-skeleton-loader
                v-if="loadingCustomer"
                type="card-heading, list-item-two-line@4, actions"
        ></v-skeleton-loader>
        <v-card-text
                class="pt-3"
                v-else
        >
          <LabeledData
                  icon="mdi-rename-box"
                  label="Full Name"
                  :text="customerData.fullName"
          />
          <LabeledData
                  icon="mdi-rename-box"
                  label="NIC"
                  :text="customerData.nic"
          />
          <LabeledData
                  icon="mdi-rename-box"
                  label="Email Address"
                  :text="customerData.email"
          />
          <LabeledData
                  icon="mdi-rename-box"
                  label="Telephone"
                  :text="customerData.telephone"
          />
          <LabeledData
                  icon="mdi-rename-box"
                  label="Address"
                  :text="customerData.address"
          />
        </v-card-text>

        <v-card-title class="pl-4 pr-4 pt-3 pb-2 primary elevation-2">
          <v-icon color="black" class="pr-3">mdi-file-document</v-icon>
          <span class="heading">Attachment Details</span>
        </v-card-title>

        <v-skeleton-loader
                v-if="loadingAttachments"
                type="list-item-two-line@2"
        ></v-skeleton-loader>
        <div class="pa-2 pb-4">
          <Attachment
                  v-for="att in attachmentDetails"
                  :key="att.attachmentId"
                  :attachment-id="att.attachmentId"
                  :content-type="att.contentType"
                  :name="att.originalName"
          />
        </div>
      </v-card>
    </v-col>
  </v-row>

</template>

<script>
import {api} from "../../api";
import LabeledData from "../../components/complaint/view/LabeledData";
import Attachment from "../../components/complaint/view/Attachment";

export default {
    name: "ViewComplaint",
    components: {
        Attachment,
        LabeledData
    },
    data: () => ({
        panel: [],
        loading: true,
        loadingCustomer: true,
        loadingAttachments: true,
        complaintData: {
            complaintId: '',
            refNo: 'XXX/XX/XX/XXX',
            type: '',
            status: 'Status',
            subject: '',
            description: '',
            createdDate: new Date(),
            assignedDiv: '',
            assignedDate: new Date()
        },
        customerData: {
            customerId: '',
            fullName: '',
            nic: '',
            email: '',
            telephoneNumber: '',
            address: ''
        },
        activityLog: [],
        attachments: [],
        attachmentDetails: [],

    }),
    computed: {
        complaintId() {
            return this.$router.currentRoute.params.complaintId
        }
    },
    methods: {
        async loadComplaintData() {
            const [data, status] = await api.complaint.getFullDetails(this.complaintId)
            if (status.code !== 200) {
                this.$notify(status.message, 'error')
                return false;
            }

            this.customerData.customerId = data.customerId;
            this.activityLog = data.activityLog;
            this.attachments = data.attachments;

            delete data.customerId;
            delete data.activityLog;
            delete data.attachments;

            Object.assign(this.complaintData, data);
            return true;
        },
        async loadCustomerData() {
            const [data, status] = await api.customer.getCustomer({customerId: this.customerData.customerId})
            if (status.code !== 200) {
                this.$notify(status.message, 'error')
                return true
            }
            this.customerData = data[0]
            return false;
        },
        async loadAttachmentData() {
            for (const att of this.attachments) {
                const [data, status] = await api.file.getAttachmentDetails(att);
                if (status.code !== 200) {
                    this.$notify(status.message, 'error')
                    continue;
                }
                this.attachmentDetails.push(data)
            }
        },
        dateFormat(date) {
            const d = new Date(date)
            return `${d.getDate()} - ${d.getMonth()} - ${d.getFullYear()}`
        },
        datetimeFormat(date) {
            const d = new Date(date)
            return `${d.toLocaleTimeString()} (${d.toLocaleDateString()})`
        }
    },
    async created() {
        await this.loadComplaintData();
        this.loading = false
        await this.loadCustomerData()
        this.loadingCustomer = false
        await this.loadAttachmentData()
        this.loadingAttachments = false
    }
}
</script>

<style scoped>
.title-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    justify-items: center;
}
</style>