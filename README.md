
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
| Validators    | Description                                                                                                                                                                          |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Required      | checked if property has any value or not if there is no value of particular property then it displays field is invalid                                                               |
| Alpha         | checked if property has any value that is only alphabets or if <b>allowWhiteSpace</b> is true then you can enter whitespace other wise it displays field is invalid                  |
| Alpha Numeric | checked if property has any value that is only alphabets and numbers only or if <b>allowWhiteSpace</b> is true then you can enter whitespace other wise it displays field is invalid |
| Digits        | checked if property has any value that is only numbers only other wise it displays field is invalid                                                                                  |
| Max Number    | check if the number's value is less than max number value other wise it displays field is invalid                                                                                    |
| Min Number    | check if the number's value is greater than min number value other wise it displays field is invalid                                                                                 |
| Max Date      | check if the date's value is less than max date value other wise it displays field is invalid                                                                                        |
| Min Date      | check if the date's value is greater than min date value other wise it displays field is invalid                                                                                     |
| Range         | check if the property value falls in a range. other wise it displays field is invalid                                                                                                |
| Compare       | check if current property is equal to other property other wise it displays field is invalid                                                                                         |
| Pattern       | check if propery matches regex pattern or not other wise it displays field is invalid                                                                                                |
| Contains      | check if the string contains the value other wise it displays field is invalid                                                                                                       |
| Email         | check if property value matches email pattern other wise it displays field is invalid                                                                                                |
| Hex Color     | check if property value matches hex color pattern other wise it displays field is invalid                                                                                            |
| Password      | check if property value matches password pattern other wise it displays field is invalid                                                                                             |
| Lower Case    | check if property value is in lowecase or not other wise it displays field is invalid                                                                                                |
| Upper Case    | check if property value is in uppercase or not other wise it displays field is invalid                                                                                               

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
