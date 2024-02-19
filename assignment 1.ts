// Angular: Create enum examples with names constant like different types of fruits name and display particular fruit name using the switch case statemen

import { Component } from '@angular/core';


enum Fruit {
  Apple = 'Apple',
  Banana = 'Banana',
  Orange = 'Orange',
  Mango = 'Mango',
  Grape = 'Grape'
}

@Component({
  selector: 'app-root',
  template: `
    <h2>Selected Fruit: {{ getFruitName() }}</h2>
  `,
  
})
export class FruitComponent {
  selectedFruit: Fruit = Fruit.Apple; 

  getFruitName(): string {
    switch (this.selectedFruit) {
      case Fruit.Apple:
        return 'Apple';
      case Fruit.Banana:
        return 'Banana';
      case Fruit.Orange:
        return 'Orange';
      case Fruit.Mango:
        return 'Mango';
      case Fruit.Grape:
        return 'Grape';
      default:
        return '';
    }
  }
}
