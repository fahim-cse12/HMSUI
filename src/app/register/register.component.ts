import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  signUpForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { } 

  ngOnInit(): void {
     this.signUpForm = this.formBuilder.group({
      fullName:['', Validators.required],
      email:['',[Validators.required, Validators.email]],
      password:['', Validators.required]
    });
  }

  onSubmit(){
    console.log(this.signUpForm.value);
    this.userService.register(this.signUpForm.value).subscribe({
      next:(res)=>{
        alert("User Added Successfully");
        this.signUpForm.reset();
      },
      error:(err)=>{
        alert(err.error.text);
      }
    })
  }

}
