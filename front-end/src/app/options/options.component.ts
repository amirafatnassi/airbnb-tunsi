import { Component } from '@angular/core';
import { OptionService } from '../services/option/option.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {
  options :any[]=[];
  dtOptions: DataTables.Settings = {};
  
  constructor(private optionService: OptionService) {}

  ngOnInit(): void {
    this.optionsList();console.log('inint');
    this.dtOptions = {
      pagingType: 'full_numbers'
    };    
  }

  optionsList(){
    this.optionService.getOptions().subscribe((res:any)=>{ console.log('rrrr');this.options=res ;
    })
  }

  suppOption(id:number){
    this.optionService.deleteOption(id).subscribe((res:any)=>{
      console.log('option deleted !');
      this.ngOnInit();
    });
  }
}