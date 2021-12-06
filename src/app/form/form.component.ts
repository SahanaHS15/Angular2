import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
  <form class="form">
  <div class="formm"><h1> Employee interest survey form</h1>
  <div><label>Enter your name</label><input type="text" ></div>&ensp;
  <div><label>Enter your department</label><input type="text" ></div>
  <div><label>tell us about your intrest</label><input type="text"  id ="name"></div>
  <div><label>Do you exercise at home?</label><input type="radio" value="yes" ></div>&ensp;<input type="radio" value="No">No</div>
  <div><label>how do you like to read your favorite topics</label><input type="checkbox"  value="Book"> Book &nbsp; <input type="checkbox" value="online resources"></div>
  <div><label>what genre more do you like</label><select name="genre" id="role" >
<option value="comedy">comedy</option>
<option value="action">action</option>
<option value="adventures">
adventures
</option>
<option value="horror">horror</option>
</select></div>
<div><button> submit</button></div>
</form>











`,
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
