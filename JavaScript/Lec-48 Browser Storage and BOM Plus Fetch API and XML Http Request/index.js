/*
Local Storage ---> Local storage me data hamesha ke liye rehti hai jab tak hum usse clear naa kare
Session Storage ---> Session storage me data per session (tabs) rehti hai. Session/Tab close karte hee data khatam

(1) .setitem(key, value)  ---> to set the item in local storage
===> value must be string
(2) .getitem(key)  --->  to get the value of an item 
(3) .key(index)  ---> ye index leta hai like array. if exist karta hai to return karta hai key name on particular index otherwise returns null
(4) .removeItem(key)  ---> to delete key and value


=====> [], {} ko JSON string me convert karna ho toh JSON.stringify()
=====> JSON.stringify(): converts to JSON string
=====> JSON.parse(): converts from JSON string to valid object
*/




// let storage = localStorage.setItem("num", 1)
// let storage2 = localStorage.setItem("num2", 2)
// let storage3 = localStorage.setItem("num3", 3)

// let result = localStorage.getItem("num")
// let result = localStorage.getItem("laxmi")  // ye null dega kyuki laxmi naam ka koi key nahi hai local storage me
// console.log(result);

// let result2 = localStorage.key("0")
// console.log(result2);

// localStorage.removeItem("num")

// localStorage.clear()



// let btn = document.querySelector("#clear-local-storage")

// btn.addEventListener('click', () => {
//     localStorage.clear()
// })


// document.querySelector("#add-session-item").addEventListener('click', () => {
//     sessionStorage.setItem("session", "item")
// })



/*
API: API is a way for our application communicate with another application/server
===> API Endpoint: Specific URL

fecth(apiEndpoint, options) ---> it always returns promise. Ye ek API endpoint se data laa ke deta hai
*/


// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     let data = xhttp.responseText;
//     console.log(data);
// };
// xhttp.open("GET", "https://api.github.com/users/its-lnv", true);
// xhttp.send();


// fetch("https://api.github.com/users/its-lnv").
//     then(data => data.json()).
//     then(data => console.log(data))


async function getUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`)  // fetch data laa ke deta hai
    const data = await response.json()  // data se main data nikalna
    return data;
}


document.querySelector("#github-form").addEventListener('submit', async (e) => {
    e.preventDefault()

    let username = document.querySelector("#github-username").value
    const data = await getUser(username)
    document.querySelector("#show-profile").innerHTML = 
    `
        <img src=${data.avatar_url} alt="">
        <h2>${data.name}</h2>
        <i>Username: ${data.login}</i>
        <p>Bio: ${data.bio}</p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
        <p>Public repos: ${data.public_repos}</p>
    `
})