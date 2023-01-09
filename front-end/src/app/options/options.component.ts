import { Component } from '@angular/core';
import { OptionService } from '../services/option/option.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {
  constructor(private optionService: OptionService) {}
  options :any[]=[];

  ngOnInit(): void {
    this.optionsList();console.log('inint');console.log(this.options);
    
    
  }

  optionsList(){
    this.optionService.getOptions().subscribe((res:any)=>{ console.log('rrrr');this.options=res ;
     console.log(this.options);
    })
  }

  suppOption(id:number){
    this.optionService.deleteOption(id).subscribe((res:any)=>{
      console.log('option deleted !');
      this.ngOnInit();
    });
  }
}