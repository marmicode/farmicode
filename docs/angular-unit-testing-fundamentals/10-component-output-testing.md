# 1. Setup

```sh
git checkout ut-13-form-testing-with-harness

yarn
```

# 2. Run tests

```sh
yarn test farmicode --watch
```

# 3. Add a "Buy" button next to each animal

## 3.1. Shallow testing

### 3.1.1. Emulate outputs

Check that triggering `<fz-animal-list>`'s `animalBuy` output adds animal to cart.

1. Add a new test in `animal-search.component.shallow.spec.ts`.

2. Mock `Cart.addAnimal`.

3. Check that the component adds a listener to the `animalBuy` output.
   The `DebugElement` has a `listeners` property containing the list of listeners. Every listener has a `name` and a `callback`.

```typescript
console.log(debugEl.listeners); // [{name: 'animalBuy', callback: ...}]
```

4. Call the `callback` with an animal as parameter.

5. Check that `Cart.addAnimal` was called with the right animal.

6. Replace manual callback call by `debugEl.triggerEventHandler('animalAdd', animal)`.

### 3.1.2. Test `<fz-animal-list>`

1. Create an `animal-list.component.spec.ts` file.

2. Create a mock observer using `jest.fn()`.

3. Subscribe to `component.animalBuy` output.

4. Click on the first buy button.

5. Check that the observer was called with the right animal.

## 3.2. Integration testing

1. Factorize animals creation and `AnimalSearch.search` mock in `beforeEach`.

2. Add a new test in `animal-search.component.integration.spec.ts`.

3. Mock `Cart.addAnimal`.

4. Search for animals.

5. Click on the first buy button using `AnimalListHarness`.

6. Check that `Cart.addAnimal` was called with the right animal.
