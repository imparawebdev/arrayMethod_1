// EXAMPLE 1
/*Considering an array, we can append a string to each element using the map method
*/
// let firstNames = ['super', 'spider', 'ant', 'iron'];
// let lastName = 'man';
// let fullNames = firstNames.map(firstName => firstName + lastName);
// console.log(fullNames);
let firstNames = ['super', 'spider', 'ant', 'iron'];
let fullNames = firstNames.map(firstName => firstName = 'a');
console.log(firstNames);
console.log(fullNames);

// for (let i = 0; i < firstNames.length; i++) {
//     firstNames[i] = 'b';
// }
// // console.log(firstNames);
// const nomi = firstNames.forEach(function (name) {
//   return name + 'b'
// })

// console.log(nomi);


// //EXAMPLE 2
let allNames = ['wonder', 'spider', 'ant', 'iron'];
let male = 'man';
let female = 'woman';

let result = allNames.map(function (fName, index) {
  return (index == 0) ? fName + female : fName + male;
});
console.log(result);

const characters = [
  {
    name: 'wonder',
    sex: 'f'
  },
  {
    name: 'spider',
    sex: 'm'
  },
  {
    name: 'ant',
    sex: 'm'
  },
  {
    name: 'iron',
    sex: 'm'
  }
]
const charactersNames = characters.map(character => {
  if (character.sex === 'f') return character.name + 'woman' 
  else if (character.sex === 'm') return character.name + 'man'
})
console.log(charactersNames)

// //EXAMPLE 3: Multiply all elements by 2
// let numbers = [10, 20, 30, 40];
// let multiplier = 2;
// let products = numbers.map(number => number * multiplier);
// /*
// let products = numbers.map(function(number){
//     return number * multiplier;
// })
// */
// console.log(products);
// // EXAMPLE 4: Round the Nearest Integer
// let nums = [3.7, 4.2, 6.9];
// let rounded = nums.map(num => Math.round(num));
// /*
// let rounded = nums.map(function(num){
//     return Math.round(num);
// })
//  */
// console.log(rounded);


