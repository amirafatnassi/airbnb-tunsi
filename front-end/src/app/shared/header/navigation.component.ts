import {
  Component,
  AfterViewInit,
  EventEmitter,
  Output,
  OnInit,
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "../../services/user/user.service";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import jwtDecode from "jwt-decode";

declare var $: any;

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
})
export class NavigationComponent implements AfterViewInit, OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;
  user :any= {};
  currentUser: any = "";

  constructor(
    private modalService: NgbModal,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem("token") || "";
    const decoded: any = jwtDecode(token);
    this.userService.getUser(decoded.userId).subscribe((res: any) => {
      this.user={
        id:res._id,
        username:res.firstName+' '+res.lastName,
        photo:res.photo,
      }
    });
  }

  // This is for Notifications
  notifications: Object[] = [
    {
      btn: "btn-danger",
      icon: "ti-link",
      title: "Luanch Admin",
      subject: "Just see the my new admin!",
      time: "9:30 AM",
    },
    {
      btn: "btn-success",
      icon: "ti-calendar",
      title: "Event today",
      subject: "Just a reminder that you have event",
      time: "9:10 AM",
    },
    {
      btn: "btn-info",
      icon: "ti-settings",
      title: "Settings",
      subject: "You can customize this template as you want",
      time: "9:08 AM",
    },
    {
      btn: "btn-warning",
      icon: "ti-user",
      title: "Pavan kumar",
      subject: "Just see the my admin!",
      time: "9:00 AM",
    },
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: "assets/images/users/user1.jpg",
      status: "online",
      from: "Pavan kumar",
      subject: "Just see the my admin!",
      time: "9:30 AM",
    },
    {
      useravatar: "assets/images/users/user2.jpg",
      status: "busy",
      from: "Sonu Nigam",
      subject: "I have sung a song! See you at",
      time: "9:10 AM",
    },
    {
      useravatar: "assets/images/users/user2.jpg",
      status: "away",
      from: "Arijit Sinh",
      subject: "I am a singer!",
      time: "9:08 AM",
    },
    {
      useravatar: "assets/images/users/user4.jpg",
      status: "offline",
      from: "Pavan kumar",
      subject: "Just see the my admin!",
      time: "9:00 AM",
    },
  ];

  public selectedLanguage: any = {
    language: "English",
    code: "en",
    type: "US",
    icon: "us",
  };

  public languages: any[] = [
    {
      language: "English",
      code: "en",
      type: "US",
      icon: "us",
    },
    {
      language: "Espa??ol",
      code: "es",
      icon: "es",
    },
    {
      language: "Fran??ais",
      code: "fr",
      icon: "fr",
    },
    {
      language: "German",
      code: "de",
      icon: "de",
    },
  ];

  ngAfterViewInit() {}
}
