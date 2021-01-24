<template>
  <v-container class="pl-10 pr-10">
    <DataTable :loading="loading" :items="materials" :headers="headers">
      <template v-slot:actions>
        <v-btn
            style="grid-column: 1/2"
            color="success"
            width="100"
            @click="dialogAddMaterial = true"
        >
          <v-icon>mdi-sticker-plus</v-icon>
          <span class="ml-2"> Add</span>
        </v-btn>
      </template>
      <template v-slot:item-action="{item}">
        <ActionButton
            color="orange"
            class="ma-1"
            @click="selectForUpdate(item)"
        >
          Update
        </ActionButton>
        <ActionButton
            color="red"
            class="ma-1"
            @click="removeMaterial(item)"
        >
          Remove
        </ActionButton>
      </template>
    </DataTable>

    <AddMaterial
      :dialog="dialogAddMaterial"
      @submit="submitAddMaterial"
      @cancel="dialogAddMaterial = false"
    />
    <UpdateMaterial
        :dialog="dialogUpdateMaterial"
        :item="selectedMaterial"
        @submit="submitUpdateMaterial"
        @cancel="dialogUpdateMaterial = false"
    />
  </v-container>
</template>

<script>
import {api} from "../../../api";
import DataTable from "../../../components/app/data-table/DataTable";
import ActionButton from "../../../components/app/data-table/ActionButton";
import ActionMenu from "../../../components/app/data-table/ActionMenu";
import AddMaterial from "../../../components/app/dialogs/AddMaterial";
import UpdateMaterial from "../../../components/app/dialogs/UpdateMaterial";

export default {
  name: "Products",
  components: {
    ActionMenu,
    ActionButton,
    DataTable,
    AddMaterial,
    UpdateMaterial
  },
  data: () => ({
    loading: false,
    search: '',
    headers: [
      {
        text: 'Material Name',
        value: 'materialName'
      },
      {
        text: 'Quantity',
        value: 'quantity'
      },
      {
        text: 'Unit Price (LKR)',
        value: 'unitPrice'
      },
      {
        text: 'Actions',
        value: 'actions',
        align: 'center'
      }
    ],

    materials: [],
    dialogAddMaterial: false,
    dialogUpdateMaterial: false,
    selectedMaterial: {},
  }),
  methods: {
    selectForUpdate(item) {
        this.selectedMaterial = item
        this.dialogUpdateMaterial = true
    },
    async submitAddMaterial(item) {
      this.loading = true
      console.log(item)
      const status = await api.material.addMaterial(item)
      if (status.code !== 200) {
        this.$vToastify.error(status.message, 'error')
        this.loading = false
        return
      }
      this.$vToastify.info(status.message, 'Done')
      this.materials.push(item)
      this.dialogBoxForward = false
      this.loading = false
    },
    async submitUpdateMaterial(item) {
      this.loading = true
      const materialId = item.materialId
      delete item["materialId"]
      const status = await api.material.updateMaterial(materialId, item)
      if (status.code !== 200) {
        this.$vToastify.error(status.message, 'error')
        this.loading = false
        return
      }
      this.$vToastify.info(status.message, 'Done')
      this.materials.push(item)
      this.dialogUpdateMaterial = false
      this.loading = false
    },
    async removeMaterial(item) {
      this.loading = true
      console.log(item.materialId)
      const status = await api.material.updateMaterial(item.materialId)
      if (status.code !== 200) {
        this.$vToastify.error(status.message, 'error')
        this.loading = false
        return
      }
      this.$vToastify.info(status.message, 'Done')
      this.materials = this.materials.filter(v => v.materialId !== item.materialId)
      this.loading = false
    },
  },
  async created() {
    this.loading = true
    const [materials, status] = await api.material.getMaterials({})
    console.log(materials)
    if (status.code === 200) {
      this.materials = materials
    } else {
      this.$vToastify.error(status.message, 'Error')
    }
    this.loading = false
  }
}
</script>