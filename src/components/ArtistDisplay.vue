<template>
  <v-row class="album__list-item">
    <v-col cols="9" sm="2">
      <span>{{ artist.artist }}</span>
    </v-col>
    <v-col cols="9" sm="1">
      <v-btn size="x-small" icon="mdi-pencil" @click="updateArtist" />
    </v-col>
    <v-col cols="9" sm="1">
      <v-btn
        size="x-small"
        icon="mdi-format-list-bulleted-type"
        @click="viewArtist"
      />
    </v-col>
    <v-col cols="9" sm="1">
      <v-btn size="x-small" icon="mdi-trash-can" @click="deleteArtist" />
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    artist: Object,
  },
  data() {
    return {};
  },
  methods: {
    deleteArtist() {
      this.$emit("deleteArtist");
    },
    updateArtist() {
      this.$emit("updateArtist");
    },
    viewArtist() {
      this.$emit("viewArtist");
    },
  },
};
</script>
<style>
.album__list-item{
  display: flex;
  justify-content: center;
  margin:0;
  padding: 5px 0;
  border-top: 1px solid var(--lightGrey);
}
</style>
