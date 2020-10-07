import { async, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { createAnimal } from './animal';
import { CartInfoComponent } from './cart-info.component';
import { Cart } from './cart.service';

describe('CartInfoComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartInfoComponent]
    }).compileComponents();
  }));

  let cart: Cart;
  beforeEach(() => (cart = TestBed.inject(Cart)));

  it('should display total cart price', () => {
    jest.spyOn(cart, 'animals$', 'get').mockReturnValue(
      of([
        createAnimal({
          name: 'Dolly',
          price: 100
        }),
        createAnimal({
          name: 'Missy',
          price: 200
        })
      ])
    );

    const fixture = TestBed.createComponent(CartInfoComponent);

    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.textContent).toEqual('300');
  });
});
