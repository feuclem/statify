import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {CallbackComponent} from "./callback/callback.component";
import {StatsComponent} from "./stats/stats.component";
import {HomeComponent} from "./home/home.component";
import {ConfigService} from "./config/config.service";
import {StatsService} from "./stats/stats.service";
import {DatePipe} from "@angular/common";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "stats",
    component: StatsComponent
  },
  {
    path: "callback",
    component: CallbackComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    StatsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    ConfigService,
    StatsService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
