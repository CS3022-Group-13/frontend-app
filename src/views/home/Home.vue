<template>
  <v-app>

    <v-container class="pa-0" fluid style="display: flex; background: #FFC007; height: 130px  ">

      <v-container style="padding: 0px; width: content-box; max-width: 130px ">

        <img alt="Home" src="@/assets/gov-logo.svg" class="logo" height="130px"/>
      </v-container>

      <v-container class="pa-0 pl-10" style="display: flex; align-items: center">
        <v-col>
          <v-row>
            <h1>Public Grievance Management</h1>
          </v-row>
          <v-row>
            <h3>
              Galle District
            </h3>
          </v-row>
        </v-col>

      </v-container>

      <v-container class="pa-0">

        <v-row style="background: #545863; border-bottom-left-radius:100px; display: flex; align-items: center"
               class="pa-4  pr-10 pt-2">

          <v-container style="width: 10em" class="pa-0 pl-5">
            <a href="https://www.facebook.com/Galle.DS/" style="text-decoration: none">
              <v-btn dark icon>
                <v-icon size="32px">mdi-facebook</v-icon>
              </v-btn>
            </a>

            <a href="https://twitter.com/DistrictGalle" style="text-decoration: none">
              <v-btn dark icon>
                <v-icon size="32px">mdi-twitter</v-icon>
              </v-btn>
            </a>
          </v-container>


          <LanguageSelector :lang="language" @toggle="change"/>
        </v-row>

        <v-row class="pa-5 pr-10">
          <v-spacer/>
          <LoginButton/>
        </v-row>

      </v-container>

    </v-container>


    <!--        <v-main class="bg">-->
    <v-main style="">
      <!--  Opening Banner  -->
      <v-container
              fluid
              style="height:560px; background-image: url('https://www.cesl.lk/images/projects/completed/Eight%20Storey%20District%20Secretariat%20Building%20at%20Galle_39_cesl.jpg'); background-size: cover"
              class="fill-height"
      >
        <v-spacer/>
        <v-row style="justify-content: center">
          <v-btn to="/add-complaint" color="error"> {{ lang.button }}</v-btn>
        </v-row>
        <v-spacer/>
      </v-container>

      <!-- CTA section  -->

      <v-container fluid style="height: 100px; background:#FFC007; display: flex; align-content: center">
        <v-container class="pa-0">
          <v-row>
            <v-container style="width: 70%" class="pa-0">
              <v-card-title style="color: #545863"> {{ lang.CTA }}</v-card-title>
            </v-container>

            <v-container style="width: 20%">
              <v-btn to="/add-complaint" color="error"> {{ lang.button }}</v-btn>
            </v-container>
          </v-row>
        </v-container>
      </v-container>

      <!--            About Us Section-->

      <section>
        <v-row>
          <v-col class="pa-0">
            <v-card height="350px"
                    style="display: flex; align-items: center; justify-content: center; background: #545863; color: white">
              <v-container class="text-center" style="padding: 16%">
                <h3> {{ lang.block1title }} </h3>
                <br>
                <p style="text-align: justify"> {{ lang.block1 }} </p>
              </v-container>
            </v-card>
          </v-col>
          <v-col class="pa-0" style="max-width: 50%">
            <v-img max-height="350px"
                   src="https://www.cesl.lk/images/projects/completed/Eight%20Storey%20District%20Secretariat%20Building%20at%20Galle_39_cesl.jpg">

            </v-img>

          </v-col>
        </v-row>

        <v-row>
          <v-col class="pa-0" style="max-width: 50%">
            <v-img max-height="350px"
                   src="https://www.cesl.lk/images/projects/completed/Eight%20Storey%20District%20Secretariat%20Building%20at%20Galle_39_cesl.jpg">

            </v-img>
          </v-col>
          <v-col class="pa-0">
            <v-card height="350px"
                    style="display: flex; align-items: center; justify-content: center; background: #545863; color: white">
              <v-container class="text-center" style="padding: 16%">
                <h3> {{ lang.block2title }} </h3>
                <br>
                <p style="text-align: justify"> {{ lang.block2 }} <br><br> {{ lang.benefits1 }} <br> {{
                    lang.benefits2
                  }} <br> {{ lang.benefits3 }} </p>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </section>


      <!--         End of About Us Section-->


      <!-- Stats section -->
      <v-bottom-navigation height="120px" background-color="primary"
      >

        <v-row style="align-content: center">
          <v-col>
            <v-row class="stats values" style="padding:0; margin:0">
              <ProgressIndicator :value="customerCount" color="black" indeterminate=false />
            </v-row>
            <v-row class="stats"> {{ lang.progressbar1 }}</v-row>
          </v-col>

          <v-col>
            <v-row class="stats values" style="padding:0; margin:0">
              <ProgressIndicator :value="inProgressCount" color="red" indeterminate=false />
            </v-row>
            <v-row class="stats"> {{ lang.progressbar2 }}</v-row>
          </v-col>

          <v-col>
            <v-row class="stats values" style="padding:0; margin:0">
              <ProgressIndicator :value="solvedCount" color="green" indeterminate=false />
            </v-row>
            <v-row class="stats"> {{ lang.progressbar3 }}</v-row>
          </v-col>
        </v-row>

      </v-bottom-navigation>

      <!-- End of Stats section -->

      <v-divider></v-divider>

      <v-container fluid class="transparent pa-0">
        <v-row no-gutters>
          <v-col
                  cols="6"
                  md="4"
                  class="pd-3"
          >
            <v-card
                    class="primary pa-12 pl-16 pr-16 ma-0"
                    tile
            >

              <v-card-title class="pa-0 pb-5"> {{ lang.associations }}</v-card-title>
              {{ lang.ds }} <br> <br>

              <v-btn
                      class="mx-1"
                      color="black"
                      outlined
              >
                {{ lang.Galle }}
              </v-btn>
              <br>
              <br>
              {{ lang.division }}
              <br> <br>
              <v-btn outlined class="mx-1 associations" color="black"> {{ lang.Akmeemana }}</v-btn>
              <v-btn outlined class="mx-1 associations" color="black"> {{ lang.Ambalangoda }}</v-btn>
              <v-btn outlined class="mx-1 associations" color="black"> {{ lang.Baddegama }}</v-btn>
              <v-btn outlined class="mx-1 associations" color="black"> {{ lang.Balapitiya }}</v-btn>
              <v-btn outlined class="mx-1 associations" color="black"> {{ lang.BopePoddala }}</v-btn>
              <v-btn outlined class="mx-1 associations" color="black"> {{ lang.Benthota }}</v-btn>
              <v-btn outlined class="mx-1 associations" color="black"> {{ lang.Elpitiya }}</v-btn>
              <v-btn outlined class="mx-1 associations" color="black"> {{ lang.GalleFourGravets }}</v-btn>
              <v-btn outlined class="mx-1 associations" color="black"> {{ lang.Habaraduwa }}</v-btn>
              <v-btn outlined class="mx-1 associations" color="black"> {{ lang.Imaduwa }}</v-btn>
              <v-btn outlined class="mx-1 associations" color="black"> {{ lang.Hikkaduwa }}</v-btn>
              <v-btn outlined class="mx-1 associations" color="black"> {{ lang.Karandeniya }}</v-btn>
              <v-btn outlined class="mx-1 associations" color="black"> {{ lang.Nagoda }}</v-btn>
              <v-btn outlined class="mx-1 associations" color="black"> {{ lang.Neluwa }}</v-btn>
              <v-btn outlined class="mx-1 associations" color="black"> {{ lang.Niyagama }}</v-btn>
              <v-btn outlined class="mx-1 associations" color="black"> {{ lang.WelivitiyaDivithura }}</v-btn>
              <v-btn outlined class="mx-1 associations" color="black"> {{ lang.Yakkalamulla }}</v-btn>
              <v-btn outlined class="mx-1 associations" color="black"> {{ lang.Gonapinuwala }}</v-btn>

            </v-card>
          </v-col>

          <v-col
                  cols="12"
                  sm="6"
                  md="8"
                  class="lighten-3 grey"
          >

            <v-row class="pt-5 pl-10 pr-10">
              <v-card class="pa-5 lighten-1 secondary">
                <v-card-title>Tell The Galle District Secretariat</v-card-title>

                <ol>
                  <li> Click the red button “TELL THE GRIEVANCE”.</li>
                  <li> You have to accurately fill your own details in the first section.</li>
                  <li> Click the green colour “Submit” button.</li>
                  <li> Choose the complaint type as “Direct to District”.</li>
                  <li> Explain your grievance in subject and description.</li>
                  <li> If you want to report a problem that involves your divisional secretariat, tick the “Pre Assign
                    to a divisional secretariat office” and mention your divisional secretariat.
                  </li>
                  <li> If you want to complain district secretariat only, just ignore the above part. (untick)</li>
                  <li> Click the “Submit” button.</li>
                  <li> If you have any paper/ photo evidences, submit.</li>
                </ol>
              </v-card>
            </v-row>

            <v-row class="pa-5 pl-10 pr-10">
              <v-card class="pa-5 lighten-1 secondary">
                <v-card-title>Tell your Divisional Secretariat</v-card-title>
                <ol>
                  <li> Click the red button “TELL THE GRIEVANCE”.</li>
                  <li> You have to accurately fill your own details in the first section.</li>
                  <li> Choose the complaint type as “Direct to Division”.</li>
                  <li> Explain your grievance in subject and description.</li>
                  <li> If you want to report a problem that involves your divisional secretariat, tick the “Pre Assign
                    to a divisional secretariat office” and mention your divisional secretariat.
                  </li>
                  <li> Click the “Submit” button.</li>
                  <li> If you have any paper/ photo evidences, submit.</li>
                </ol>
              </v-card>
            </v-row>

          </v-col>

        </v-row>
      </v-container>

    </v-main>

    <v-divider></v-divider>

    <!--  Footer   -->

    <v-footer padless color="primary">
      <FooterCard/>
    </v-footer>

  </v-app>
