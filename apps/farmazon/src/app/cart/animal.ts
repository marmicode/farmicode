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
  id: string;
  type: AnimalType;
  gender: Gender;
  price: number;
}

/**
 * @deprecated 🚧 Work in progress.
 */
export function createAnimal(animal: Animal): Animal {
  return {
    id: animal.id,
    type: animal.type,
    gender: animal.gender,
    price: animal.price
  };
}
