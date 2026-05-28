const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convert = document.getElementById("convert");
const result = document.getElementById("result");

convert.addEventListener("click", () => {

    let amt = Number(amount.value);
    let from = fromCurrency.value;
    let to = toCurrency.value;

    let convertedAmount;

    if(from === "USD" && to === "INR"){
        convertedAmount = amt * 83;
    }
    else if(from === "INR" && to === "USD"){
        convertedAmount = amt / 83;
    }
    else if(from === to){
        convertedAmount = amt;
    }
    else{
        convertedAmount = amt * 1;
    }

    result.innerText = 
    `${amt} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
});