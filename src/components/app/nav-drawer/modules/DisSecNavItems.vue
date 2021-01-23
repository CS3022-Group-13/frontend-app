<template>
  <div>
    <NavItem
            name="Approve"
            icon="mdi-file-certificate"
            link="/app/complaint/for-approve"
    />
    <NavItem
            name="Review"
            icon="mdi-file-eye"
            link="/app/complaint/for-review"
    />
  </div>
</template>

<script>
import NavItem from "../NavItem";

export default {
    name: "DisSecNavItems",
    components: {NavItem}
}
</script>

<style scoped>

</style>