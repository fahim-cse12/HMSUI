import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  
  public loginForm = this.formBuilder.group({
     email:['', [Validators.email, Validators.required]],
     password:['', Validators.required]
  });

  ngOnInit() {
  }

  onSubmit(){
     console.log(this.loginForm.value);
  }

}
