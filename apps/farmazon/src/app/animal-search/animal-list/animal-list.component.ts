import { Component, Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../cart/animal';

@Component({
  selector: 'fz-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  @Input() animals: Animal[];

  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [AnimalListComponent],
  imports: [CommonModule],
  exports: [AnimalListComponent]
})
export class AnimalListModule {}
