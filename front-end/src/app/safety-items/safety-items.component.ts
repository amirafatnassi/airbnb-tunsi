import { Component } from '@angular/core';
import { SafetyItemService } from '../services/safetyItem/safety-item.service';

@Component({
  selector: 'app-safety-items',
  templateUrl: './safety-items.component.html',
  styleUrls: ['./safety-items.component.scss']
})
export class SafetyItemsComponent {
  constructor(private safetyItemService: SafetyItemService) {}
  safetyItems :any[]=[];

  ngOnInit(): void {
    this.safetyItemsList();
  }

  safetyItemsList(){
    this.safetyItemService.getSafetyItems().subscribe((res:any)=>{ this.safetyItems=res})
  }

  suppSafetyItem(id:number){
    this.safetyItemService.deleteSafetyItem(id).subscribe((res:any)=>{
      console.log('safety item supprimé !');
      this.ngOnInit();
    });
  }
}