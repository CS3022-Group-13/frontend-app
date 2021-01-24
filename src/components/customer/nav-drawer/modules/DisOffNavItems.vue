<template>
  <div>
    <NavItem
            name="Add New"
            icon="mdi-file-plus"
            link="/app/complaint/create-new"
    />
    <NavItem
            name="Draft"
            icon="mdi-file-document-edit"
            link="/app/complaint/drafts"
    />
    <NavItem
            name="Approved"
            icon="mdi-file-certificate"
            link="/app/complaint/approved"
    />
    <NavItem
            name="Reviewed"
            icon="mdi-file-eye"
            link="/app/complaint/reviewed"
    />
    <NavItem
            name="Solved"
            icon="mdi-file-check"
            link="/app/complaint/solved"
    />
    <NavItem
            name="Rejected"
            icon="mdi-file-remove"
            link="/app/complaint/rejected"
    />
  </div>
</template>

<script>
import NavItem from "../NavItem";

export default {
    name: "DisOffNavItems",
    components: {
        NavItem
    }
}
</script>

<style scoped>

</style>