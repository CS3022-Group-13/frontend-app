<template>
    <v-row style="padding:0; margin:0px">
        <v-spacer/>
        <v-btn dark rounded :text="lang !== 'english'" small color="red" @click="englishSelector">English</v-btn>
        <v-btn dark rounded :text="lang !== 'sinhala'" small color="red" @click="sinhalaSelector">සිංහල</v-btn>

    </v-row>
</template>

<script>
    export default {
        name: "LanguageSelector",
        props: [
            'lang'
        ],
        methods: {
            sinhalaSelector() {
                this.$emit('toggle', 'sinhala');

            },
            englishSelector() {
                this.$emit('toggle', 'english');
            }
        }
    }
</script>