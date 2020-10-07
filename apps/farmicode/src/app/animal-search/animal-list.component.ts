import { Component, Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../animal';

@Component({
  selector: 'fz-animal-list',
  template: `
    <ul>
      <li *ngFor="let animal of animals">{{ animal.name }}</li>
    </ul>
  `
})
export class AnimalListComponent {
  @Input() animals: Animal[];
}

@NgModule({
  declarations: [AnimalListComponent],
  imports: [CommonModule],
  exports: [AnimalListComponent]
})
export class AnimalListModule {}
