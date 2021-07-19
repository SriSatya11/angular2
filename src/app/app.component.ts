import { Component, VERSION } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
import {formatDate} from '@angular/common';
import {AbstractControl,ValidationErrors} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  title = 'angular12';
  isSubmitted=false;
  hobbiesList = [
    {name: 'Sports', value: 'sports'},
    {name: 'Music', value: 'music'},
    {name: 'Movie', value: 'movie'},
    {name: 'Reading', value: 'reading'},
    {name: 'Watching', value: 'watching'}
  ]
  loginForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    maritalStatus: new FormControl('', Validators.required),
    highestQualification: new FormControl('', Validators.required),
    contactNumber: new FormControl('',[Validators.required,Validators.pattern('\+?\d[91][-\s]?\d{10}')]),
    emailId: new FormControl('', [Validators.required,Validators.email]),
    dob: new FormControl('', Validators.required),
    hobbies: new FormArray([new FormControl('', Validators.required)]),
    disc: new FormControl('', [Validators.required,Validators.maxLength(500)]),
    street: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    zipcode: new FormControl('', Validators.required),
  })
  get errorControl() {
     return this.loginForm.controls;
   }

  get firstName() {
     return this.loginForm.get('firstName')
   }
   get lastName() {
    return this.loginForm.get('lastName')
  }
  get maritalStatus() {
    return this.loginForm.get('maritalStatus')
  }
  get highestQualification() {
    return this.loginForm.get('highestQualification')
  }
  get contactNumber () {
    return this.loginForm.get('contactNumber')
  }
  get emailId () {
    return this.loginForm.get('emailId')
  }
  get dob() {
    return this.loginForm.get('dob')
  }
  get disc() {
    return this.loginForm.get('disc')
  }
  get street() {
    return this.loginForm.get('street')
  }
  get city() {
    return this.loginForm.get('city')
  }
  get country() {
    return this.loginForm.get('country')
  }
  get zipcode() {
    return this.loginForm.get('zipcode')
  }
  onChangeHobbie(val: any, y: any) {
    const formArray = <FormArray>this.loginForm.controls.hobbies;
    if (y.target.checked) {
      formArray.push(new FormControl(val));
    } else {
      let index = formArray.controls.findIndex(x => x.value == val)
      formArray.removeAt(index);
    }

  }


  formSubmitted() 
  {
  this.isSubmitted=true;
    if(this.loginForm.valid)
    {
    console.log("formSubmitted values")
    console.log(this.loginForm.value)
    }
    else
    {
      console.log("Please enter all required fields");
    }
  }
  reset(){
    console.log("Resetting")
    this.loginForm.reset();
  }


}