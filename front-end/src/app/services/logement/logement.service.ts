import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogementService {

  constructor(private http: HttpClient) {}

  createLogement(data: any) {
    return this.http.post('http://localhost:4000/logements/add', data);
  }

  getLogements() {
    return this.http.get('http://localhost:4000/logements');
  }

  deleteLogement(id: number) {
    return this.http.delete(`http://localhost:4000/logements/delete/${id}`);
  }

  getLogement(id:number){
    return this.http.get('http://localhost:4000/logements/show/'+id);
  }

  updateLogement(id:number,data:any){
    return this.http.put('http://localhost:4000/logements/update/'+id,data);
  }
}