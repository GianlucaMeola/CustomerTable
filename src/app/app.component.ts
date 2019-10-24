import { Component } from "@angular/core";

@Component ({
  selector: 'pm-root',
  template: `<div><h1>{{pageTitle}}</h1>
              <pm-customers></pm-customers></div>`
})

export class AppComponent {
  pageTitle : string = 'ACME customer Database';
}