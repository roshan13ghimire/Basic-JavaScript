let currDate = new Date();  //Initializing Date
console.log(currDate);

console.log(currDate.toLocaleString());  //display date perfectly. 

console.log(currDate.toString());     //display same as browser in terminal

var d = new Date(2021, 3 , 4 , 5 , 6 , 7); //creating our own dates
console.log(d.toLocaleString());

console.log(currDate.toLocaleString());
console.log(currDate.getFullYear());
console.log(currDate.getMonth());


