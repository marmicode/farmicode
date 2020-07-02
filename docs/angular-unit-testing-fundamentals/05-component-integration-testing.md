# 1. Setup

```sh
git checkout ut-08-component-refactoring-async-pipe

yarn
```

# 2. Run tests

```sh
yarn test farmazon --watch
```

# 3. Make sure `<fz-animal-search>` and `<fz-animal-list>` communicate correctly

1. Remove `CUSTOM_ELEMENTS_SCHEMA`.
2. Import the needed modules using `TestBed` configuration `imports`:

```typescript
TestBed.configureTestingModule({
  imports: [...]
})
```

3. `animalListEl.properties` doesn't work anymore but we can grab the component instance using `animalListEl.componentInstance`.
4. We can be more generic using `By.directive` instead of `By.css`.
