import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConfigService} from "../config/config.service";

@Injectable({
  providedIn: "root"
})
export class StatsService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {}

  getTopTracks(): Observable<any> {
    const headers = new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.configService.getToken()}`
    });
    return this.http.get("https://api.spotify.com/v1/me/top/tracks", {headers});
  }

  getRecentlyPlayedSongs(): Observable<any> {
    const headers = new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.configService.getToken()}`
    });
    return this.http.get("\thttps://api.spotify.com/v1/me/player/recently-played", {headers});
  }
}
