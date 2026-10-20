let btn = document.getElementById("btn");

 btn.addEventListener("click", function() {
 let input = document.getElementById("marks").value;
     let result = document.getElementById("result");

     if (input === "") {
         result.innerHTML = "Please enter your marks";
         console.log("Please enter your marks");
     }
     else {
         let marks = Number(input);

         if (marks >= 80) {
             result.innerHTML = "Excellent";
             console.log("Excellent");
         }
         else if (marks >= 60) {
             result.innerHTML = "Good";
             console.log("Good");
         }
         else if (marks >= 40) {
             result.innerHTML = "Pass";
             console.log("Pass");
         }
         else {
         result.innerHTML = "Fail";
             console.log("Fail");
         }
     }
 });



 let price = 250;

 let button = document.getElementById("calculate");
 let result = document.getElementById("result");

 button.addEventListener("click", function() {

     let input = document.getElementById("quantity").value;

     if (input === "") {
         result.innerHTML = "Please enter quantity!";
     }
     else {
         let quantity = Number(input);

         if (quantity <= 0) {
             result.innerHTML =
                 "Quantity must be greater than zero!";
         }
         else {
             let total = price * quantity;
             let discount = 0;

             if (total >= 1000) {
                 discount = total * 0.10;
             }

             let finalBill = total - discount;

             result.innerHTML =
                 "Total Bill: Rs. " + total +
                 "<br>Discount: Rs. " + discount +
                 "<br>Final Bill: Rs. " + finalBill;

             console.log("Total Bill: Rs. " + total);
             console.log("Discount: Rs. " + discount);
           console.log("Final Bill: Rs. " + finalBill);         }
     }

 });


let button = document.getElementById("generateBtn");
let paragraph = document.getElementById("result");

button.addEventListener("click", function () {

    let number = Math.floor(Math.random() * 100) + 1;

    console.log("Random Number:", number);

    if (number > 50) {
        paragraph.textContent = number + " - High Number";
        console.log("High Number");
    } else {
        paragraph.textContent = number + " - Low Number";
        console.log("Low Number");
    }

});