document.getElementById("greeting").addEventListener("click", function() {
    document.getElementById("greeting").innerHTML = "Goodbye!";
});

document.getElementById("greeting").addEventListener("dblclick", function() {
    document.getElementById("greeting").innerHTML = "Hello Again";
});

document.getElementById("color").addEventListener("mouseover", function () {
    document.getElementById("color").style.backgroundColor = "red";
    document.getElementById("color").style.height = "500px";
    document.getElementById("color").style.width = "500px";
    document.getElementById("color").style.borderRadius = "50%";
});

document.getElementById("color").addEventListener("mouseout", function () {
    document.getElementById("color").style.backgroundColor = "blue";
    document.getElementById("color").style.height = "200px";
    document.getElementById("color").style.width = "200px";
    document.getElementById("color").style.borderRadius = "0%";
});

document.getElementById("scroll").addEventListener("scroll", function() {

})

document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
  });
  
  document.addEventListener("drag", function(event) {
    document.getElementById("drag").innerHTML = "The text is being dragged";
  });
  
  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
      const data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));
      document.getElementById("drag").innerHTML = "The text was dropped";
    }
  });