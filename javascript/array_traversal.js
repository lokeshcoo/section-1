const myarr =[2,4,8,7,4,23,21]
for(i=0;i<myarr.length;i++)
{
    console.log(myarr[i]);
}

console.log('for off loop')
for(let a of myarr)
{
    console.log(a);
}

console.log('for each function')
myarr.forEach((n,i,j) => { console.log(n,i,j); });// i is for finding the index of elements anf j is for finding the array after every modification of aaray

myarr.forEach((n) => {
    if(n%2==0)
        console.log(n);
        
})
 
//wap to create a new array with square of all elements of given array
const newArr = [];
myarr.forEach ((n) => { 
    newArr.push(n**2);
})
console.log(newArr);