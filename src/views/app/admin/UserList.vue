<template>
  <v-container class="pl-10 pr-10">
    <DataTable :headers="headers" :items="users" :loading="loading">
      <template v-slot:actions>
        <v-btn
            style="grid-column: 1/2"
            color="success"
            width="100"
            disabled
            @click="dialogBox = true"
        >
          <v-icon>mdi-sticker-plus</v-icon>
          <span class="ml-2"> Add</span>
        </v-btn>
      </template>
      <template v-slot:item-action="{ item }">
        <ActionButton
            v-if="item.verified"
            color="red"
            :disabled="item.userType === 'Administrator'"
            @click="disableUser(item)"
        >Disable
        </ActionButton>
        <ActionButton
            v-else
            color="green"
            @click="verifyUser(item)"
        > Verify
        </ActionButton>
        <ActionButton
            :width="80"
            color="yellow"
            class="ml-1"
            @click="resetPassword(item)"
        >Reset Pass
        </ActionButton>
      </template>
    </DataTable>
  </v-container>
</template>

<script>
import {api} from "../../../api";
import DataTable from "../../../components/app/data-table/DataTable";
import ActionMenu from "../../../components/app/data-table/ActionMenu";
import ActionButton from "../../../components/app/data-table/ActionButton";

export default {
  name: "UserList",
  components: {
    ActionButton,
    ActionMenu,
    DataTable
  },
  data: () => ({
    loading: false,
    search: '',
    headers: [
      {
        text: 'First Name',
        value: 'firstName'
      },
      {
        text: 'Last Name',
        value: 'lastName'
      },
      {
        text: 'Type',
        value: 'userType'
      },
      {
        text: 'Actions',
        value: 'actions',
        align: 'center',
      }
    ],
    users: []
  }),
  methods: {
    async verifyUser(user) {
      this.loading = true;
      const status = await api.user.verifyUser(user.userId)
      if (status.code === 200) {
        user.verified = 1
      }
      this.loading = false;
    },

    async disableUser(user) {
      this.loading = true;
      const status = await api.user.disableUser(user.userId)
      if (status.code === 200) {
        user.verified = 0
      }
      this.loading = false;
    },

    async resetPassword(user) {
      this.loading = true;
      const [pass, status] = await api.user.resetPassword(user.userId)
      if (status.code !== 200) {
        this.$vToastify.error(status.message, "Error")
        return
      }
      this.$vToastify.info({body: `Password reset success, '${pass}'`, title: "Done", canTimeout: false})
      this.loading = false;
    }
  },
  async created() {
    this.loading = true
    const [userList, status] = await api.user.getUser({})
    if (status.code === 200) {
      this.users = userList
    } else {
      this.$vToastify.error(status.message, "Error")
    }
    this.loading = false
  }
}
</script>