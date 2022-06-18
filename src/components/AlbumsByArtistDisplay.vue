<template>
  <v-row class="album__list-item">
    <v-col cols="9" sm="4">
      <span>{{ album.title }}</span>
    </v-col>
    <v-col cols="9" sm="4">
      <span> {{ album.description }}</span>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    album: Object,
  },
  data() {
    return {};
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
