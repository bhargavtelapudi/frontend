<template>
  <h1>Album List</h1>
  <h4>{{ message }}</h4>

  <v-row class="albums__list--search">
    <div>
      <v-text-field class="input-search" clearable v-model="title" />
    </div>
    <div>
      <v-btn color="success" @click="searchTitle"> Search </v-btn>
    </div>
  </v-row>
  <v-row class="albums__list--table">
    <v-col cols="9" sm="2">
      <span class="text-h6">Title</span>
    </v-col>
    <v-col cols="9" sm="4">
      <span class="text-h6">Description</span>
    </v-col>
    <v-col cols="4" sm="2">
      <span class="text-h6">Artist Name</span>
    </v-col>
    <v-col cols="9" sm="1">
      <span class="text-h6">Edit</span>
    </v-col>
    <v-col cols="9" sm="1">
      <span class="text-h6">View</span>
    </v-col>
    <v-col cols="9" sm="1">
      <span class="text-h6">Delete</span>
    </v-col>
    <div class="album__item--wrapper">
    <AlbumDisplay
      v-for="album in albums"
      :key="album.id"
      :album="album"
      @deleteAlbum="goDelete(album)"
      @updateAlbum="goEdit(album)"
      @viewAlbum="goView(album)"
    />
    </div>
  </v-row>

  <v-btn @click="removeAllAlbums" color="error"> Remove All Albums</v-btn>
</template>
<script>
import AlbumDataService from "../../services/AlbumDataService";
import AlbumDisplay from "@/components/AlbumDisplay.vue";
export default {
  name: "albums-list",
  data() {
    return {
      albums: [],
      currentAlbum: null,
      currentIndex: -1,
      title: "",
      message: "Search, Edit or Delete Albums",
    };
  },
  components: {
    AlbumDisplay,
  },
  methods: {
    goEdit(album) {
      this.$router.push({ name: "edit", params: { id: album.id } });
    },
    goView(album) {
      this.$router.push({ name: "view", params: { id: album.id } });
    },
    goDelete(album) {
      AlbumDataService.delete(album.id)
        .then(() => {
          this.retrieveAlbums();
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
    retrieveAlbums() {
      AlbumDataService.getAll()
        .then((response) => {
          this.albums = response.data;
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
    refreshList() {
      this.retrieveAlbums();
      this.currentAlbum = null;
      this.currentIndex = -1;
    },
    setActiveAlbum(album, index) {
      this.currentAlbum = album;
      this.currentIndex = album ? index : -1;
    },
    removeAllAlbums() {
      AlbumDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },

    searchTitle() {
      AlbumDataService.findByTitle(this.title)
        .then((response) => {
          this.albums = response.data;
          this.setActiveAlbum(null);
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
  },
  mounted() {
    this.retrieveAlbums();
  },
};
</script>
<style>
.albums__list--table {
  border: 1px solid var(--lightGrey);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin: 10px 0px 20px 0px;
}
.albums__list--search {
  margin: 10px 0px 20px 0px;
  border: 1px solid var(--lightGrey);
  padding: 0px 0px 0px 20px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 85% 15%;
  column-gap: 20px;
  align-items: center;
}
.input-search {
  margin-top: 25px;
}
.album__item--wrapper{
  display: flex;
  flex-direction: column;
}
</style>