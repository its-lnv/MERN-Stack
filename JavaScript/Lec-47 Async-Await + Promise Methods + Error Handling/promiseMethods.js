/*

Promise Methods
(1) .all()  ---> All promises are fulfilled. Output same sequence me hoga in aaray. if koi promise sabse pehle reject hua toh output reject hoga.
(2) .allsettled()  ---> Promise fulfilled ho ya rejected output aa hee jayega
(3) .race()  ---> isko farq nhi padta fulfill ya rejected se jo pehle settled hua woh output hai
(4) .any()  ---> isko sabse pehle jo fulfill mila woh output aur ye reject wale ko ignore kar deta hai

===> saare methods array of promise lete hai
*/

function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fun1")
        }, 3000)
    })
}

function fun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fun2")
        }, 1000)
    })
}

function fun3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fun3")
        }, 7000)
    })
}

// let result = Promise.all([fun1(), fun2(), fun3()])
// let result = Promise.allSettled([fun1(), fun2(), fun3()])
// let result = Promise.race([fun1(), fun2(), fun3()])
let result = Promise.any([fun1(), fun2(), fun3()])

result.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
