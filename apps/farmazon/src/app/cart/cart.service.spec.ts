import { TestBed } from '@angular/core/testing';

import { Cart } from './cart.service';

describe('CartService', () => {
  let service: Cart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it.todo('🚧 should add animal');
});
