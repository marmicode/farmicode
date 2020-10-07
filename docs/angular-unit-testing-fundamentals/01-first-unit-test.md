# 1. Setup

```sh
git checkout ut-01-karma-jasmine-boilerplate

yarn
```

# 2. Run tests

```sh
yarn test farmicode --watch
```

# 3. Implement first test

## 3.1. Instructions

**Implement and test** a function called `computeAnimalPrice` that returns the animal's price given the following rules:

1. Cats are free.
2. Dogs cost 300.
3. Sheep cost 100.
4. Females are twice the price.

## 3.2. Files

Function file: `apps/farmicode/src/app/compute-animal-price.ts`.

Test file: `apps/farmicode/src/app/compute-animal-price.spec.ts`

### Test example

The example below tests the `add` function. You can use it as a boilerplate.

```typescript
describe('add', () => {
  it('should return sum', () => {
    const result = add(1, 2);

    expect(result).toEqual(3);
  });
});
```

# 4. New rule

Animal prices decrease based on their age.

**Every year, the animal's price loses 20% from the initial price.**

Update the function.

# 5. Migrate to Jest

```sh
git checkout master
yarn test farmicode --watch
```
