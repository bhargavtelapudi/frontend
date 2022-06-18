<template>
    <h2>View Artist</h2>
    <h4 class="highlight__text">{{ message }}</h4>
    <h2 class="highlight__text">{{ `Albums by ${artist.toUpperCase()}` }}</h2>
    <v-row class="albums__list--table">
        <v-col cols="9" sm="4">
            <span class="text-h6">Title</span>
        </v-col>
        <v-col cols="9" sm="4">
            <span class="text-h6">Description</span>
        </v-col>
        <div class="album__item--wrapper">
            <AlbumsByArtistDisplay v-for="album in albums" :key="album.id" :album="album" />
        </div>
    </v-row>
</template>
<script>
import ArtistDataService from "../../services/ArtistDataService";
import AlbumsByArtistDisplay from "@/components/AlbumsByArtistDisplay.vue";

export default {
    name: "view-artist",
    props: ["id", "artist"],
    components: {
        AlbumsByArtistDisplay
    },
    data() {
        return {
            albums: [],
            message: "Manage Artist Data",
        };
    },
    methods: {
        retrieveArtistDetails() {
            ArtistDataService.getArtistDetails(this.artist)
                .then((response) => {
                    console.log(response);
                    this.albums = response.data.albums
                    console.log(this.albums);
                })
                .catch((e) => {
                    this.message = e.response.data.message;
                });
        },
    },
    mounted() {
        this.retrieveArtistDetails();
    },
};
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