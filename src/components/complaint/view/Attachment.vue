<template>
  <v-row class="ma-3" >
    <v-btn
            small
            dark
            class="mr-2"
            height="32"
            :loading="loading"
            @click="download"
    >
      <v-icon color="green" small>mdi-download</v-icon>
    </v-btn>
    <v-chip
            label
            dark
    >
      {{ name }}
    </v-chip>

  </v-row>
</template>

<script>
import {api} from "../../../api";

export default {
    name: "Attachment",
    props: [
        'attachmentId',
        'contentType',
        'name'
    ],
    data: () => ({
        loading: false
    }),
    computed: {
        icon() {
            if (!this.contentType) return ''
            if (this.contentType.includes('image')) {
                return 'mdi-file-image'
            } else {
                return 'mdi-file-document'
            }
        }
    },
    methods: {
        async download() {
            this.loading = true;
            const [data, status] = await api.file.getAttachment(this.attachmentId);
            if (status.code !== 200) {
                this.$notify(status.message, 'error');
                this.loading = false;
                return;

            }
            const url = window.URL.createObjectURL(new Blob([data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', this.name);
            document.body.appendChild(link);
            link.click();
            this.loading = false;
        }
    }
}
</script>

<style scoped>

</style>