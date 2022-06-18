import http from "../http-common";
class ArtistDataService {
    addArtist(body) {
        return http.post("/artists", body);
    }
    getAllArtists() {
        return http.get(`/artists`);
    }
    getArtist(id) {
        return http.get(`/artist/${id}`);
    }
    updateArtist(id, body) {
        return http.put(`/artist/${id}`, body);
    }
    getArtistDetails(artist) {
        return http.get(`/artists/${artist}`);
    }
    deleteArtist(id) {
        return http.delete(`/artist/${id}`);
    }
}
export default new ArtistDataService();