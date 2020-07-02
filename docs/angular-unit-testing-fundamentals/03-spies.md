# 1. Setup

```sh
git checkout ut-04-progressive-tdd

yarn
```

# 2. Run tests

```sh
yarn test farmazon --watch
```

# 3. Let subscribers know when animals are added

1. Use a `BehaviorSubject` to expose animals through an `animals$` property that emits the animals list on every change.

2. Use spies to watch calls to observer.

```typescript
observer = jest.fn();

data$.subscribe(observer);

expect(observer).toBeCalledTimes(1);
expect(observer).toBeCalledWith(42);
```

3. You can access mock calls using `observer.mock.calls`.

4. Deprecate `getAnimalList()`.

# 4. Create a `<fz-cart-info>` component that shows cart's total price

1. Generate component:

```sh
yarn ng g @wishtack/schematics:scam cart-info
```

2. Inject the `Cart` service using `TestBed.inject`.

3. Mock or fake the `Cart.animals$` property using:

```typescript
jest.spyOn(cart, 'animals$', 'get').mockReturnValue(...)
```

or by providing a stub.

```typescript
TestBed.configureTestingModule({
  providers: [
    {
      provide: Cart,
      useValue: {
        animals$: ...
      }
    }
  ]
})
```

4. Trigger change detection with `fixture.detectChanges`.

5. Check component's text that you will find in `fixture.debugElement.nativeElement.textContent`.
