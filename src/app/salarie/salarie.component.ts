import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { SalariesService } from "../salaries.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-salarie",
  templateUrl: "./salarie.component.html",
  styleUrls: ["./salarie.component.css"]
})
export class SalarieComponent implements OnInit {
  salaryForm;
  salaryPercent = 0;
  salaryValue = 0;
  displayPercent = false;

  constructor(
    public salarieService: SalariesService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.salaryForm = this.formBuilder.group({
      salary: 0
    });
  }

  ngOnInit() {}

  onSubmit(data) {
    this.salaryForm.reset();
    this.displayPercent = true;
    this.salaryValue = data.salary;
    this.salaryPercent = this.salarieService.getPercentLess(data.salary);
  }
}
