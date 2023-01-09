import { Component } from '@angular/core';
import { InstallationService } from '../services/installation/installation.service';

@Component({
  selector: 'app-installations',
  templateUrl: './installations.component.html',
  styleUrls: ['./installations.component.scss']
})
export class InstallationsComponent {
  constructor(private installationService: InstallationService) {}
  installations :any[]=[];

  ngOnInit(): void {
    this.installationsList();
  }

  installationsList(){
    this.installationService.getInstallations().subscribe((res:any)=>{ this.installations=res})
  }

  suppInstallation(id:number){
    this.installationService.deleteInstallation(id).subscribe((res:any)=>{
      console.log('installation deleted !');
      this.ngOnInit();
    });
  }
}

