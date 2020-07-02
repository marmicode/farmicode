# 1. Setup

```sh
git checkout ut-12-form-test

yarn
```

# 2. Run tests

```sh
yarn test farmazon --watch
```

# 3. Create a harness for `<fz-animal-search>`

Replace the `search` function's DOM manipulation in `animal-search.component.spec.ts` with a Harness.

You can use `TestElement.sendKeys` method to fill the input.
