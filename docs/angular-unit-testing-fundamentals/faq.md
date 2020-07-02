
# FAQ

## `fz-animal-list` is not a known element

This is a shallow test. We don't want to load child components as they are probably not even implemented yet.

Apply `CUSTOM_ELEMENTS_SCHEMA` to allow unknown elements:

```typescript
TestBed.configureTestingModule({
  ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
}).compileComponents();
```

## Not getting the expected result

Did you trigger change detection with `fixture.detectChanges()`.

## How to mock a function that returns an observable?

You can use `of` function to create a hardcoded observable.

```typescript
mock.mockReturnValue(of(42));
```
