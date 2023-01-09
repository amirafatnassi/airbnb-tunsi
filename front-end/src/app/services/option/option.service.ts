import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  constructor(private http: HttpClient) {}

  createOption(data: any) {
    return this.http.post('http://localhost:4000/options/add', data);
  }

  getOptions() {
    return this.http.get('http://localhost:4000/options');
  }

  deleteOption(id: number) {
    return this.http.delete(`http://localhost:4000/options/delete/${id}`);
  }

  getOption(id:number){
    return this.http.get('http://localhost:4000/options/show/'+id);
  }

  updateOption(id:number,data:any){
    return this.http.put('http://localhost:4000/options/update/'+id,data);
  }
}
