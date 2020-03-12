export enum AnimalType {
  Cat = 'cat',
  Dog = 'dog',
  Sheep = 'sheep'
}

export enum Gender {
  Female = 'female',
  Male = 'male',
  Other = 'other'
}

export interface Animal {
  gender: Gender;
  price: number;
  id: string;
  type: AnimalType;
}

/**
 * @deprecated 🚧 Work in progress.
 */
export function createAnimal(animal: Animal): Animal {
  throw new Error('🚧 work in progress!');
}
