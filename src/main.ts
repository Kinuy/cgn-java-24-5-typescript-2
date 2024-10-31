/*
TASKS

Step 1: Create an array of numbers. Use the '.map' function to double all the numbers in the array.

Step 2: Create an array of words. Use the '.filter' function to select only the words that are longer than 5 letters.

Step 3: Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.

Step 4: Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.

Bonus:
Use only array functions for the following tasks.
Take this list of numbers:

const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];



    Sort these numbers in descending order.

    Square these numbers.

    Remove the lowest two numbers and the highest 4 numbers from the list.

    Remove all numbers that are divisible by 4.

    Add up all the numbers.


What is the result?
* */

//Task 1:
let numbers: number[] = [34,55,67,23,11]
const newNumbers = numbers.map((element)=>{return element * 2})

console.log(newNumbers)

//Task2:
let words: string[] = ["Max","Florian","Carl","Tobias","Franziska"]
const newWords = words.filter((element)=>{return element.length>5})

console.log(newWords)


//Task3:
let numbers1: number[] = [34,55,67,23,11]
const newNumbers1 = numbers1.reduce((current,post)=>{return current + post})
console.log(newNumbers1)

//Task4:
let numbers2: number[] = [3,5,7,23,11]
const newNumbers2 = numbers2.some((element)=>{return element > 10})
console.log(newNumbers2)


//Bonus:
const list: number[] = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];

const sortedList = list.sort((a,b)=>b-a)

console.log(sortedList)

const squaredList = list.sort((a,b)=>b-a).map((element)=>element * element)

console.log(squaredList)

const trimmedList = squaredList.slice(4, -2);

console.log(trimmedList)

const notDivisableBy4List = trimmedList.filter((element)=>{return element%4});

console.log(notDivisableBy4List)

const addAllNumbersInList = notDivisableBy4List.reduce((current,post)=>{return current + post});

console.log(addAllNumbersInList)



