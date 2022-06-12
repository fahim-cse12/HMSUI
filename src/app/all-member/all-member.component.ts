import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

export interface Users {
  fullName: string;
  email: string;
}
@Component({
  selector: 'app-all-member',
  templateUrl: './all-member.component.html',
  styleUrls: ['./all-member.component.css']
})
export class AllMemberComponent implements OnInit {

  constructor(private service: UserService) { }
   allUser : Users[] = [];
  ngOnInit(): any {
   this.service.getAllUsers().subscribe({
      next:(res)=>{
        console.log(res);
        this.allUser = res;
      },
      error:(err)=>{
        alert(err);
      }
    })
  }





}
