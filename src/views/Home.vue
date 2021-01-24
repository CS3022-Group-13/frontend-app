<template>
  <v-app>
    <Header />

    <!--        <v-main class="bg">-->
    <v-main style="">
      <!--  Opening Banner  -->
      <v-container fluid class="pa-0 ma-0" >
        <v-img class="background" src="@/assets/test2.jpeg"></v-img>
      </v-container>

     



     
    </v-main>

    <v-divider></v-divider>

    <!--  Footer   -->

    <v-footer padless class="footer">
      <FooterCard />
    </v-footer>
  </v-app>
</template>

<script>

import FooterCard from "@/components/home/FooterCard";
import ProgressIndicator from "@/components/home/ProgressIndicator";
import LanguageSelector from "@/components/home/LanguageSelector";
import Header from "@/components/home/Header"

export default {
  name: "Home",
  components: {
    FooterCard,
    ProgressIndicator,
    LanguageSelector,
    Header
  },
  data: () => ({
    language: "english",
    tab: null,
    items: [
      {
        tab: "Tell the Galle GA",
        content:
          "Sed condimentum ac mauris et commodo. Cras semper leo quis risus tempus, quis efficitur enim semper. Etiam quis velit at augue volutpat feugiat. Aliquam erat odio, consequat sit amet lorem sit amet, bibendum egestas leo. Praesent nisi felis, convallis maximus sem sit amet, bibendum vehicula augue. Nunc pharetra purus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non sapien eget magna lobortis sollicitudin rhoncus sed nulla. Aliquam blandit massa quis orci dignissim, ut pharetra enim rutrum. Pellentesque hendrerit purus non mauris vulputate facilisis.",
      },
      {
        tab: "Tell your Divisional Secretariat",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in dapibus lorem. Vestibulum consectetur rutrum massa, sed feugiat arcu tristique at. Etiam lacinia dictum tortor nec bibendum. Maecenas congue orci non odio viverra accumsan. Suspendisse ornare iaculis mi at facilisis. Suspendisse congue dui id turpis bibendum, ut pellentesque nisi molestie. Duis interdum eros eros, eget faucibus urna aliquet vitae.",
      },
    ],
    customerCount: 0,
    inProgressCount: 0,
    solvedCount: 0,
  }),
};
</script>

<style scoped>
.content {
  justify-content: center;
}

.section {
  background-color: rgba(255, 193, 7, 0.5);
}

.associations {
  margin-bottom: 4px;
  color: white;
}

.stats {
  justify-content: center;
}

.values {
  font-size: 2em;
}

.title {
  size: 60px;
}

.quote {
  margin-top: 20px;
  text-align: center;
}

.background{
  z-index: 0;
  top:0;
  bottom: 0;
 
}

.footer{
  background-color: #1aa6b7;
}
</style>
