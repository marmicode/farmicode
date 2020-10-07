import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

export function getAnimalListTestHelper(element: DebugElement) {
  return {
    getAnimalNames(): string[] {
      return element
        .queryAll(By.css('li'))
        .map(el => el.nativeElement.textContent);
    }
  };
}
