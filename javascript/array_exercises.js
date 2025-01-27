const brand = ['Apple', 'Motorola' , 'Gionee' , 'Samsung' , 'Realme' , 'Oneplus' , 'Nothing'];
//access samsung, realme and oneplus using negative index

// console.log(brand.slice(-4,-1));

//replace realme and oneplus with xiaomi and hornor
brand.splice(4,2,'Xiaomi','Hornor');
console.log(brand);

// add vivo at the begning

brand.unshift('Vivo')
console.log(brand);

//add infinix micromax at the end 

// brand.push('Infinix', 'Micromax')
brand.splice(8,0, 'Infinix','Micromax')
console.log(brand);