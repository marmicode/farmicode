import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fz-animal-list',
  template: `
    🚧 &lt;fz-animal-list&gt;
  `
})
export class AnimalListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [AnimalListComponent],
  imports: [CommonModule],
  exports: [AnimalListComponent]
})
export class AnimalListModule {}
