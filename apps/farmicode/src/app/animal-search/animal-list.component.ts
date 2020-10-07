import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output
} from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'fz-animal-list',
  template: `
    <ul>
      <li *ngFor="let animal of animals">
        <span data-role="animal-name">{{ animal.name }}</span>
        <button data-role="animal-buy-button" (click)="buy(animal)">BUY</button>
      </li>
    </ul>
  `
})
export class AnimalListComponent {
  @Input() animals: Animal[];
  @Output() animalBuy = new EventEmitter<Animal>();

  buy(animal: Animal) {
    this.animalBuy.emit(animal);
  }
}

@NgModule({
  declarations: [AnimalListComponent],
  imports: [CommonModule],
  exports: [AnimalListComponent]
})
export class AnimalListModule {}
