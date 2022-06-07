<template>
  <v-app>
    <v-app-bar>
      <v-img
        class="mx-2"
        :src="logo"
        max-height="40"
        max-width="40"
        contain
      ></v-img>
      <v-app-bar-title>Album</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn variant="text" @click="goList"> Albums List </v-btn>
        <v-btn variant="text" @click="goAdd"> Add Album </v-btn>
        <v-btn variant="text" @click="goToAddArtist"> Add Artist </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import logo from "./assets/oc-logo-white.png";

export default {
  name: "App",

  data: () => ({
    logo,
  }),
  methods: {
    goAdd() {
      this.$router.push({ name: "add" });
    },
    goList() {
      this.$router.push({ name: "albums" });
    },
    goToAddArtist(){
      this.$router.push({ name: "addArtist" });
    }
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap");

html {
  font-family: "Montserrat", sans-serif !important;
}
:root {
  --lightGrey: #dbd7d7;
  --boxShadow: 0px 10px 25px rgba(0, 0, 0, 0.177);
}
.form {
  border: 1px solid var(--lightGrey);
  border-radius: 10px;
  margin-top: 15px;
  padding: 20px 20px;
  box-shadow: var(--boxShadow);
}
.checkbox {
  width: max-content;
  height: 50px;
}
.highlight__text {
  color: rgb(144, 144, 187);
}
</style>