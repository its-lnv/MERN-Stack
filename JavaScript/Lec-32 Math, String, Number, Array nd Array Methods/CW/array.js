/*
Array: non primitive data type that is used to store data in oredered collection
*/

// let arr = ["thirt", "lower", "cap", "shoes"];

// console.log(arr[1]);

// console.log(arr.length);

// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1));

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element); 
// }

// let array = [["thirt", 566], ["lower", 967], ["cap", 789], ["shoes", 6371992]];

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//         console.log(array[i][j]);
//     }
// }

/*
Array methods:
1. push() -> adds element at the end of the arr

2. pop() -> deletes element from the end of the arr

3. unshift() -> adds element from the start of the arr

4. shift() -> deletes element from the start of the arr

5. splice(1, 2, "Kal") -> used to remove, add and replace elements

1 -> kis index se kaam start karna hai
2 -> kitna delete karna hai
"Kal" -> kya add karna hai par usse pehle delete count 0 karna padega
par agar element ko replace karna hai toh uske liye delete count 1 hoga

6. slice() ->
slice (start, end) and last element isn't included

7. indexOf(ele) -> gives index of element in arr and return -1 if ele is not in arr

8. find(() => {}) --> used to find ele

9. findIndex(() => {}) ---> used to find index

10. flat() --> turns all nested arrays in 1d arr

1 - 5 methods original array ko modify karte hai aur inhe mutating methods kehte hai jabki 6 wala method ek naya array return kar rha hai aur inhe non-mutating metod kehte hai
*/

// let arr = ["thirt", "lower", "cap", "shoes"];

// arr.push("hello")
// arr.pop()
// arr.unshift("Hello")
// arr.shift("Hello")

// console.log(arr);
