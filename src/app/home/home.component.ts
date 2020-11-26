import {Component, OnInit} from "@angular/core";
import {ConfigService} from "../config/config.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  constructor(
    private configService: ConfigService
  ) {
  }

  ngOnInit(): void {
  }

  onClickAuthorizedButton(): void {
    this.configService.getAccessCode();
  }

}
