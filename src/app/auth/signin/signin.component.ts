import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {
model : {email: string, password:string}
  constructor() { }

  ngOnInit() {
    this.model = { email:null , password : null};
  }
  onSubmit(){
    console.log( this.model);
  }
}
