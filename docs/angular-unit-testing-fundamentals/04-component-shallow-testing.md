# 1. Setup

```sh
git checkout ut-05-spies

yarn
```

# 2. Run tests

```sh
yarn test farmazon --watch
```

# 3. Generate components & service

## 3.1. using SCAM schematic

```sh
yarn ng g @wishtack/schematics:scam animal-search/animal-search
yarn ng g @wishtack/schematics:scam animal-search/animal-list
yarn ng g service animal-search/animal-search
```

## 3.2. using SFAM snippet / live template

### 3.2.1. JetBrains Live Template

Copy this ugly XML

```xml
<templateSet group="Marmicode">
  <template name="sfam" value="import { CommonModule } from '@angular/common';&#10;import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';&#10;&#10;@Component({&#10;  changeDetection: ChangeDetectionStrategy.OnPush,&#10;  selector: 'mc-$selector$',&#10;  template: `🚧 $selector$`&#10;})&#10;export class $cmp$Component {}&#10;&#10;@NgModule({&#10;  declarations: [$cmp$Component],&#10;  exports: [$cmp$Component],&#10;  imports: [CommonModule]&#10;})&#10;export class $module$Module {}" description="" toReformat="true" toShortenFQNames="true">
    <variable name="cmp" expression="" defaultValue="" alwaysStopAt="true" />
    <variable name="selector" expression="lowercaseAndDash(cmp)" defaultValue="" alwaysStopAt="true" />
    <variable name="module" expression="cmp" defaultValue="" alwaysStopAt="true" />
    <context>
      <option name="JS_STATEMENT" value="true" />
      <option name="TS_STATEMENT" value="true" />
    </context>
  </template>
</templateSet>
```

into `~/Library/Application\ Support/JetBrains/IntelliJIdea2020.2/jba_config/ templates/Marmicode.xml` on OS X

or `~\AppData\Roaming\JetBrains\IntelliJIdea2020.1\jba_config\templates/Marmicode.xml` on windows

### 3.2.2. VSCode

1. ⌘ + P => Configure User Snippets => typescript.json

2. Add the following configuration

```json
{
  "SFAM": {
    "prefix": "sfam",
    "body": [
      "import { CommonModule } from '@angular/common';",
      "import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';",
      "@Component({",
      "  changeDetection: ChangeDetectionStrategy.OnPush,",
      "  selector: '$2',",
      "  template: `🚧 &lt;$2&gt;`",
      "})",
      "export class $1Component {}",
      "",
      "@NgModule({",
      "  declarations: [$1Component],",
      "  exports: [$1Component],",
      "  imports: [CommonModule]",
      "})",
      "export class $1Module {}"
    ]
  }
}
```

## 3.3. by directly skipping to boilerplate 👹

```sh
git checkout ut-06-component-shallow-testing-boilerplate
```

# 4. Search for animals

1. Inject `AnimalSearch` with `TestBed.inject`.
2. Mock `AnimalSearch.search` method and return a fake result.
3. Call `component.search(keywords)`.
4. Check that child component `<fz-animal-list>`'s `animals` input contains the returned animals.
5. ⚠️ Don't forget to check that the mock has been called properly!
6. Don't use the `async` pipe (for the moment).

```typescript
/* Query a child element. */
const animalListEl = fixture.debugElement.query(By.css('fz-animal-list'));

/* Read element properties. */
console.log(animalListEl.properties);
```

# 5. Use the `async` pipe

Now that the test is working, you can use the `async` pipe to pass the animals as an input to the child component.
