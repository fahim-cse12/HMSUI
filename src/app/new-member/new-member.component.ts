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
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      freshness: ['', Validators.required],
      comments: ['', Validators.required],
      price: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

}
