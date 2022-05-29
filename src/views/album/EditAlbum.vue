<template>
  <h1>Edit Album</h1>
  <h4>{{ message }}</h4>
  <v-form class="form">
    <v-text-field label="Title" v-model="album.title" />
    <v-text-field label="Description" v-model="album.description" />
    <v-text-field label="Artist Name" v-model="album.artist" />
    <v-checkbox
      v-model="album.published"
      label="Published"
      color="success"
      class="checkbox"
    ></v-checkbox>
    <v-row justify="center">
      <v-col col="2"> </v-col>
      <v-col col="2">
        <v-btn color="success" @click="updateAlbum">Update Album</v-btn>
      </v-col>
      <v-col col="2">
        <v-btn color="info" @click="cancel()">Cancel</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
import AlbumDataService from "../../services/AlbumDataService";
export default {
  name: "edit-album",
  props: ["id"],
  data() {
    return {
      album: {},
      message: "Enter data and click save",
    };
  },
  methods: {
    retrieveAlbum() {
      AlbumDataService.get(this.id)
        .then((response) => {
          const data = response.data.data[0];
          this.album = {
            title: data.title,
            description: data.description,
            artist: response.data.artist,
            published: data.published,
          };
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
    updateAlbum() {
      var data = {
        title: this.album.title,
        description: this.album.description,
        artist: this.album.artist,
        published: this.album.published,
      };
      AlbumDataService.update(this.id, data)
        .then((response) => {
          this.album.id = response.data.id;
          console.log("add " + response.data);
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
  mounted() {
    this.retrieveAlbum();
  },
};
</script>
<style>
</style>