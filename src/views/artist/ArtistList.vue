<template>
  <h1>Artists List</h1>
  <h4 class="highlight__text">{{ message }}</h4>
  <v-row class="albums__list--table">
    <v-col cols="9" sm="4">
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
      <ArtistDisplay
        v-for="artist in artists"
        :key="artist.id"
        :artist="artist"
        @deleteArtist="goDelete(artist)"
        @updateArtist="goEdit(artist)"
        @viewArtist="goView(artist)"
      />
    </div>
  </v-row>
</template>
<script>
import ArtistDataService from "../../services/ArtistDataService";
import ArtistDisplay from "@/components/ArtistDisplay.vue";
export default {
  name: "albums-list",
  data() {
    return {
      artists: [],
      message: "Search, Edit or Delete Artists",
    };
  },
  components: {
    ArtistDisplay,
  },
  methods: {
    goEdit(artist) {
      this.$router.push({ name: "editArtist", params: { id: artist.id } });
    },
    goView(artist) {
      this.$router.push({ name: "viewArtist", params: { id: artist.id , artist : artist.artist } });
    },
    goDelete(artist) {
      ArtistDataService.deleteArtist(artist.id)
        .then(() => {
          this.retrieveArtists();
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
    retrieveArtists() {
      ArtistDataService.getAllArtists()
        .then((response) => {
          this.artists = response.data;
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    }
  },
  mounted() {
    this.retrieveArtists();
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
  box-shadow: var(--boxShadow);
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
.album__item--wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>