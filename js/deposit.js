document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);
    
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previoustBalanceTotalString = balanceTotalElement.innerText;
    const previoustBalanceTotal = parseFloat(previoustBalanceTotalString);

    const currentBalanceTotal = previoustBalanceTotal + newDepositAmmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';
})