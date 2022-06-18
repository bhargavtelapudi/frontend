<template>
  <h1>Edit Artist</h1>
  <h4 class="highlight__text">{{ message }}</h4>
  <v-form class="form">
    <v-text-field label="Artist Name" v-model="artistName" />
    <v-row justify="center">
      <v-col col="2"></v-col>
      <v-col col="2">
        <v-btn color="success" @click="updateArtist()">Update Artist</v-btn>
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
  name: "update-artist",
  props: ["id"],
  data() {
    return {
      artistName: "",
      message: "Enter data and click save",
    };
  },
  methods: {
    retrieveArtist() {
      ArtistDataService.getArtist(this.id)
        .then((response) => {
          this.artistName = response.data.artist;
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
    updateArtist() {
      var data = {
        artist: this.artistName,
      };
      ArtistDataService.updateArtist(this.id, data)
        .then((response) => {
          this.$router.push({ name: "artists" });
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
    cancel() {
      this.$router.push({ name: "artists" });
    },
  },
  mounted() {
    this.retrieveArtist();
  },
};
</script>
<style>
</style>