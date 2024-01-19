// Listen for button clicks
document.getElementById("placeOrder").addEventListener("click", placeOrder);

//*****Gets form values, calculates prices, produces output
function placeOrder() {
    // Get form values
    let numPizzas = document.getElementById("numPizzas").value;
    let typePizza = document.getElementById("typePizza").value;
    let deliveryCity = document.getElementById("deliveryCity").value;
    let birthday = document.getElementById("birthday").value;

    // Get the pizza price
    let orderPrice = calculatePrice(numPizzas, typePizza);

    // Get the delivery price
    let deliveryPrice = calculateDelivery(orderPrice, deliveryCity, birthday);

    // Create the output
    let theOutput = "<p>Thank you for your order.</p>";

    // Output the delivery price, if there is one
    if (deliveryPrice === 0) {
        theOutput += "<p>You get free delivery!</p>";
    } else {
        theOutput += "<p>Your delivery cost is: R" + deliveryPrice;
    }

    theOutput += "<p>Your total is: R" + (orderPrice + deliveryPrice);

    // Display the output
    document.getElementById("displayTotal").innerHTML = theOutput;
}

//*******Calculates pizza price
function calculatePrice(numPizzas, typePizza) {
    let orderPrice = Number(numPizzas) * 10;
    let extraCharge = 0;

    // Calculate extraCharge, if there is one
    if (typePizza === "supreme") {
        extraCharge = Number(numPizzas) * 2;
    }

    orderPrice += extraCharge;
    return orderPrice;
}

//********Calculates delivery price
function calculateDelivery(orderPrice, deliveryCity, birthday) {
    let deliveryPrice = 0;

    // Calculate delivery price, if there is one
    if (((deliveryCity === "Jozi") && (orderPrice > 10)) || (birthday === "yes")) {
        deliveryPrice = 0;
    } else {
        deliveryPrice = 5;
    }

    return deliveryPrice;
}
