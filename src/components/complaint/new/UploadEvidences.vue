<template>
  <v-container>
    <div v-for="at in attachments" :key="at.key" class="grid-row">
      <AttachmentUpload @uploaded="(id) => uploaded(id, at)" class="file-input"/>
      <v-btn
              class="save-button"
              color="success"
              :loading="at.saving"
              :disabled="at.attachmentId === '' || at.saved"
              @click="save(at)"
      >Save</v-btn>
    </div>
  </v-container>
</template>

<script>
import AttachmentUpload from "./AttachmentUpload";
import {api} from "../../../api";

export default {
    name: "UploadEvidences",
    components: {
        AttachmentUpload
    },
    props: [
        'complaintId'
    ],
    data: () => ({
        attachments: [
            {
                key: 0,
                attachmentId: '',
                saved: false,
                saving: false
            }]
    }),
    methods: {
        async save(item) {
            item.saving = true
            const status = await api.complaint.addAttachment(this.complaintId, item.attachmentId)
            if (status.code !== 200) {
                this.$notify(status.message, 'error')
                item.saving = false
                return;
            }
            item.saved = true
            item.saving = false
            this.$notify('Attachment is saved in complaint', 'success')
        },
        uploaded(attachmentId, item) {
            item.attachmentId = attachmentId
            this.attachments.push(
                {
                    key: this.attachments.length,
                    attachmentId: '',
                    saved: false,
                    saving: false
                }
            )
        }
    },
}
</script>

<style scoped>
.grid-row {
    display: grid;
    grid-template-columns: 1fr 6fr .2fr 1fr 1fr;
    align-items: center;
}

.file-input {
    grid-column: 2/3;
}

.save-button {
    grid-column: 4/5;
}
</style>