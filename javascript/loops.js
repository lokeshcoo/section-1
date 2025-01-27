// for(i=0;i<10;i++)
// {
//     console.log(i);
// }

// for (i=1;i<=10;i++)
// {
//     if (i%2==0)
//         console.log(i,"is even");
// }

// a=10;

// while(a<20)
// {
//     console.log(a);
//     a++;
// }
// b=20
// do{

//     console.log(b);
//     b++;
// } while(b<30);

// c=0;
// while(c<11)
// {
//     console.log(c);
//     c++;
// }

// c=0;
// do{
//     console.log(c);
//     c++;
// }while(c<11)

//for loop for odd no. 
// for (i = 0; i < 20; i++) {
//     if (i % 2 != 0) {
//         console.log("ODD", i);
//     }
// }

//while loop for odd no.

d = 0;
while (d < 20) {
    if (d % 2 != 0) {
        console.log('while', d);
    }
    d++;
}

//do while for odd no.
console.log("Do while Loop");
a = 0
do {
    if (a % 2 != 0)
        console.log("oddd", a);
    a++;
} while (a < 20)

//WAP TO print all the numbers divisible 7 and 11  in the range of 100 to 300
for(i=100;i<300;i++)
    {
        if(i%7==0&& i%11==0)
        {
            console.log(i);
        }
    }  
//wap to print prime number from 1 to 50
//wap to print all perfect square from 1 to 100
for (i=1;i<100;i++)
{
    let root= i**0.5;
    if(Number.isInteger(root))
    {
        console.log(i);
    }
}
for(let i=0;i<10;i++)
     {
         console.log(i);
     }

let x= 10;
while(x<20)
    {
        console.log(x);
        x++;

    }     

console.log('do while loop');
let y=20;
do{
    console.log(y);
    y++;
}while(y<20)

// wap to reverse a number 
console.log('reverse a number')
let num = 37354;
let reverse = 0;

while(num > 0)
{
    let d=num%10;
    reverse = reverse*10 + d;
    num = parseInt(num/10);
}
console.log(reverse);