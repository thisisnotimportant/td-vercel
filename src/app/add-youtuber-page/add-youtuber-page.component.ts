import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { YoutuberService } from "../youtuber.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-youtuber-page",
  templateUrl: "./add-youtuber-page.component.html",
  styleUrls: ["./add-youtuber-page.component.css"]
})
export class AddYoutuberPageComponent implements OnInit {
  constructor(
    public youtuberService: YoutuberService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      followers: 0,
      description: ""
    });
  }
  checkoutForm;

  ngOnInit() {}

  onSubmit(data) {
    console.log(data);
    this.checkoutForm.reset();
    this.youtuberService.add(data);
    this.router.navigate(["/youtubers"]);
  }
}
