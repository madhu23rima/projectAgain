import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
@ViewChild('f') signupForm : NgForm
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
  console.log(this.signupForm);
  console.log('value of email  is : ' + this.signupForm.value.email);
  console.log('value of password  is : ' + this.signupForm.value.password);
  }
}
