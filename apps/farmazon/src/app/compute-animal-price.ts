import { Animal, AnimalType, Gender } from './animal';

export const priceMap = new Map([
  [AnimalType.Cat, 0],
  [AnimalType.Dog, 300],
  [AnimalType.Sheep, 100]
]);

export const millisecondsPerYear = 24 * 3600 * 365 * 1000;

export function computeAnimalPrice(animal: Animal): number {
  const price = priceMap.get(animal.type);
  const initialPrice = animal.gender === Gender.Female ? price * 2 : price;

  const age = Math.floor(
    (Date.now() - animal.bornAt.getTime()) / millisecondsPerYear
  );

  return Math.round(initialPrice * Math.max(0, 1 - 0.2 * age));
}
