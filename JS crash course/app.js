let cash = 5;
let price = 40;

if (cash > price) {
  console.log(`you paid extra - here's ${cash - price} dollars change`);
} else if (cash === price) {
  console.log("you paid the exact amount, Have a nice day!");
} else {
  console.log(`not enough money- you still owe ${price - cash} dollars`);
}
