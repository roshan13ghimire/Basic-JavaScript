let bioData = {
    name : 'roshan',    //storing variables
    lname : 'ghimire',
    age : '21',
    getdata(){             //storing functions
        console.log(`My age is ${bioData.age}`);
    }
}
console.log(bioData.name);

bioData.getdata();
