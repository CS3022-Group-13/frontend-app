<template>
    <v-container fluid style="display: flex; background: #1aa6b7">
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
                    <h3 class="quote">Industry work made easier...</h3>
                  </div>
                </v-row>
              </v-col>
            </v-container>
          </v-col>
        </v-row>

        <v-col cols="12" class="py-2">
          <v-btn-toggle tile color="deep-purple accent-3" group>
            <CustomButton text="Customer Login" route="/login/customer" />
            <CustomButton text="User Login" route="/login/user" />
            <CustomButton text="About" route="/about" />
          </v-btn-toggle>
        </v-col>
      </v-col>
    </v-container>
</template>

<script>
import CustomButton from "@/components/home/CustomButton";

export default {
    name: "Header",
    components: {
        CustomButton
    }
}
</script>>


<style></style>

.title {
  size: 60px;
}

.quote {
  margin-top: 20px;
  text-align: center;
}
</style>>