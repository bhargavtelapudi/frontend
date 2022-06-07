<template>
  <h1>Add Artist</h1>
  <h4 class="highlight__text">{{ message }}</h4>
  <v-form class="form">
    <v-text-field label="Artist Name" v-model="artistName" />
    <v-row justify="center">
      <v-col col="2"></v-col>
      <v-col col="2">
        <v-btn color="success" @click="saveArtist()">Create Artist</v-btn>
      </v-col>
      <v-col col="2">
        <v-btn color="info" @click="cancel()">Cancel</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
import ArtistDataService from "../../services/ArtistDataService";
export default {
  name: "add-artist",
  data() {
    return {
      artistName: "",
      message: "Enter data and click save",
    };
  },
  methods: {
    saveArtist() {
      var data = {
        artist: this.artistName,
      };
      ArtistDataService.addArtist(data)
        .then((response) => {
          console.log("add???" + response.data);
          this.$router.push({ name: "albums" });
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
    cancel() {
      this.$router.push({ name: "albums" });
    },
  },
};
</script>
<style>
</style>