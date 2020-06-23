import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { map } from 'rxjs/operators';
import { Cart } from './cart.service';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'fz-cart-info',
  template: `
    <div>{{ totalPrice$ | async }}</div>
  `
})
export class CartInfoComponent {
  totalPrice$ = this._cart.animals$.pipe(
    map(animals =>
      animals
        .map(animal => animal.price)
        .reduce((total, price) => total + price, 0)
    )
  );

  constructor(private _cart: Cart) {}
}

@NgModule({
  declarations: [CartInfoComponent],
  exports: [CartInfoComponent],
  imports: [CommonModule]
})
export class CartInfoModule {}
