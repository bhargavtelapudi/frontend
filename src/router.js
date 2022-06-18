import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    alias: "/albums",
    name: "albums",
    component: () => import("./views/album/AlbumsList.vue")
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("./views/album/EditAlbum.vue"),
    props: true
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./views/album/AddAlbum.vue")
  },
  {
    path: "/view/:id",
    name: "view",
    component: () => import("./views/album/ViewAlbum.vue"),
    props: true
  },
  {
    path: "/addSong/:id/:albumName",
    name: "addSong",
    component: () => import("./views/song/AddSong.vue"),
    props: true
  },
  {
    path: "/editSong/:albumId/:songId",
    name: "editSong",
    component: () => import("./views/song/EditSong.vue"),
    props: true
  },
  {
    path: "/artists",
    name: "artists",
    component: () => import("./views/artist/ArtistList.vue")
  },
  {
    path: "/addArtist",
    name: "addArtist",
    component: () => import("./views/artist/AddArtist.vue"),
    props: true
  },
  {
    path: "/editArtist/:id",
    name: "editArtist",
    component: () => import("./views/artist/EditArtist.vue"),
    props: true
  },
  {
    path: "/viewArtist/:id/:artist",
    name: "viewArtist",
    component: () => import("./views/artist/ViewArtist.vue"),
    props: true
  },
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/album-frontend-1/',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;