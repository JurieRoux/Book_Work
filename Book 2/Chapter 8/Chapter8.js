let car = {
    make: "Audi",
    model: "etron",
    color: "red",
    year: 2023,
    bodyStyle: "SUV",
    price: 2000000
    }
    // alert("The type of car is: " + typeof car);

    document.getElementById("pricetag").innerHTML = car.price;
    document.getElementById("modelyear").innerHTML = car.year;
    document.getElementById("body").style.backgroundColor = car.color;
    document.getElementById("body").innerHTML = car.make + " " + car.model;
