let params = (new URL(document.location)).searchParams;
let cardNumber = params.get("cardNumber");
let owner = params.get("owner");
let date = params.get("date");
let cvv = params.get("cvv");
console.log(cardNumber);
console.log(owner);
console.log(date);
console.log(cvv);

if (cardNumber.length < 19 || date.length < 5 || cvv.length < 3) {
    window.location.href = 'fail.html';
}