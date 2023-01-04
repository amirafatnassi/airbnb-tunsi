import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(data:any){
    return this.http.post('http://localhost:4200/users',data);
  }

  
  getUsers() {
    return this.http.get('http://localhost:4200/users');
  }

  deleteUser(id: number) {
    return this.http.delete(`http://localhost:4200/users/${id}`);
  }

  getUser(id: number) {
    return this.http.get('http://localhost:4200/users/' + id);
  }

  updateUser(id: number, data: any) {
    return this.http.put('http://localhost:4200/users/' + id, data);
  }
}
