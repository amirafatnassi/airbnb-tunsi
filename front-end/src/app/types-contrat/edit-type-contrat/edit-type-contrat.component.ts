import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TypeContratService } from '../../services/typeContrat/type-contrat.service';

@Component({
  selector: 'app-edit-type-contrat',
  templateUrl: './edit-type-contrat.component.html',
  styleUrls: ['./edit-type-contrat.component.scss']
})
export class EditTypeContratComponent {
  validForm= false;
  typeContrat: any;
  typeContratId: any;
  typeContratForm = new FormGroup({
    lib: new FormControl(""),
  });

  constructor(
    private typeContratService: TypeContratService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.typeContratId = this.route.snapshot.params["id"];
    this.myTypeContrat()
  }

  myTypeContrat() {
    this.typeContratService
      .getTypeContrat(this.typeContratId)
      .subscribe((res: any) => {
        this.typeContrat = res;
        this.typeContratForm.patchValue(res);
      });
  }

  update() {
    this.validForm = true;
    if (this.typeContratForm.invalid) {
      return;
    }

    this.typeContratService
      .updateTypeContrat(this.typeContratId, this.typeContratForm.value)
      .subscribe((res: any) => {
        console.log("Type de contrat modifié !");
        this.ngOnInit();
      });
  }
}
