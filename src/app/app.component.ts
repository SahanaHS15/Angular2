import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  getName(name){
    return name;
  }
  click(){
    console.log("click event")
  }
  eventup(){
    console.log("event up works")
  }
  eventdown(){
    console.log("event down works")
  }
  eventpress(){
    console.log("event press")
  }

pholder="enter first name"
changepholder(){
  this.pholder="enter last name"
}
day=true;
isLoggedIn=true;



  names=[
    {
      fName:"Sahana",
      age:21
    
     } , {
    fName:"Tom",
    age:22
  }, {
  fName:"Jerry",
    age:23
}
  ]
  fruits="";


textColor="gray";
bgColor="gray";
styleColor="newFont"
dateExample=Date();


fname:string="";
lname:string="";
age:string='';
terms:boolean=false;

// onSubmit(formValue: ngForm){
// console.log(formValue.value)
// console.log(formValue)
}
// }
