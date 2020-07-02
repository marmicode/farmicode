import { async, TestBed } from '@angular/core/testing';
import { AnimalUiModule } from './animal-ui.module';

describe('AnimalUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AnimalUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AnimalUiModule).toBeDefined();
  });
});
