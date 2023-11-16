function tellFortune() {
 numOfChildren = document.getElementById("children").value;
 partnerName = document.getElementById("partner").value;
 jobTitle = document.getElementById("job").value;
    
    document.getElementById("tellFortune").innerText = (`You will be an ${jobTitle}, and married to ${partnerName} with ${numOfChildern} kids.`);
}

function calculateDogAge() {
    puppyAge = document.getElementById("dog-age").value;
    dogAge = puppyAge * 7;
    console.log
    document.getElementById(`Age`).innerHTML = `Your doggie is ${dogAge} years old in dog years!`;
}

function calcuateSupply(age, amountPerDay) {
    age = document.getElementById("current-age").value
    amountPerDay = document.getElementById("amount-per-day")

    maxAge = 80;
    amountPerYear = amountPerDay * 365.25;
    totalAmount = (maxAge - age) * amountPerYear;
    document.getElementById("supply")
    .innerHTML = `You will need ${totalAmount} to last  you till the ripe old age of ${maxAge}`;
}

function calcCircumference(radius) {
    radius = document.getElementById("radius")
    circumference = 2 * Math.PI * radius;
    document.getElementById("circumference").innerHTML = `The circumference is ${circumference}`
}

// const calcArea = (radius) => console.log(`The area is ${math.PI * radius * radius}`);

function celciusToFahrenheit(celcius) {
    celcius = document.getElementById("celcius").value;
    fahrenheit = (celcius * 9) / 5 + 32;
    document.getElementById("fahrenheit").innerHTML = `${celcius} C is ${fahrenheit} F`
}

// function fahrenheitToCelsius(fahrenheit) {
//     celcius = (fahrenheit - 32) * 5 / 9;
//     console.log(`${fahrenheit} F is ${celcius} C`);
// }

