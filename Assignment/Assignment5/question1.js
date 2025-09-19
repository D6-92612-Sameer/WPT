let firstNumber = window.prompt("Enter first no");
let secondNumber = window.prompt("Enter second no");
let thirdNumber = window.prompt("Enter third no");


let afterparsingfirstnumber = parseInt(firstNumber);
let afterparsingsecondnumber = parseInt(secondNumber);
let afterparsingthirdnumber = parseInt(thirdNumber);

if (firstNumber === "" || secondNumber === "" || thirdNumber === "") {
    window.alert("Number can't be null" + " Run the program again");
}
else if (afterparsingfirstnumber < 0 || afterparsingsecondnumber < 0 || afterparsingthirdnumber < 0) {
    window.alert("Enter positive no " + " Run the program again");
}

let largestNumber = Math.max(afterparsingfirstnumber, afterparsingsecondnumber, afterparsingthirdnumber);

window.alert(
    " Largest no is - " +
    largestNumber
);
