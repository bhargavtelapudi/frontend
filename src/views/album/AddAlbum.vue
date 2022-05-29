<template>
  <h1>Add Album</h1>
  <h4>{{ message }}</h4>
  <v-form class="form">
    <v-text-field label="Title" v-model="album.title" />
    <v-text-field label="Description" v-model="album.description" />
    <v-text-field label="Artist Name" v-model="album.artistName" />
    <v-checkbox
      v-model="album.published"
      label="Published"
      color="success"
      class="checkbox"
    ></v-checkbox>
    <v-row justify="center">
      <v-col col="2"> </v-col>
      <v-col col="2">
        <v-btn color="success" @click="saveAlbum()">Create Album</v-btn>
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
  name: "add-album",
  data() {
    return {
      album: {
        id: null,
        title: "",
        description: "",
        artistName: "",
        published: false,
      },
      message: "Enter data and click save",
    };
  },
  methods: {
    saveAlbum() {
      var data = {
        title: this.album.title,
        description: this.album.description,
        artist: this.album.artistName,
        published: this.album.published,
      };
      AlbumDataService.create(data)
        .then((response) => {
          this.album.id = response.data.id;
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
.form {
  border: 1px solid var(--lightGrey);
  border-radius: 10px;
  margin-top: 15px;
  padding: 20px 20px;
}
.checkbox{
  width: max-content;
  height: 50px ; 
}
</style>