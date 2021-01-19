import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { YoutubersPageComponent } from "./youtubers-page/youtubers-page.component";
import { YoutubersListComponent } from "./youtubers-list/youtubers-list.component";
import { AddYoutuberPageComponent } from "./add-youtuber-page/add-youtuber-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { YoutuberService } from "./youtuber.service";
import { SalariesService } from "./salaries.service";
import { SalarieComponent } from "./salarie/salarie.component";
import { JokesComponent } from "./jokes/jokes.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomePageComponent },
      { path: "youtubers", component: YoutubersPageComponent },
      { path: "add", component: AddYoutuberPageComponent },
      { path: "salary", component: SalarieComponent },
      { path: "jokes", component: JokesComponent },
      { path: "*", redirectTo: "", pathMatch: "full" }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    YoutubersPageComponent,
    YoutubersListComponent,
    AddYoutuberPageComponent,
    HomePageComponent,
    SalarieComponent,
    JokesComponent
  ],
  providers: [YoutuberService, SalariesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
