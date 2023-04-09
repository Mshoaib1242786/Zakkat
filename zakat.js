function calzakat() {
    let totalNetCash = document.getElementById('totalAmount').value;
let totalNetCashD = totalNetCash /40;

let totalGold = document.getElementById('totalGold').value;
let totalGoldCash = totalGold*120000 /40;

let totalSilver = document.getElementById('totalSilver').value;
let totalSilverCash = totalSilver*1500 /40;

let totalZakat = totalNetCashD + totalGoldCash + totalSilverCash;

document.getElementById('heading').innerText =totalZakat ;
    
}