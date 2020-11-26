import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigService} from "../config/config.service";

@Component({
  selector: "app-callback",
  templateUrl: "./callback.component.html",
  styleUrls: ["./callback.component.css"]
})
export class CallbackComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(param => {
      this.configService.setCode(param.code);
      this.configService.getOrRefreshToken().subscribe(value => {
        this.configService.setToken(value["access_token"]);
        this.router.navigate(["/stats"]);
      });
    });

  }

}
