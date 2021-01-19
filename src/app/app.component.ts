import { Component, VERSION } from "@angular/core";
import { YoutuberService } from "./youtuber.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [YoutuberService]
})
export class AppComponent {
  name: string = "Angular " + VERSION.full;

  constructor(
    public youtuberService: YoutuberService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  checkoutForm;

  displayStr(value: string): string {
    return value + " est le meilleur Youtuber";
  }

  onNotify($youtuber) {
    console.log("Liking youtuber " + $youtuber.name + " from parent ");
  }

  onSubmit(data) {
    console.log(data);
    this.checkoutForm.reset();
  }
}
