/*
coto coto step-1,step2 agula jhankar vai er step, amr gulo boro step ,just  3 ta 
 */

// no 4 k 7 er pichone nea geci karon amoun er besi withdraw korte gele jeno break kore, and total balance theke jeno seta minus na kore and step 7 k samne nea asci karon besi withow korleo jeno input ta empty hoyea jai aro samne nea asci number na dea string dile jno input faka hoyea jai.(wrong amount dile o clear kore dibe)
/* // 1. add even handler with the withdraw button
// 2. get the withdeaw amount from the withdraw input field
// 2.5 also make sure to convert the input into a number by using parseFloat
// 3. get previous withdraw total
// 4. calculate total withdraw amount
// 4.5 set total withdraw amount 
// 5 get the previous balance total
// 6 calculate new balance total
// 6.5 set the new balance total */

// step-1: input value related done.
// step-1

document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step-2
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  //   step-2: withdraw section
  //   step-2
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalElementString = withdrawTotalElement.innerText;
  const previousWithdrawTotalElement = parseFloat(
    previousWithdrawTotalElementString
  );

  //   for empty input
  //   step-7
  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("please provide a valid number");
    return;
  }

  //   step-3: total balance minus withdraw balance section
  //   step-5
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalElementString = balanceTotalElement.innerText;
  const previousBalanceTotalElement = parseFloat(
    previousBalanceTotalElementString
  );

  if (newWithdrawAmount > previousBalanceTotalElement) {
    alert("You do not have enough balance");
    return;
  }

  //   step-4
  const currentWithdrawBalance =
    previousWithdrawTotalElement + newWithdrawAmount;

  withdrawTotalElement.innerText = currentWithdrawBalance;
  //   step-6
  const currentBalanceTotalElement =
    previousBalanceTotalElement - newWithdrawAmount;
  balanceTotalElement.innerText = currentBalanceTotalElement;
});
