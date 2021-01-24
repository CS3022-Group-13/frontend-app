<template>
    <div>
       <v-btn
            class="custom-button"
            :to="route"
            tile
            
            >
              {{text}}
        </v-btn>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "CustomButton",
        props: ["text", "route"],
        computed: {
        }
    }
</script>

<style scoped>

.custom-button{
    color:#1aa6b7;
    font-weight: bold;
}
.custom-button:hover{
    color:black;
}
    

</style>