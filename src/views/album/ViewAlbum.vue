<template>
  <h2>Album View</h2>
  <h4 class="highlight__text">{{ message }}</h4>
  <div class="view__album--details">
    <h3>Album Name : {{ album.title }}</h3>
    <h3>Artist Name : {{ album.artist }}</h3>
  </div>
  <v-row>
    <v-col cols="8" sm="2">
      <v-btn color="success" @click="goAddSong(id)">Add Song</v-btn>
    </v-col>
  </v-row>
  <v-row class="albums__list--table">
    <v-col cols="8" sm="2">
      <span class="text-h6">Title</span>
    </v-col>
    <v-col cols="8" sm="4">
      <span class="text-h6">Description</span>
    </v-col>
    <v-col cols="8" sm="2">
      <span class="text-h6">Status</span>
    </v-col>
    <v-col cols="8" sm="1">
      <span class="text-h6">Edit</span>
    </v-col>
    <v-col cols="8" sm="1">
      <span class="text-h6">Delete</span>
    </v-col>
    <div class="album__item--wrapper">
      <SongDisplay v-for="song in songs" :key="song.id" :song="song" @deleteSong="goDeleteSong(song)"
        @updateSong="goEditSong(song)" />
    </div>
  </v-row>
</template>
<script>
import AlbumDataService from "../../services/AlbumDataService";
import SongDataService from "../../services/SongDataService";
import SongDisplay from '@/components/SongDisplay.vue';
export default {
  name: "view-album",
  props: ['id'],
  components: {
    SongDisplay
  },
  data() {
    return {
      album: {},
      songs: [],
      message: "Manage Songs"
    };
  },
  methods: {
    retrieveSongs() {
      AlbumDataService.get(this.id)
        .then(response => {
          const data = response.data.data[0];
          this.album = {
            title: data.title,
            description: data.description,
            artist: response.data.artist,
            published: data.published,
          };
          this.songs = data.song
          console.log("data.song???", this.songs);
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
    goEditSong(song) {
      this.$router.push({ name: 'editSong', params: { albumId: this.id, songId: song.id } });
    },
    goAddSong() {
      this.$router.push({ name: 'addSong', params: { albumId: this.id, albumName: this.album.title } });
    },
    goDeleteSong(song) {
      SongDataService.deleteSong(song.albumId, song.id)
        .then(() => {
          this.retrieveSongs()
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
    cancel() {
      this.$router.push({ name: 'albums' });
    }
  },
  created() {
    this.retrieveSongs();
  }
}
</script>

<style>
.view__album--details {
  border: 1px solid var(--lightGrey);
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px 0;
  border-radius: 10px;
}
</style>