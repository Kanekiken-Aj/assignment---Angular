import { Component } from '@angular/core';
import { Utils } from './utils';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="greet()">Greet</button>
  `
})
export class AppComponent {
  greet(): void {
    Utils.greet('John');
  }
}
