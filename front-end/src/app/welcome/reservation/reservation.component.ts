import { Component, OnInit } from "@angular/core";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { ReservationService } from "../../services/reservation/reservation.service";
import jwtDecode from "jwt-decode";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../services/user/user.service";
import { DatePipe } from "@angular/common";
import { LogementService } from "../../services/logement/logement.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.component.html",
  styleUrls: ["./reservation.component.scss"],
})
export class ReservationComponent implements OnInit {
  logementId: any;
  logement: any;

  currentUserId: any = "";
  reservationForm!: FormGroup;
  validForm = false;

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  minDate = new Date();
  datePickerConfig: Partial<BsDatepickerConfig>;

  total = 0;

  constructor(
    private reservationService: ReservationService,
    private userService: UserService,
    private logementService: LogementService,
    public datepipe: DatePipe,
    private route: ActivatedRoute
  ) {
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate());
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: "theme-dark-blue",
        dateInputFormat: "DD/MM/YYYY",
      }
    );
  }

  Monlogement() {
    this.logementService.getLogement(this.logementId).subscribe((res: any) => {
      this.logement = res;
    });
  }
  ngOnInit(): void {
    this.logementId = this.route.snapshot.params["id"];
    this.Monlogement();

    this.reservationForm = new FormGroup({
      date_range: new FormControl("", Validators.required),
      nb_invites: new FormControl("", Validators.required),
      date_debut: new FormControl(),
      date_fin: new FormControl(),
      guest: new FormControl(""),
      logement: new FormControl(this.logementId),
    });
    const token = localStorage.getItem("token") || "";
    const decoded: any = jwtDecode(token);
    this.userService.getUser(decoded.userId).subscribe((res: any) => {
      this.currentUserId = res._id;
      console.log(res);
    });
  }

  onSubmit() {
    this.validForm = true;
    if (this.reservationForm.invalid) {
      return;
    }
    delete this.reservationForm.value.date_range;
    this.reservationForm.value.date_debut = this.bsRangeValue[0].toISOString();
    this.reservationForm.value.date_fin = this.bsRangeValue[1].toISOString();
    this.reservationForm.value.guest = this.currentUserId;
    console.log(this.reservationForm.value);
    
    this.reservationService
      .createReservation(this.reservationForm.value)
      .subscribe((res: any) => {
        console.log(res);
      });
  }

 
  ngOnChanges(){
    console.log('test');
    
    this.validForm = true;
    if (this.reservationForm.invalid) {
      return;
    }
    delete this.reservationForm.value.date_range;
    const startDate = new Date(this.bsRangeValue[0]);
    const endDate = new Date(this.bsRangeValue[1]);
    console.log((endDate.getTime()-startDate.getTime() ) /(3600000*24));
    
    this.reservationForm.value.date_debut =
    this.reservationForm.value.date_fin = this.bsRangeValue[1].toISOString();
    this.total = (endDate.getTime()-startDate.getTime() ) /(3600000*24);
}
}
