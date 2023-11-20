const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:

function slice(a,b){
    let modifiedFood = foods.slice(a, b-1)
    return modifiedFood
}

// Progression 2:

function spliced() {
    foods.splice(2,0,"noodles","icecream")
    return foods
}

// Progression 3:
function checkNumber(numberArray,operation) {
    return numberArray.filter(curr=>{
        return operation(curr)
    })
}

function isEven(number) {
    if (number%2 == 0) {
        return true
    } else {
        return false
    }
}

function isPrime(number) {
    if (number<=1) {
        return false
    }else {
        for (let i = 2; i < number; i++) {
            if (number%i == 0) {
                return false
            }
        }
        return true
    }
}

// Progression 4:

function nonPrime(numberArray) {
    return numberArray.filter(curr=>{
        return !isPrime(curr)
    })
}

function reject(operation) {
    operation(numberArray)
}

// Progression 5:

const isEvenUsingLambda =(number)=> number%2==0 ? true : false

// Progression 6:

function findSquareOfNumbers(myArray) {
    return myArray.map(curr=> curr**2)
}

// Progression 7:

function multiply(myArray) {
    return myArray.reduce((total,num)=> total*num)
}

function sumOfSquares(myArray) {
    return myArray.reduce((total, num)=>{
        return total += num**2
    },0)
}
