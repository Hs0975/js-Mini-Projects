let amount = document.getElementById("amount")
let service = document.getElementById("service")
let calculate = document.getElementById("calculate")
let tipamount = document.getElementById("tipamount")
let share = document.getElementById("share")
let clear = document.getElementById("clear")
let display = "";

calculate.addEventListener('click', function () {
    if (isNaN(amount.value) || isNaN(share.value)) {
        alert("please enter ONLY NUMBERS")
        tipamount.value = "";
        amount.value = "";
        share.value = "";
        return false



    }
    else if (amount.value <=0 || share.value <=0) {
        alert("please enter VALID NUMBERS")
        tipamount.value = "";
        amount.value = "";
        share.value = "";
        return false

    }

    else if (service.value == "Excellent-20%") {
        display = amount.value / 5

    }
    else if (service.value == "Medium-10%") {
        display = amount.value / 10

    }
    else if (service.value == "Not so Good -5%") {
        display = amount.value / 20

    }
    console.log(display)
    tipamount.value = display / share.value
    console.log(tipamount)
})
clear.addEventListener('click', function () {
    amount.value = "";
    share.value = "";
    tipamount.value = "";
})

