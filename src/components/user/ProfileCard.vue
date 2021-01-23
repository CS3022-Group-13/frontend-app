<template>
    <v-container class="profile-card">
        <v-list-item two-line link>
            <v-list-item-avatar>
                <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light">
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="subtitle-1 font-weight-bold"> {{firstName}} {{lastName}}</v-list-item-title>
                <v-list-item-subtitle class="subtitle-2"> {{role}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "ProfileCard",
        computed: {
            ...mapState({
                firstName: (state) => state.user.userData.firstName,
                lastName: (state) => state.user.userData.lastName,
                role: (state) => state.user.userData.role
            })
        }

    }
</script>

<style scoped>
    .profile-card {
        margin-bottom: 12px;
        padding: 0;
        width: 95%;
    }
</style>