import { Component,OnInit } from '@angular/core';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  ngOnInit(){
    ReactiveFormConfig.set({
      "validationMessage": {
          "alpha": "Only alphabelts are allowed.",
      }
  });
  }
}
