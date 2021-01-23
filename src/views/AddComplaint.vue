<template>
  <v-app>
    <v-main class="bg2">
      <v-container
              fluid
              class="fill-height"
              style="padding-left: 20%; padding-right: 20%"
      >
        <ComplaintForm/>
      </v-container>

    </v-main>

    <PopAlert />
    <HomeButton/>

  </v-app>
</template>

<script>


import HomeButton from "../components/home/HomeButton";
import ComplaintForm from "../components/user/ComplaintForm";
import PopAlert from "../components/PopAlert";

export default {
    name: "AddComplaint",
    components: {
        PopAlert,
        ComplaintForm,
        HomeButton,
    },
    async created() {
        const status = await this.$store.dispatch('utils/loadAll')
        if (status.code !== 200) {
            this.$notify("Something Wrong!", "error")
        }
    }
}
</script>

<style scoped>
</style>