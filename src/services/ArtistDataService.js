import http from "../http-common";
class ArtistDataService {
    addArtist(body) {
        return http.post("/artists",body);
    }
    getAllArtists(){
        return http.get(`/artists`);
    }
    get(id) {
        return http.get(`/albums/${id}`);
    }
}
export default new ArtistDataService();