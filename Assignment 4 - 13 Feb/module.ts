import { Component } from '@angular/core';
import { MathUtils } from './math';

@Component({
  selector: 'app-root',
  template: `
    <p>Result of addition: {{ addResult }}</p>
    <p>Result of subtraction: {{ subResult }}</p>
  `
})
export class AppComponent {
  addResult: number;
  subResult: number;

  constructor() {
    this.addResult = MathUtils.add(5, 3);
    this.subResult = MathUtils.subtract(10, 7);
  }
}
