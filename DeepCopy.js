//Q4. Write method to do deep copy of a list without using any third party library

let StudentList = [
    { name: 'Georgekutty', class: 0, mark: 20055 },
    { name: 'Sreeraj', class: 1, mark: 20053 },
    { name: 'Praphul', class: 2, mark: 45652 }
];

let DeepCopyStudentList = JSON.parse(JSON.stringify(StudentList))
DeepCopyStudentList[0].name="GK";
console.log("Q4. Write method to do deep copy of a list without using any third party library");
console.log(StudentList);//original list

console.log(DeepCopyStudentList);//Deep copy list.


//Q5. Write method to do deep copy of an object without using any third partylibrary.


let StudentObject={
    name:"Georgekutty George",
    class:"10",
    school:"ABC School"
};

let DeepCopyObject = JSON.parse(JSON.stringify(StudentObject));
DeepCopyObject.name="GK";
console.log("Q5. Write method to do deep copy of an object without using any third partylibrary.")
console.log(StudentObject); //original object
console.log(DeepCopyObject);  //Shallow copy object.
