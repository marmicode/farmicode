# 1. Setup

```sh
git checkout ut-14-component-output-testing

yarn
```

# 2. Run tests

```sh
yarn test farmazon --watch
```

# 3. Query ReST API

Animal search ReST API is at `http://localhost:3000` and it takes a `q` parameter for querying animal names: `http://localhost:3000/?q=dolly`.

1. Import `HttpClientTestingModule`:

```typescript
TestBed.configureTestingModule({
  imports: [HttpClientTestingModule],
});
```

2. Inject `HttpTestingController`.

3. Trigger search with `AnimalSearch.search`.

4. Use `HttpTestingController` to grab the request and flush an arbitrary response:

```typescript
const request = httpController.expectOne('/');
request.flush([
  {
    type: 'dog',
    name: 'Rocket',
    bornAt: '2020-01-01',
  },
]);
```

You can match the request using a predicate `httpController.expectOne(req => true)`.

5. Check the response.

6. Check that the request contains the `q` parameter with the right value.
