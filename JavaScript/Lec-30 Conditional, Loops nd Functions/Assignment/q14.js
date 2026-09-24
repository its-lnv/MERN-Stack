const phy = 8;
const chem = 39;
const maths = 89;

if (phy >= 40 && chem >= 40 && maths >= 40) {
    const average = (phy + chem + maths) / 3;

    if (average >= 75) {
        console.log("Distinction");
    }
    else if (average >= 60) {
        console.log("First Division");
    }
    else if (average >= 50) {
        console.log("Second Division");
    }
    else {
        console.log("Pass");
    }
}
else {
    console.log("Fail");
}