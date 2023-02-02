import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SafetyItemService } from '../../services/safetyItem/safety-item.service';

@Component({
  selector: 'app-edit-safety-item',
  templateUrl: './edit-safety-item.component.html',
  styleUrls: ['./edit-safety-item.component.scss']
})
export class EditSafetyItemComponent {
  validForm= false;
  safetyItem: any;
  safetyItemId: any;
  safetyItemForm = new FormGroup({
    lib: new FormControl(""),
  });

  constructor(
    private safetyItemService: SafetyItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.safetyItemId = this.route.snapshot.params["id"];
    this.mySafetyItem();
  }

  mySafetyItem() {
    this.safetyItemService
      .getSafetyItem(this.safetyItemId)
      .subscribe((res: any) => {
        this.safetyItem = res;
        this.safetyItemForm.patchValue(res);
      });
  }

  update() {
    this.validForm = true;
    if (this.safetyItemForm.invalid) {
      return;
    }

    this.safetyItemService
      .updateSafetyItem(this.safetyItemId, this.safetyItemForm.value)
      .subscribe((res: any) => {
        this.ngOnInit();
      });
  }
}
