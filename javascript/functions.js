function addNums(num1, num2) {
    var c = num1 + num2;
    console.log(c);
}
addNums(50, 40);

const getAvg = function (n1, n2, n3) {
    let avg = (n1 + n2 + n3) / 3;
    //console.log(avg)
    return avg;
}
const result = getAvg(10, 20, 30);
console.log(result);

//Arrow function
const factorial = (n) => {
    let fact = 1;
    for (i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
const result2 = factorial(20);
console.log(result2);

//wap function to check if number is prime or not
// wap function to convert celcius to fahrenhiet

const isPrime = (n) => {
    for (i = 2; i < n; i++) {
        if (n % i == 0)
            return (n);
    }

}
console.log(isPrime(20))

// es6 arrow function 

const factorial1 = (n) => {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f = f * i;
    }
    return f;
}

const fact = factorial1(7);
console.log(fact);

//wap to check if a number is divisible by 7 and 11

const num = 77
if (num % 7 === 0 && num % 11 === 0) {
    console.log('number is divisible')
}
else {
    console.log('not')
}

// wap a program to check num is perfect square  

const num2 = 25
sqroot = num2 ** 0.5
console.log(sqroot);

if (Number.isInteger(sqroot)) {
    console.log("Perfect Square");

}

else {
    console.log("Not Perfect");

}

//wap to print all numbers divisible 11  between 51 to 130

const num3 = 11
for (i = 51; i < 130; i++) {
    if (i % num3 == 0) {
        console.log(i)
    }
    else {
        console.log('not')
    }
}


//wap tp print prime no. 
console.log('Check Prime Number')
num4 = 77
let isPrimeNum = true;

for (let i = 2; i < num4 / 2; i++) {
    if (num % i === 0) {
        console.log('not prime');
        isPrimeNum = false;
        break;
    }
}
if (isPrimeNum) {
    console.log("PRIME")
}