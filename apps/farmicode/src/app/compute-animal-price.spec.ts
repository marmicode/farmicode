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

  it.each([
    [
      'offer free cats',
      {
        animal: createAnimal({
          type: AnimalType.Cat,
          gender: Gender.Female,
          bornAt: new Date(2025, 1, 1)
        }),
        price: 0
      }
    ],
    [
      'compute dog price',
      {
        animal: createAnimal({
          type: AnimalType.Dog,
          gender: Gender.Male,
          bornAt: new Date(2025, 1, 1)
        }),
        price: 300
      }
    ],
    [
      'compute sheep price',
      {
        animal: createAnimal({
          type: AnimalType.Sheep,
          gender: Gender.Male,
          bornAt: new Date(2025, 1, 1)
        }),
        price: 100
      }
    ],
    [
      'double female price',
      {
        animal: createAnimal({
          type: AnimalType.Sheep,
          gender: Gender.Female,
          bornAt: new Date(2025, 1, 1)
        }),
        price: 200
      }
    ],
    [
      'decrease price depending on age',
      {
        animal: createAnimal({
          type: AnimalType.Dog,
          gender: Gender.Male,
          /* 4 years old. */
          bornAt: new Date(2020, 12, 1)
        }),
        price: 60
      }
    ],
    [
      'offer old animals',
      {
        animal: createAnimal({
          type: AnimalType.Dog,
          gender: Gender.Male,
          /* 4 years old. */
          bornAt: new Date(2010, 12, 1)
        }),
        price: 0
      }
    ]
  ])('should %s', (message, { animal, price }) => {
    expect(computeAnimalPrice(animal)).toEqual(price);
  });
});
