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
Using Rx Web Reactive Form Validation
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
  @alpha({ allowWhiteSpace: true, conditionalExpressions: "x => x.lastName == 'ojha'" })
  firstName: string;

  @prop() @alphaNumeric({ allowWhiteSpace: false, message: "only alpha numeric is allowed", conditionalExpressions: "x => x.firstName == 'ajay'" })
  lastName: string;
}
```
