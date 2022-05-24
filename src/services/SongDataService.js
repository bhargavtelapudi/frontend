import http from "../http-common";
class SongDataService {
  getAllSong(albumId) {
    return http.get(`/albums/${albumId}/song`);
  }
  getSong(albumId,id) {
    return http.get(`/albums/${albumsId}/songs/${id}`);
  }
  createSong(albumId,data) {
    return http.post(`/albums/${albumId}/songs`, data);
  }
  updateSong(albumId,id, data) {
    return http.put(`/albums/${albumId}/songs/${id}`, data);
  }
  deleteSong(albumId,id) {
    return http.delete(`/albums/${albumId}/songs/${id}`);
  }

}
export default new SongDataService();