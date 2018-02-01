const dollarAmount = 3875429.68;
const piggyBank = {
    quarters:0,
    dimes:0,
    nickels:0,
    pennies:0,
}

piggyBank.quarters = Math.floor(dollarAmount / .25); // quarters

var amountLeft = dollarAmount % .25;

console.log("remaining total after quarters: " + amountLeft);

piggyBank.dimes = Math.floor(amountLeft / .1);  // dimes

amountLeft = amountLeft % .1;

console.log("remaining amount after dimes: " + amountLeft);

piggyBank.nickels= Math.floor(amountLeft / .05);

amountLeft = amountLeft % .05

console.log("remaining amount after pennies: " + amountLeft);

piggyBank.pennies = Math.round(amountLeft / .01);


console.log(piggyBank);
