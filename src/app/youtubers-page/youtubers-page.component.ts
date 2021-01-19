import { Component, OnInit } from "@angular/core";
import { YoutuberService } from "../youtuber.service";

@Component({
  selector: "app-youtubers-page",
  templateUrl: "./youtubers-page.component.html",
  styleUrls: ["./youtubers-page.component.css"]
})
export class YoutubersPageComponent implements OnInit {
  constructor(public dataService: YoutuberService) {}

  ngOnInit() {}

  onNotify($youtuber) {
    console.log("Liking youtuber " + $youtuber.name + " from parent ");
  }
}
