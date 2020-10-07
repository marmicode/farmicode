# 1. Setup

```sh
git checkout ut-10-component-dom-testing

yarn add @angular/cdk
```

# 2. Run tests

```sh
yarn test farmicode --watch
```

# 3. Create a harness for `<fz-animal-list>`

1. Create a harness class in `animal-list.component.harness.ts`:

```typescript
export class AnimalListHarness extends ComponentHarness {
  ...
}
```

2. Harness needs the selector of the component:

```typescript
export class AnimalListHarness extends ComponentHarness {
  static hostSelector = 'fz-animal-list';
}
```

3. Use `locatorForAll` to generate a factory function that helps retrieving children:

```typescript
private _getAnimalNameElList = this.locatorForAll('li');

async getAnimalNames() {
  const x = await this._getAnimalNameElList();
  ...
}
```

4. In the test, get the harness loader:

```typescript
let loader: HarnessLoader;
beforeEach(() => {
  loader = TestbedHarnessEnvironment.loader(fixture);
});
```

5. Get the harness:

```typescript
const animalListHarness = await loader.getHarness(AnimalListHarness);
```

6. Get the animals 🐶:

```typescript
await animalListHarness.getAnimalNames();
```

7. Make it work.
