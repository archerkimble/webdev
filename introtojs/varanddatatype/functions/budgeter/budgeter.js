function calculation() {
    let income = document.getElementById("income").value;
    let rent = document.getElementById("rent").value;
    let food = document.getElementById("food").value;
    let water = document.getElementById("water").value;
    let pets = document.getElementById("pets").value;
    let cars = document.getElementById("cars").value;
    let gas = document.getElementById("gas").value;
    let total = income - rent - food - water - pets - cars - gas;

    document.getElementById("submit").addEventListener("click", function() {
        document.getElementById("submit").innerHTML = `${total}`;
    })
    
    document.getElementById("total").innerHTML = `total: ${total}`;
}
