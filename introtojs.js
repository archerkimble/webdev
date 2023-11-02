const myName = "Mr Hunt"

let favColor = "blue"

favColor = "red"

let age = 30



mainperson = {
    name: "Mr Hunt",
    age: 30,
    favColor: "Blue",
    favFoods: ["steak", "ice cream", "potatoes"]
}

favThings = [2, "movies"]

const isAlive = true

// function describePerson(person) {
//     alert("MISSING PERSON ALERT: " + person.name)
//     alert(`MISSING PERSON ALERT: ${person.name} missing since 2022, wearing tattered overalls`)
// }                               

// describePerson(mainPerson)

if (age >= 18) {
    document.getElementById("title").innerHTML = `Hello ${myName}`;
} else {
    document.getElementById("title").innerHTML = `I'm sorry youre a minor ${myName}`;
}



const para = document.createElement("p");
para.innerHTML = "im paragraph.";
document.getElementById("div1").appendChild(para);


