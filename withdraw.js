document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWidthdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWidthdrawTotal)

    const currentWithdrawTotal = previousWidthdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (previousBalanceTotal < newWithdrawAmount) {
        alert('Balance Low')
        return;
    }

    const NewBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = NewBalanceTotal;

    withdrawField.value = '';
})