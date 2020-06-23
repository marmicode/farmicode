import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fz-animal-search',
  template: `
    🚧 &lt;fz-animal-search&gt;
  `
})
export class AnimalSearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [AnimalSearchComponent],
  imports: [CommonModule],
  exports: [AnimalSearchComponent]
})
export class AnimalSearchModule {}
