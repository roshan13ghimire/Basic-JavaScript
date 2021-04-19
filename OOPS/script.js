let biodata = {
    name : 'roshan',    //storing variables
    lname : 'ghimire',
    age : '21',
    getdata(){             //storing functions
        console.log(`My age is ${biodata.age}`);
    }
}
console.log(biodata.name);

biodata.getdata();