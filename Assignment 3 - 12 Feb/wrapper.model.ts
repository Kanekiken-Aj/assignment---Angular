export class ArrayWrapper<T> {
    private items: T[];
  
    constructor() {
      this.items = [];
    }
  
    addItem(item: T): void {
      this.items.push(item);
    }
  
    removeItem(item: T): void {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  
    updateItem(oldItem: T, newItem: T): void {
      const index = this.items.indexOf(oldItem);
      if (index !== -1) {
        this.items[index] = newItem;
      }
    }
  
    getItems(): T[] {
      return this.items;
    }
  }
  