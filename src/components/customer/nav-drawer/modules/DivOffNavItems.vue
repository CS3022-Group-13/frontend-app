<template>
  <div>
    <NavItem
            name="Accept"
            icon="mdi-file-plus"
            link="/app/complaint/for-accept"
    />
    <NavItem
            name="In Progress"
            icon="mdi-file-sync"
            link="/app/complaint/in-progress"
    />
    <NavItem
            name="Reviewed"
            icon="mdi-file-certificate"
            link="/app/complaint/div-reviewed"
    />
  </div>
</template>

<script>
import NavItem from "../NavItem";

export default {
    name: "DivOffNavItems",
    components: {
        NavItem
    }
}
</script>

<style scoped>

</style>