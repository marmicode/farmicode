# 1. Setup

```sh
git checkout ut-11-component-harness

yarn
```

# 2. Run tests

```sh
yarn test farmazon --watch
```

# 3. Add search form to `<fz-animal-search>`

1. Replace `component.search(keywords)` call by a `search` function that really triggers the form.

2. The `search` function must set the input's value and dispatch the `input` event:

```typescript
inputEl.nativeElement.value = keywords;
inputEl.nativeElement.dispatchEvent(new Event('input'));
```

you can trigger other listeners using `DebugElement.triggerEventHanndler` method.
