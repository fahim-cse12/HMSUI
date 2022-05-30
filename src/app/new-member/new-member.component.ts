import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss']
})
export class NewMemberComponent implements OnInit {
  formBuilder: any;

  constructor() { }

  profession:any;

  SaveOrUpdate: string = "Save";

  ngOnInit(): void {
   console.log(this.profession);
  }

}
