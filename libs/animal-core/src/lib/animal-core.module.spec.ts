import { async, TestBed } from '@angular/core/testing';
import { AnimalCoreModule } from './animal-core.module';

describe('AnimalCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AnimalCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AnimalCoreModule).toBeDefined();
  });
});
