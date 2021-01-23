<template>
  <v-file-input
          class="ma-2 white--text"
          prepend-inner-icon="mdi-file-document"
          prepend-icon=""
          show-size
          dense
          hide-details
          outlined
          label="Click for select a file"
          :disabled="uploaded"
          :append-icon="actionIcon"
          v-model="file"
          @click:append="upload"
  />
</template>

<script>
import {api} from "../../../api";

export default {
    name: "AttachmentUpload",
    data: () => ({
        file: null,
        uploaded: false,
        uploading: false
    }),
    computed: {
      actionIcon() {
          if (this.uploading) {
              return 'mdi-spin mdi-loading'
          } else if (!this.uploaded) {
              return 'mdi-cloud-upload'
          } else {
              return 'mdi-check-circle'
          }
      }
    },
    methods: {
        async upload() {
            if (this.file && !this.uploaded) {
                this.uploading = true
                const [attachmentId, status] = await api.file.uploadAttachment(this.file)
                if (status.code !== 200) {
                    this.$notify(status.message, 'error')
                    this.uploading = false
                    return
                }
                this.uploading = false
                this.uploaded = true
                this.$emit('uploaded', attachmentId)
                this.$notify('Attachment Uploaded Successfully', 'success')
            }
        }
    }
}
</script>

<style scoped>

</style>