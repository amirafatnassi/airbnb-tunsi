import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OptionService } from '../../services/option/option.service';

@Component({
  selector: 'app-edit-option',
  templateUrl: './edit-option.component.html',
  styleUrls: ['./edit-option.component.scss']
})
export class EditOptionComponent {
  validForm= false;
  option: any;
  optionId: any;
  optionForm = new FormGroup({
    lib: new FormControl(""),
  });

  constructor(
    private optionService: OptionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.optionId = this.route.snapshot.params["id"];
    this.myOption();
  }

  myOption() {
    this.optionService
      .getOption(this.optionId)
      .subscribe((res: any) => {
        this.option = res;
        this.optionForm.patchValue(res);
      });
  }

  update() {
    this.validForm = true;
    if (this.optionForm.invalid) {
      return;
    }

    this.optionService
      .updateOption(this.optionId, this.optionForm.value)
      .subscribe((res: any) => {
        console.log("option updated !");
        this.ngOnInit();
      });
  }
}
