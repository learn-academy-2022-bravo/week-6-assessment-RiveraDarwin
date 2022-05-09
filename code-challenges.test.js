// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

describe("destruct", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () =>{
      expect(destruct(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])

  })
})

// RED FAILURE
// ● destruct › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
//     ReferenceError: destruct is not defined

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

//Green PASS
// destruct
// ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)

// b) Create the function that makes the test pass.

// Create an function destruct that takes an array of objects
// .map to loop through the values of the array
// declare a variable capLetter equal to the value.name and use .spilt(" ") to split the array.
// Now use .toUpperCase to capitilize the 0 index of the the .name value using .charAt(0)
// Add the now capitilized name to the rest of the string using .substring(1)
//return capLetter and .join and since we mapped the array we can call value.occupation
//Original was hardcoded and while it returned the expected result it was not dynamic. This solution was found by Earl and he was kind enough to help me work through it.

const destruct = (array) => {
  return array.map (value => {
    let capLetter = value.name.split(" ").map(letter =>{
      return letter.charAt(0).toUpperCase()+letter.substring(1)})
    return `${capLetter.join(" ")} is ${value.occupation}.`})
}

console.log(destruct(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("remainderThree", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () =>{
      expect(remainderThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
      expect(remainderThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// RED FAILURE
// ● remainderThree › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
//     ReferenceError: remainderThree is not defined

// b) Create the function that makes the test pass.

// Green PASS
// remainderThree
//     ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

//create a function names remainderThree that takes in a mixed array
//use .filter to return a subset of the array where the value is a typeof number.
// Now we have an array of numbers so .map through on value where value % 3
// I was really happy with this solution.

const remainderThree = (array) =>{
  return array.filter(v => typeof v === 'number').map(v => v % 3)
}

console.log(remainderThree(hodgepodge1))
console.log(remainderThree(hodgepodge2))


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("retNumCubed", () => {
  it("that takes in an array of numbers and returns the sum of all the numbers cubed.", () =>{
      expect(retNumCubed(cubeAndSum1)).toEqual(99)
      expect(retNumCubed(cubeAndSum2)).toEqual(1125)
  })
})
const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// RED FAILURE
// ● retNumCubed ›that takes in an array of numbers and returns the sum of all the numbers cubed.
//     ReferenceError:retNumCubed is not defined


// b) Create the function that makes the test pass.
// Green PASS
//retNumCubed
//    ✓ that takes in an array of numbers and returns the sum of all the numbers cubed.


// function name retNumCubed takes an array
// create a cubedArr and set equal to array.map on value where value ** 3
// create a sum variable set to 0
// use a for loop to iterate over cubedArr.length and set sum equal to sum += cubedArr[i]
// return sum
// Issue encountered with scope when I declared sum inside the for loop.

const retNumCubed = (array) => {
      let cubedArr = array.map(v => v ** 3)
      sum = 0
      for (let i = 0; i < cubedArr.length; i++){
           sum += cubedArr[i]
      }return sum
}

console.log(retNumCubed(cubeAndSum1))
console.log(retNumCubed(cubeAndSum2))
