// let student = {
//     name: "Nishant",
//     rollNo: 251235,
//     subjects: ["Physics", "Maths", "Chemistry"]
// }

/*how to rename key */
// let {subjects: vishay, totalMarks = 500, ...remaining} = student;
// console.log(vishay);


/*Adding two objects*/
// let obj1 = {
//     name: "Kalia",
//     phone: 9511173424
// }

// let obj2 = {
//     address: "India",
//     aadharNum: 59595959595,
//     name: "yash"
// }

// let obj3 = {...obj1, ...obj2}
// console.log(obj3);


/*Array and object update */
// let arr = [1,2,3,4,5]
// arr[2] = "Hi"
// console.log(arr);

// const obj = {
//     name: "joker",
//     rollNo: 25,
//     address: null
// }

// obj.name = "Basuri"
// delete obj.rollNo;

// console.log(obj.address?.street); // we use ? for for bringing data safely from backend

// let arr = [1, 2, 3, 4, 5, 3];

// arr.splice(1, 3)
// console.log(arr);

// console.log(arr.slice(0, 3));

// console.log(arr.indexOf(3));

// let res = arr.find((value) => {
//     return value === 3;
// })
// console.log(res);

// let resp = arr.findIndex((value) => {
//     return value === 3;
// })
// console.log(resp);


// let arr = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10]]];

// console.log(arr.flat(Infinity));


// mutability -> values are not copied but reference is copied
let arr = [1,2,3,4,5,6];
// let arrCopy = arr;
// let arrCopy2 = [...arr]; // spread operator

// arrCopy2.pop()

// console.log("arr = ", arr);
// console.log("arrCopy = ", arrCopy2);




