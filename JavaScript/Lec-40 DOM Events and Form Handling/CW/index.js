/* addEventListener(eventype, callback) -> kahi click karne pe kya reaction hoga
Eventypes: Click, mouseover, mouseup, mousedown
*/

// let div = document.querySelector("#reveal-gift")
// let h1 = document.querySelector("#gift")
// let btn = document.querySelector("#btn")

// function revealGift(event) {
    // h1.classList.remove("hidden")
    // h1.classList.toggle("hidden")
    // h1.classList.add("visible")
    // console.log(event);
    // console.log(event.type);  // type of event
    // console.log("Target", event.target);  // kispe click ho raha hai (ex-button)  // jis element pe click kia
    // console.log("Current Target", event.currentTarget);  // jis element pe eventListener laga hai
    
// }
// div.addEventListener('click', revealGift)

// btn.addEventListener('click', () => {
//     console.log("Helloooo");
// })

// btn.addEventListener('click', (e) => {
//     console.log(e); 
//     console.log(e.clientX);  // ye dono batate hai ki hamnse mouse se screen pe kaha pe click kia hai
//     console.log(e.clientY);
// });

// function fun1(e) {
//     console.log(e);
// }

// btn.addEventListener('click', fun1, {once: true})
// btn.removeEventListener('click', fun1)

// let counter = 0;

// function fun(e) {
//     if (counter < 3) {
//         console.log(e);
//         counter++;
//     }
//     else {
//         btn.removeEventListener('click', fun)
//     }
// }

// btn.addEventListener('click', fun)


/* How Events actaully work internally
Phase-1: Capturing: Ye khojta hai ki kya click hua hai
Phase-2: Target: Jo click hua hai usse print karata hai
Phase-3: Bubbling: Uske baad woh buuble ki tarah upar jaane lagta hai aur upar ki or jitne addEvents lage hai unhe execute karata jaata hai
*/
// let outer = document.querySelector("#outer")
// let inner = document.querySelector("#inner")
// let btn2 = document.querySelector("#btn2")

// outer.addEventListener('click', (e) => {
//     console.log("Outer");
// }, {capture: true})  // capture: true -> ye jaha lagate hai toh capture wale phase me hee execute kara leta hai aur fir normal phase me aa jaata hai

// inner.addEventListener('click', (e) => {
//     console.log("Inner");
// })

// btn2.addEventListener('click', (e) => {
//     e.stopPropagation()  // iski wajah se bubbling nahi hogi
//     console.log("Btn2");
// })


/* Event Delegation */
let products = [
    {
        id: 1,
        name: "Iphone 20 Pro Max",
        price: "₹1,64,900",
        imgUrl: "https://m.media-amazon.com/images/I/71PvCbPVCEL._SX466_.jpg"
    },
    {
        id: 2,
        name: "Samsung S30 Ultra",
        price: "₹99,999",
        imgUrl: "https://m.media-amazon.com/images/I/418BZFfgvSL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        id: 3,
        name: "POCO M14",
        price: "₹1,69,999",
        imgUrl: "https://m.media-amazon.com/images/I/71bGSfEsUgL._AC_UY218_.jpg"
    },
    {
        id: 4,
        name: "Lava 19",
        price: "₹8,399",
        imgUrl: "https://m.media-amazon.com/images/I/61D9CLCf5KL._SX569_.jpg"
    },
    {
        id: 5,
        name: "Oppo 7",
        price: "₹58,999",
        imgUrl: "https://m.media-amazon.com/images/I/718feyKaEwL._SX569_.jpg"
    },
]

let productList = document.querySelector("#product-list")

    products.forEach((product) => {
        const card = document.createElement("div")
        card.classList.add("mob")

        card.dataset.id = product.id

        const dltBtn = document.createElement("button")
        const addtoCart = document.createElement("button")
        dltBtn.textContent = "Remove Product"
        addtoCart.textContent = "Add to Cart"

        // dltBtn.addEventListener('click', (e) => {
        //     card.remove()
        // })

        card.innerHTML = `<div>
            <img src=${product.imgUrl} alt="">
        </div>
        <div>
            <p>${product.name}</p>
            <P>${product.price}</P>
        </div>`

        card.append(dltBtn)
        card.append(addtoCart)
        productList.append(card)

    })

productList.addEventListener('click', (e) => {
    e.stopPropagation()
    // console.log(e.target.parentElement.remove());  // jaha pe click karenge uske parent ko remove kar dega

    // console.log(e.target.tagName);  // jaha pe click larenge uska naam de dega

    // if (e.target.tagName === "BUTTON") {
    //     e.target.parentElement.remove()
    // }

    if (e.target.textContent === "Remove Product" && e.target.tagName === "BUTTON") {
        // e.target.parentElement.remove()
        e.target.closest(".mob").remove()
    }

    // console.log(e.target.parentElement.dataset.id);
    
    // console.log(e.target.closest(".mob"));  // ye apne paas wale given class ke saath parent ko dhundta hai
    
})