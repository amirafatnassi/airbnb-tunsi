import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
today = new Date();
  users :any[]=[];
  constructor(private userService: UserService) {}
  

  ngOnInit(): void {
    this.UserList();
  }

  UserList(){
    this.userService.getUsers().subscribe((res:any)=>{ this.users=res})
  }

  suppUser(id:number){
    this.userService.deleteUser(id).subscribe((res:any)=>{
      console.log('user deleted !');
      this.ngOnInit();
    });
  }
}
