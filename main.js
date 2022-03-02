const img = document.getElementById("image");
setTimeout(() => {
  img.style.background = "red";
}, 4000);

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var myArr = JSON.parse(this.responseText);
       document.getElementById("catFact").innerHTML = myArr.text;
    }
};

xhttp.open("GET", "https://cat-fact.herokuapp.com/facts/random", true);
xhttp.send();

setInterval(() => {
    xhttp.open("GET", "https://cat-fact.herokuapp.com/facts/random", true);
    xhttp.send();
}, 3000);