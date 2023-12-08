document.getElementById("submit1").addEventListener("click", function() {
    numbera1 = document.getElementById("numbera1").value
    numbera2 = document.getElementById("numbera2").value

    let total = Number(numbera1) + Number(numbera2)
    document.getElementById("totala").innerHTML = `${total}`;
})

document.getElementById("submit2").addEventListener("click", function() {
    numbers1 = document.getElementById("numbers1").value
    numbers2 = document.getElementById("numbers2").value

    let total = Number(numbers1) - Number(numbers2)
    document.getElementById("totals").innerHTML = `${total}`;
})

document.getElementById("submit3").addEventListener("click", function() {
    numberm1 = document.getElementById("numberm1").value
    numberm2 = document.getElementById("numberm2").value

    let total = Number(numberm1) * Number(numberm2)
    document.getElementById("totalm").innerHTML = `${total}`;
})

document.getElementById("submit4").addEventListener("click", function() {
    numberd1 = document.getElementById("numberd1").value
    numberd2 = document.getElementById("numberd2").value

    let total = Number(numberd1) / Number(numberd2)
    document.getElementById("totald").innerHTML = `${total}`;
})