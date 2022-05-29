import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss']
})
export class NewMemberComponent implements OnInit {
  formBuilder: any;

  constructor() { }

  freshnessList = ["Brand New", "Used", "Low Quality"];
  productForm!: FormGroup;
  SaveOrUpdate: string = "Save";

  ngOnInit(): void {
  
  }

}
