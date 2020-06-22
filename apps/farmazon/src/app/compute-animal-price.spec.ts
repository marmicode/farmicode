import { AnimalType, createAnimal, Gender } from './animal';
import { computeAnimalPrice } from './compute-animal-price';

describe('computeAnimalPrice', () => {
  let now;

  beforeEach(() => {
    /* @todo replace this by mocks when we'll learn more about them. */
    now = Date.now;
    Date.now = () => new Date(2025, 5, 1).getTime();
  });

  afterEach(() => {
    Date.now = now;
  });

  it('should offer free cats', () => {
    const cat = createAnimal({
      type: AnimalType.Cat,
      gender: Gender.Female,
      bornAt: new Date(2025, 1, 1)
    });
    expect(computeAnimalPrice(cat)).toEqual(0);
  });

  it('should compute dog price', () => {
    const dog = createAnimal({
      type: AnimalType.Dog,
      gender: Gender.Male,
      bornAt: new Date(2025, 1, 1)
    });
    expect(computeAnimalPrice(dog)).toEqual(300);
  });

  it('should compute sheep price', () => {
    const sheep = createAnimal({
      type: AnimalType.Sheep,
      gender: Gender.Male,
      bornAt: new Date(2025, 1, 1)
    });
    expect(computeAnimalPrice(sheep)).toEqual(100);
  });

  it('should compute double female price', () => {
    const sheep = createAnimal({
      type: AnimalType.Sheep,
      gender: Gender.Female,
      bornAt: new Date(2025, 1, 1)
    });
    expect(computeAnimalPrice(sheep)).toEqual(200);
  });

  it('should decrease price depending on age', () => {
    const oldDog = createAnimal({
      type: AnimalType.Dog,
      gender: Gender.Male,
      /* 4 years old. */
      bornAt: new Date(2020, 12, 1)
    });
    expect(computeAnimalPrice(oldDog)).toEqual(60);
  });

  it('should offer old animals', () => {
    const veryOldDog = createAnimal({
      type: AnimalType.Dog,
      gender: Gender.Male,
      bornAt: new Date(2000, 1, 1)
    });
    expect(computeAnimalPrice(veryOldDog)).toEqual(0);
  });
});
