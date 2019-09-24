import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <nav class="navbar fixed-bottom navbar-dark bg-dark" style="width: 90%">
      <div class="navbar-text m-auto">
          <a target="_blank">POC - overview dashboard layout</a>
      </div>
    </nav>
  `,
  styles: []
})
export class FooterComponent {
  public link = 'https://github.com/beeman/angular-presentations'
  public author = 'beeman 🐝'
  public year = '2018'
}
