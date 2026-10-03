/* Managing HTML from JS */

// let h1 = document.getElementById("h1")
// let h1 = document.querySelector("h1")  // -> tag name
// let h1 = document.querySelector(".h1")  // -> class name
// let h1 = document.querySelector("#h1")  // -> id name
// let h1 = document.querySelectorAll("h1")  // -> return nodeList
// console.log(h1);

// let p = document.querySelector("#desc")
// p.textContent = "Hello Bhailog"
// p.innerHTML = "<h2>Hello Baccchoooooooo</h2>"  // very very risky
// console.log(p);
// console.log(p.textContent);
// console.log(p.innerHTML);
// console.log(p.innerText);



/*
Parsing: Kuch operation karna
DOM (Document Object Model): Tree like structure jaha parent, children and siblings hote hai

Methods:
1. getElementById -> element get karne ke liye
2. querySelector -> isme tag, id aur class teeno ke through select kar sakte hai
3. querySelectorAll -> isme kisi tag se related sari chize select kar lete hai

innerHTML -> agar valid html tag hai toh usse parse karake render kara deta hai jabki textContent aisa nhi karata woh same chiz hee de render karata hai
innerText -> jo content hidden hai usko ignore kar deta hai
*/



/* Managing CSS from JS 
Attributes:
1. setAttribute
2. getAttribute
3. removeAttribute
4. contains
*/

// p.setAttribute("style", "background-color: pink; font-size: 90px")

// let btn = document.querySelector("button");
// btn.setAttribute("disabled", "true")
// btn.textContent = "PKMKB";

// let res = btn.getAttribute("disabled");
// let res = p.getAttribute("id")
// console.log(res);

// p.removeAttribute("id")



/* CSS file se utha ke add karna */

// p.classList.add("random")
// p.classList.remove("random")
// p.classList.toggle("random")  // agar class hai to remove kar do aur agar nahi hai toh add kar do
// p.classList.contains("random") // returns true/false if given class exists or not

// p.style.backgroundColor = "red"


// p.dataset.backgroundColor = "blue"  // to inject attribute



/* Creating, adding and removing elements 
createElement: It is used to create an element (like- p, div, a, span)

Used to add elements in index.html:
appendChild() -> agar multiple elements inject karane hai toh code dobara likhna padega
append() -> agar multiplr elements inject karane hai toh bas comma se separate karke likh do saath me isme node ke alawa kuch aur v (string, etc) bhi pass kar sakte hai
*/

// let div1 = document.createElement("div")
// let div2 = document.createElement("div")
// div1.textContent = "Hello"
// div2.textContent = "Hii"

// let body = document.querySelector("body")
// body.appendChild(div1)
// body.appendChild(div2)

// body.append(div1, div2)  // adds element in last of body
// body.prepend(div1, div2)  // adds element in start of body
// console.log(div);


// let products = [
//     {
//         name: "Iphone 20 Pro Max",
//         price: "₹1,64,900",
//         imgUrl: "https://m.media-amazon.com/images/I/71PvCbPVCEL._SX466_.jpg"
//     },
//     {
//         name: "Samsung S30 Ultra",
//         price: "₹99,999",
//         imgUrl: "https://m.media-amazon.com/images/I/418BZFfgvSL._SY300_SX300_QL70_FMwebp_.jpg"
//     },
//     {
//         name: "POCO M14",
//         price: "₹1,69,999",
//         imgUrl: "https://m.media-amazon.com/images/I/71bGSfEsUgL._AC_UY218_.jpg"
//     },
//     {
//         name: "Lava 19",
//         price: "₹8,399",
//         imgUrl: "https://m.media-amazon.com/images/I/61D9CLCf5KL._SX569_.jpg"
//     },
//     {
//         name: "Oppo 7",
//         price: "₹58,999",
//         imgUrl: "https://m.media-amazon.com/images/I/718feyKaEwL._SX569_.jpg"
//     },
// ]

// let productList = document.querySelector("#product-list")

//     products.forEach((product) => {
//         const card = document.createElement("div")
//         card.classList.add("mob")

        // const upperDiv = document.createElement("div")
        // const img = document.createElement("img")
        // img.setAttribute("src", "https://m.media-amazon.com/images/I/71PvCbPVCEL._SX466_.jpg")
        // upperDiv.append(img)

        // const lowerDiv = document.createElement("div")
        // const name = document.createElement("p")
        // name.textContent = product.name
        // const price = document.createElement("p")
        // price.textContent = product.price
        // lowerDiv.append(name, price)
        
        // card.append(upperDiv, lowerDiv)
        // productList.append(card)


    //     card.innerHTML = `<div>
    //         <img src=${product.imgUrl} alt="">
    //     </div>
    //     <div>
    //         <p>${product.name}</p>
    //         <P>${product.price}</P>
    //     </div>`

    //     productList.append(card)
    // })



// let h2 = document.querySelector("#h2")
// let body = document.querySelector("body")

// body.removeChild(h2)  // you have to remove from parent
// h2.remove()  // directly on the element u want to remove



// let clone = productList.cloneNode()  // only gives div
// let clone2 = productList.cloneNode(true)  // gives everything inside of div

// console.log(clone2);
// body.append(clone2)


// const items = productList.children  // gives HTMLCollection

// productList.insertBefore(h2, items[2])  // for precise positioning
// OR
// items[2].before(h2)
// items[2].after(h2)