import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  myReactiveForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm =new FormGroup({
      "fname": new FormControl(null),
      "lname": new FormControl(null),
      "email": new FormControl(null,[Validators.email,Validators.required])

  });
// onSubmit(){
  // console.log(this.myReactiveForm);
}
  }
// }
