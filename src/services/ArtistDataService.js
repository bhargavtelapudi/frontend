import http from "../http-common";
class ArtistDataService {
    addArtist(body) {
        return http.post("/artists", body);
    }
    getAllArtists() {
        return http.get(`/artists`);
    }
    getArtist(id) {
        return http.get(`/artists/${id}`);
    }
    updateArtist(id, body) {
        return http.put(`/artists/${id}`, body);
    }
    getArtistDetails(artist) {
        return http.get(`/artists/${artist}`);
    }
}
export default new ArtistDataService();