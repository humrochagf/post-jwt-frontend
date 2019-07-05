import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';
import { ShoppingItem } from './shopping-item.interface';

@Component({
  selector: 'app-list',
  template: `
  <div style="text-align:center">
    <h1>
      Lista de compras
    </h1>
  </div>
  <ul>
    <li *ngFor="let item of items">
      <h2>{{ item.quantity }}x {{ item.name }}
      <button (click)="delete(item.id)">x</button></h2>
    </li>
  </ul>

  <input #itemQuantity type='text' placeholder='Qtd'>
  <input #itemName type='text' placeholder='Name'>
  <button (click)="add(itemName.value, itemQuantity.value)">Add</button>
  <p>{{ error?.message }}</p>
  <p *ngIf="error">{{ error?.error | json }}</p>
  `
})
export class ListComponent implements OnInit {

  items: ShoppingItem[];
  error: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getShoppingItems().subscribe(
      (items: ShoppingItem[]) => this.items = items,
      (error: any) => this.error = error
    );
  }

  add(itemName: string, itemQuantity: number) {
    this.api.createShoppingItem(itemName, itemQuantity).subscribe(
      (item: ShoppingItem) => this.items.push(item),
      (error: any) => this.error = error
    );
  }

  delete(id: number) {
    this.api.deleteShoppingItem(id).subscribe(
      (success: any) => this.items.splice(
        this.items.findIndex(item => item.id === id)
      ),
      (error: any) => this.error = error
    );
  }
}
