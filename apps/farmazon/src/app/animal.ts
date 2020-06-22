export enum AnimalType {
  Cat = 'cat',
  Dog = 'dog',
  Sheep = 'sheep'
}

export enum Gender {
  Female = 'female',
  Male = 'male'
}

export interface Animal {
  id: string;
  type: AnimalType;
  name: string;
  birthDate: Date;
  gender: Gender;
  price: number;
}

export function createAnimal(animal: Partial<Animal>): Animal {
  return {
    id: animal.id,
    type: animal.type,
    name: animal.name,
    birthDate: animal.birthDate,
    gender: animal.gender,
    price: animal.price
  };
}
