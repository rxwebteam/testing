
# Rx Web Reactive Form Validation

[![NPM version](https://badge.fury.io/js/%40rxweb%2Freactive-form-validators.svg)](https://badge.fury.io/js/%40rxweb%2Freactive-form-validators)

Client-side Validation should be simple and clean.
<br/>Don't let Client-side Validation dirty your component.
<br/>This validation is configure on model property same as data annotation in MVC

Install
-----
Install with npm

```
npm install @rxweb/reactive-form-validators
```
Built-in validation <small>in Rx Web</small>
===
| Validators    | Example                                                                                                                                                                                                                                                                                                                                                                                               | Description                                                                                                                                                                          |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Required      | @required({ message: "this field is required.", conditionalExpressions: "x => x.gender == 'male'" })@required({ conditionalExpressions: "x => x.gender == 'male'" })                                                                                                                                                                                                                                  | checked if property has any value or not if there is no value of particular property then it displays field is invalid                                                               |
| Alpha         | @alpha({ allowWhiteSpace: true, conditionalExpressions: "x => x.categoryName == 'mobile'})@alpha({ allowWhiteSpace: false, conditionalExpressions: "x => x.categoryName == 'mobile'})@alpha({ allowWhiteSpace: true, conditionalExpressions: "x => x.categoryName == 'mobile',message:'Please enter alpha and white space only'})@alpha({ allowWhiteSpace: true})                                     | checked if property has any value that is only alphabets or if <b>allowWhiteSpace</b> is true then you can enter whitespace other wise it displays field is invalid                  |
| Alpha Numeric | @alphaNumeric({ allowWhiteSpace: true, conditionalExpressions: "x => x.categoryName == 'mobile'})@alphaNumeric({ allowWhiteSpace: false, conditionalExpressions: "x => x.categoryName == 'mobile'})@alphaNumeric({ allowWhiteSpace: true, conditionalExpressions: "x => x.categoryName == 'mobile',message:'Please enter alphanumerics and white space only'})@alphaNumeric({ allowWhiteSpace: true}) | checked if property has any value that is only alphabets and numbers only or if <b>allowWhiteSpace</b> is true then you can enter whitespace other wise it displays field is invalid |
| Digits        | @digit({ conditionalExpressions: "x => x.productName == 'iphone', message: "digit required" })@digit({ conditionalExpressions: "x => x.productName == 'iphone' })                                                                                                                                                                                                                                     | checked if property has any value that is only numbers only other wise it displays field is invalid                                                                                  |
| Max Number    | @maxNumber({ value: 20, message: "number exceed {{0}}" })                                                                                                                                                                                                                                                                                                                                             | check if the number's value is less than max number value other wise it displays field is invalid                                                                                    |
| Min Number    | @minNumber({ value: 20, message: "minimum number {{0}}" })                                                                                                                                                                                                                                                                                                                                            | check if the number's value is greater than min number value other wise it displays field is invalid                                                                                 |
| Max Date      | @maxDate({ value: new Date(2016, 10, 5) })                                                                                                                                                                                                                                                                                                                                                            | check if the date's value is less than max date value other wise it displays field is invalid                                                                                        |
| Min Date      | @minDate({ value: new Date(2016, 10, 5) })                                                                                                                                                                                                                                                                                                                                                            | check if the date's value is greater than min date value other wise it displays field is invalid                                                                                     |
| Range         | @range({ minimumNumber: 50000, maximumNumber: 100000 })                                                                                                                                                                                                                                                                                                                                               | check if the property value falls in a range. other wise it displays field is invalid                                                                                                |
| Compare       | Compare                                                                                                                                                                                                                                                                                                                                                                                               | check if current property is equal to other property other wise it displays field is invalid                                                                                         |
| Pattern       | @pattern({  pattern: {      'onlyDigit': /^[0-9]+$/,    }, message: "pattern is not matched"  })@pattern({    pattern: {      'onlyDigit': /^[0-9]+$/,    }  })                                                                                                                                                                                                                                       | check if propery matches regex pattern or not other wise it displays field is invalid                                                                                                |
| Contains      | @contains({ value: "radix", conditionalExpressions: "x => x.industry == 'IT', message: "validation failed contains" })                                                                                                                                                                                                                                                                                | check if the string contains the value other wise it displays field is invalid                                                                                                       |
| Email         | @email()@email({ message: "email is not valid", conditionalExpressions: "x =>x.country == 'u.s.'" })@email({ message: "email is not valid" })                                                                                                                                                                                                                                                         | check if property value matches email pattern other wise it displays field is invalid                                                                                                |
| Hex Color     | @hexColor({ message: "hex", conditionalExpressions: "x => x.applyColor == true" })                                                                                                                                                                                                                                                                                                                    | check if property value matches hex color pattern other wise it displays field is invalid                                                                                            |
| Password      | @password({ validation: { maxLength: 10, minLength: 5, digit: true, specialCharacter: true } })@password({ validation: { maxLength: 10, minLength: 5, digit: true, specialCharacter: true,message:'password is not valid.' } })                                                                                                                                                                       | check if property value matches password pattern other wise it displays field is invalid                                                                                             |
| Lower Case    | @upperCase({ message: "Please enter lowecase letter only", conditionalExpressions: "x => x.brandName == 'PAUMA'" })'@upperCase({ message: "Please enter lowecase letter only"})                                                                                                                                                                                                                       | check if property value is in lowecase or not other wise it displays field is invalid                                                                                                |
| Upper Case    | @upperCase({ message: "Please enter uppercase letter only", conditionalExpressions: "x => x.brandName == 'PAUMA'" })'@upperCase({ message: "Please enter uppercase letter only"})                                                                                                                                                                                                                     | check if property value is in uppercase or not other wise it displays field is invalid                                                                                               |                                                                                             

##Using Rx Web Reactive Form Validation
-----
```app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule  FormsModule, ReactiveFormsModule
  ],
  providers: [RxFormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Writing your First Code
====
```html
<form [formGroup]="employeeFormGroup">
   <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" formControlName="firstName" />
     {{employeeFormGroup.controls.firstName.errors | json}}
   </div>
   <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" formControlName="lastName" />
     {{employeeFormGroup.controls.lastName.errors | json}}
   </div>
   <button type="button" class="btn btn-primary" [disabled]="!employeeFormGroup.valid">Submit</button>
   </div>
</form>
```

Component
====
```component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employee, EmployeeDetail, Attendance } from '../models';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employeeFormGroup: FormGroup
  constructor(private validation: RxFormBuilder) {
  }
  ngOnInit(): void {
    ReactiveFormConfig.set({
      "internationalization": {
        "dateFormat": "dmy",
        "seperator": "/"
      },
      "validationMessage": {
        "alpha": "only alpha value you enter",
        "alphaNumeric": "only alpha Numeric value you enter",
        "contains": "you should contains ",
        "onlyDigit": "abc",
        "digit": "digit required"
      }
    });
    var employee = new Employee();
    employee.firstName = "ajay";
    employee.lastName = "ojha";
    this.employeeFormGroup = this.validation.formGroup(employee);
  }
}
```


Models
====
```Model Typescript
import { prop,alpha,alphaNumeric } from "@rxweb/reactive-form-validators";
export class Employee {
  @prop()
  @alpha({ 
    allowWhiteSpace: true,
    conditionalExpressions: "x => x.lastName == 'ojha'"
  })
  firstName: string;

  @prop() 
  @alphaNumeric({ 
    allowWhiteSpace: false, 
    message: "only alpha numeric is allowed", 
    conditionalExpressions: "x => x.firstName == 'ajay'"
  })
  lastName: string;
}
```

Integrating with Twitter Bootstrap
=====

To integrate this package with Bootstrap you should do the following.


Add the following LESS to your project

```css
input.ng-invalid, select.ng-invalid{
  border-bottom:1px solid red;
}

```

License
-----
MIT

CHANGELOG
=====
See [release](https://github.com/rxweb/rxweb.github.io/releases)

CONTRIBUTORS
=====
Thank you for your contribution [@ajay.ojha](https://github.com/ajayojha) <br/>
Thanks for all [contributors](https://github.com/rxweb/rxweb.github.io/graphs/contributors)
