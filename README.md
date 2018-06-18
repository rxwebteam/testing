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

Writing your First Code
====
```html
    <form [formGroup]="employeeFormGroup">
      <div class="form-group">
        <label>First Name</label>
        <input type="text" class="form-control" formControlName="firstName" />     {{employeeFormGroup.controls.firstName.errors | json}}
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input type="text" class="form-control" formControlName="lastName" />     {{employeeFormGroup.controls.lastName.errors | json}}
      </div>
      <button type="button" class="btn btn-primary" [disabled]="!employeeFormGroup.valid">Submit</button>
    </div>
   </form>
