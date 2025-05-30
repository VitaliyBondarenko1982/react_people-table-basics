import { Person } from './types';

type PersonMap = {
  [key: string]: Person,
};

const makeMap = (people: Person[]): PersonMap => {
  return people.reduce<PersonMap>((acc, person) => {
    return {
      ...acc,
      [person.name]: person,
    };
  }, {});
};

export const extendPeople = (people: Person[]): Person[] => {
  const peopleMap = makeMap(people);

  return people
    .map((person) => {
      return {
        ...person,
        mother: person.motherName ? peopleMap[person.motherName] : undefined,
        father: person.fatherName ? peopleMap[person.fatherName] : undefined,
      };
    });
};
