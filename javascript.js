// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("P");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "text02";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("text02");
var i;
for (i = 0; i < text02.length; i++) {
    text02[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('div');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'p') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var p = document.createElement("p");
    var inputValue = document.getElementById("saisir").value;
    var t = document.createTextNode(inputValue);
    p.appendChild(t);
    if (inputValue === '') {
        alert("Entrez un text!");
    } else {
        document.getElementById("tasks").appendChild(p);
    }
    document.getElementById("saisir").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "text02";
    span.appendChild(txt);
    p.appendChild(span);

    for (i = 0; i < text02.length; i++) {
        text02.onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}