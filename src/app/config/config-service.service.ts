import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  constructor(private http: HttpClient) {
  }

  getTrackStats(): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer BQApgdTjs4pvvFXpOTx8VhYMjdcSyr5di7yC1llaijqOeJI9LhVTkxUikbXIvqwbxI3GKzO89iJDhHXH5jNvYq5eFrndvR_SVniUeuK7oONYvid6j4LSWm80WN-nbZtJlZhg4uLrqVOQvOfG-cdKZZ2XdykMNT9BKJArpulIC3mQfw`
    });
    return this.http.get('https://api.spotify.com/v1/me/top/tracks', {headers: headers});
  }

  getRecentlyPlayedSongs(): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer BQBfRnkI9DgMpsIBnGDZtBc9h6gfk9GGDWYmD8ybz9E2B9D-TtXloi1vFQbfxTu-kDfrWDhuZY5I3PWS7Qptcq6T9dnPJl_sbN2W_uCytyDu5rwuqgMJvkLLrjvyum63W5kj0AEuf-_UoHnPc-WDaLYT4VxA8nKaow9LYAvaIPxHiQ`
    });
    return this.http.get('\thttps://api.spotify.com/v1/me/player/recently-played', {headers: headers});
  }
}
