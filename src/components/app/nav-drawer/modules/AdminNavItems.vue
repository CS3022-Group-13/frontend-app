<template>
  <div>
    <NavItem
            name="Find Complaint"
            icon="mdi-file-document-edit"
            link="/app/complaint/find-complaint"
    />
    <NavItem
            name="User Account"
            icon="mdi-account"
            link="/app/utils/user-accounts"
    />
    <NavItem
            name="Divisional Offices"
            icon="mdi-office-building"
            link="/app/utils/divisions"
    />
    <NavItem
            name="Grama N. Offices "
            icon="mdi-home"
            link="/app/utils/gn-offices"
    />
  </div>
</template>

<script>
import NavItem from "../NavItem";

export default {
    name: "AdminNavItems",
    components: {
        NavItem
    }
}
</script>

<style scoped>

</style>