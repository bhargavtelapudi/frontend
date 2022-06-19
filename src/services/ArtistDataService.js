import http from "../http-common";
class ArtistDataService {
    addArtist(body) {
        return http.post("/artists", body);
    }
    getAllArtists() {
        return http.get(`/artists`);
    }
    getArtistDetails(artist) {
        return http.get(`/artists/${artist}`);
    }
    deleteArtist(artist) {
        return http.delete(`/artists/${artist}`);
    }
}
export default new ArtistDataService();