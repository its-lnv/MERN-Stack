const percentage = 40;

if (percentage >= 90 && percentage <=100) {
    console.log("Grade = A");
}
else if (percentage >= 80 && percentage <=89) {
    console.log("Grade = B");
}
else if (percentage >= 70 && percentage <=79) {
    console.log("Grade = C");
}
else if (percentage >= 60 && percentage <=69) {
    console.log("Grade = D");
}
else if (percentage >= 40 && percentage <=59) {
    console.log("Grade = E");
}
else if (percentage < 0 || percentage > 100) {
    console.log("Invalid Percentage");
}
else {
    console.log("Grade = F");
}