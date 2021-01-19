import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-youtubers-list",
  templateUrl: "./youtubers-list.component.html",
  styleUrls: ["./youtubers-list.component.css"]
})
export class YoutubersListComponent implements OnInit {
  @Input() youtubers: any;

  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
