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
  bornAt: Date;
  gender: Gender;
  price: number;
}

export function createAnimal(animal: Partial<Animal>): Animal {
  const bornAt =
    typeof animal.bornAt === 'string'
      ? new Date(Date.parse(animal.bornAt))
      : animal.bornAt;

  return {
    id: animal.id,
    type: animal.type,
    name: animal.name,
    bornAt,
    gender: animal.gender,
    price: animal.price
  };
}
