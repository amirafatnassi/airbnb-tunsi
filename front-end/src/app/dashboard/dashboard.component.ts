import { Component, AfterViewInit, OnInit } from "@angular/core";
//declare var require: any;

@Component({
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements AfterViewInit, OnInit {
  subtitle: string;

  constructor() {
    this.subtitle = "This is some text within a card block.";
  }
  ngOnInit(): void {
   
  }
  ngAfterViewInit() {}
}
