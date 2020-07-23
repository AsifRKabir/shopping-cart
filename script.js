//phone plus button event handler
const plusBtnPhone = document.getElementById("btn-plus-phone");
plusBtnPhone.addEventListener("click", function () {
    increment("quantity-phone");
  })


//phone minus button event handler
const minusBtnPhone = document.getElementById("btn-minus-phone");
minusBtnPhone.addEventListener("click", function () {
    if(document.getElementById("quantity-phone").value > 0){
        decrement("quantity-phone");
    }
  })


//case plus button event handler
const plusBtnCase = document.getElementById("btn-plus-case");
plusBtnCase.addEventListener("click", function () {
    increment("quantity-case");
  })


//case minus button event handler
const minusBtnCase = document.getElementById("btn-minus-case");
minusBtnCase.addEventListener("click", function () {
    if(document.getElementById("quantity-case").value > 0){
        decrement("quantity-case");
    }
  })




function increment(id){
    document.getElementById(id).value++;
}

function decrement(id){
    document.getElementById(id).value--;
}