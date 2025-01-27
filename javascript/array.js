const myrarr = [45, 'hello', true, undefined];

console.log(myrarr);
console.log(Array.isArray(myrarr));

const movies=['1920', 'The Dark Knight' , 'Marco' , 'The Godfather' , 'RRR' , 'PK']
console.log(movies.length);

//Indexing 
console.log(movies[3]);
console.log(movies.indexOf('RRR'));
console.log(movies.at(-3));

const ele=movies.at(-3);
console.log(ele);

movies[1]='The Superman';

console.log(movies);

//slicing

console.log(movies.slice(2,5));

console.log(movies.slice(-4));

console.log(movies.slice(-4,10));

//adding and removing elements
movies.push('Chhaava');   //add elements at the end
movies.unshift('Joker');  //add elements at the begining

console.log(movies);

movies.pop(); //removes elments from the end
movies.shift();  //removes elements from the begining

console.log(movies);

// movies.splice(3,2);  //removing elements

// movies.splice(3,2, 'Joker', 'Thor')      // adding after removing elemets or replace elements


movies.splice(3,0, 'Hulk')   //Insert elements 

console.log(movies);