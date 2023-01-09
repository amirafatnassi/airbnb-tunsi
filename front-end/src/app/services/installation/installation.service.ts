import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstallationService {

  constructor(private http: HttpClient) {}

  createInstallation(data: any) {
    return this.http.post('http://localhost:4000/installations/add', data);
  }

  getInstallations() {
    return this.http.get('http://localhost:4000/installations');
  }

  deleteInstallation(id: number) {
    return this.http.delete(`http://localhost:4000/installations/delete/${id}`);
  }

  getInstallation(id:number){
    return this.http.get('http://localhost:4000/installations/show/'+id);
  }

  updateInstallation(id:number,data:any){
    return this.http.put('http://localhost:4000/installations/update/'+id,data);
  }
}
