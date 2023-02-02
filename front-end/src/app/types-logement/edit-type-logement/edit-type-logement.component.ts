import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TypeLogementService } from '../../services/typeLogement/type-logement.service';

@Component({
  selector: 'app-edit-type-logement',
  templateUrl: './edit-type-logement.component.html',
  styleUrls: ['./edit-type-logement.component.scss']
})
export class EditTypeLogementComponent {
  validForm= false;
  typeLogement: any;
  typeLogementId: any;
  typeLogementForm = new FormGroup({
    lib: new FormControl(""),
  });

  constructor(
    private typeLogementService: TypeLogementService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.typeLogementId = this.route.snapshot.params["id"];
    this.myTypeLogement()
  }

  myTypeLogement() {
    this.typeLogementService
      .getTypeLogement(this.typeLogementId)
      .subscribe((res: any) => {
        this.typeLogement = res;
        this.typeLogementForm.patchValue(res);
      });
  }

  update() {
    this.validForm = true;
    if (this.typeLogementForm.invalid) {
      return;
    }

    this.typeLogementService
      .updateTypeLogement(this.typeLogementId, this.typeLogementForm.value)
      .subscribe((res: any) => {
        this.ngOnInit();
      });
  }
}
