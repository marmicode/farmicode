# 1. Setup

## 1.a. get the boilerplate

```sh
git checkout ut-15-visual-regression-testing-boilerplate

yarn
```

## 1.b. or if you like adventures

1. Create library with storybook.

```sh
# Create a library.
yarn nx g @nrwl/angular:library animal-ui

# Install Nx Storybook plugin.
yarn add -D @nrwl/storybook

# Setup storybook & cypress.
yarn nx g storybook-configuration animal-ui --configure-cypress --no-generate-stories --no-generate-cypress-specs
```

2. Setup `cypress-image-snapshot` _(Cf. https://github.com/palmerhq/cypress-image-snapshot#installation)_

3. Set image snapshots folder in `support/commands.ts`.

```typescript
addMatchImageSnapshotCommand({
  customSnapshotsDir: 'src/snapshots',
});
```

4. Fix viewport size in `cypress.json`.

```json
{
  ...
  "viewportHeight": 768,
  "viewportWidth": 1024
}
```

# 2. Run tests

```sh
yarn e2e animal-ui-e2e --watch
```

# 3. Open Storybook

Watch your changes on http://localhost:4400

# 4. Create `<fz-animal-preview>`

1. Add an `animal` input.

2. Add Storybook knobs in `animal-preview.stories.ts`.

```typescript
import { text, ... } from '@storybook/addon-knobs';

export const main = () => ({
  ...
  props: {
    name: text('name', 'Dolly')
  }
});
```

3. Display a card with a different icon depending on animal type.

4. Show price if present.

# 5. Add a visual snapshot to test animals without price

You can control knobs by adding `knob-x=y` to the query string.
