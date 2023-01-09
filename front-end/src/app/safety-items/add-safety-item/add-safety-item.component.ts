import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafetyItemService } from '../../services/safetyItem/safety-item.service';

@Component({
  selector: 'app-add-safety-item',
  templateUrl: './add-safety-item.component.html',
  styleUrls: ['./add-safety-item.component.scss']
})
export class AddSafetyItemComponent {

  validForm = false;
  
  constructor(private safetyItemService: SafetyItemService) {}
  ngOnInit() {}

  safetyItemForm = new FormGroup({
    lib: new FormControl('', Validators.required)
  });

  onSubmitFormGroupe() {
    this.validForm = true;
    if (this.safetyItemForm.invalid) {
      return;
    }
    this.safetyItemService
      .createSafetyItem(this.safetyItemForm.value)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
