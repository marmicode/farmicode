# 1. Setup

```sh
git checkout ut-09-component-integration-testing

yarn
```

# 2. Run tests

```sh
yarn test farmicode --watch
```

# 3. Show animal names

- Check that animal names are displayed instead of checking the `<fz-animal-list>` component's `animals` input.

- You can get an element's text using the `DebugElement`'s `nativeElement.textContent` property.

# 4. Component's test helper

You can create a test helper in `animal-list.test-helper.ts` as an abstraction for DOM testing.

```typescript
export function getAnimalListTestHelper(element: DebugElement) {
  return {
    getAnimalNames(): string[] {
      ...
    }
  }
}
```
