<template>
  <div>
    <NavItem
            name="Review"
            icon="mdi-file-eye"
            link="/app/complaint/for-div-review"
    />
  </div>
</template>

<script>
import NavItem from "../NavItem";

export default {
    name: "DivSecNavItems",
    components: {
        NavItem
    }
}
</script>

<style scoped>

</style>