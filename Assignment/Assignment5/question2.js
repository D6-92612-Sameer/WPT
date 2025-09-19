let totalnooftimes = window.prompt("Total no of times to run");


let parsetotalnooftimes = parseInt(totalnooftimes); //5 


if (parsetotalnooftimes < 0) {
    window.alert("Return the program as no is negative ")
}


console.log("Repeated Messages");

for (let i = 1; i <= parsetotalnooftimes; i++) {
    let x = window.prompt("Enter the message");
    console.log(i + " " + x);
}



