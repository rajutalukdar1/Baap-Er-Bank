document.getElementById('btn-diposit').addEventListener('click', function name() {
    // console.log('cliiikd')
    const userDiposit = document.getElementById('user-diposit');
    const newDipositAmountString = userDiposit.value;
    const newDipositAmount = parseFloat(newDipositAmountString);
    // console.log(dipositAmount);

    const dipositTotalElement = document.getElementById('diposit-total');
    const previousDipositTotalString = dipositTotalElement.innerText;
    const previousDipositTotal = parseFloat(previousDipositTotalString);
    // console.log(dipositTotal)

    const currentDipositTotal = previousDipositTotal + newDipositAmount;

    dipositTotalElement.innerText = currentDipositTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDipositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


    userDiposit.value = '';

    // let balance = -1;
    // if (balance <= 0) {
    //     alert("balance can't be negative")
    //     return;
    // }

})