</template>

<script>
import HomeButton from "@/components/home/HomeButton";
import LoginButton from "@/components/user/LoginButton";
import FooterCard from "@/components/home/FooterCard";
import ProgressIndicator from "@/components/home/ProgressIndicator";
import LanguageSelector from "@/components/home/LanguageSelector";
import {SIN, EN} from "@/views/home/langs";
import {api} from "@/api";

export default {
    name: "Home",
    components: {
        LoginButton,
        FooterCard,
        ProgressIndicator,
        LanguageSelector
    },
    data: () => ({
        language: 'english',
        tab: null,
        items: [
            {
                tab: 'Tell the Galle GA',
                content: 'Sed condimentum ac mauris et commodo. Cras semper leo quis risus tempus, quis efficitur enim semper. Etiam quis velit at augue volutpat feugiat. Aliquam erat odio, consequat sit amet lorem sit amet, bibendum egestas leo. Praesent nisi felis, convallis maximus sem sit amet, bibendum vehicula augue. Nunc pharetra purus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non sapien eget magna lobortis sollicitudin rhoncus sed nulla. Aliquam blandit massa quis orci dignissim, ut pharetra enim rutrum. Pellentesque hendrerit purus non mauris vulputate facilisis.'
            },
            {
                tab: 'Tell your Divisional Secretariat',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in dapibus lorem. Vestibulum consectetur rutrum massa, sed feugiat arcu tristique at. Etiam lacinia dictum tortor nec bibendum. Maecenas congue orci non odio viverra accumsan. Suspendisse ornare iaculis mi at facilisis. Suspendisse congue dui id turpis bibendum, ut pellentesque nisi molestie. Duis interdum eros eros, eget faucibus urna aliquet vitae.'
            }

        ],
        customerCount: 0,
        inProgressCount: 0,
        solvedCount: 0,
    }),
    computed: {
        lang() {
            return this.language === 'english' ? EN : SIN
        }
    },
    methods: {
        change(lang) {
            this.language = lang;
        }
    },
    async created() {
        const [count1, status1] = await api.customer.getCustomerCount({});
        if (status1.code === 200) this.customerCount = count1

        const [count2, status2] = await api.complaint.getComplaintCount({status: 'In Progress'});
        if (status2.code === 200) this.inProgressCount = count2

        const [count3, status3] = await api.complaint.getComplaintCount({status: 'Solved'});
        if (status3.code === 200) this.solvedCount = count3
    }
};
</script>

<style scoped>

.content {
    justify-content: center;
}

.section {
    background-color: rgba(255, 193, 7, 0.5)
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

</style>