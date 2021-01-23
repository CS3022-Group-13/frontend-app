<template>
  <v-app>
    <v-container fluid style="display: flex; background: #3aafa9">
      <v-col>
        <v-row>
          <v-col cols="3">
            <v-container style="width: content-box; max-width: 130px">
              <img
                alt="Home"
                src="@/assets/factory.svg"
                class="logo"
                height="100px"
              />
            </v-container>
          </v-col>

          <v-col cols="9">
            <v-container
              class="pa-0 pl-10"
              style="display: flex; align-items: center"
            >
              <v-col>
                <v-row>
                  <div class="title">
                    <h1>Engage Industrial Management System</h1>
                    <h3 class="quote">Indusrty work made easier...</h3>
                  </div>
                </v-row>
              </v-col>
            </v-container>
          </v-col>
        </v-row>

        <v-col cols="12" class="py-2">
          <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
            <LoginButton text="Customer Login" route="/customer/login" />
            <LoginButton text="User Login" route="/user/login" />
            <LoginButton text="About" route="/about" />
            <LoginButton text="Help" route="/help" />
          </v-btn-toggle>
        </v-col>
      </v-col>
    </v-container>

    <!--        <v-main class="bg">-->
    <v-main style="">
      <!--  Opening Banner  -->
      <v-container fluid class="fill-height">
      </v-container>

      <!-- CTA section  -->

      <v-container
        fluid
        style="
          height: 100px;
          background: #3aafa9;
          display: flex;
          align-content: center;
        "
      >
        <v-container class="pa-0">
          <v-row>
            <v-container style="width: 70%" class="pa-0">
              <v-card-title style="color: #545863">
                {{ lang.CTA }}</v-card-title
              >
            </v-container>

            <v-container style="width: 20%">
              <v-btn to="/add-complaint" color="error">
                {{ lang.button }}</v-btn
              >
            </v-container>
          </v-row>
        </v-container>
      </v-container>

      <!--            About Us Section-->

      <section>
        <v-row>
          <v-col class="pa-0">
            <v-card
              height="350px"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
                background: #545863;
                color: white;
              "
            >
              <v-container class="text-center" style="padding: 16%">
                <h3>{{ lang.block1title }}</h3>
                <br />
                <p style="text-align: justify">{{ lang.block1 }}</p>
              </v-container>
            </v-card>
          </v-col>
          <v-col class="pa-0" style="max-width: 50%">
            <v-img
              max-height="350px"
              src="https://www.cesl.lk/images/projects/completed/Eight%20Storey%20District%20Secretariat%20Building%20at%20Galle_39_cesl.jpg"
            >
            </v-img>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="pa-0" style="max-width: 50%">
            <v-img
              max-height="350px"
              src="https://www.cesl.lk/images/projects/completed/Eight%20Storey%20District%20Secretariat%20Building%20at%20Galle_39_cesl.jpg"
            >
            </v-img>
          </v-col>
          <v-col class="pa-0">
            <v-card
              height="350px"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
                background: #545863;
                color: white;
              "
            >
              <v-container class="text-center" style="padding: 16%">
                <h3>{{ lang.block2title }}</h3>
                <br />
                <p style="text-align: justify">
                  {{ lang.block2 }} <br /><br />
                  {{ lang.benefits1 }} <br />
                  {{ lang.benefits2 }} <br />
                  {{ lang.benefits3 }}
                </p>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <!--         End of About Us Section-->

      <!-- Stats section -->
      <v-bottom-navigation height="120px" background-color="primary">
        <v-row style="align-content: center">
          <v-col>
            <v-row class="stats values" style="padding: 0; margin: 0">
              <ProgressIndicator
                :value="customerCount"
                color="black"
                indeterminate="false"
              />
            </v-row>
            <v-row class="stats"> {{ lang.progressbar1 }}</v-row>
          </v-col>

          <v-col>
            <v-row class="stats values" style="padding: 0; margin: 0">
              <ProgressIndicator
                :value="inProgressCount"
                color="red"
                indeterminate="false"
              />
            </v-row>
            <v-row class="stats"> {{ lang.progressbar2 }}</v-row>
          </v-col>

          <v-col>
            <v-row class="stats values" style="padding: 0; margin: 0">
              <ProgressIndicator
                :value="solvedCount"
                color="green"
                indeterminate="false"
              />
            </v-row>
            <v-row class="stats"> {{ lang.progressbar3 }}</v-row>
          </v-col>
        </v-row>
      </v-bottom-navigation>

      <!-- End of Stats section -->

      <v-divider></v-divider>

      <v-container fluid class="transparent pa-0">
        <v-row no-gutters>
          <v-col cols="6" md="4" class="pd-3">
            <v-card class="primary pa-12 pl-16 pr-16 ma-0" tile>
              <v-card-title class="pa-0 pb-5">
                {{ lang.associations }}</v-card-title
              >
              {{ lang.ds }} <br />
              <br />

              <v-btn class="mx-1" color="black" outlined>
                {{ lang.Galle }}
              </v-btn>
              <br />
              <br />
              {{ lang.division }}
              <br />
              <br />
              <v-btn outlined class="mx-1 associations" color="black">
                {{ lang.Akmeemana }}</v-btn
              >
              <v-btn outlined class="mx-1 associations" color="black">
                {{ lang.Ambalangoda }}</v-btn
              >
              <v-btn outlined class="mx-1 associations" color="black">
                {{ lang.Baddegama }}</v-btn
              >
              <v-btn outlined class="mx-1 associations" color="black">
                {{ lang.Balapitiya }}</v-btn
              >
              <v-btn outlined class="mx-1 associations" color="black">
                {{ lang.BopePoddala }}</v-btn
              >
              <v-btn outlined class="mx-1 associations" color="black">
                {{ lang.Benthota }}</v-btn
              >
              <v-btn outlined class="mx-1 associations" color="black">
                {{ lang.Elpitiya }}</v-btn
              >
              <v-btn outlined class="mx-1 associations" color="black">
                {{ lang.GalleFourGravets }}</v-btn
              >
              <v-btn outlined class="mx-1 associations" color="black">
                {{ lang.Habaraduwa }}</v-btn
              >
              <v-btn outlined class="mx-1 associations" color="black">
                {{ lang.Imaduwa }}</v-btn
              >
              <v-btn outlined class="mx-1 associations" color="black">
                {{ lang.Hikkaduwa }}</v-btn
              >
              <v-btn outlined class="mx-1 associations" color="black">
                {{ lang.Karandeniya }}</v-btn
              >
              <v-btn outlined class="mx-1 associations" color="black">
                {{ lang.Nagoda }}</v-btn
              >
              <v-btn outlined class="mx-1 associations" color="black">
                {{ lang.Neluwa }}</v-btn
              >
              <v-btn outlined class="mx-1 associations" color="black">
                {{ lang.Niyagama }}</v-btn
              >
              <v-btn outlined class="mx-1 associations" color="black">
                {{ lang.WelivitiyaDivithura }}</v-btn
              >
              <v-btn outlined class="mx-1 associations" color="black">
                {{ lang.Yakkalamulla }}</v-btn
              >
              <v-btn outlined class="mx-1 associations" color="black">
                {{ lang.Gonapinuwala }}</v-btn
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-divider></v-divider>

    <!--  Footer   -->

    <v-footer padless color="primary">
      <FooterCard />
    </v-footer>
  </v-app>
