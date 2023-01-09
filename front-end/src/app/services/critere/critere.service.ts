import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CritereService {

  constructor(private http: HttpClient) {}

  createCritere(data: any) {
    return this.http.post('http://localhost:4000/criteres/add', data);
  }

  getCriteres() {
    return this.http.get('http://localhost:4000/criteres');
  }

  deleteCritere(id: number) {
    return this.http.delete(`http://localhost:4000/criteres/delete/${id}`);
  }

  getCritere(id:number){
    return this.http.get('http://localhost:4000/criteres/show/'+id);
  }

  updateCritere(id:number,data:any){
    return this.http.put('http://localhost:4000/criteres/update/'+id,data);
  }
}
