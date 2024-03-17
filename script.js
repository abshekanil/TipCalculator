let billInput = document.getElementById('billAmt');
let tipPercentageInput = document.getElementById('tipPercentage');
let calculateBtn = document.getElementById('calculateBtn');
let displayTotal = document.getElementById('total');
let resetBtn = document.getElementById('reset');

function calculation(){
    let billValue = parseFloat(billInput.value);
    let percentValue = parseFloat(tipPercentageInput.value);
    let totalAmt = billValue + ((billValue * percentValue)/100 );
    displayTotal.innerHTML = totalAmt.toFixed(2);
    displayTotal.style.fontWeight = "600";
    console.log(totalAmt);
}
 calculateBtn.addEventListener("click",calculation);
 
 resetBtn.addEventListener("click", function(){
    billInput.value = "";
    tipPercentageInput.value = "";
    displayTotal.innerHTML = "";
 })
 