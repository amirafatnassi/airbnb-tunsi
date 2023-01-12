import { Component, AfterViewInit, OnInit } from "@angular/core";
import { UserService } from "../services/user/user.service";
//declare var require: any;

@Component({
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements AfterViewInit, OnInit {
  subtitle: string;
  constructor(private userService:UserService) {
    this.subtitle = "This is some text within a card block.";
  }
  ngOnInit(): void {
    
  }
  ngAfterViewInit() {}
}
