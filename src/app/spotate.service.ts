import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotateService {

  constructor(private http: HttpClient) { }
  private searchUrl: string = "https://api.spotify.com/v1/search";
  private artistUrl: string = "https://api.spotify.com/v1/artists/";

  getTracks(trackName) {
    let option = {
      params: { q: trackName, type: "track,album,artist", limit: "5" }
    }
    return this.http.get(this.searchUrl, option)
  }
  getTopTracks(artistId) {
    let option = {
      params: { country: "ES" }
    }
    return this.http.get(this.artistUrl + artistId + "/top-tracks", option)
  }
  getAlbums(artistId) {
    let option = {
      params: { country: "ES" }
    }
    return this.http.get(this.artistUrl + artistId + "/albums", option)
  }
  getRelated(artistId) {
    let option = {}
    return this.http.get(this.artistUrl + artistId + "/related-artists", option)
  }
  getArtist(artistId) {
    let option = {}
    return this.http.get(this.artistUrl + artistId, option)
  }
}
