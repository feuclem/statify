import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ConfigService {

  private code = "";
  private token = "";

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAccessCode(): void {
    location.href =
      "https://accounts.spotify.com/authorize?" +
      "client_id=d3a2f53385a247af80a4d2cb30304a25" + "&" +
      "response_type=code" + "&" +
      "redirect_uri=http://localhost:4200/callback" + "&" +
      "scope=user-top-read user-read-recently-played" + "&" +
      "show_dialog=true" + "&" +
      "state=123456";
  }

  getOrRefreshToken(): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa("d3a2f53385a247af80a4d2cb30304a25:4cd467eac8f44c80b22193adad7b2f19")}`
    });
    const body = `grant_type=authorization_code&code=${this.code}&redirect_uri=http://localhost:4200/callback`;
    return this.httpClient.post("https://accounts.spotify.com/api/token", body, {headers});
  }

  setCode(value: string): void {
    this.code = value;
  }

  getToken(): string {
    return this.token;
  }

  setToken(value: string): void {
    this.token = value;
  }
}
