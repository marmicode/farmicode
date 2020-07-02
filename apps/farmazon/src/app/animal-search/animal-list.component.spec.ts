import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { createAnimal } from '@farmazon/animal-core';

import { AnimalListComponent } from './animal-list.component';
import { AnimalListHarness } from './animal-list.component.harness';

describe('AnimalListComponent', () => {
  let component: AnimalListComponent;
  let fixture: ComponentFixture<AnimalListComponent>;
  let harness: AnimalListHarness;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalListComponent]
    }).compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(AnimalListComponent);
    component = fixture.componentInstance;
    harness = await TestbedHarnessEnvironment.harnessForFixture(
      fixture,
      AnimalListHarness
    );
    fixture.detectChanges();
  });

  it('should trigger animalBuy output', async () => {
    const observer = jest.fn();

    component.animals = [
      createAnimal({
        name: 'Dolly'
      }),
      createAnimal({
        name: 'Missy'
      })
    ];

    fixture.detectChanges();

    component.animalBuy.subscribe(observer);

    await harness.buyFirstAnimal();

    expect(observer).toBeCalledTimes(1);
    expect(observer).toBeCalledWith(
      expect.objectContaining({
        name: 'Dolly'
      })
    );
  });
});
