//Q2. Write method to do shallow copy of a list using ES6 feature?

let numberArray = [1,2,3,4,5];
let shallowCopyArray=[...numberArray]

numberArray.push(6);

console.log("Q2. Write method to do shallow copy of a list using ES6 feature?");
console.log(numberArray);//original array

console.log(shallowCopyArray);//Shallow copy array.


//Q3.Write method to do shallow copy of an object using ES6 feature.

let StudentObject={
    name:"Georgekutty George",
    class:"10",
    school:"ABC School"
};

let ShallowCopyObject = {...StudentObject};
StudentObject.name="GK";
console.log("Q3.Write method to do shallow copy of an object using ES6 feature.");
console.log(StudentObject); //original object
console.log(ShallowCopyObject);  //Shallow copy object.