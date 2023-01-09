import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OptionService } from '../../services/option/option.service';

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.scss']
})
export class AddOptionComponent {
  validForm = false;
  
  constructor(private optionService: OptionService) {}
  ngOnInit() {}

  optionForm = new FormGroup({
    lib: new FormControl('', Validators.required)
  });

  onSubmitFormGroupe() {
    this.validForm = true;
    if (this.optionForm.invalid) {
      return;
    }
    this.optionService
      .createOption(this.optionForm.value)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