</template>

<script>
import HomeButton from "@/components/home/HomeButton";
import LoginButton from "@/components/user/LoginButton";
import FooterCard from "@/components/home/FooterCard";
import ProgressIndicator from "@/components/home/ProgressIndicator";
import LanguageSelector from "@/components/home/LanguageSelector";
import { SIN, EN } from "@/views/home/langs";
import { api } from "@/api";

export default {
  name: "Home",
  components: {
    LoginButton,
    FooterCard,
    ProgressIndicator,
    LanguageSelector,
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
  computed: {
    lang() {
      return this.language === "english" ? EN : SIN;
    },
  },
  methods: {
    change(lang) {
      this.language = lang;
    },
  },
  async created() {
    const [count1, status1] = await api.customer.getCustomerCount({});
    if (status1.code === 200) this.customerCount = count1;

    const [count2, status2] = await api.complaint.getComplaintCount({
      status: "In Progress",
    });
    if (status2.code === 200) this.inProgressCount = count2;

    const [count3, status3] = await api.complaint.getComplaintCount({
      status: "Solved",
    });
    if (status3.code === 200) this.solvedCount = count3;
  },
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
</style>


<style>
/* .image {
  background-image: url("../../assets/background-cover.jpg");
  height: 560px;
  background-size: cover;
} */
</style>