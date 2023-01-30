import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CritereService } from '../../services/critere/critere.service';

@Component({
  selector: 'app-edit-critere',
  templateUrl: './edit-critere.component.html',
  styleUrls: ['./edit-critere.component.scss']
})
export class EditCritereComponent {
  validForm= false;
  critere: any;
  critereId: any;
  critereForm = new FormGroup({
    lib: new FormControl(""),
  });

  constructor(
    private critereService: CritereService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.critereId = this.route.snapshot.params["id"];
    this.myCritere()
  }

  myCritere() {
    this.critereService
      .getCritere(this.critereId)
      .subscribe((res: any) => {
        this.critere = res;
        this.critereForm.patchValue(res);
      });
  }

  update() {
    this.validForm = true;
    if (this.critereForm.invalid) {
      return;
    }

    this.critereService
      .updateCritere(this.critereId, this.critereForm.value)
      .subscribe((res: any) => {
        this.ngOnInit();
      });
  }
}
