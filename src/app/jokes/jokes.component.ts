import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-jokes",
  templateUrl: "./jokes.component.html",
  styleUrls: ["./jokes.component.css"]
})
export class JokesComponent implements OnInit {
  currentJoke = "";
  constructor(private http: HttpClient) {
    this.getJoke();
  }

  ngOnInit() {}

  getJoke() {
    var res = this.http
      .get(
        "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?type=single"
      )
      .subscribe(data => {
        console.log(data, data["joke"]);
        this.currentJoke = data["joke"];
      });
  }
}
