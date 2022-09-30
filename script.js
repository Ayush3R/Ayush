let myAccountBalance = parseInt(document.getElementById("MY_ACCOUNT_BALANCE").innerText);

function sendMoney(){
   var enterName = document.getElementById("ENTER_NAME").value;
   var enterAmount = parseInt(document.getElementById("ENTER_AMOUNT").value);

   if (enterAmount > 500000) {
      alert("INSUFFICIENT BALANCE.")
   } else {
      var findUserBankAccount = enterName + "MONEY_BALANCE";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById("MY_ACCOUNT_BALANCE").innerText) - enterAmount
      document.getElementById("MY_ACCOUNT_BALANCE").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Transaction Successful !!  
      ${enterAmount}  sent to ${enterName}`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`${enterAmount}  Transferred Successfully to  ${enterName} on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}

function donate(){
   var person = alert("Thank you for your kind gesture. You are a true treasure to me :) or you can just do it : Error Not Found 404");
}