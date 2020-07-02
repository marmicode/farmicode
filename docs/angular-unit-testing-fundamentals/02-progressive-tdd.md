# 1. Setup

```sh
git checkout ut-03-jest-test-each

yarn
```

# 2. Run tests

```sh
yarn test farmazon --watch
```

# 3. Create Cart facade service

`Cart` service should have two methods:

- `addAnimal(animal: Animal)`: adds animals
- `getAnimals(): Animal[]`: returns animals in cart

## 3.1. Create Cart service

```sh
yarn ng generate service cart
```

## 3.2. Progressive Test-Driven Development

After every step, everything should compile properly and all existing tests should keep passing.

1. Describe test names with `it.todo`.

```typescript
it.todo('should do magic');
```

2. Replace `it.todo` by `xit` and Use Comment-Driven Development and describe every test in comments.

```typescript
xit('should do magic', () => {
  // put hat on table
  // hit hat with magic stick
  // expect 🐇 to get out of hat
});
```

3. Implement test.

4. Use IDE to generate methods & functions.

5. **Be a good citizen!** Deprecate newly generated methods & functions etc...

```typescript
/**
 * @deprecated 🚧 Work in progress.
 */
function doMagic() {
  throw new Error('🚧 work in progress!');
}
```

6. Make it work!
