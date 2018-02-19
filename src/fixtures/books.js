import moment from 'moment';
import faker from 'faker';
import { name1, name2 } from './names';


const genres = [
  'Adventure',
  'Children',
  'Drama',
  'Fantasy',
  'Horror',
  'Humor',
  'Mystery',
  'Nonfiction',
  'Romance',
  'Sci-fi'
];

const gender = [
  'Male',
  'Female'
];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const capFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const generateBookName = () => {	
  const name = capFirst(name1[getRandomInt(0, name1.length - 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length - 1)]);
  return name;
}

const generateAuthorName = () => {	
  return `${faker.name.lastName()} ${faker.name.firstName()}`;
}

const generateBooks = (number) => {
  let books = [];
  for(let i = 0; i < number; i++){
    books.push(
      {
        id: faker.random.uuid(),
        name: generateBookName(),
        author: {
          name: generateAuthorName(),
          gender: gender[getRandomInt(0,1)]
        },
        genre: genres[faker.random.number(6)],
        publish_date: faker.date.past()
      }
    )
  }
  return books;
}

const books = generateBooks(100000);

export default books;