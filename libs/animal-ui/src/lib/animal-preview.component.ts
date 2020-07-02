import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'fz-animal-preview',
  template: `
    🚧 animal-preview
  `
})
export class AnimalPreviewComponent {}

@NgModule({
  declarations: [AnimalPreviewComponent],
  exports: [AnimalPreviewComponent],
  imports: [CommonModule]
})
export class AnimalPreviewModule {}
